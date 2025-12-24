'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';

export default function ServicesDetailed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: '🎬',
      title: 'Content Systems',
      tagline: 'From Showroom Floor to Viral Reels',
      description: 'We build repeatable content engines that turn real customer objections into educational content that converts. Not random posts—systematic content that drives results.',
      features: [
        {
          title: 'Cinematic Reels Optimized for Virality',
          detail: 'High-production vertical videos designed for Instagram, YouTube Shorts, and TikTok. Every frame crafted to stop the scroll.',
        },
        {
          title: 'Educational Content That Converts',
          detail: 'We transform your showroom insights, customer FAQs, and product knowledge into content that builds trust and drives action.',
        },
        {
          title: 'Psychology-Driven Hooks and Storytelling',
          detail: 'Using proven psychological frameworks (curiosity gaps, loss aversion, social proof) to create content that people can\'t ignore.',
        },
        {
          title: 'Platform-Specific Optimization',
          detail: 'Instagram Reels, YouTube Shorts, long-form YouTube, LinkedIn—each platform gets content optimized for its unique algorithm and audience.',
        },
      ],
      gradient: 'from-deep-blue/20 to-neon-green/20',
      borderColor: 'border-deep-blue/50',
    },
    {
      icon: '🚀',
      title: 'Performance Amplification',
      tagline: 'Turn Content Into Qualified Leads',
      description: 'Meta & Google Ads that don\'t just generate impressions—they generate WhatsApp messages, showroom visits, and sales.',
      features: [
        {
          title: 'Funnel-Aware Ad Strategy',
          detail: 'From awareness to conversion, we build ad funnels that move prospects through each stage with precision.',
        },
        {
          title: 'Creative Testing and Optimization',
          detail: 'Systematic A/B testing of hooks, visuals, copy, and CTAs. We find what works, then scale it.',
        },
        {
          title: 'WhatsApp Integration for High-Intent Leads',
          detail: 'Direct WhatsApp lead gen that captures high-intent buyers at the moment of interest—no form friction.',
        },
        {
          title: 'City-by-City Scaling for Retail Traffic',
          detail: 'Geo-targeted campaigns that drive foot traffic to specific showrooms. Perfect for mobility and retail brands.',
        },
      ],
      gradient: 'from-neon-green/20 to-ember-orange/20',
      borderColor: 'border-neon-green/50',
    },
    {
      icon: '📊',
      title: 'Funnel Optimization',
      tagline: 'Track Every Step, Optimize Every Conversion',
      description: 'From first view to final sale, we track and optimize every step of your customer journey. No more guessing—just data-driven growth.',
      features: [
        {
          title: 'Online → Offline Conversion Tracking',
          detail: 'Connect digital engagement to real-world sales. Track which content drives showroom visits and purchases.',
        },
        {
          title: 'Content Performance Analytics',
          detail: 'Deep dive into what\'s working: which hooks, formats, topics, and CTAs are driving the most engagement and conversions.',
        },
        {
          title: 'Objection Mapping and Resolution',
          detail: 'Identify customer objections at each funnel stage and create content that systematically addresses them.',
        },
        {
          title: 'Systematic Test-Learn-Scale Loops',
          detail: 'Continuous improvement cycles: test new approaches, learn from data, scale what works. Your content gets better every month.',
        },
      ],
      gradient: 'from-ember-orange/20 to-deep-blue/20',
      borderColor: 'border-ember-orange/50',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-deep-blue/10 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase"
          >
            What We Do
          </motion.p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-black text-off-white mb-6 leading-tight">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-off-white/80 font-inter max-w-4xl mx-auto leading-relaxed">
            We build repeatable content engines that turn objections into education,
            attention into WhatsApp leads, and test rides into sales—city by city.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-graphite to-graphite-dark border-2 ${service.borderColor} rounded-3xl p-8 sm:p-12 overflow-hidden`}>
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(140, 230, 58) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-6xl sm:text-7xl"
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h2 className="text-3xl sm:text-4xl font-montserrat font-black text-off-white mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg sm:text-xl text-neon-green font-montserrat font-semibold mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-base sm:text-lg text-off-white/80 font-inter leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-graphite-dark/50 border border-off-white/10 rounded-xl p-6 hover:border-neon-green/30 transition-colors duration-300"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-neon-green text-xl flex-shrink-0 mt-1">✓</span>
                          <h3 className="text-lg font-montserrat font-bold text-off-white leading-snug">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-sm text-off-white/70 font-inter leading-relaxed ml-8">
                          {feature.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <Button href="/contact" variant="primary" size="large">
                      Let's Talk Growth
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-deep-blue/10 to-neon-green/10 border-2 border-deep-blue/30 rounded-3xl p-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-black text-off-white mb-6">
            Ready to Build Your Content Engine?
          </h2>
          <p className="text-lg sm:text-xl text-off-white/80 font-inter mb-8 max-w-3xl mx-auto">
            Let's create a systematic, repeatable content system that turns your audience into customers—month after month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="primary" size="large">
              Let's Talk Growth
            </Button>
            <Button href="/success-stories" variant="secondary" size="large">
              See The Proof
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
