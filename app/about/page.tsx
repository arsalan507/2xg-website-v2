'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const team = [
    { name: 'Priya Sharma', role: 'Content Lead', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', linkedin: '#' },
    { name: 'Rahul Verma', role: 'Video Director', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul', linkedin: '#' },
    { name: 'Ananya Singh', role: 'Growth Specialist', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya', linkedin: '#' },
    { name: 'Arjun Patel', role: 'Creative Designer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun', linkedin: '#' },
    { name: 'Kavya Reddy', role: 'Social Media Manager', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya', linkedin: '#' },
    { name: 'Vikram Malhotra', role: 'Performance Marketer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram', linkedin: '#' },
    { name: 'Sneha Gupta', role: 'Content Strategist', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha', linkedin: '#' },
    { name: 'Rohan Kumar', role: 'Data Analyst', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan', linkedin: '#' },
  ];

  const values = [
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Every decision backed by metrics. We measure what matters and optimize ruthlessly.',
    },
    {
      icon: '🎨',
      title: 'Creative Excellence',
      description: 'Psychology-driven storytelling that turns objections into education and views into customers.',
    },
    {
      icon: '🎯',
      title: 'Results Obsessed',
      description: 'We don\'t just create content. We build systems that deliver predictable revenue growth.',
    },
    {
      icon: '🤝',
      title: 'Partnership First',
      description: 'Your success is our success. We work as an extension of your team, not just a vendor.',
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
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#8CE63A]/10 to-transparent rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, 30, 0],
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
                About Us
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-black mb-6 leading-tight text-off-white"
              >
                The Team Behind <span className="gradient-text">2XG</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-off-white/90 font-inter max-w-4xl mx-auto mb-10 leading-relaxed"
              >
                Content Strategists. Growth Hackers. <span className="text-neon-green font-semibold">Creators.</span>
                <br />
                Building the future of content-driven growth in India.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={storyRef} className="relative py-20 sm:py-32 bg-graphite overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(45deg, #0052FF 1px, transparent 1px), linear-gradient(-45deg, #0052FF 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Company Journey */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-montserrat font-black text-off-white mb-6">
                  Our <span className="text-neon-green">Story</span>
                </h2>
                <div className="space-y-6 text-off-white/80 font-inter text-lg leading-relaxed">
                  <p>
                    In 2023, we started 2XG with a simple belief: <span className="text-neon-green font-semibold">content is the most powerful growth lever for modern brands</span>.
                  </p>
                  <p>
                    We weren't interested in building another generic marketing agency. We wanted to create systems—repeatable, scalable frameworks that turn organic reach into predictable revenue.
                  </p>
                  <p>
                    Starting with Bharath Cycle Hub, we proved the model: <span className="text-neon-green font-semibold">25M+ monthly views</span>, <span className="text-neon-green font-semibold">2M+ followers</span>, and India's largest organic bicycle audience—all built from scratch.
                  </p>
                  <p>
                    Today, we're the go-to content growth partner for mobility and retail brands that want to dominate their categories.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="relative bg-gradient-to-br from-graphite-dark to-graphite rounded-2xl p-8 border-2 border-deep-blue/30 hover:border-neon-green/50 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-green/10 to-transparent rounded-bl-full" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-4">🎯 Our Mission</h3>
                    <p className="text-off-white/80 font-inter leading-relaxed">
                      To build content systems that double growth for India's most ambitious brands. We turn objections into education, attention into leads, and views into customers.
                    </p>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-graphite-dark to-graphite rounded-2xl p-8 border-2 border-deep-blue/30 hover:border-neon-green/50 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-deep-blue/10 to-transparent rounded-tr-full" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-4">🚀 Our Vision</h3>
                    <p className="text-off-white/80 font-inter leading-relaxed">
                      To become India's most trusted content-first growth agency, known for turning zero into millions and building category-defining brands.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="relative py-16 bg-graphite-dark border-y border-deep-blue/20">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(#0052FF 1px, transparent 1px), linear-gradient(90deg, #0052FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '25M+', label: 'Monthly Views' },
                { value: '2M+', label: 'Followers Built' },
                { value: '100M+', label: 'Total Views' },
                { value: '10+', label: 'Brands Scaled' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-impact text-neon-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-off-white/80 font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team Section */}
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
                Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
                Meet the talented people building content systems that matter.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative bg-graphite-dark rounded-2xl p-6 border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500 text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10">
                      <div className="mb-4 mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-neon-green/20 group-hover:border-neon-green/60 transition-all duration-300 group-hover:scale-110">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg font-montserrat font-bold text-off-white mb-1 group-hover:text-neon-green transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-deep-blue font-inter font-semibold text-sm mb-3">{member.role}</p>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 text-neon-green/70 hover:text-neon-green text-sm font-inter transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section ref={valuesRef} className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
          <div className="absolute top-20 left-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
                Our <span className="text-neon-green">Values</span>
              </h2>
              <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-graphite via-graphite to-graphite-dark rounded-2xl p-8 border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-deep-blue to-neon-green rounded-2xl" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-4 group-hover:text-neon-green transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-off-white/80 font-inter leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mt-16"
            >
              <Button href="/careers" variant="primary" size="large">
                Join Our Team
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
