'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IndustryCTAProps {
  industryName: string;
}

export default function IndustryCTA({ industryName }: IndustryCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-gradient-to-br from-[#1F1F1F] to-[#6BBF59] overflow-hidden">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
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
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-5xl opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-3xl opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          💪
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Emoji Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-5xl sm:text-6xl">🎯</span>
          </motion.div>

          {/* Headline - Compact for Mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Scale {industryName}?
          </h2>

          {/* Subheadline - Shorter */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            No contracts ✨ Strategy first 🎯 Results always 📊
          </p>

          {/* CTA Buttons - Stack on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1F1F1F] hover:bg-[#F6F7F5] font-semibold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2"
            >
              <span>Get My Growth Plan</span>
              <span className="text-xl">🚀</span>
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-base sm:text-lg rounded-xl transition-all duration-200"
            >
              Talk to Us 💬
            </a>
          </motion.div>

          {/* Trust Signals - Compact for Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">✅</span>
              <span>No long contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">✅</span>
              <span>Strategy first</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">✅</span>
              <span>Real results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
