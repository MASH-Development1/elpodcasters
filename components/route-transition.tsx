'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/loading-context';

export function RouteTransition() {
  const pathname = usePathname();
  const { startLoading } = useLoading();

  useEffect(() => {
    // Start the immersive storytelling loading sequence on every route change
    startLoading();
  }, [pathname, startLoading]);

  return null;
}
