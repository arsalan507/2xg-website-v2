'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ProductsProviderSupabase } from '@/contexts/ProductsContextSupabase';
import DashboardLayout from '@/components/BCHCatalog/Dashboard/DashboardLayout';
import ProductManager from '@/components/BCHCatalog/Dashboard/ProductManager';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { user, tenantId, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/catalog/login');
    }
  }, [user, loading, router]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1F1F1F] via-[#6BBF59] to-[#1F5D4A] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <svg className="animate-spin h-8 w-8 text-[#6BBF59]" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <p className="text-white text-lg font-semibold">Loading...</p>
        </motion.div>
      </div>
    );
  }

  // Not authenticated
  if (!user || !tenantId) {
    return null;
  }

  return (
    <ProductsProviderSupabase tenantId={tenantId}>
      <DashboardLayout>
        <ProductManager />
      </DashboardLayout>
    </ProductsProviderSupabase>
  );
}
