'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052FF] via-[#8CE63A] to-[#FF6A1A] z-[100] origin-left shadow-lg shadow-[#8CE63A]/50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
