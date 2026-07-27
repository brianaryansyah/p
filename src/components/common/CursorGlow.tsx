import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const updateCursorPosition = useCallback((x: number, y: number) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(650px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.07), transparent 75%)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${x - 5}px, ${y - 5}px) scale(${isHovered ? 0 : 1})`;
    }
    if (ringRef.current) {
      const size = isHovered ? 48 : 32;
      const offset = isHovered ? 24 : 16;
      ringRef.current.style.width = `${size}px`;
      ringRef.current.style.height = `${size}px`;
      ringRef.current.style.transform = `translate(${x - offset}px, ${y - offset}px)`;
    }
  }, [isHovered]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateCursorPosition(e.clientX, e.clientY);
      });

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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, updateCursorPosition]);

  if (!visible) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] hidden md:block transition-transform duration-75"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-emerald-400/60 hidden md:block transition-all duration-150 ${
          isHovered ? 'bg-emerald-400/10 border-emerald-400' : 'bg-transparent'
        }`}
      />
    </>
  );
};
