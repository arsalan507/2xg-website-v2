'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, tenantId, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/catalog/login');
  };

  // Get tenant name from tenantId
  const getTenantName = () => {
    if (!tenantId) return 'Admin';
    return tenantId.toUpperCase();
  };

  // Get initials for avatar
  const getInitials = () => {
    const name = getTenantName();
    return name.charAt(0);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F5]">
      {/* Top Navigation */}
      <nav className="bg-white border-b-2 border-[#D6D8D4] sticky top-0 z-50">
        <div className="max-w-full mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-[#F6F7F5] rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-[#1F1F1F]">
                BCH Catalog <span className="text-[#6BBF59]">Dashboard</span>
              </h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/catalog"
                className="px-4 py-2 bg-[#6BBF59] text-white rounded-lg hover:bg-[#5AA047] transition-colors font-semibold text-sm flex items-center gap-2"
              >
                <span>View Catalog</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-[#F6F7F5] rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-[#6BBF59] rounded-full flex items-center justify-center text-white font-bold">
                    {getInitials()}
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-bold text-[#1F1F1F]">{getTenantName()}</p>
                    <p className="text-xs text-[#5E5E5E]">{user?.email}</p>
                  </div>
                  <svg className="w-4 h-4 text-[#5E5E5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowUserMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border-2 border-[#D6D8D4] z-50 overflow-hidden">
                      <div className="p-4 bg-[#F6F7F5] border-b-2 border-[#D6D8D4]">
                        <p className="text-sm font-bold text-[#1F1F1F]">{getTenantName()}</p>
                        <p className="text-xs text-[#5E5E5E] mt-1">{user?.email}</p>
                      </div>
                      <div className="p-2">
                        <Link
                          href="/catalog/dashboard/settings"
                          className="flex items-center gap-3 px-4 py-2 text-[#1F1F1F] hover:bg-[#F6F7F5] rounded-lg transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <span className="text-lg">⚙️</span>
                          <span className="text-sm font-semibold">Settings</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <span className="text-lg">🚪</span>
                          <span className="text-sm font-semibold">Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'w-64' : 'w-0'
          } bg-white border-r-2 border-[#D6D8D4] transition-all duration-300 overflow-hidden`}
        >
          <div className="p-6 space-y-2">
            <Link
              href="/catalog/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-[#6BBF59] text-white rounded-lg font-semibold"
            >
              <span className="text-xl">📦</span>
              <span>Products</span>
            </Link>
            <Link
              href="/catalog/dashboard/orders"
              className="flex items-center gap-3 px-4 py-3 text-[#1F1F1F] hover:bg-[#F6F7F5] rounded-lg transition-colors font-semibold"
            >
              <span className="text-xl">🛒</span>
              <span>Orders</span>
            </Link>
            <Link
              href="/catalog/dashboard/customers"
              className="flex items-center gap-3 px-4 py-3 text-[#1F1F1F] hover:bg-[#F6F7F5] rounded-lg transition-colors font-semibold"
            >
              <span className="text-xl">👥</span>
              <span>Customers</span>
            </Link>
            <Link
              href="/catalog/dashboard/analytics"
              className="flex items-center gap-3 px-4 py-3 text-[#1F1F1F] hover:bg-[#F6F7F5] rounded-lg transition-colors font-semibold"
            >
              <span className="text-xl">📊</span>
              <span>Analytics</span>
            </Link>
            <Link
              href="/catalog/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 text-[#1F1F1F] hover:bg-[#F6F7F5] rounded-lg transition-colors font-semibold"
            >
              <span className="text-xl">⚙️</span>
              <span>Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
