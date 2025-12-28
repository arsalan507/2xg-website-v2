'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CatalogHeroProps {
  tenantName: string;
  tenantLogo: string;
}

export default function CatalogHero({ tenantName, tenantLogo }: CatalogHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-20 bg-gradient-to-br from-[#1F1F1F] via-[#6BBF59] to-[#1F5D4A]">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-5xl opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🛍️
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-6xl opacity-20"
          animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          📦
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-4xl opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
        >
          💳
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-5xl opacity-15"
          animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 2 }}
        >
          🎁
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
          >
            <span className="text-2xl">✨</span>
            <span className="text-white font-semibold text-sm">{tenantName} Smart Catalog</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Products, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
              Everywhere 🚀
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Create stunning catalogs 📱 Share on Instagram 📸 Manage B2B & B2C orders 💼 All in one place ✨
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F1F1F] hover:bg-[#F6F7F5] font-semibold text-lg rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 gap-2"
            >
              <span>Browse Catalog</span>
              <span className="text-2xl">🛍️</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg rounded-xl transition-all duration-200 gap-2"
            >
              <span>Create Your Catalog</span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">📱</span>
              <span>Instagram Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🛒</span>
              <span>One-Click Cart</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💼</span>
              <span>B2B + B2C</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span>Instant Setup</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
