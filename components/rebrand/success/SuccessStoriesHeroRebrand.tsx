'use client';

import { motion } from 'framer-motion';

export default function SuccessStoriesHeroRebrand() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#F6F7F5] pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F7F5]/95 via-[#F6F7F5]/90 to-[#F6F7F5]/95" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2F7D63 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-[#ECEDEB] border border-[#D6D8D4] rounded-full text-[#2F7D63] text-sm font-semibold tracking-wide mb-6"
          >
            ✨ Proven Success Stories
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#1F1F1F] tracking-tight"
          >
            From Zero to
            <br />
            <span className="text-[#2F7D63]">India's #1 🏆</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#5E5E5E] max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            How 2XG built <span className="text-[#2F7D63] font-semibold">Bharath Cycle Hub</span> into India's largest organic bicycle audience 🚴 with{' '}
            <span className="text-[#2F7D63] font-semibold">25M+ monthly views 👀</span> and{' '}
            <span className="text-[#2F7D63] font-semibold">2M+ followers 🌟</span>
          </motion.p>

          {/* Key Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '25M+', label: 'Monthly Views 👀' },
              { value: '2M+', label: 'Followers 🌟' },
              { value: '5.7M', label: 'Top Reel Views 🎥' },
              { value: '+58%', label: 'Growth Rate 📈' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 border-2 border-[#D6D8D4] hover:border-[#2F7D63] transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F7D63] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#5E5E5E] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
