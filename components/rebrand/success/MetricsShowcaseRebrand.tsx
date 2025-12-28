'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function MetricsShowcaseRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  const topReels = [
    {
      title: 'Pushpa Style Cycle 🎬',
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
      title: 'Bullet Style 100km Mileage 🏍️',
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
      title: 'Special Followers Offer 🎁',
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
      title: 'New Cycle Purchase 🚴',
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
    { metric: 'Total Content Views 👀', value: '100M+', description: 'Cumulative views across all platforms' },
    { metric: 'Average Engagement Rate 📊', value: '8.5%', description: 'Industry average: 2-3%' },
    { metric: 'Follower Growth 📈', value: '+14,630', description: 'Single month increase (August)' },
    { metric: 'Non-Follower Reach 🎯', value: '57%', description: 'Views from new audiences' },
    { metric: 'Watch Time ⏰', value: '15+ Years', description: 'Cumulative watch time across reels' },
    { metric: 'Profile Activity 🔥', value: '93,016', description: 'Monthly profile visits' },
  ];

  const handleCTAClick = () => {
    router.push('/#contact-form');
  };

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-[#ECEDEB] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6BBF59 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-4">
            📊 The Numbers Don't Lie
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6 tracking-tight">
            Performance <span className="text-[#6BBF59]">Metrics 📈</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
            Real results from actual Instagram Reel insights showing consistent viral performance ✨
          </p>
        </motion.div>

        {/* Top Performing Reels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-8 text-center">
            🏆 Top Performing Reels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topReels.map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative bg-[#F6F7F5] rounded-2xl p-6 sm:p-8 border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-500 shadow-sm"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6BBF59]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Reel Title */}
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-xl font-bold text-[#1F1F1F] group-hover:text-[#6BBF59] transition-colors duration-300">
                      {reel.title}
                    </h4>
                    <span className="text-xs text-[#6BBF59] bg-[#6BBF59]/10 px-3 py-1 rounded-full font-medium">
                      {reel.date}
                    </span>
                  </div>

                  {/* Main Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-white rounded-lg p-3 border border-[#D6D8D4]">
                      <div className="text-2xl font-bold text-[#6BBF59]">{reel.views}</div>
                      <div className="text-xs text-[#5E5E5E]">Views</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 border border-[#D6D8D4]">
                      <div className="text-2xl font-bold text-[#6BBF59]">{reel.likes}</div>
                      <div className="text-xs text-[#5E5E5E]">Likes</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 border border-[#D6D8D4]">
                      <div className="text-2xl font-bold text-[#6BBF59]">{reel.shares}</div>
                      <div className="text-xs text-[#5E5E5E]">Shares</div>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#5E5E5E]">Watch Time:</span>
                      <span className="text-[#1F1F1F] font-semibold">{reel.watchTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5E5E5E]">Interactions:</span>
                      <span className="text-[#1F1F1F] font-semibold">{reel.interactions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5E5E5E]">Comments:</span>
                      <span className="text-[#1F1F1F] font-semibold">{reel.comments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5E5E5E]">Saves:</span>
                      <span className="text-[#1F1F1F] font-semibold">{reel.saves}</span>
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
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-8 text-center">
            📈 Key Milestones Achieved
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border-2 border-[#D6D8D4] hover:border-[#6BBF59] transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-[#6BBF59] mb-3">
                  {milestone.value}
                </div>
                <div className="text-lg font-bold text-[#1F1F1F] mb-2">
                  {milestone.metric}
                </div>
                <div className="text-sm text-[#5E5E5E]">
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
          <p className="text-[#5E5E5E] mb-6 text-lg">
            Ready to achieve similar results for your brand? 🚀
          </p>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            Let's Talk Growth 💬
          </button>
        </motion.div>
      </div>
    </section>
  );
}
