'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CareersRebrand() {
  const heroRef = useRef(null);
  const whyJoinRef = useRef(null);
  const positionsRef = useRef(null);
  const perksRef = useRef(null);

  const teamCultureRef = useRef(null);
  const officeLifeRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isWhyJoinInView = useInView(whyJoinRef, { once: true, margin: '-100px' });
  const isPositionsInView = useInView(positionsRef, { once: true, margin: '-100px' });
  const isTeamCultureInView = useInView(teamCultureRef, { once: true, margin: '-100px' });
  const isOfficeLifeInView = useInView(officeLifeRef, { once: true, margin: '-100px' });
  const isPerksInView = useInView(perksRef, { once: true, margin: '-100px' });

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
    <main className="min-h-screen bg-[#F6F7F5]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F6F7F5] via-[#ECEDEB] to-[#F6F7F5] pt-32 pb-20"
      >
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#2F7D63]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#2F7D63]/10 text-[#2F7D63] rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
            >
              Careers at 2XG
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight text-[#1F1F1F]"
            >
              Join the <span className="text-[#2F7D63]">2XG Revolution</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-[#5E5E5E] max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Create content and growth systems that turn views into customers and revenue.
              Work with <span className="text-[#2F7D63] font-semibold">ambitious brands</span> across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#positions"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Open Positions →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join 2XG Section */}
      <section ref={whyJoinRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2F7D63]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyJoinInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Why Join <span className="text-[#2F7D63]">2XG</span>?
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
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
                className="group relative bg-[#F6F7F5] rounded-2xl p-8 border-2 border-[#D6D8D4] hover:border-[#2F7D63] transition-all duration-500 shadow-sm hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F7D63]/5 to-[#FF6A1A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#2F7D63] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-[#5E5E5E] leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" ref={positionsRef} className="relative py-20 sm:py-32 bg-[#ECEDEB] overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#2F7D63]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#8CE63A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPositionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#2F7D63]/10 text-[#2F7D63] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Current Openings
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Open <span className="text-[#2F7D63]">Positions</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
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
                className="group relative bg-white rounded-2xl p-8 border-2 border-[#D6D8D4] hover:border-[#2F7D63] transition-all duration-500 shadow-md hover:shadow-xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-[#2F7D63] to-[#8CE63A] rounded-2xl" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#2F7D63] transition-colors duration-300">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-[#2F7D63]/10 border border-[#2F7D63]/30 rounded-lg text-sm text-[#2F7D63] font-medium">
                        {position.type}
                      </span>
                      <span className="px-4 py-2 bg-[#8CE63A]/10 border border-[#8CE63A]/30 rounded-lg text-sm text-[#2F7D63] font-medium">
                        {position.location}
                      </span>
                      <span className="px-4 py-2 bg-[#ECEDEB] border border-[#D6D8D4] rounded-lg text-sm text-[#5E5E5E] font-medium">
                        📍 {position.office}
                      </span>
                    </div>
                    <p className="text-[#5E5E5E] leading-relaxed">{position.description}</p>
                  </div>

                  <div className="lg:ml-8">
                    <a
                      href="/careers/apply"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section with Images */}
      <section ref={teamCultureRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2F7D63]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamCultureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Our Team <span className="text-[#2F7D63]">Culture</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
              A glimpse into life at 2XG - collaboration, creativity, and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Image 1 - Team Collaboration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isTeamCultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop&q=80"
                  alt="Team collaboration at 2XG"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Collaborative Brainstorming</h3>
                  <p className="text-white/90">Building viral campaigns together</p>
                </div>
              </div>
            </motion.div>

            {/* Image 2 - Creative Workspace */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isTeamCultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop&q=80"
                  alt="Creative workspace at 2XG"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Workspace</h3>
                  <p className="text-white/90">Designed for creativity and productivity</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Single Wide Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamCultureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative aspect-[21/9]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=2000&h=900&fit=crop&q=80"
                alt="Team meeting at 2XG"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Strategy Sessions That Drive Results</h3>
                <p className="text-xl text-white/90">We plan campaigns that turn 25M+ views into real business outcomes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Life & Remote Work Section */}
      <section ref={officeLifeRef} className="relative py-20 sm:py-32 bg-[#ECEDEB] overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#2F7D63]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#8CE63A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOfficeLifeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Work Your <span className="text-[#2F7D63]">Way</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
              Whether you're in Bengaluru or working remotely, we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Image 1 - Remote Work */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOfficeLifeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=1000&fit=crop&q=80"
                  alt="Remote work flexibility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">🏠 Remote Flexibility</h3>
                  <p className="text-white/90 text-sm">Work from anywhere in India</p>
                </div>
              </div>
            </motion.div>

            {/* Image 2 - Team Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOfficeLifeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop&q=80"
                  alt="Team events and celebrations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">🎉 Team Offsites</h3>
                  <p className="text-white/90 text-sm">Quarterly celebrations & bonding</p>
                </div>
              </div>
            </motion.div>

            {/* Image 3 - Office Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isOfficeLifeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=800&h=1000&fit=crop&q=80"
                  alt="Modern office setup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">💻 Latest Tech</h3>
                  <p className="text-white/90 text-sm">Premium tools & equipment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section ref={perksRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2F7D63] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPerksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Perks & <span className="text-[#2F7D63]">Benefits</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
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
                className="flex items-center gap-4 bg-[#F6F7F5] rounded-xl p-6 border border-[#D6D8D4] hover:border-[#2F7D63] transition-all duration-300"
              >
                <span className="text-[#1F1F1F] text-lg">{perk}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPerksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/careers/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2F7D63] hover:bg-[#256B54] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Application →
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
