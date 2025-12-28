'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IndustryMetricsProps {
  data: {
    title: string;
    kpis: {
      label: string;
      description: string;
    }[];
  };
}

const metricEmojis = ['📊', '📈', '💰', '🎯', '⚡', '🔥', '💪', '✨', '🚀'];

export default function IndustryMetrics({ data }: IndustryMetricsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-[#F6F7F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-3">
            📊 What We Measure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] mb-3">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5E5E5E] max-w-2xl mx-auto">
            Real KPIs that drive revenue 💰 Not vanity metrics
          </p>
        </motion.div>

        {/* KPIs Grid - Compact & Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full bg-white border-2 border-[#D6D8D4] hover:border-[#6BBF59] rounded-2xl p-5 sm:p-6 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                {/* Emoji Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#6BBF59]/10 to-[#6BBF59]/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl">{metricEmojis[index % metricEmojis.length]}</span>
                </div>

                {/* KPI Label */}
                <h3 className="text-base sm:text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#6BBF59] transition-colors duration-300 leading-tight">
                  {kpi.label}
                </h3>

                {/* KPI Description */}
                <p className="text-[#5E5E5E] text-sm sm:text-base leading-relaxed">
                  {kpi.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#6BBF59]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 bg-white rounded-2xl border-2 border-dashed border-[#6BBF59]/30 shadow-sm">
            <p className="text-lg sm:text-xl text-[#1F1F1F] font-bold">
              We track what matters 🎯
            </p>
            <p className="text-sm sm:text-base text-[#5E5E5E]">
              You focus on growth ✨
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2"
            >
              <span>Track Your Growth</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
