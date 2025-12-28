'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProductsSupabase, Product } from '@/contexts/ProductsContextSupabase';

export default function ProductManager() {
  const { products, addProduct, updateProduct, deleteProduct, loading } = useProductsSupabase();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    original_price: 0,
    image: '',
    category: 'Accessories',
    in_stock: true,
    badge: '',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');

  const categories = ['Accessories', 'Electronics', 'Bags', 'Clothing', 'Shoes'];
  const badges = ['', 'New', 'Best Seller', 'Hot', 'Trending', 'Limited'];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormData({ ...formData, image: result });
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async () => {
    setSubmitting(true);
    setError('');
    try {
      await addProduct(formData as Omit<Product, 'id' | 'tenant_id'>);
      setIsAddModalOpen(false);
      resetForm();
    } catch (err) {
      setError('Failed to add product. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateProduct = async () => {
    if (!editingProduct) return;
    setSubmitting(true);
    setError('');
    try {
      await updateProduct(editingProduct.id, formData);
      setEditingProduct(null);
      resetForm();
    } catch (err) {
      setError('Failed to update product. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
      } catch (err) {
        alert('Failed to delete product. Please try again.');
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      original_price: 0,
      image: '',
      category: 'Accessories',
      in_stock: true,
      badge: '',
      description: '',
    });
    setImagePreview('');
    setError('');
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setImagePreview(product.image);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#1F1F1F] mb-2">Products</h2>
          <p className="text-[#5E5E5E]">Manage your product catalog</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-6 py-3 bg-[#6BBF59] text-white rounded-xl hover:bg-[#5AA047] transition-colors font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
        >
          <span className="text-xl">+</span>
          <span>Add Product</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border-2 border-[#D6D8D4] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5E5E5E] text-sm mb-1">Total Products</p>
              <p className="text-3xl font-bold text-[#1F1F1F]">{products.length}</p>
            </div>
            <span className="text-4xl">📦</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-[#D6D8D4] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5E5E5E] text-sm mb-1">In Stock</p>
              <p className="text-3xl font-bold text-[#6BBF59]">{products.filter(p => p.in_stock).length}</p>
            </div>
            <span className="text-4xl">✅</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-[#D6D8D4] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5E5E5E] text-sm mb-1">Out of Stock</p>
              <p className="text-3xl font-bold text-[#FF6B35]">{products.filter(p => !p.in_stock).length}</p>
            </div>
            <span className="text-4xl">⚠️</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-[#D6D8D4] shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5E5E5E] text-sm mb-1">Categories</p>
              <p className="text-3xl font-bold text-[#1F1F1F]">{new Set(products.map(p => p.category)).size}</p>
            </div>
            <span className="text-4xl">🏷️</span>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl border-2 border-[#D6D8D4] overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F6F7F5] rounded-full mb-4">
              <svg className="animate-spin h-8 w-8 text-[#6BBF59]" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <p className="text-[#5E5E5E] font-semibold">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-12 text-center">
            <span className="text-6xl mb-4 block">📦</span>
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">No products yet</h3>
            <p className="text-[#5E5E5E] mb-4">Get started by adding your first product</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-3 bg-[#6BBF59] text-white rounded-xl hover:bg-[#5AA047] transition-colors font-semibold inline-flex items-center gap-2"
            >
              <span className="text-xl">+</span>
              <span>Add Your First Product</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F6F7F5] border-b-2 border-[#D6D8D4]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F1F1F]">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F1F1F]">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F1F1F]">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F1F1F]">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F1F1F]">Badge</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#1F1F1F]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                <tr key={product.id} className={`border-b border-[#D6D8D4] hover:bg-[#F6F7F5] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg border-2 border-[#D6D8D4]"
                      />
                      <div>
                        <p className="font-semibold text-[#1F1F1F]">{product.name}</p>
                        <p className="text-sm text-[#5E5E5E]">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-[#6BBF59]/10 text-[#6BBF59] rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-[#1F1F1F]">₹{product.price.toLocaleString()}</p>
                      <p className="text-sm text-[#5E5E5E] line-through">₹{product.original_price.toLocaleString()}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {product.in_stock ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        In Stock
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.badge && (
                      <span className="px-3 py-1 bg-[#FF6B35] text-white rounded-full text-xs font-bold">
                        {product.badge}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(product)}
                        className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {(isAddModalOpen || editingProduct) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => {
              setIsAddModalOpen(false);
              setEditingProduct(null);
              resetForm();
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b-2 border-[#D6D8D4] px-6 py-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#1F1F1F]">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setEditingProduct(null);
                    resetForm();
                  }}
                  className="p-2 hover:bg-[#F6F7F5] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-700 text-sm font-semibold">❌ {error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Product Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none text-[#1F1F1F]"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Price *</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none text-[#1F1F1F]"
                      placeholder="2999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Original Price *</label>
                    <input
                      type="number"
                      value={formData.original_price}
                      onChange={(e) => setFormData({ ...formData, original_price: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none text-[#1F1F1F]"
                      placeholder="4999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Product Image *</label>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mb-4 relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border-2 border-[#D6D8D4]"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, image: '' });
                          setImagePreview('');
                        }}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* File Upload */}
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-[#6BBF59] rounded-lg cursor-pointer hover:bg-[#F6F7F5] transition-colors">
                      <div className="flex items-center gap-2 text-[#6BBF59] font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Upload Image</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>

                    <div className="text-center text-xs text-[#5E5E5E]">
                      or paste image URL below
                    </div>

                    <input
                      type="text"
                      value={formData.image?.startsWith('data:') ? '' : formData.image}
                      onChange={(e) => {
                        setFormData({ ...formData, image: e.target.value });
                        setImagePreview(e.target.value);
                      }}
                      className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none text-[#1F1F1F]"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none text-[#1F1F1F]"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Badge</label>
                    <select
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none text-[#1F1F1F]"
                    >
                      {badges.map(badge => (
                        <option key={badge} value={badge}>{badge || 'None'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1F1F1F] mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#D6D8D4] rounded-lg focus:border-[#6BBF59] focus:outline-none h-24 resize-none text-[#1F1F1F]"
                    placeholder="Product description..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={formData.in_stock}
                    onChange={(e) => setFormData({ ...formData, in_stock: e.target.checked })}
                    className="w-5 h-5 text-[#6BBF59] border-2 border-[#D6D8D4] rounded focus:ring-[#6BBF59]"
                  />
                  <label htmlFor="inStock" className="text-sm font-bold text-[#1F1F1F]">
                    In Stock
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                    disabled={submitting}
                    className="flex-1 px-6 py-3 bg-[#6BBF59] text-white rounded-xl hover:bg-[#5AA047] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {editingProduct ? 'Updating...' : 'Adding...'}
                      </>
                    ) : (
                      editingProduct ? 'Update Product' : 'Add Product'
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setIsAddModalOpen(false);
                      setEditingProduct(null);
                      resetForm();
                    }}
                    disabled={submitting}
                    className="px-6 py-3 bg-[#F6F7F5] text-[#1F1F1F] rounded-xl hover:bg-[#ECEDEB] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
