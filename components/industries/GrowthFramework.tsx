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
    <section ref={ref} className="relative py-12 sm:py-16 bg-[#ECEDEB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-2">
            🎯 Our Proven Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-2">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E5E] max-w-2xl mx-auto">
            Not generic advice. Real strategy that works 💯
          </p>
        </motion.div>

        {/* Framework Steps - Compact Design */}
        <div className="space-y-3 sm:space-y-4">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <div className="bg-white rounded-xl border border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                {/* Step Header - More Compact */}
                <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-[#6BBF59] to-[#1F5D4A]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white">
                      <span className="text-base sm:text-lg">{stepEmojis[index]}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {step.name}
                    </h3>
                  </div>
                </div>

                {/* Compact Comparison Grid */}
                <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* What Most Do */}
                  <div className="flex gap-2 p-3 bg-red-50/50 rounded-lg border border-red-100/50">
                    <span className="text-base flex-shrink-0">❌</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-red-700 mb-1 uppercase tracking-wide">
                        Most Do
                      </p>
                      <p className="text-xs sm:text-sm text-[#5E5E5E] leading-snug">
                        {step.whatMostDo}
                      </p>
                    </div>
                  </div>

                  {/* What 2XG Does */}
                  <div className="flex gap-2 p-3 bg-[#6BBF59]/5 rounded-lg border border-[#6BBF59]/20">
                    <span className="text-base flex-shrink-0">✅</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#6BBF59] mb-1 uppercase tracking-wide">
                        We Do
                      </p>
                      <p className="text-xs sm:text-sm text-[#1F1F1F] leading-snug font-medium">
                        {step.what2XGDoes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Connector */}
              {index < data.steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-[#6BBF59]/40 to-transparent rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 p-5 sm:p-6 bg-white rounded-xl border border-[#6BBF59]/30 shadow-md max-w-xl mx-auto">
            <span className="text-2xl">🎯</span>
            <p className="text-base sm:text-lg text-[#1F1F1F] font-bold">
              Ready to try this framework?
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E5E]">
              Tailored for your industry — not generic fluff ✨
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
            >
              <span>Start Your Growth Plan</span>
              <span className="text-lg">🚀</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
