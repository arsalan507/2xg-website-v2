'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-[#F6F7F5] pt-32 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2F7D63 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 bg-[#ECEDEB] border border-[#D6D8D4] rounded-full text-[#5E5E5E] text-sm font-medium tracking-wide">
            ⚡ Full-Service Growth Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F1F1F] mb-6 leading-[1.1] tracking-tight"
        >
          Everything You Need to Grow 🚀
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed"
        >
          From viral content to performance campaigns 📊 from influencer partnerships to business strategy 💼 we're your complete growth partner ✨
        </motion.p>
      </div>
    </section>
  );
}
