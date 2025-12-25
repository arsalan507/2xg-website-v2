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

export default function IndustryInsights({ data }: IndustryInsightsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          <div className="w-20 h-1 bg-[#2F7D63] mx-auto rounded-full" />
        </motion.div>

        {/* Insights with Optional Side Image */}
        <div className={`grid ${data.sideImage ? 'lg:grid-cols-[1fr_400px]' : ''} gap-12 items-center`}>
          {/* Insights Grid */}
          <div className={`grid ${data.sideImage ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
            {data.items.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex gap-4 p-6 bg-[#F6F7F5] border-l-4 border-[#2F7D63] rounded-lg hover:bg-white hover:shadow-md transition-all duration-200">
                  {/* Insight Text */}
                  <p className="text-[#1F1F1F] text-lg leading-relaxed font-semibold">
                    {insight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Image (if provided) */}
          {data.sideImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={data.sideImage}
                  alt="Industry visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5E5E5E] text-sm italic mb-8">
            From experience, not guesswork ✨
          </p>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Want This for Your Business? Let's Talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
