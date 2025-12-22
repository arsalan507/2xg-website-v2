'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ end, suffix, label, delay }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-impact text-neon-green mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base text-off-white/80 font-inter text-center max-w-[200px]">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  const stats = [
    { end: 25, suffix: 'M+', label: 'Monthly Views', delay: 0.1 },
    { end: 2, suffix: 'M+', label: 'Followers', delay: 0.2 },
    { end: 100, suffix: 'M+', label: 'Total Views (EM Doodle)', delay: 0.3 },
    { end: 120, suffix: ' Days', label: 'To 65K Community', delay: 0.4 },
  ];

  return (
    <section className="relative bg-graphite py-16 sm:py-20 border-y border-deep-blue/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #0052FF 1px, transparent 1px),
            linear-gradient(-45deg, #0052FF 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-off-white mb-4">
            Results That <span className="text-neon-green">Speak</span>
          </h2>
          <p className="text-off-white/70 font-inter text-lg">
            Proven track record across mobility and retail
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-1 bg-gradient-to-r from-deep-blue via-neon-green to-deep-blue rounded-full"
        />
      </div>
    </section>
  );
}
