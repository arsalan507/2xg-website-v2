'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturesRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      title: 'Proven Track Record',
      description: 'Not theory. Real results. We built India\'s largest organic bicycle audience from zero to 25M+ monthly views.',
      stat: '25M+',
      metric: 'Monthly Views',
    },
    {
      title: 'Speed to Results',
      description: 'Structured systems deliver measurable growth in the first quarter. No waste, no guesswork.',
      stat: '90 Days',
      metric: 'To Viral Content',
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Every strategy backed by analytics. We optimize what works, kill what doesn\'t—ruthlessly.',
      stat: '100%',
      metric: 'Metric-Based',
    },
    {
      title: 'ROI Focused',
      description: 'Content isn\'t art—it\'s investment. We build systems that predictably drive sales, not just views.',
      stat: '3-5x',
      metric: 'Revenue Growth',
    },
    {
      title: 'Psychology-Driven',
      description: 'We understand buyer psychology. Content that triggers curiosity, builds trust, and drives action.',
      stat: '85%',
      metric: 'Hook Success Rate',
    },
    {
      title: 'Full-Stack Team',
      description: 'Strategists, videographers, editors, marketers—all in-house. No outsourcing, no delays.',
      stat: '10+',
      metric: 'Specialists',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-[#ECEDEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-4">
            Why 2XG
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
            Not Just Another Marketing Agency
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
            We're India's first content-first growth agency specializing in mobility & retail. Here's why brands choose us.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#F6F7F5] border border-[#D6D8D4] hover:border-[#6BBF59] rounded-xl p-8 h-full transition-all duration-300 hover:shadow-md">
                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-[#6BBF59] mb-1">{feature.stat}</div>
                  <div className="text-sm text-[#5E5E5E] font-medium uppercase tracking-wide">{feature.metric}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#6BBF59] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#5E5E5E] leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#5E5E5E] text-lg mb-6">
            Ready to 2X your growth with a proven system?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Let's Talk Strategy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
