import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest('a, button, input, textarea, [role="button"], .artfolio-card');
        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Background Radial Torch Ambient Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.07), transparent 75%)`,
        }}
      />

      {/* Center Precise Dot Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] hidden md:block"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Trailing Outer Spring Ring */}
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-emerald-400/60 hidden md:block ${
          isHovered ? 'bg-emerald-400/10 border-emerald-400' : 'bg-transparent'
        }`}
        animate={{
          x: position.x - (isHovered ? 24 : 16),
          y: position.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.2 }}
      />
    </>
  );
};
