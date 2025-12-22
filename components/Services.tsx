'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

function ServiceCard({ icon, title, description, features, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-full"
    >
      <div className="relative bg-graphite rounded-2xl p-8 border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500 h-full flex flex-col overflow-hidden">
        {/* Hover Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Icon */}
          <motion.div
            className="text-6xl mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-4 group-hover:text-neon-green transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-off-white/80 font-inter leading-relaxed mb-6">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-3 flex-1">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + idx * 0.1 }}
                className="flex items-start gap-3 text-off-white/70 font-inter"
              >
                <span className="text-neon-green mt-1 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Learn More Link */}
          <motion.button
            className="mt-6 text-ember-orange font-montserrat font-semibold flex items-center gap-2 group/btn self-start"
            whileHover={{ x: 5 }}
          >
            Learn More
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-neon-green/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: '🎬',
      title: 'Content Systems',
      description:
        'Reels, Shorts, and long-form YouTube built from real customer objections on the showroom floor.',
      features: [
        'Cinematic Reels optimized for virality',
        'Educational content that converts',
        'Psychology-driven hooks and storytelling',
        'Platform-specific optimization (Instagram, YouTube, LinkedIn)',
      ],
    },
    {
      icon: '🚀',
      title: 'Performance Amplification',
      description:
        'Meta & Google Ads that turn content into qualified leads and measurable ROI.',
      features: [
        'Funnel-aware ad strategy (awareness to conversion)',
        'Creative testing and optimization',
        'WhatsApp integration for high-intent leads',
        'City-by-city scaling for retail/showroom traffic',
      ],
    },
    {
      icon: '📊',
      title: 'Funnel Optimization',
      description:
        'From first view to final sale, we track and optimize every step of your customer journey.',
      features: [
        'Online → Offline conversion tracking',
        'Content performance analytics',
        'Objection mapping and resolution',
        'Systematic test-learn-scale loops',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-32 bg-graphite overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#0052FF 1px, transparent 1px),
            linear-gradient(90deg, #0052FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

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
            What We Do
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
            We build repeatable content engines that turn objections into education, attention into WhatsApp leads, and test rides into sales—city by city.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-graphite-dark rounded-2xl p-8 sm:p-12 border-2 border-deep-blue/20"
        >
          <h3 className="text-3xl sm:text-4xl font-montserrat font-bold text-off-white mb-6 text-center">
            Why <span className="text-neon-green">2XG</span>?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Proven Track Record',
                desc: '25M+ monthly views, 2M+ followers built organically',
              },
              {
                title: 'Deep Vertical Expertise',
                desc: 'Mobility & retail specialists, not generalists',
              },
              {
                title: 'Systems, Not Campaigns',
                desc: 'Repeatable content engines for predictable growth',
              },
              {
                title: 'Online → Offline',
                desc: 'Convert views to store visits and real sales',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-impact text-neon-green mb-2">
                  0{idx + 1}
                </div>
                <h4 className="font-montserrat font-bold text-off-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-off-white/70 font-inter">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
