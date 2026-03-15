'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  onEnter?: () => void;
  onExit?: () => void;
}

export function useScrollTrigger({
  threshold = 0.1,
  onEnter,
  onExit,
}: UseScrollTriggerOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          onEnter?.();
        } else if (!entry.isIntersecting && isVisible) {
          setIsVisible(false);
          onExit?.();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible, threshold, onEnter, onExit]);

  return { ref, isVisible };
}
