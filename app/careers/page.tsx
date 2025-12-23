'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function CareersPage() {
  const heroRef = useRef(null);
  const whyJoinRef = useRef(null);
  const positionsRef = useRef(null);
  const teamRef = useRef(null);
  const perksRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isWhyJoinInView = useInView(whyJoinRef, { once: true });
  const isPositionsInView = useInView(positionsRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true });
  const isPerksInView = useInView(perksRef, { once: true });

  const positions = [
    {
      title: 'Content Strategist',
      type: 'Full-time',
      location: 'Remote',
      office: 'Bengaluru',
      description: 'Build content systems that turn objections into education and views into customers.',
    },
    {
      title: 'Video Editor',
      type: 'Full-time',
      location: 'Remote',
      office: 'Bengaluru',
      description: 'Create cinematic Reels and Shorts optimized for virality and engagement.',
    },
    {
      title: 'Performance Marketing Manager',
      type: 'Full-time',
      location: 'Remote',
      office: 'Bengaluru',
      description: 'Scale Meta & Google Ads campaigns that convert content into qualified leads.',
    },
    {
      title: 'Social Media Manager',
      type: 'Full-time',
      location: 'Remote',
      office: 'Bengaluru',
      description: 'Manage multi-platform content distribution and community engagement.',
    },
  ];

  const team = [
    { name: 'Priya Sharma', role: 'Content Lead', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
    { name: 'Rahul Verma', role: 'Video Director', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul' },
    { name: 'Ananya Singh', role: 'Growth Specialist', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya' },
    { name: 'Arjun Patel', role: 'Creative Designer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun' },
  ];

  const whyJoinReasons = [
    {
      icon: '🚀',
      title: 'Real Impact',
      description: 'Work on campaigns with 25M+ monthly views. Your work will be seen by millions.',
    },
    {
      icon: '📈',
      title: 'Rapid Growth',
      description: 'Learn from proven systems that have built 2M+ follower audiences from scratch.',
    },
    {
      icon: '🌍',
      title: 'Remote First',
      description: 'Work from anywhere. We care about results, not where you sit.',
    },
    {
      icon: '🎯',
      title: 'Ownership',
      description: 'Own entire verticals. We trust you to make decisions and drive outcomes.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-graphite-dark">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-graphite-dark via-graphite to-graphite-dark pt-20"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #0052FF 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#8CE63A]/10 to-transparent rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
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
              backgroundImage: `
                linear-gradient(#8CE63A 1px, transparent 1px),
                linear-gradient(90deg, #8CE63A 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase"
              >
                Careers at 2XG
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-black mb-6 leading-tight text-off-white"
              >
                Join the <span className="gradient-text">2XG Revolution</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-off-white/90 font-inter max-w-4xl mx-auto mb-10 leading-relaxed"
              >
                Build content systems that turn millions of views into predictable revenue.
                Work with India's leading{' '}
                <span className="text-neon-green font-semibold">mobility & retail</span> brands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <Button href="#positions" variant="primary" size="large">
                  Explore Open Positions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Join 2XG Section */}
        <section ref={whyJoinRef} className="relative py-20 sm:py-32 bg-graphite overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(45deg, #0052FF 1px, transparent 1px), linear-gradient(-45deg, #0052FF 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isWhyJoinInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
                Why Join <span className="text-neon-green">2XG</span>?
              </h2>
              <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
                Work with a team that's building the future of content-driven growth in India.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyJoinReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isWhyJoinInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-graphite-dark rounded-2xl p-8 border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{reason.icon}</div>
                    <h3 className="text-2xl font-montserrat font-bold text-off-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-off-white/70 font-inter leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" ref={positionsRef} className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
          <div className="absolute top-20 left-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPositionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase">
                Current Openings
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
                Open <span className="gradient-text">Positions</span>
              </h2>
              <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
                Join our team and work on campaigns that reach millions.
              </p>
            </motion.div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isPositionsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-graphite via-graphite to-graphite-dark rounded-2xl p-8 border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-deep-blue to-neon-green rounded-2xl" />

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-deep-blue/20 border border-deep-blue/40 rounded-lg text-sm font-inter text-off-white">
                          {position.type}
                        </span>
                        <span className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-lg text-sm font-inter text-neon-green">
                          {position.location}
                        </span>
                        <span className="px-4 py-2 bg-graphite-dark border border-off-white/20 rounded-lg text-sm font-inter text-off-white/70">
                          📍 {position.office}
                        </span>
                      </div>
                      <p className="text-off-white/80 font-inter leading-relaxed">{position.description}</p>
                    </div>

                    <div className="lg:ml-8">
                      <Button href="/#contact" variant="primary" size="medium">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section ref={teamRef} className="relative py-20 sm:py-32 bg-graphite overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #8CE63A 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
                The people behind India's fastest-growing content marketing agency.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTeamInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative bg-graphite-dark rounded-2xl p-6 border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500 text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10">
                      <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-neon-green/20 group-hover:border-neon-green/60 transition-all duration-300">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-montserrat font-bold text-off-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-deep-blue font-inter font-semibold">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits Section */}
        <section ref={perksRef} className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPerksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
                Perks & <span className="text-neon-green">Benefits</span>
              </h2>
              <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
                We take care of our team so they can focus on what matters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPerksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {[
                '💰 Competitive salary & performance bonuses',
                '🏠 Work from anywhere in India',
                '📚 ₹50,000 annual learning & development budget',
                '🏥 Health insurance for you and your family',
                '🎉 Team offsites & quarterly celebrations',
                '💻 Latest tech & software subscriptions',
                '🌴 Flexible time off policy',
                '🚀 Direct access to founders & leadership',
              ].map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isPerksInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  className="flex items-center gap-4 bg-graphite rounded-xl p-6 border border-deep-blue/20 hover:border-neon-green/50 transition-all duration-300"
                >
                  <span className="text-off-white/90 font-inter text-lg">{perk}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPerksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-16"
            >
              <Button href="/#contact" variant="primary" size="large">
                Start Your Application
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
