'use client';

import { motion, useMotionValue, useSpring, useTransform, PanInfo } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface SuccessSlide {
  image: string;
  badge: string;
  headline: string;
  hook: string;
  stats: string;
  insight: string;
  index: number;
}

const SlideCard = ({ slide, dragX, index }: { slide: SuccessSlide; dragX: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect based on drag
  const parallaxOffset = useTransform(
    dragX,
    [-1000, 0, 1000],
    [80 * (1 + index * 0.08), 0, -80 * (1 + index * 0.08)]
  );

  return (
    <motion.div
      style={{ x: parallaxOffset }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw]"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative group h-full"
      >
        {/* Outer glow on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-[2px] bg-[#6BBF59] rounded-3xl blur-2xl opacity-0"
        />

        {/* Main card container */}
        <div className="relative bg-white border-2 border-[#D6D8D4] hover:border-[#6BBF59] rounded-3xl overflow-hidden backdrop-blur-sm h-full transition-all duration-300 shadow-lg">
          {/* Content wrapper */}
          <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 bg-[#6BBF59]/10 border border-[#6BBF59]/30 rounded-full px-4 py-2 text-[#6BBF59] font-bold text-xs sm:text-sm uppercase tracking-wider">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                {slide.badge}
              </span>
            </motion.div>

            {/* Headline - Curiosity Gap */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3 leading-tight">
              {slide.headline}
            </h3>

            {/* Hook - Pattern Interrupt */}
            <p className="text-base sm:text-lg text-[#5E5E5E] mb-6 leading-relaxed">
              {slide.hook}
            </p>

            {/* Image container with hover effect */}
            <motion.div
              animate={{
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-md border border-[#D6D8D4]"
            >
              {/* Glow border on hover */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                className="absolute inset-0 border-2 border-[#6BBF59]/50 rounded-xl z-10 pointer-events-none"
              />

              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 65vw, 45vw"
              />
            </motion.div>

            {/* Stats - Social Proof */}
            <motion.div
              animate={{
                backgroundColor: isHovered ? 'rgba(47, 125, 99, 0.1)' : 'rgba(47, 125, 99, 0.05)',
              }}
              className="bg-[#6BBF59]/5 border border-[#6BBF59]/20 rounded-xl px-5 py-4 mb-4"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-3xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  📊
                </motion.span>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6BBF59]">
                    {slide.stats}
                  </div>
                  <div className="text-xs sm:text-sm text-[#5E5E5E]">
                    Proven Performance ✨
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Insight - Value Proposition */}
            <div className="mt-auto">
              <p className="text-sm sm:text-base text-[#5E5E5E] italic leading-relaxed border-l-2 border-[#6BBF59]/50 pl-4">
                "{slide.insight}"
              </p>
            </div>
          </div>

          {/* Shimmer effect on hover */}
          <motion.div
            animate={{
              x: isHovered ? ['0%', '200%'] : '0%',
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6BBF59]/10 to-transparent pointer-events-none"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function YouTubeSuccessSliderRebrand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const dragX = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 400, mass: 3 };
  const x = useSpring(dragX, springConfig);

  // Cursor follower
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const smoothCursorY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  // Headline opacity based on drag
  const headlineOpacity = useTransform(dragX, [-500, 0, 500], [0.5, 1, 0.5]);

  const slides: SuccessSlide[] = [
    {
      image: '/bch-success/analytics-94m.png',
      badge: 'Viral Breakthrough 🔥',
      headline: 'From Zero to 94M Views 🚀',
      hook: 'Most agencies chase vanity metrics. We built a system that turned 50K monthly views into 94.9M total views—and counting.',
      stats: '94.9M Views 👀',
      insight: 'The secret? We posted 3x per week, not daily. Quality over quantity creates compound growth.',
      index: 0,
    },
    {
      image: '/bch-success/video-999-bike.png',
      badge: 'Price Psychology 💰',
      headline: 'The ₹999 Video That Changed Everything 💥',
      hook: 'This single video broke the internet. Why? We understood one thing: price objections are information gaps in disguise.',
      stats: '2.6M+ Views 🎥',
      insight: 'We didn\'t sell a ₹999 bike. We sold the dream of accessible mobility. Emotion first, logic second.',
      index: 1,
    },
    {
      image: '/bch-success/wholesale-showroom.png',
      badge: 'Local to National 🌟',
      headline: 'Bangalore Showroom, India-Wide Influence 📍',
      hook: 'While competitors ran paid ads, we turned a physical showroom into content gold. Every product became a story.',
      stats: '112K Views 📊',
      insight: 'Wholesale isn\'t sexy—until you make it educational. We transformed product demos into buying guides.',
      index: 2,
    },
    {
      image: '/bch-success/dhoni-bicycle-unboxing.png',
      badge: 'Celebrity Leverage ⭐',
      headline: "Dhoni's Bicycle: Virality Through Association 🏏",
      hook: 'Celebrity products fail all the time. But when you unbox with authenticity and real expertise? Magic happens.',
      stats: '26.5K Views 🎯',
      insight: "We didn't rely on Dhoni's name. We leveraged trust and provided genuine value. Authority + Authenticity = Engagement.",
      index: 3,
    },
    {
      image: '/bch-success/emotarad-comparison.png',
      badge: 'Comparison Content 🔍',
      headline: 'EMotorad vs Hero Lectro: The Comparison That Converts 💡',
      hook: 'Comparison videos are everywhere. But 99% just list features. We answered the ONE question buyers actually ask: "Which one is right for ME?"',
      stats: '960K Views 🚴',
      insight: 'Feature lists bore. Decision frameworks convert. We positioned ourselves as advisors, not sellers.',
      index: 4,
    },
    {
      image: '/bch-success/analytics-7m.png',
      badge: 'Sustained Growth 📈',
      headline: '7.3M Views: The Power of Consistency ⚡',
      hook: 'After the initial viral hit, most channels die. We grew. The difference? A content system, not random posts.',
      stats: '7.4M Views 💪',
      insight: "3x per week, psychology-driven hooks, objection-first content. That's the formula.",
      index: 5,
    },
    {
      image: '/bch-success/analytics-23m.png',
      badge: 'Category Domination 🏆',
      headline: "23M Views: India's #1 Bicycle Content 🇮🇳",
      hook: 'Competitors post daily and get crickets. BCH posts strategically and dominates. This is what happens when psychology meets content.',
      stats: '23.4M Views 🎬',
      insight: 'We became the category leader not by spending more, but by understanding buyer psychology better than anyone.',
      index: 6,
    },
  ];

  // Track cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsInside(inside);

      if (inside) {
        setCursorPos({ x: e.clientX, y: e.clientY });
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);

    const velocity = info.velocity.x;
    const newX = dragX.get() + velocity * 0.1;

    const maxDrag = 200;
    const minDrag = -(slides.length - 1) * 600;
    const constrainedX = Math.max(minDrag, Math.min(maxDrag, newX));

    dragX.set(constrainedX);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-[#F6F7F5] overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6BBF59 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Custom green cursor with hand */}
      <motion.div
        style={{
          x: smoothCursorX,
          y: smoothCursorY,
        }}
        animate={{
          opacity: isInside ? 1 : 0,
          scale: isDragging ? 0.9 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.15 },
        }}
        className="fixed top-0 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#6BBF59] rounded-full shadow-lg" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 border-2 border-[#6BBF59] rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
            {isDragging ? '✊' : '✋'}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <motion.div
          style={{ opacity: headlineOpacity }}
          className="text-center mb-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#6BBF59] font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase"
          >
            🎬 YouTube Success Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-4 leading-tight tracking-tight"
          >
            The Content System That Built
            <br />
            <span className="text-[#6BBF59]">India's #1 Bicycle Channel 🚴</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5E5E5E] max-w-3xl mx-auto"
          >
            From 50K monthly views to 94M+ total views 📈 Here's how we turned content into category dominance →
          </motion.p>
        </motion.div>
      </div>

      {/* Draggable slides */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -(slides.length - 1) * 700, right: 200 }}
        dragElastic={0.1}
        dragTransition={{
          power: 0.3,
          timeConstant: 200,
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x: dragX }}
        className="flex gap-6 px-4 sm:px-6 lg:px-8 select-none pb-8"
      >
        {slides.map((slide, index) => (
          <SlideCard key={index} slide={slide} dragX={dragX} index={index} />
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="relative z-10 text-center mt-8"
      >
        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="inline-flex items-center gap-2 text-[#5E5E5E]/60 text-sm"
        >
          <span>Drag to explore the journey 👉</span>
          <span>→</span>
        </motion.div>
      </motion.div>

      {/* Vignette edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F6F7F5] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F6F7F5] to-transparent pointer-events-none z-20" />
    </section>
  );
}
