'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ParallaxWrapper({ children, strength = 0.5, className = '', style = {} }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const yPosition = rect.top + scrolled;
        const windowHeight = window.innerHeight;
        
        // Calculate distance from viewport center
        const elementCenter = yPosition + rect.height / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const distance = viewportCenter - elementCenter;
        
        setOffset(distance * strength * 0.05);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.2s ease-out',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
