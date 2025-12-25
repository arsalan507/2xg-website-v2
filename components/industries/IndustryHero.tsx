'use client';

import { motion } from 'framer-motion';

interface IndustryHeroProps {
  data: {
    headline: string;
    subheadline: string;
    accentColor: string;
    bgGradient: string;
    bgImage?: string;
  };
  name: string;
}

export default function IndustryHero({ data, name }: IndustryHeroProps) {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Background Image or Gradient */}
      {data.bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.bgImage})`,
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: data.bgGradient,
          }}
        />
      )}

      {/* Subtle overlay for text readability (only if image exists) */}
      {data.bgImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Industry Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span
              className="px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm"
              style={{
                backgroundColor: data.bgImage ? 'rgba(255, 255, 255, 0.2)' : `${data.accentColor}15`,
                color: data.bgImage ? 'white' : data.accentColor,
                border: data.bgImage ? '2px solid rgba(255, 255, 255, 0.3)' : `2px solid ${data.accentColor}40`,
              }}
            >
              {name}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
          >
            {data.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            {data.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 text-[#1F1F1F]"
              style={{
                backgroundColor: data.accentColor,
              }}
            >
              Get My Growth Plan ✨
            </a>
            <a
              href="/success-stories"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-lg rounded-xl transition-all duration-200"
            >
              See Real Results 📊
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
