'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { useProducts } from '@/contexts/ProductsContext';

export default function ProductGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { products } = useProducts();

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return ['All', ...uniqueCategories];
  }, [products]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    // Show toast notification (you can add a toast library)
    console.log('Added to cart:', productId);
  };

  const shareOnInstagram = (product: typeof products[0]) => {
    const shareText = `Check out ${product.name}! 💫\n₹${product.price} (was ₹${product.originalPrice})\n\nShop now 👉`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <section id="products" ref={ref} className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-3">
            🛍️ Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            Shop Our Catalog
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-2xl mx-auto">
            Premium products, unbeatable prices 💰 Share with one click 📱
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#6BBF59] text-white shadow-lg scale-105'
                  : 'bg-[#F6F7F5] text-[#1F1F1F] hover:bg-[#ECEDEB]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white border-2 border-[#D6D8D4] hover:border-[#6BBF59] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-[#F6F7F5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF6B35] text-white text-xs font-bold rounded-full">
                      {product.badge}
                    </div>
                  )}

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => shareOnInstagram(product)}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                      title="Share on WhatsApp/Instagram"
                    >
                      <svg className="w-5 h-5 text-[#6BBF59]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Category */}
                  <p className="text-xs font-semibold text-[#6BBF59] uppercase tracking-wide mb-2">
                    {product.category}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-[#1F1F1F] mb-3 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-[#1F1F1F]">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-[#5E5E5E] line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-[#FF6B35]">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 ${
                      product.inStock
                        ? 'bg-[#6BBF59] text-white hover:bg-[#5AA047] shadow-md hover:shadow-lg hover:-translate-y-1'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {cart.includes(product.id) ? (
                      <>
                        <span>✅ Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <span>Add to Cart</span>
                        <span className="text-xl">🛒</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 bg-[#6BBF59] text-white px-6 py-4 rounded-xl shadow-2xl z-50"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛒</span>
              <div>
                <p className="font-bold text-sm">Cart ({cart.length} items)</p>
                <button className="text-xs underline hover:no-underline">
                  View Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
