'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: {
    productName: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  paymentMethod: string;
}

// Sample orders data
const sampleOrders: Order[] = [
  {
    id: 1001,
    customerName: 'Rahul Sharma',
    customerEmail: 'rahul@example.com',
    customerPhone: '+91 98765 43210',
    items: [
      { productName: 'Premium Leather Wallet', quantity: 2, price: 2999 },
      { productName: 'Designer Sunglasses', quantity: 1, price: 1999 },
    ],
    totalAmount: 7997,
    status: 'delivered',
    orderDate: '2024-01-15',
    paymentMethod: 'UPI',
  },
  {
    id: 1002,
    customerName: 'Priya Patel',
    customerEmail: 'priya@example.com',
    customerPhone: '+91 87654 32109',
    items: [
      { productName: 'Wireless Earbuds Pro', quantity: 1, price: 3499 },
    ],
    totalAmount: 3499,
    status: 'shipped',
    orderDate: '2024-01-18',
    paymentMethod: 'Card',
  },
  {
    id: 1003,
    customerName: 'Amit Kumar',
    customerEmail: 'amit@example.com',
    customerPhone: '+91 76543 21098',
    items: [
      { productName: 'Smart Watch Series 5', quantity: 1, price: 12999 },
      { productName: 'Premium Backpack', quantity: 1, price: 2499 },
    ],
    totalAmount: 15498,
    status: 'processing',
    orderDate: '2024-01-20',
    paymentMethod: 'COD',
  },
  {
    id: 1004,
    customerName: 'Sneha Reddy',
    customerEmail: 'sneha@example.com',
    customerPhone: '+91 65432 10987',
    items: [
      { productName: 'Bluetooth Speaker', quantity: 2, price: 4999 },
    ],
    totalAmount: 9998,
    status: 'pending',
    orderDate: '2024-01-22',
    paymentMethod: 'UPI',
  },
];

export default function OrdersManager() {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    processing: 'bg-blue-100 text-blue-700 border-blue-300',
    shipped: 'bg-purple-100 text-purple-700 border-purple-300',
    delivered: 'bg-green-100 text-green-700 border-green-300',
    cancelled: 'bg-red-100 text-red-700 border-red-300',
  };

  const statusEmojis = {
    pending: '⏳',
    processing: '⚙️',
    shipped: '🚚',
    delivered: '✅',
    cancelled: '❌',
  };

  const filteredOrders = selectedStatus === 'all'
    ? orders
    : orders.filter(order => order.status === selectedStatus);

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
  };

  const updateOrderStatus = (orderId: number, newStatus: Order['status']) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            Orders 📦
          </h1>
          <p className="text-[#5E5E5E] mt-1">
            Manage customer orders and track shipments
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
            <span className="text-sm font-medium opacity-90">Total Orders</span>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-3xl font-bold">{orderStats.total}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Pending</span>
            <span className="text-2xl">⏳</span>
          </div>
          <p className="text-3xl font-bold">{orderStats.pending}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Processing</span>
            <span className="text-2xl">⚙️</span>
          </div>
          <p className="text-3xl font-bold">{orderStats.processing}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Shipped</span>
            <span className="text-2xl">🚚</span>
          </div>
          <p className="text-3xl font-bold">{orderStats.shipped}</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Delivered</span>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-3xl font-bold">{orderStats.delivered}</p>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus('all')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
            selectedStatus === 'all'
              ? 'bg-[#6BBF59] text-white shadow-md'
              : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
          }`}
        >
          All Orders
        </button>
        {Object.keys(statusEmojis).map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
              selectedStatus === status
                ? 'bg-[#6BBF59] text-white shadow-md'
                : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
            }`}
          >
            {statusEmojis[status as keyof typeof statusEmojis]} {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-[#D6D8D4]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F6F7F5] border-b-2 border-[#D6D8D4]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Items
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#1F1F1F] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D8D4]">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#F6F7F5] transition-colors duration-150">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[#6BBF59]">#{order.id}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      <p className="font-semibold text-[#1F1F1F]">{order.customerName}</p>
                      <p className="text-xs text-[#5E5E5E]">{order.customerPhone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-[#1F1F1F]">
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[#1F1F1F]">
                      ₹{order.totalAmount.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[order.status]}`}>
                      <span>{statusEmojis[order.status]}</span>
                      <span>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[#5E5E5E]">
                    {new Date(order.orderDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedOrder(order)}
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

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">📦</span>
            <p className="text-[#5E5E5E] text-lg">No orders found</p>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b-2 border-[#D6D8D4]">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#1F1F1F]">
                  Order #{selectedOrder.id}
                </h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-[#5E5E5E] hover:text-[#1F1F1F] text-2xl font-bold transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">Customer Details</h3>
                <div className="bg-[#F6F7F5] rounded-xl p-4 space-y-2">
                  <p className="text-sm"><span className="font-semibold">Name:</span> {selectedOrder.customerName}</p>
                  <p className="text-sm"><span className="font-semibold">Email:</span> {selectedOrder.customerEmail}</p>
                  <p className="text-sm"><span className="font-semibold">Phone:</span> {selectedOrder.customerPhone}</p>
                  <p className="text-sm"><span className="font-semibold">Payment:</span> {selectedOrder.paymentMethod}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">Order Items</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#F6F7F5] rounded-xl p-4">
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">{item.productName}</p>
                        <p className="text-xs text-[#5E5E5E]">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-[#1F1F1F]">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t-2 border-[#D6D8D4]">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1F1F1F]">Total Amount</span>
                    <span className="text-2xl font-bold text-[#6BBF59]">₹{selectedOrder.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Update Status */}
              <div>
                <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">Update Order Status</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(statusEmojis).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateOrderStatus(selectedOrder.id, status as Order['status'])}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        selectedOrder.status === status
                          ? 'bg-[#6BBF59] text-white shadow-md'
                          : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
                      }`}
                    >
                      {statusEmojis[status as keyof typeof statusEmojis]} {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
