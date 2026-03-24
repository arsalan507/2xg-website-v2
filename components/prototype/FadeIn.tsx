'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
}

const getInitial = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up': return { opacity: 0, y: distance } as const;
    case 'down': return { opacity: 0, y: -distance } as const;
    case 'left': return { opacity: 0, x: distance } as const;
    case 'right': return { opacity: 0, x: -distance } as const;
    case 'none': return { opacity: 0 } as const;
  }
};

export default function FadeIn({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  distance = 40,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial(direction, distance)}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
