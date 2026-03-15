'use client';

import { motion } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';

export function PageTransition() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-background/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-center w-full h-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-center">
          <div className="inline-block">
            <motion.div
              className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
