'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CatalogFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: '📱',
      title: 'Instagram-Ready Links',
      description: 'Share products directly to Instagram Stories, WhatsApp, or any social media with beautiful preview cards',
      color: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'border-pink-500/20',
    },
    {
      icon: '🛒',
      title: 'Smart Shopping Cart',
      description: 'One-click add to cart, bulk ordering for B2B, and instant checkout for B2C customers',
      color: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: '💼',
      title: 'B2B & B2C Support',
      description: 'Separate pricing, bulk discounts, credit terms for wholesale and retail customers',
      color: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      icon: '📊',
      title: 'Real-Time Inventory',
      description: 'Track stock levels, get low-stock alerts, and manage inventory across multiple locations',
      color: 'from-orange-500/10 to-yellow-500/10',
      borderColor: 'border-orange-500/20',
    },
    {
      icon: '🎨',
      title: 'Beautiful Catalogs',
      description: 'Professional product pages with high-res images, videos, and 360° views',
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: '⚡',
      title: 'Instant Setup',
      description: 'Import products via Excel, add images in bulk, and go live in minutes',
      color: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/20',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-gradient-to-b from-[#F6F7F5] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-3">
            ✨ Why BCH Catalog?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            Everything You Need to Sell Online
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-3xl mx-auto">
            Built for modern businesses that sell on Instagram, WhatsApp, and everywhere else 🚀
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full p-8 bg-gradient-to-br ${feature.color} border-2 ${feature.borderColor} hover:border-[#6BBF59] rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#5E5E5E] text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#6BBF59]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 sm:p-12 bg-gradient-to-br from-[#6BBF59] to-[#1F5D4A] rounded-3xl shadow-2xl text-white max-w-4xl mx-auto">
            <span className="text-5xl">🚀</span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Ready to Launch Your Catalog?
            </h3>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl">
              Join 1000+ businesses selling smarter with BCH Catalog 💼
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F1F1F] hover:bg-[#F6F7F5] font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2"
              >
                <span>Get Started Free</span>
                <span className="text-xl">→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg rounded-xl transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm mt-4">
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>Free Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
