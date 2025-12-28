'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function YouTubeVideoRebrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-[#F6F7F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#6BBF59] font-semibold text-sm uppercase tracking-wider mb-4">
            🎬 Why 2XG
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4 tracking-tight">
            This 1-Minute Video Will Change Your Business 🎥
          </h2>
          <p className="text-lg text-[#5E5E5E] max-w-2xl mx-auto leading-relaxed">
            See exactly how we turned zero into crores of views 📊—and how we'll do it for you ✨
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#D6D8D4] bg-[#ECEDEB]"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/WK8FPb47j5A?si=sirBpFqReu7Ydspg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>

        {/* CTA after video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#5E5E5E] text-lg mb-6 font-medium">
            Ready to replicate these results for your brand? 🔥
          </p>
          <button
            onClick={() => {
              const formSection = document.querySelector('#contact-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#6BBF59] hover:bg-[#5AA047] text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            Get Your Free Strategy Call 🚀
          </button>
        </motion.div>
      </div>
    </section>
  );
}
