'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MetricsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const topReels = [
    {
      title: 'Pushpa Style Cycle',
      views: '5.7M',
      likes: '218K',
      comments: '296',
      shares: '30K',
      saves: '8.3K',
      watchTime: '3y 13d 7h 29m',
      interactions: '258,247',
      date: 'September',
    },
    {
      title: 'Bullet Style 100km Mileage',
      views: '5.3M',
      likes: '158K',
      comments: '463',
      shares: '67K',
      saves: '13K',
      watchTime: '1y 147d 9h 7m',
      interactions: '200,270',
      date: 'February',
    },
    {
      title: 'Special Followers Offer',
      views: '3.5M',
      likes: '140K',
      comments: '3.5K',
      shares: '16K',
      saves: '5.7K',
      watchTime: '1y 12d 10h 44m',
      interactions: '166,230',
      date: 'April',
    },
    {
      title: 'New Cycle Purchase',
      views: '2.0M',
      likes: '54K',
      comments: '177',
      shares: '6K',
      saves: '2.2K',
      watchTime: '1y 217d 0h 32m',
      interactions: '62,816',
      date: 'June',
    },
  ];

  const milestones = [
    { metric: 'Total Content Views', value: '100M+', description: 'Cumulative views across all platforms' },
    { metric: 'Average Engagement Rate', value: '8.5%', description: 'Industry average: 2-3%' },
    { metric: 'Follower Growth', value: '+14,630', description: 'Single month increase (August)' },
    { metric: 'Non-Follower Reach', value: '57%', description: 'Views from new audiences' },
    { metric: 'Watch Time', value: '15+ Years', description: 'Cumulative watch time across reels' },
    { metric: 'Profile Activity', value: '93,016', description: 'Monthly profile visits' },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-graphite overflow-hidden">
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase">
            The Numbers Don't Lie
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
            Performance <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
            Real results from actual Instagram Reel insights showing consistent viral performance
          </p>
        </motion.div>

        {/* Top Performing Reels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-8 text-center">
            🏆 Top Performing Reels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topReels.map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-graphite-dark via-graphite to-graphite-dark rounded-2xl p-6 sm:p-8 border-2 border-deep-blue/30 hover:border-neon-green/50 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-neon-green/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Reel Title */}
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-xl font-montserrat font-bold text-off-white group-hover:text-neon-green transition-colors duration-300">
                      {reel.title}
                    </h4>
                    <span className="text-xs text-neon-green font-inter bg-neon-green/10 px-3 py-1 rounded-full">
                      {reel.date}
                    </span>
                  </div>

                  {/* Main Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-impact text-neon-green">{reel.views}</div>
                      <div className="text-xs text-off-white/60 font-inter">Views</div>
                    </div>
                    <div className="text-center bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-impact text-ember-orange">{reel.likes}</div>
                      <div className="text-xs text-off-white/60 font-inter">Likes</div>
                    </div>
                    <div className="text-center bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-impact text-deep-blue">{reel.shares}</div>
                      <div className="text-xs text-off-white/60 font-inter">Shares</div>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm font-inter">
                    <div className="flex justify-between">
                      <span className="text-off-white/60">Watch Time:</span>
                      <span className="text-off-white font-semibold">{reel.watchTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-off-white/60">Interactions:</span>
                      <span className="text-off-white font-semibold">{reel.interactions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-off-white/60">Comments:</span>
                      <span className="text-off-white font-semibold">{reel.comments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-off-white/60">Saves:</span>
                      <span className="text-off-white font-semibold">{reel.saves}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Milestones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-off-white mb-8 text-center">
            📈 Key Milestones Achieved
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-graphite-dark rounded-xl p-6 border-2 border-deep-blue/20 hover:border-neon-green/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-impact text-neon-green mb-3">
                  {milestone.value}
                </div>
                <div className="text-lg font-montserrat font-bold text-off-white mb-2">
                  {milestone.metric}
                </div>
                <div className="text-sm text-off-white/60 font-inter">
                  {milestone.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-off-white/80 font-inter mb-6 text-lg">
            Ready to achieve similar results for your brand?
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-gradient-to-r from-ember-orange to-ember-orange/80 text-white px-8 py-4 rounded-xl font-montserrat font-bold text-lg shadow-xl shadow-ember-orange/40 hover:shadow-2xl hover:shadow-ember-orange/60 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk Growth
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
