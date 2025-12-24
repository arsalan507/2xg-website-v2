'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Proven Track Record',
      stat: '25M+',
      metric: 'Monthly Views',
      description: 'Not theory. Real results. We built India\'s largest organic bicycle audience from zero.',
      gradient: 'from-neon-green/20 to-deep-blue/20',
      iconColor: 'text-neon-green',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Speed to Results',
      stat: '90 Days',
      metric: 'To Viral Content',
      description: 'We don\'t waste time. Structured systems deliver measurable growth in the first quarter.',
      gradient: 'from-ember-orange/20 to-neon-green/20',
      iconColor: 'text-ember-orange',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data-Driven Decisions',
      stat: '100%',
      metric: 'Metric-Based',
      description: 'Every strategy backed by analytics. We optimize what works, kill what doesn\'t.',
      gradient: 'from-deep-blue/20 to-ember-orange/20',
      iconColor: 'text-deep-blue',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'ROI Focused',
      stat: '3-5x',
      metric: 'Revenue Growth',
      description: 'Content isn\'t art—it\'s investment. We build systems that predictably drive sales.',
      gradient: 'from-neon-green/20 to-deep-blue/20',
      iconColor: 'text-neon-green',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Psychology-Driven',
      stat: '85%',
      metric: 'Hook Success Rate',
      description: 'We understand buyer psychology. Content that triggers curiosity, builds trust, drives action.',
      gradient: 'from-ember-orange/20 to-neon-green/20',
      iconColor: 'text-ember-orange',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Full-Stack Team',
      stat: '10+',
      metric: 'Specialists',
      description: 'Strategists, videographers, editors, marketers—all in-house. No outsourcing, no delays.',
      gradient: 'from-deep-blue/20 to-neon-green/20',
      iconColor: 'text-deep-blue',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-gradient-to-br from-graphite via-graphite-dark to-graphite overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8CE63A 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-neon-green font-montserrat font-semibold text-sm tracking-wide uppercase">Why 2XG?</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
            Not Just Another <span className="gradient-text">Marketing Agency</span>
          </h2>
          <p className="text-lg sm:text-xl text-off-white/80 font-inter max-w-3xl mx-auto leading-relaxed">
            We're India's first content-first growth agency specializing in mobility & retail. Here's why brands choose us.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${reason.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-graphite-dark to-graphite border-2 border-off-white/10 group-hover:border-neon-green/50 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className={`${reason.iconColor} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {reason.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-montserrat font-bold text-off-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-impact text-neon-green mb-1">{reason.stat}</div>
                  <div className="text-sm text-deep-blue font-montserrat font-semibold uppercase tracking-wide">{reason.metric}</div>
                </div>

                {/* Description */}
                <p className="text-off-white/70 font-inter leading-relaxed text-sm flex-1">
                  {reason.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-neon-green/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-off-white/60 font-inter text-lg mb-6">
            Ready to 2X your growth with a proven system?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-graphite-dark font-montserrat font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-neon-green/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk Strategy
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
