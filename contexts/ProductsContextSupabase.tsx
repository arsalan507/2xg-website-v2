'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from './AuthContext';

export interface Product {
  id: number;
  name: string;
  price: number;
  original_price: number;
  image: string;
  category: string;
  in_stock: boolean;
  badge: string;
  description?: string;
  tenant_id?: string;
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'tenant_id'>) => Promise<void>;
  updateProduct: (id: number, updatedProduct: Partial<Product>) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  tenantId: string;
  loading: boolean;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProviderSupabase({
  children,
  tenantId = 'demo'
}: {
  children: ReactNode;
  tenantId?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch products from Supabase
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('products-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products',
          filter: `tenant_id=eq.${tenantId}`,
        },
        (payload) => {
          console.log('Real-time update:', payload);
          fetchProducts(); // Refetch on any change
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tenantId]);

  const addProduct = async (product: Omit<Product, 'id' | 'tenant_id'>) => {
    const { data, error } = await supabase
      .from('products')
      .insert([{
        ...product,
        tenant_id: tenantId,
      }])
      .select()
      .single();

    if (error) {
      console.error('Error adding product:', error);
      throw error;
    } else {
      setProducts((prev) => [data, ...prev]);
    }
  };

  const updateProduct = async (id: number, updatedProduct: Partial<Product>) => {
    const { data, error } = await supabase
      .from('products')
      .update(updatedProduct)
      .eq('id', id)
      .eq('tenant_id', tenantId)
      .select()
      .single();

    if (error) {
      console.error('Error updating product:', error);
      throw error;
    } else {
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? data : product))
      );
    }
  };

  const deleteProduct = async (id: number) => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
      .eq('tenant_id', tenantId);

    if (error) {
      console.error('Error deleting product:', error);
      throw error;
    } else {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        tenantId,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsSupabase() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProductsSupabase must be used within a ProductsProviderSupabase');
  }
  return context;
}
