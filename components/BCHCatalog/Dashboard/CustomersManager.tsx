'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  customerType: 'B2B' | 'B2C';
  status: 'active' | 'inactive';
  joinedDate: string;
}

// Sample customers data
const sampleCustomers: Customer[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '+91 98765 43210',
    totalOrders: 12,
    totalSpent: 45890,
    lastOrderDate: '2024-01-15',
    customerType: 'B2C',
    status: 'active',
    joinedDate: '2023-06-10',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya@example.com',
    phone: '+91 87654 32109',
    totalOrders: 8,
    totalSpent: 28450,
    lastOrderDate: '2024-01-18',
    customerType: 'B2C',
    status: 'active',
    joinedDate: '2023-08-22',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    email: 'amit@example.com',
    phone: '+91 76543 21098',
    totalOrders: 25,
    totalSpent: 125600,
    lastOrderDate: '2024-01-20',
    customerType: 'B2B',
    status: 'active',
    joinedDate: '2023-03-15',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha@example.com',
    phone: '+91 65432 10987',
    totalOrders: 5,
    totalSpent: 15200,
    lastOrderDate: '2024-01-22',
    customerType: 'B2C',
    status: 'active',
    joinedDate: '2023-11-05',
  },
  {
    id: 5,
    name: 'Vijay Enterprises',
    email: 'contact@vijayent.com',
    phone: '+91 54321 09876',
    totalOrders: 45,
    totalSpent: 289000,
    lastOrderDate: '2024-01-21',
    customerType: 'B2B',
    status: 'active',
    joinedDate: '2023-01-20',
  },
  {
    id: 6,
    name: 'Meera Singh',
    email: 'meera@example.com',
    phone: '+91 43210 98765',
    totalOrders: 3,
    totalSpent: 8900,
    lastOrderDate: '2023-12-10',
    customerType: 'B2C',
    status: 'inactive',
    joinedDate: '2023-09-18',
  },
];

export default function CustomersManager() {
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter(customer => {
    const matchesType = selectedType === 'all' || customer.customerType === selectedType;
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.phone.includes(searchQuery);
    return matchesType && matchesSearch;
  });

  const customerStats = {
    total: customers.length,
    active: customers.filter(c => c.status === 'active').length,
    b2b: customers.filter(c => c.customerType === 'B2B').length,
    b2c: customers.filter(c => c.customerType === 'B2C').length,
    totalRevenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            Customers 👥
          </h1>
          <p className="text-[#5E5E5E] mt-1">
            Manage customer relationships and insights
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-[#6BBF59] to-[#5AA047] text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Total Customers</span>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-3xl font-bold">{customerStats.total}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Active</span>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-3xl font-bold">{customerStats.active}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">B2B</span>
            <span className="text-2xl">🏢</span>
          </div>
          <p className="text-3xl font-bold">{customerStats.b2b}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">B2C</span>
            <span className="text-2xl">👤</span>
          </div>
          <p className="text-3xl font-bold">{customerStats.b2c}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Total Revenue</span>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-2xl font-bold">₹{(customerStats.totalRevenue / 1000).toFixed(0)}K</p>
        </motion.div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-xl focus:border-[#6BBF59] focus:outline-none transition-colors duration-200"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
              selectedType === 'all'
                ? 'bg-[#6BBF59] text-white shadow-md'
                : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedType('B2B')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
              selectedType === 'B2B'
                ? 'bg-[#6BBF59] text-white shadow-md'
                : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
            }`}
          >
            🏢 B2B
          </button>
          <button
            onClick={() => setSelectedType('B2C')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
              selectedType === 'B2C'
                ? 'bg-[#6BBF59] text-white shadow-md'
                : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
            }`}
          >
            👤 B2C
          </button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-[#D6D8D4]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F6F7F5] border-b-2 border-[#D6D8D4]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Last Order
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D8D4]">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-[#F6F7F5] transition-colors duration-150">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#6BBF59] to-[#5AA047] rounded-full flex items-center justify-center text-white font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">{customer.name}</p>
                        <p className="text-xs text-[#5E5E5E]">ID: #{customer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      <p className="text-[#1F1F1F]">{customer.email}</p>
                      <p className="text-xs text-[#5E5E5E]">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.customerType === 'B2B'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-purple-100 text-purple-700 border border-purple-300'
                    }`}>
                      <span>{customer.customerType === 'B2B' ? '🏢' : '👤'}</span>
                      <span>{customer.customerType}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-[#1F1F1F]">{customer.totalOrders}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[#6BBF59]">
                      ₹{customer.totalSpent.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.status === 'active'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-300'
                    }`}>
                      <span>{customer.status === 'active' ? '✅' : '⏸️'}</span>
                      <span>{customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[#5E5E5E]">
                    {new Date(customer.lastOrderDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="text-[#6BBF59] hover:text-[#5AA047] font-semibold text-sm transition-colors duration-200"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">👥</span>
            <p className="text-[#5E5E5E] text-lg">No customers found</p>
          </div>
        )}
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b-2 border-[#D6D8D4]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6BBF59] to-[#5AA047] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {selectedCustomer.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1F1F1F]">
                      {selectedCustomer.name}
                    </h2>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mt-1 ${
                      selectedCustomer.customerType === 'B2B'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {selectedCustomer.customerType === 'B2B' ? '🏢' : '👤'} {selectedCustomer.customerType}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-[#5E5E5E] hover:text-[#1F1F1F] text-2xl font-bold transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">Contact Information</h3>
                <div className="bg-[#F6F7F5] rounded-xl p-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Email:</span> {selectedCustomer.email}</p>
                  <p className="text-sm"><span className="font-semibold">Phone:</span> {selectedCustomer.phone}</p>
                  <p className="text-sm"><span className="font-semibold">Customer ID:</span> #{selectedCustomer.id}</p>
                </div>
              </div>

              {/* Purchase Stats */}
              <div>
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">Purchase Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200">
                    <p className="text-xs text-blue-700 font-semibold mb-1">Total Orders</p>
                    <p className="text-3xl font-bold text-blue-900">{selectedCustomer.totalOrders}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-2 border-green-200">
                    <p className="text-xs text-green-700 font-semibold mb-1">Total Spent</p>
                    <p className="text-2xl font-bold text-green-900">₹{selectedCustomer.totalSpent.toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-200">
                    <p className="text-xs text-purple-700 font-semibold mb-1">Avg. Order Value</p>
                    <p className="text-2xl font-bold text-purple-900">₹{Math.round(selectedCustomer.totalSpent / selectedCustomer.totalOrders).toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-200">
                    <p className="text-xs text-orange-700 font-semibold mb-1">Status</p>
                    <p className="text-xl font-bold text-orange-900">{selectedCustomer.status === 'active' ? '✅ Active' : '⏸️ Inactive'}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">Timeline</h3>
                <div className="bg-[#F6F7F5] rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm font-semibold text-[#1F1F1F]">Customer Since</p>
                      <p className="text-xs text-[#5E5E5E]">
                        {new Date(selectedCustomer.joinedDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🛒</span>
                    <div>
                      <p className="text-sm font-semibold text-[#1F1F1F]">Last Order</p>
                      <p className="text-xs text-[#5E5E5E]">
                        {new Date(selectedCustomer.lastOrderDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-[#6BBF59] text-white rounded-xl font-semibold hover:bg-[#5AA047] transition-colors duration-200">
                  Send Email 📧
                </button>
                <button className="flex-1 px-4 py-3 bg-[#F6F7F5] text-[#1F1F1F] rounded-xl font-semibold hover:bg-[#ECEDEB] transition-colors duration-200">
                  View Orders 🛒
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
