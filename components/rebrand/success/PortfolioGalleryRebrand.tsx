'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function PortfolioGalleryRebrand() {
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
    <section ref={ref} className="relative py-20 sm:py-32 bg-[#ECEDEB] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2F7D63]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A1A]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#2F7D63]/10 text-[#2F7D63] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Content Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
            Success in <span className="text-[#2F7D63]">Action</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#5E5E5E] max-w-3xl mx-auto leading-relaxed">
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
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id as any)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                filter === filterOption.id
                  ? 'bg-[#2F7D63] text-white shadow-lg'
                  : 'bg-white border-2 border-[#D6D8D4] text-[#1F1F1F] hover:border-[#2F7D63]'
              }`}
            >
              {filterOption.label}
            </button>
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
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border-2 border-[#D6D8D4] hover:border-[#2F7D63] transition-all duration-500 shadow-md hover:shadow-xl"
                onClick={() => setSelectedImage(item.src)}
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
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-[#8CE63A]">
                        {item.views}
                      </span>
                      <span className="text-sm text-white/80">
                        Views
                      </span>
                    </div>
                  </div>

                  {/* View Count Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-sm font-bold text-[#8CE63A]">
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
          <p className="text-[#5E5E5E] text-sm mb-6">
            This represents a small sample of 100+ viral reels created for BCH
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#2F7D63] hover:bg-[#256B54] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Let's Create Your Success Story →
          </a>
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
                className="absolute -top-12 right-0 text-white text-4xl hover:text-[#8CE63A] transition-colors"
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
