'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-br from-graphite-dark via-graphite to-graphite-dark overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0052FF]/20 via-[#8CE63A]/20 to-[#FF6A1A]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8CE63A]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0052FF]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#8CE63A 1px, transparent 1px),
            linear-gradient(90deg, #8CE63A 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Scarcity Badge with Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6A1A]/20 to-[#FF6A1A]/10 border-2 border-[#FF6A1A]/50 rounded-full px-6 py-3 mb-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg className="w-6 h-6 text-[#FF6A1A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </motion.div>
            <span className="text-[#FF6A1A] font-montserrat font-bold text-sm sm:text-base tracking-wide">
              JANUARY STRATEGY CALLS: 2 SLOTS REMAINING
            </span>
          </motion.div>

          {/* Main Headline with Curiosity Gap */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6 leading-tight text-off-white"
          >
            The Counter-Intuitive Strategy That{' '}
            <span className="gradient-text">Tripled BCH's Leads</span>
          </motion.h2>

          {/* Subheadline with Urgency */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-off-white/90 font-inter max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            While your competitors post daily (and see zero ROI), our clients post 3x per week—
            <span className="text-[#8CE63A] font-semibold"> and dominate their market.</span>
          </motion.p>

          {/* Urgency Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-[#0052FF] font-inter font-semibold text-base sm:text-lg mb-10"
          >
            Q1 planning starts soon. Book before Dec 31 to start fresh in January.
          </motion.p>

          {/* CTA Button with pulse animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="relative inline-block"
          >
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-[#8CE63A]/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <Button href="/contact" variant="primary" size="large">
              Get Started Now
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-off-white/60 font-inter text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-neon-green text-xl">✓</span>
              <span>25M+ Monthly Views</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-green text-xl">✓</span>
              <span>2M+ Followers Built</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-green text-xl">✓</span>
              <span>Proven Track Record</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 border-2 border-neon-green/30 rounded-lg hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-deep-blue/30 rounded-full hidden lg:block"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
}
