'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutRebrand() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const impactRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const isImpactInView = useInView(impactRef, { once: true, margin: '-100px' });

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
    <main className="min-h-screen bg-[#F6F7F5]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F6F7F5] via-[#ECEDEB] to-[#F6F7F5] pt-32 pb-20"
      >
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#6BBF59]/5 rounded-full blur-3xl" />
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
              className="inline-block px-4 py-2 bg-[#6BBF59]/10 text-[#6BBF59] rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
            >
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight text-[#1F1F1F]"
            >
              The Team Behind <span className="text-[#6BBF59]">2XG</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-[#5E5E5E] max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Content Strategists. Growth Hackers. <span className="text-[#6BBF59] font-semibold">Creators.</span>
              <br />
              Building the future of content-driven growth in India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BBF59]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Company Journey */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6">
                Our <span className="text-[#6BBF59]">Story</span>
              </h2>
              <div className="space-y-6 text-[#5E5E5E] text-lg leading-relaxed">
                <p>
                  In 2023, we started 2XG with a simple belief: <span className="text-[#6BBF59] font-semibold">content is the most powerful growth lever for modern brands</span>.
                </p>
                <p>
                  We weren't interested in building another generic marketing agency. We wanted to create systems—repeatable, scalable frameworks that turn organic reach into predictable revenue.
                </p>
                <p>
                  Starting with Bharath Cycle Hub, we proved the model: <span className="text-[#6BBF59] font-semibold">25M+ monthly views</span>, <span className="text-[#6BBF59] font-semibold">2M+ followers</span>, and India's largest organic bicycle audience—all built from scratch.
                </p>
                <p>
                  Today, we're the go-to content growth partner for ambitious brands across India that want to dominate their categories.
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
              <div className="relative bg-[#F6F7F5] rounded-2xl p-8 border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6BBF59]/10 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#6BBF59] mb-4">🎯 Our Mission</h3>
                  <p className="text-[#5E5E5E] leading-relaxed">
                    To build content systems that double growth for India's most ambitious brands. We turn objections into education, attention into leads, and views into customers.
                  </p>
                </div>
              </div>

              <div className="relative bg-[#F6F7F5] rounded-2xl p-8 border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FF6A1A]/10 to-transparent rounded-tr-full" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#FF6A1A] mb-4">🚀 Our Vision</h3>
                  <p className="text-[#5E5E5E] leading-relaxed">
                    To become India's most trusted content-first growth agency, known for turning zero into millions and building category-defining brands.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-16 bg-[#ECEDEB] border-y border-[#D6D8D4]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#6BBF59] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-[#5E5E5E]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section with Images */}
      <section ref={impactRef} className="relative py-20 sm:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6BBF59]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Real <span className="text-[#6BBF59]">Impact</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
              From strategy sessions to viral campaigns - see how we work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isImpactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80"
                  alt="Team strategy session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Strategy First</h3>
                  <p className="text-white/90">Data-driven planning that drives results</p>
                </div>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isImpactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop&q=80"
                  alt="Content creation process"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Creative Execution</h3>
                  <p className="text-white/90">From concept to viral content</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="relative py-20 sm:py-32 bg-[#ECEDEB] overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#6BBF59]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#6BBF59]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Our <span className="text-[#6BBF59]">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto">
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
                className="group relative bg-white rounded-2xl p-8 border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-500 shadow-md hover:shadow-xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-[#6BBF59] to-[#6BBF59] rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-4 group-hover:text-[#6BBF59] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#5E5E5E] leading-relaxed text-lg">
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
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Join Our Team →
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
