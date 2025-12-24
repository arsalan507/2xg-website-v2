'use client';

import { motion, useMotionValue, useSpring, useTransform, PanInfo } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StatCard {
  value: string;
  label: string;
  sublabel?: string;
  gradient: string;
  index: number;
}

const StatCardComponent = ({ stat, dragX, index }: { stat: StatCard; dragX: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect - cards at different depths move at different speeds
  const parallaxOffset = useTransform(
    dragX,
    [-1000, 0, 1000],
    [100 * (1 + index * 0.1), 0, -100 * (1 + index * 0.1)]
  );

  return (
    <motion.div
      style={{ x: parallaxOffset }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex-shrink-0"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative group"
      >
        {/* Card glow on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute -inset-[1px] ${stat.gradient} rounded-[80px] blur-xl opacity-0`}
        />

        {/* Main card */}
        <div className="relative bg-gradient-to-br from-[#1a1f2e] via-[#141820] to-graphite-dark border-2 border-off-white/20 rounded-[80px] px-12 py-16 min-w-[320px] sm:min-w-[380px] backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Background noise texture */}
          <div
            className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Animated gradient orb */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.1, 0.2, 0.1] : 0.05,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut',
            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 ${stat.gradient} rounded-full blur-3xl`}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              animate={{
                textShadow: isHovered
                  ? '0 0 20px rgba(245, 245, 247, 0.3)'
                  : '0 0 0px rgba(245, 245, 247, 0)',
              }}
              transition={{ duration: 0.3 }}
              className="text-6xl sm:text-7xl font-montserrat font-black text-off-white mb-3 tracking-tight"
            >
              {stat.value}
            </motion.div>
            <div className="text-base sm:text-lg text-off-white/70 font-inter font-medium mb-1">
              {stat.label}
            </div>
            {stat.sublabel && (
              <div className="text-sm text-off-white/40 font-inter">
                {stat.sublabel}
              </div>
            )}
          </div>

          {/* Hover border enhancement */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border-2 border-off-white/20 rounded-[80px] pointer-events-none"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StatsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  // Motion values for drag interaction
  const dragX = useMotionValue(0);

  // Spring physics for smooth, inertial movement
  const springConfig = {
    damping: 50,
    stiffness: 400,
    mass: 3,
  };
  const x = useSpring(dragX, springConfig);

  // Cursor follower position with lag
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const smoothCursorY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  // Headline opacity based on drag progress
  const headlineOpacity = useTransform(
    dragX,
    [-500, 0, 500],
    [0.4, 1, 0.4]
  );

  const stats: StatCard[] = [
    {
      value: '25M+',
      label: 'Monthly Views',
      sublabel: 'Organic reach generated',
      gradient: 'bg-gradient-to-br from-deep-blue/20 to-neon-green/20',
      index: 0,
    },
    {
      value: '2M+',
      label: 'Followers',
      sublabel: 'Built from zero',
      gradient: 'bg-gradient-to-br from-neon-green/20 to-deep-blue/20',
      index: 1,
    },
    {
      value: '100M+',
      label: 'Total Views',
      sublabel: 'EM Doodle Launch',
      gradient: 'bg-gradient-to-br from-ember-orange/20 to-deep-blue/20',
      index: 2,
    },
    {
      value: '120',
      label: 'Days',
      sublabel: 'To 65K Community',
      gradient: 'bg-gradient-to-br from-deep-blue/20 to-ember-orange/20',
      index: 3,
    },
    {
      value: '500%',
      label: 'Growth YoY',
      sublabel: 'BCH Performance',
      gradient: 'bg-gradient-to-br from-neon-green/20 to-ember-orange/20',
      index: 4,
    },
  ];

  // Track cursor position
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

  // Handle drag constraints
  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);

    // Apply momentum/velocity-based animation
    const velocity = info.velocity.x;
    const newX = dragX.get() + velocity * 0.1;

    // Constrain to reasonable bounds
    const maxDrag = 400;
    const minDrag = -(stats.length - 2) * 300;
    const constrainedX = Math.max(minDrag, Math.min(maxDrag, newX));

    dragX.set(constrainedX);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-graphite-dark overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Custom cursor indicator - Red circle with hand icon */}
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
        className="fixed top-0 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 mix-blend-difference"
      >
        <div className="relative w-full h-full">
          {/* Red circle background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full" />

          {/* Pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 border-2 border-red-400 rounded-full"
          />

          {/* Hand/Grab icon */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
            {isDragging ? '✊' : '✋'}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          style={{ opacity: headlineOpacity }}
          className="text-center mb-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-neon-green font-montserrat font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase"
          >
            Results That Speak
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-off-white mb-4 leading-tight"
          >
            Proven track record across
            <br />
            <span className="gradient-text">mobility and retail</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-off-white/50 font-inter max-w-2xl mx-auto"
          >
            Drag to explore our results →
          </motion.p>
        </motion.div>
      </div>

      {/* Draggable Stats Container */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -(stats.length - 2) * 320, right: 300 }}
        dragElastic={0.1}
        dragTransition={{
          power: 0.3,
          timeConstant: 200,
          modifyTarget: (target) => {
            // Snap to nearest card (optional)
            return target;
          },
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x: dragX }}
        className="flex gap-8 px-4 sm:px-6 lg:px-8 select-none"
      >
        {stats.map((stat, index) => (
          <StatCardComponent
            key={index}
            stat={stat}
            dragX={dragX}
            index={index}
          />
        ))}
      </motion.div>

      {/* Scroll hint indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="relative z-10 text-center mt-12"
      >
        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-flex items-center gap-2 text-off-white/30 text-sm font-inter"
        >
          <span>Drag to explore</span>
          <span>→</span>
        </motion.div>
      </motion.div>

      {/* Vignette edges for infinite feel */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-graphite-dark to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-graphite-dark to-transparent pointer-events-none z-20" />
    </section>
  );
}
