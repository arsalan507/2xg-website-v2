'use client';

import { motion } from 'framer-motion';

export default function HeroRebrand() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F6F7F5] pt-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2F7D63 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center py-20">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 bg-[#ECEDEB] border border-[#D6D8D4] rounded-full text-[#5E5E5E] text-sm font-medium tracking-wide">
            India's Content-First Growth Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F1F1F] mb-6 leading-[1.1] tracking-tight"
        >
          Content That
          <br />
          <span className="text-[#2F7D63]">Doubles Growth</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          From 25M views to predictable sales. We build content systems for{' '}
          <span className="text-[#1F1F1F] font-semibold">mobility & retail</span> brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="/success-stories"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md min-w-[200px]"
          >
            See The Proof
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#D6D8D4] hover:border-[#2F7D63] text-[#1F1F1F] hover:text-[#2F7D63] font-semibold text-base rounded-lg transition-all duration-200 min-w-[200px]"
          >
            Let's Talk Growth
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-[#2F7D63] mb-1">25M+</div>
            <div className="text-sm text-[#5E5E5E] font-medium">Monthly Views</div>
          </div>
          <div className="w-px h-12 bg-[#D6D8D4]" />
          <div>
            <div className="text-3xl font-bold text-[#2F7D63] mb-1">2M+</div>
            <div className="text-sm text-[#5E5E5E] font-medium">Followers Built</div>
          </div>
          <div className="w-px h-12 bg-[#D6D8D4]" />
          <div>
            <div className="text-3xl font-bold text-[#2F7D63] mb-1">3-5x</div>
            <div className="text-sm text-[#5E5E5E] font-medium">Revenue Growth</div>
          </div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#D6D8D4] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#2F7D63] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
