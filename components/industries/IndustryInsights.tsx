'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IndustryInsightsProps {
  data: {
    title: string;
    items: string[];
    sideImage?: string;
  };
}

const iconsList = ['💡', '🎯', '🚀', '⚡', '✨', '🔥', '📊', '💪', '🌟', '🎨'];

export default function IndustryInsights({ data }: IndustryInsightsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-3">
            💎 Why We're Different
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] mb-3">
            {data.title}
          </h2>
          <p className="text-[#5E5E5E] text-base sm:text-lg max-w-2xl mx-auto">
            Real insights from working with businesses like yours 🎯
          </p>
        </motion.div>

        {/* Featured Image - Mobile Visible */}
        {data.sideImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={data.sideImage}
                alt="Industry insights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        )}

        {/* Insights Grid - More Visual */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.items.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative h-full p-5 sm:p-6 bg-white rounded-2xl border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#6BBF59]/10 to-[#6BBF59]/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl">{iconsList[index % iconsList.length]}</span>
                </div>

                {/* Insight Text - Shortened for mobile */}
                <p className="text-[#1F1F1F] text-sm sm:text-base leading-relaxed font-medium">
                  {insight}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#6BBF59]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - More Engaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 bg-gradient-to-br from-[#6BBF59]/5 to-transparent rounded-2xl border-2 border-dashed border-[#6BBF59]/30">
            <p className="text-[#1F1F1F] text-lg sm:text-xl font-bold">
              Ready to grow like this? 🚀
            </p>
            <p className="text-[#5E5E5E] text-sm sm:text-base max-w-md">
              From experience, not guesswork ✨
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2"
            >
              <span>Let's Build Your Plan</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
