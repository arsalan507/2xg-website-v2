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

export default function GrowthFramework({ data, accentColor }: GrowthFrameworkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-[#ECEDEB]">
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
            A proven 4-step system designed specifically for your business model.
          </p>
        </motion.div>

        {/* Framework Steps */}
        <div className="space-y-12">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl border-2 border-[#D6D8D4] hover:border-[#2F7D63] transition-all duration-300 overflow-hidden">
                {/* Step Header */}
                <div className="bg-gradient-to-r from-[#2F7D63] to-[#1F5D4A] px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl text-[#2F7D63]"
                      style={{ backgroundColor: 'white' }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.name}
                    </h3>
                  </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 divide-x divide-[#D6D8D4]">
                  {/* What Most Do */}
                  <div className="p-8">
                    <div className="flex items-start gap-3 mb-3">
                      <svg
                        className="w-6 h-6 text-red-500 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-bold text-[#1F1F1F] mb-2 text-sm uppercase tracking-wide">
                          What Most Businesses Do
                        </h4>
                        <p className="text-[#5E5E5E] leading-relaxed">
                          {step.whatMostDo}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What 2XG Does */}
                  <div className="p-8 bg-[#2F7D63]/5">
                    <div className="flex items-start gap-3 mb-3">
                      <svg
                        className="w-6 h-6 text-[#2F7D63] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-bold text-[#2F7D63] mb-2 text-sm uppercase tracking-wide">
                          What 2XG Does Differently
                        </h4>
                        <p className="text-[#1F1F1F] leading-relaxed font-medium">
                          {step.what2XGDoes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < data.steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-1 h-8 bg-[#2F7D63]/30 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white border-2 border-[#2F7D63] rounded-xl px-6 py-4 mb-8">
            <p className="text-[#1F1F1F] font-semibold">
              This system is tailored for your industry — not generic agency fluff.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Apply This Framework to Your Business →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
