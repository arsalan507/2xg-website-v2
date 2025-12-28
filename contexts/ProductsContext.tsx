'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  inStock: boolean;
  badge: string;
  description?: string;
  tenantId?: string; // Add tenant ID to products
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updatedProduct: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  tenantId: string;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Initial sample products
const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Leather Wallet',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    category: 'Accessories',
    inStock: true,
    badge: 'Best Seller',
    description: 'Handcrafted premium leather wallet with multiple card slots',
  },
  {
    id: 2,
    name: 'Wireless Earbuds Pro',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    category: 'Electronics',
    inStock: true,
    badge: 'New',
    description: 'Premium wireless earbuds with active noise cancellation',
  },
  {
    id: 3,
    name: 'Smart Watch Series 5',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Electronics',
    inStock: true,
    badge: 'Hot',
    description: 'Latest smartwatch with health tracking and notifications',
  },
  {
    id: 4,
    name: 'Designer Sunglasses',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    category: 'Accessories',
    inStock: true,
    badge: '',
    description: 'Premium UV protection sunglasses with designer frames',
  },
  {
    id: 5,
    name: 'Premium Backpack',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Bags',
    inStock: true,
    badge: 'Trending',
    description: 'Water-resistant backpack with laptop compartment',
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    category: 'Electronics',
    inStock: false,
    badge: '',
    description: 'Portable Bluetooth speaker with 360° sound',
  },
];

export function ProductsProvider({
  children,
  tenantId = 'demo'
}: {
  children: ReactNode;
  tenantId?: string;
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isInitialized, setIsInitialized] = useState(false);

  // Use tenant-specific localStorage key
  const storageKey = `bch-catalog-products-${tenantId}`;

  // Load products from localStorage on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem(storageKey);
    if (storedProducts) {
      try {
        const parsed = JSON.parse(storedProducts);
        setProducts(parsed);
      } catch (error) {
        console.error('Failed to parse stored products:', error);
      }
    }
    setIsInitialized(true);
  }, [storageKey]);

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(storageKey, JSON.stringify(products));
    }
  }, [products, isInitialized, storageKey]);

  const addProduct = (product: Product) => {
    const productWithTenant = { ...product, tenantId };
    setProducts((prev) => [...prev, productWithTenant]);
  };

  const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        tenantId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}
