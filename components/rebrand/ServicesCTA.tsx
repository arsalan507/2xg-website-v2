'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/#contact-form');
  };

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-[#F6F7F5]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2F7D63 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#2F7D63] font-semibold text-sm uppercase tracking-wider mb-4">
            🚀 Ready to Scale?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
            Let's Build Your Growth Engine 💰
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose one service or go full-stack 🎯 Either way, you get our complete attention and expertise ✨
          </p>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            Get Your Free Strategy Call 🎯
          </button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-[#2F7D63] mb-1">2.5 Cr+</div>
              <div className="text-sm text-[#5E5E5E] font-medium">Monthly Views 👀</div>
            </div>
            <div className="w-px h-12 bg-[#D6D8D4]" />
            <div>
              <div className="text-3xl font-bold text-[#2F7D63] mb-1">100+</div>
              <div className="text-sm text-[#5E5E5E] font-medium">Brands Growing 🚀</div>
            </div>
            <div className="w-px h-12 bg-[#D6D8D4]" />
            <div>
              <div className="text-3xl font-bold text-[#2F7D63] mb-1">3–5x</div>
              <div className="text-sm text-[#5E5E5E] font-medium">Revenue Growth 📈</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
