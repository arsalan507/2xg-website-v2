'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';

interface TimelineItemProps {
  phase: string;
  metric: string;
  description: string;
  index: number;
}

function TimelineItem({ phase, metric, description, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-3">
        <motion.div
          className="w-5 h-5 rounded-full bg-neon-green shadow-lg shadow-neon-green/50"
          animate={isInView ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        />
        <span className="text-sm sm:text-base font-montserrat font-bold text-neon-green uppercase tracking-wide">
          {phase}
        </span>
      </div>
      <div className="ml-10 border-l-2 border-neon-green/30 pl-6 sm:pl-8 pb-10 last:pb-0">
        <div className="text-3xl sm:text-4xl font-montserrat font-black text-off-white mb-3">
          {metric}
        </div>
        <p className="text-base sm:text-lg text-off-white/80 font-inter leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface BeforeAfterCardProps {
  caseStudy: {
    brand: string;
    industry: string;
    before: {
      views: string;
      followers: string;
      challenge: string;
    };
    after: {
      views: string;
      followers: string;
      growth: string;
    };
    solution: string;
    timeline: {
      phase: string;
      metric: string;
      description: string;
    }[];
  };
  index: number;
}

function BeforeAfterCard({ caseStudy, index }: BeforeAfterCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative mb-32"
    >
      {/* Floating background element */}
      <motion.div
        style={{ y }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-deep-blue/20 to-neon-green/20 rounded-full blur-3xl -z-10"
      />

      {/* Brand Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-ember-orange/20 to-ember-orange/10 border-2 border-ember-orange/50 rounded-full px-6 py-2 mb-4">
          <span className="text-ember-orange font-montserrat font-bold text-sm uppercase tracking-wider">
            {caseStudy.industry}
          </span>
        </div>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-4">
          {caseStudy.brand}
        </h3>
        <p className="text-xl text-off-white/70 font-inter max-w-2xl mx-auto">
          {caseStudy.before.challenge}
        </p>
      </motion.div>

      {/* Before/After Split */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {/* BEFORE - Red/Dark Theme with Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -10 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          className="relative group perspective-1000"
        >
          {/* Outer glow container */}
          <div className="absolute -inset-1 bg-gradient-to-br from-red-500/30 via-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-[#1a0a0a] via-graphite to-graphite-dark rounded-2xl p-8 sm:p-10 border-2 border-red-500/30 overflow-hidden backdrop-blur-sm">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239, 68, 68) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Corner Label with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute top-0 right-0 bg-gradient-to-br from-red-500/30 to-red-600/20 border-2 border-red-500/50 px-5 py-2 rounded-bl-2xl backdrop-blur-sm"
            >
              <span className="text-red-400 font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚠️
                </motion.span>
                Before 2XG
              </span>
            </motion.div>

            {/* Floating shapes */}
            <motion.div
              className="absolute top-1/4 right-8 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <motion.div
                  className="text-5xl sm:text-6xl font-montserrat font-black text-red-400 mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {caseStudy.before.views}
                </motion.div>
                <div className="text-sm sm:text-base text-off-white/60 font-inter uppercase tracking-wide">
                  Monthly Views
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mb-10"
              >
                <motion.div
                  className="text-5xl sm:text-6xl font-montserrat font-black text-red-400 mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {caseStudy.before.followers}
                </motion.div>
                <div className="text-sm sm:text-base text-off-white/60 font-inter uppercase tracking-wide">
                  Total Followers
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3 text-red-400 font-inter text-base sm:text-lg bg-red-500/10 border border-red-500/30 rounded-lg px-5 py-4"
              >
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❌
                </motion.span>
                <span>Struggling with consistency</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* AFTER - Green/Success Theme with Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 10 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02, rotateY: -2 }}
          className="relative group perspective-1000"
        >
          {/* Outer glow container */}
          <div className="absolute -inset-1 bg-gradient-to-br from-neon-green/30 via-neon-green/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-[#0a1a0a] via-graphite to-graphite-dark rounded-2xl p-8 sm:p-10 border-2 border-neon-green/50 overflow-hidden backdrop-blur-sm">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(140, 230, 58) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '-40px -40px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />

            {/* Corner Label with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute top-0 right-0 bg-gradient-to-br from-neon-green/30 to-neon-green/20 border-2 border-neon-green/50 px-5 py-2 rounded-bl-2xl backdrop-blur-sm"
            >
              <span className="text-neon-green font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                After 2XG
              </span>
            </motion.div>

            {/* Floating shapes */}
            <motion.div
              className="absolute top-1/4 left-8 w-32 h-32 bg-neon-green/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-8 w-24 h-24 bg-deep-blue/10 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <motion.div
                  className="text-5xl sm:text-6xl font-montserrat font-black text-neon-green mb-3"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(140, 230, 58, 0.3)',
                      '0 0 20px rgba(140, 230, 58, 0.5)',
                      '0 0 10px rgba(140, 230, 58, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {caseStudy.after.views}
                </motion.div>
                <div className="text-sm sm:text-base text-off-white/60 font-inter uppercase tracking-wide">
                  Monthly Views
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mb-10"
              >
                <motion.div
                  className="text-5xl sm:text-6xl font-montserrat font-black text-neon-green mb-3"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(140, 230, 58, 0.3)',
                      '0 0 20px rgba(140, 230, 58, 0.5)',
                      '0 0 10px rgba(140, 230, 58, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {caseStudy.after.followers}
                </motion.div>
                <div className="text-sm sm:text-base text-off-white/60 font-inter uppercase tracking-wide">
                  Total Followers
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <div className="relative flex items-center gap-3 bg-gradient-to-r from-neon-green/10 to-deep-blue/10 border border-neon-green/30 rounded-lg px-5 py-4">
                  <motion.span
                    className="text-3xl"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  <span className="text-neon-green font-montserrat font-bold text-base sm:text-lg">
                    {caseStudy.after.growth} Growth
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* The Solution */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-deep-blue/10 to-neon-green/10 border-2 border-deep-blue/30 rounded-2xl p-8 sm:p-10 mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💡</span>
          <h4 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white">
            The Counter-Intuitive Strategy
          </h4>
        </div>
        <p className="text-lg sm:text-xl text-off-white/90 font-inter leading-relaxed">
          {caseStudy.solution}
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-graphite rounded-2xl p-8 sm:p-10 border border-deep-blue/20"
      >
        <h4 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-10 flex items-center gap-3">
          <span className="text-4xl">📈</span>
          Growth Timeline
        </h4>
        <div>
          {caseStudy.timeline.map((item, idx) => (
            <TimelineItem key={idx} {...item} index={idx} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudiesEnhanced() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const caseStudies = [
    {
      brand: 'Bharath Cycle Hub',
      industry: 'Mobility & Retail',
      before: {
        views: '50K',
        followers: '5K',
        challenge: 'Local cycle shop struggling to compete with e-commerce giants. No online presence, inconsistent content, zero brand recognition.',
      },
      after: {
        views: '25M+',
        followers: '2M+',
        growth: '500%',
      },
      solution:
        'Instead of product-first content, we built an education-first system. We turned showroom insights into viral Reels, transformed objections into content pillars, and built India\'s largest organic bicycle audience. The secret? We posted 3x per week with psychology-driven hooks, not daily generic content.',
      timeline: [
        {
          phase: 'Month 1-2',
          metric: '500K Views',
          description: 'Launched content system with educational hooks and showroom insights',
        },
        {
          phase: 'Month 3-4',
          metric: '2M Views',
          description: 'Viral growth kicked in. Reels hitting 1M+ views consistently',
        },
        {
          phase: 'Month 6',
          metric: '10M Views',
          description: 'Became category leader. Competitors started copying our format',
        },
        {
          phase: 'Month 12',
          metric: '25M+ Views',
          description: 'India\'s #1 bicycle content platform. Predictable sales pipeline established',
        },
      ],
    },
    {
      brand: 'EM Doodle',
      industry: 'Electric Mobility',
      before: {
        views: '0',
        followers: '0',
        challenge: 'Brand new electric scooter launch. Zero audience, unknown brand, competing against established players with massive budgets.',
      },
      after: {
        views: '100M+',
        followers: '65K',
        growth: '∞',
      },
      solution:
        'We didn\'t launch with product specs. We launched with range anxiety solutions. Every piece of content answered one fear: "Will it work for me?" We turned range concerns into confidence, competitors into comparisons, and viewers into WhatsApp leads. Result? 65K community in 120 days—from absolute zero.',
      timeline: [
        {
          phase: 'Month 1',
          metric: '10M Views',
          description: 'Launch campaign focused on range anxiety and real-world usage',
        },
        {
          phase: 'Month 2',
          metric: '25K Followers',
          description: 'Community building accelerated. Daily DMs for test rides',
        },
        {
          phase: 'Month 3',
          metric: '50M Views',
          description: 'Viral content series on competitor comparisons and user testimonials',
        },
        {
          phase: 'Month 4',
          metric: '100M+ Views',
          description: 'Category leader status achieved. 65K engaged community driving sales',
        },
      ],
    },
  ];

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden"
    >
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
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Curiosity Gap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Pattern Interrupt Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-deep-blue/20 to-deep-blue/10 border-2 border-deep-blue/50 rounded-full px-6 py-3 mb-6"
          >
            <motion.span
              className="text-2xl"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🔍
            </motion.span>
            <span className="text-deep-blue font-montserrat font-bold text-sm sm:text-base tracking-wide uppercase">
              Real Results, Real Brands
            </span>
          </motion.div>

          {/* Curiosity Gap Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6 leading-tight text-off-white"
          >
            Why Our Clients Post{' '}
            <span className="masked-text-animated">3x Per Week</span>
            <br />
            <span className="text-off-white/60 text-3xl sm:text-4xl md:text-5xl">
              (While Competitors Post Daily & Fail)
            </span>
          </motion.h2>

          {/* Subheadline with Hook */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-off-white/80 font-inter max-w-4xl mx-auto mb-6 leading-relaxed"
          >
            The counter-intuitive content strategy that turned zero-audience brands into category leaders.{' '}
            <span className="text-neon-green font-semibold">
              Here's exactly how we did it.
            </span>
          </motion.p>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-8 text-off-white/60 font-inter text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-neon-green text-xl">📊</span>
              <span>125M+ Total Views Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-green text-xl">👥</span>
              <span>2M+ Followers Built</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-green text-xl">🏆</span>
              <span>Multiple Category Leaders Created</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Case Study Cards */}
        <div>
          {caseStudies.map((study, index) => (
            <BeforeAfterCard key={index} caseStudy={study} index={index} />
          ))}
        </div>

        {/* Pattern Interrupt - Quote Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-ember-orange/10 to-ember-orange/5 border-l-4 border-ember-orange rounded-2xl p-8 sm:p-12 mb-20"
        >
          <div className="flex items-start gap-6">
            <span className="text-6xl text-ember-orange">"</span>
            <div>
              <p className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-4 leading-relaxed">
                "The difference? Most agencies post daily and pray. 2XG posts strategically and prints money."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-deep-blue" />
                <div>
                  <div className="font-montserrat font-bold text-off-white">
                    Anonymous Founder
                  </div>
                  <div className="text-sm text-off-white/60 font-inter">
                    Direct Competitor (They Asked Not to Be Named)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA with Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-graphite to-graphite-dark border-2 border-neon-green/30 rounded-3xl p-12">
            <h3 className="text-3xl sm:text-4xl font-montserrat font-black text-off-white mb-4">
              Ready to Become the Next Success Story?
            </h3>
            <p className="text-lg text-off-white/70 font-inter mb-8 max-w-2xl mx-auto">
              We only take on 2 new clients per month. January slots filling fast.
            </p>

            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-neon-green/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <Button href="/contact" variant="primary" size="large">
                Let's Talk Growth
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
