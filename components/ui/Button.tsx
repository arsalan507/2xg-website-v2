'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-montserrat font-black uppercase tracking-wider transition-all duration-300 text-center inline-block';

  // Size variants
  const sizeStyles = {
    small: 'px-6 py-3 text-sm',
    medium: 'px-8 py-4 text-base sm:text-lg',
    large: 'px-10 py-5 text-lg sm:text-xl md:text-2xl',
  };

  // Variant styles - using 2XG brand colors with direct hex values
  const variantStyles = {
    primary: 'bg-[#6BBF59] text-[#111111] hover:brightness-110 shadow-2xl shadow-[#6BBF59]/60 hover:shadow-[#6BBF59]/80 border-4 border-[#6BBF59]',
    secondary: 'bg-[#FF6A1A] text-white hover:brightness-110 shadow-2xl shadow-[#FF6A1A]/60 hover:shadow-[#FF6A1A]/80 border-4 border-[#FF6A1A]',
    outline: 'bg-[#111111] text-[#6BBF59] border-4 border-[#6BBF59] hover:bg-[#6BBF59] hover:text-[#111111] shadow-xl shadow-[#6BBF59]/40 hover:shadow-[#6BBF59]/70',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className} rounded-xl`;

  const content = (
    <motion.span
      className={combinedStyles}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span className="drop-shadow-lg">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
