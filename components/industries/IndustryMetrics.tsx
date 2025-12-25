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

export default function IndustryMetrics({ data }: IndustryMetricsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-3xl mx-auto">
            Not vanity metrics. Real KPIs that drive revenue.
          </p>
        </motion.div>

        {/* KPIs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full bg-[#F6F7F5] border-2 border-[#D6D8D4] hover:border-[#2F7D63] rounded-xl p-6 transition-all duration-300 overflow-hidden">
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#2F7D63]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2F7D63]/10 text-[#2F7D63] rounded-lg mb-4 group-hover:bg-[#2F7D63] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                {/* KPI Label */}
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#2F7D63] transition-colors duration-300">
                  {kpi.label}
                </h3>

                {/* KPI Description */}
                <p className="text-[#5E5E5E] text-sm leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5E5E5E] text-sm mb-8">
            We track what matters. You focus on growth.
          </p>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            See How We Track Your Growth →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
