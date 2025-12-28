'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface GrowthFrameworkProps {
  data: {
    title: string;
    steps: {
      name: string;
      whatMostDo: string;
      what2XGDoes: string;
    }[];
  };
  accentColor: string;
}

const stepEmojis = ['🎯', '⚡', '💪', '🚀'];

export default function GrowthFramework({ data, accentColor }: GrowthFrameworkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-[#ECEDEB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-3">
            🎯 Our Proven Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] mb-3">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5E5E5E] max-w-2xl mx-auto">
            Not generic advice. Real strategy that works 💯
          </p>
        </motion.div>

        {/* Framework Steps - More Visual for Mobile */}
        <div className="space-y-6 sm:space-y-8">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                {/* Step Header - Compact */}
                <div
                  className="px-5 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-[#6BBF59] to-[#1F5D4A]"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white">
                      <span className="text-xl sm:text-2xl">{stepEmojis[index]}</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      {step.name}
                    </h3>
                  </div>
                </div>

                {/* Simplified Comparison - Mobile First */}
                <div className="p-5 sm:p-8 space-y-4">
                  {/* What Most Do - Condensed */}
                  <div className="flex gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <span className="text-xl flex-shrink-0">❌</span>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-red-700 mb-1 uppercase tracking-wide">
                        Most Do
                      </p>
                      <p className="text-sm sm:text-base text-[#5E5E5E] leading-relaxed">
                        {step.whatMostDo}
                      </p>
                    </div>
                  </div>

                  {/* What 2XG Does - Highlighted */}
                  <div className="flex gap-3 p-4 bg-[#6BBF59]/5 rounded-xl border-2 border-[#6BBF59]/20">
                    <span className="text-xl flex-shrink-0">✅</span>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-[#6BBF59] mb-1 uppercase tracking-wide">
                        We Do
                      </p>
                      <p className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium">
                        {step.what2XGDoes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector (except for last item) */}
              {index < data.steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[#6BBF59]/50 to-[#6BBF59]/20 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Engaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#6BBF59]/30 shadow-lg max-w-2xl mx-auto">
            <span className="text-3xl sm:text-4xl">🎯</span>
            <p className="text-lg sm:text-xl text-[#1F1F1F] font-bold">
              Ready to try this framework?
            </p>
            <p className="text-sm sm:text-base text-[#5E5E5E]">
              Tailored for your industry — not generic fluff ✨
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2"
            >
              <span>Start Your Growth Plan</span>
              <span className="text-xl">🚀</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
