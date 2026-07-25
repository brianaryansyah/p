import React, { useRef, ReactNode, MouseEvent } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    gsap.to(ref.current, {
      x: middleX * 0.28,
      y: middleY * 0.28,
      scale: 1.03,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const reset = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      <div onClick={onClick} className={className}>
        {children}
      </div>
    </div>
  );
};

