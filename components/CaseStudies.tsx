'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  description: string;
  gradient: string;
  index: number;
}

function CaseStudyCard({ title, subtitle, stats, description, gradient, index }: CaseStudyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative bg-graphite rounded-2xl p-8 sm:p-10 border-2 border-transparent hover:border-neon-green/50 transition-all duration-500 overflow-hidden">
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-2 group-hover:text-neon-green transition-colors duration-300">
              {title}
            </h3>
            <p className="text-deep-blue font-inter font-semibold text-lg">
              {subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-graphite-dark rounded-lg p-4 border border-deep-blue/20 group-hover:border-neon-green/30 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl font-impact text-neon-green mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-off-white/70 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <p className="text-off-white/80 font-inter leading-relaxed mb-6">
            {description}
          </p>

          {/* CTA */}
          <motion.button
            className="text-ember-orange font-montserrat font-semibold flex items-center gap-2 group/btn"
            whileHover={{ x: 5 }}
          >
            Read Case Study
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-green/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Bharath Cycle Hub',
      subtitle: "India's Largest Organic Bicycle Audience",
      stats: [
        { value: '25M+', label: 'Monthly Views' },
        { value: '2M+', label: 'Followers' },
        { value: '500%', label: 'Growth YoY' },
        { value: '#1', label: 'In Category' },
      ],
      description:
        'We built BCH into the dominant voice in India\'s bicycle market through psychology-driven content systems. From showroom insights to viral Reels, we turned product education into predictable sales growth.',
      gradient: 'bg-gradient-to-br from-deep-blue to-neon-green',
    },
    {
      title: 'EM Doodle',
      subtitle: 'From Product Launch to 65K Community in 4 Months',
      stats: [
        { value: '100M+', label: 'Total Views' },
        { value: '65K', label: 'Community' },
        { value: '120', label: 'Days' },
        { value: '2.5M', label: 'Avg. Monthly Views' },
      ],
      description:
        'Launched a new mobility brand from zero to category leader. Our content system converted range anxiety into confidence, turning viewers into WhatsApp leads and test rides into customers across multiple cities.',
      gradient: 'bg-gradient-to-br from-neon-green to-deep-blue',
    },
  ];

  return (
    <section id="case-studies" className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase"
          >
            Proven Success
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
            Case Studies That
            <br />
            <span className="gradient-text">Prove Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
            We don't just create content—we build complete systems that turn organic reach into predictable revenue growth.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            href="#contact"
            variant="primary"
            size="large"
          >
            Let's Build Your Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
