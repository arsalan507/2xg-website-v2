'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function PortfolioGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'viral' | 'engagement'>('all');

  // Portfolio items with actual BCH filenames
  const portfolioItems = [
    { src: '/portfolio/bch/IMG_0914.PNG', category: 'viral', title: 'Pushpa Style Viral Reel', views: '5.7M' },
    { src: '/portfolio/bch/IMG_0915.PNG', category: 'viral', title: 'Bullet Style Cycle', views: '5.3M' },
    { src: '/portfolio/bch/IMG_0920.jpg', category: 'viral', title: 'Followers Special Offer', views: '3.5M' },
    { src: '/portfolio/bch/IMG_0924.jpg', category: 'engagement', title: 'New Cycle Purchase', views: '2.0M' },
    { src: '/portfolio/bch/IMG_0925.jpg', category: 'viral', title: 'Product Showcase', views: '1.8M' },
    { src: '/portfolio/bch/IMG_0926.jpg', category: 'engagement', title: 'Customer Story', views: '1.5M' },
    { src: '/portfolio/bch/IMG_0927.jpg', category: 'viral', title: 'Cycling Tips', views: '1.2M' },
    { src: '/portfolio/bch/IMG_0928.jpg', category: 'engagement', title: 'Community Engagement', views: '900K' },
    { src: '/portfolio/bch/IMG_0929.jpg', category: 'viral', title: 'Trending Format', views: '850K' },
  ];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase">
            Content Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-6">
            Success in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg sm:text-xl text-off-white/70 font-inter max-w-3xl mx-auto">
            Real Instagram Reel insights showing proven viral performance
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'all', label: 'All Content' },
            { id: 'viral', label: 'Viral Hits (1M+ Views)' },
            { id: 'engagement', label: 'High Engagement' },
          ].map((filterOption) => (
            <motion.button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id as any)}
              className={`px-6 py-3 rounded-lg font-montserrat font-bold text-sm transition-all duration-300 ${
                filter === filterOption.id
                  ? 'bg-gradient-to-r from-neon-green to-neon-green/80 text-graphite-dark shadow-lg shadow-neon-green/40'
                  : 'bg-graphite border-2 border-deep-blue/40 text-off-white hover:border-neon-green/60'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterOption.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-graphite rounded-2xl overflow-hidden cursor-pointer border-2 border-deep-blue/20 hover:border-neon-green/50 transition-all duration-500"
                onClick={() => setSelectedImage(item.src)}
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-montserrat font-bold text-off-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-impact text-neon-green">
                        {item.views}
                      </span>
                      <span className="text-sm text-off-white/80 font-inter">
                        Views
                      </span>
                    </div>
                  </div>

                  {/* View Count Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-impact text-neon-green">
                      {item.views}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-off-white/60 font-inter text-sm mb-4">
            This represents a small sample of 100+ viral reels created for BCH
          </p>
          <motion.a
            href="/#contact"
            className="inline-block bg-graphite border-2 border-neon-green text-neon-green px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-neon-green hover:text-graphite-dark hover:shadow-xl hover:shadow-neon-green/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Full Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Portfolio item"
                width={800}
                height={1200}
                className="rounded-2xl object-contain max-h-[90vh]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-neon-green transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
