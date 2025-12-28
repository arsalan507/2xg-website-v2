'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IndustryServicesProps {
  data: {
    title: string;
    mappedServices: {
      service: string;
      industrySpecific: string;
    }[];
  };
}

export default function IndustryServices({ data }: IndustryServicesProps) {
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
            Our services, mapped to your business reality.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-6">
          {data.mappedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-[#D6D8D4] hover:border-[#6BBF59] rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Service Name */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#6BBF59]/10 text-[#6BBF59] rounded-lg group-hover:bg-[#6BBF59] group-hover:text-white transition-all duration-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#1F1F1F]">
                        {service.service}
                      </h3>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block">
                    <svg
                      className="w-8 h-8 text-[#6BBF59]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>

                  {/* Industry-Specific Description */}
                  <div className="md:flex-1">
                    <p className="text-[#1F1F1F] leading-relaxed font-medium">
                      {service.industrySpecific}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5E5E5E] text-base mb-6">
            Ready to get these services working for your business?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Strategy Call →
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-[#6BBF59] text-[#6BBF59] hover:bg-[#6BBF59] hover:text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
