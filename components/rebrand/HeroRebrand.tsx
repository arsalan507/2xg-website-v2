'use client';

import { motion } from 'framer-motion';

export default function HeroRebrand() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F6F7F5] pt-8 overflow-hidden">
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

      {/* Subtle pattern on top */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
            📈 views = sales 💰
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F1F1F] mb-6 leading-[1.1] tracking-tight"
        >
          starts at just
          <br />
          <span className="text-[#2F7D63]">₹1499/- day</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto mb-10 leading-relaxed flex items-center justify-center flex-wrap gap-2"
        >
          <span>Crores of views 👀</span>
          <span className="text-[#2F7D63] text-2xl">→</span>
          <span>More customers 🎯</span>
          <span className="text-[#2F7D63] text-2xl">→</span>
          <span>More sales 🚀</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <p className="text-[#5E5E5E] text-sm font-medium uppercase tracking-wider mb-3">
            👇 click here now 👇
          </p>
          <button
            onClick={() => {
              const formSection = document.querySelector('#contact-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            🔥 TEST US FOR FREE 🔥
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-[#2F7D63] mb-1">2.5 Cr+</div>
            <div className="text-sm text-[#5E5E5E] font-medium">Monthly Views</div>
          </div>
          <div className="w-px h-12 bg-[#D6D8D4]" />
          <div>
            <div className="text-3xl font-bold text-[#2F7D63] mb-1">20L+</div>
            <div className="text-sm text-[#5E5E5E] font-medium">Followers Built</div>
          </div>
          <div className="w-px h-12 bg-[#D6D8D4]" />
          <div>
            <div className="text-3xl font-bold text-[#2F7D63] mb-1">20x</div>
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
