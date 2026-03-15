'use client';

import { useLoading } from '@/contexts/loading-context';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const { isLoading, stopLoading } = useLoading();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // Sequence the storytelling steps
    const timers = [
      setTimeout(() => setStep(1), 1200), // Knowledge
      setTimeout(() => setStep(2), 2400), // Passion
      setTimeout(() => setStep(3), 4000), // Logo Reveal
      setTimeout(() => stopLoading(), 6500), // End the loading sequence
    ];

    return () => timers.forEach(clearTimeout);
  }, [isLoading, stopLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden font-sans"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center justify-center relative w-full max-w-2xl px-6">

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase">
                  Knowledge.
                </h2>
                {/* <p className="text-xl text-primary mt-4 font-cairo">Represents Knowledge.</p> */}
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase">
                  Passion.
                </h2>
                {/* <p className="text-xl text-accent mt-4 font-cairo">Represents Passion.</p> */}
              </motion.div>
            )}

            {/* Step 2 (El-Podcasters text) was removed */}

            {step >= 2 && (
              <motion.div
                key="step2Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/logo.png"
                    alt="El-Podcasters Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                  >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-wider text-center">
                      El-Podcasters
                    </h1>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="w-full h-1 bg-muted mt-8 overflow-hidden rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Abstract Grid Blocks in Background */}
          <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden flex items-center justify-center opacity-20">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-primary"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: step >= 0 ? 1 : 0, rotate: 0 }}
              transition={{ type: "spring" }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-48 h-48 bg-secondary"
              initial={{ scale: 0, rotate: 10 }}
              animate={{ scale: step >= 1 ? 1 : 0, rotate: 0 }}
              transition={{ type: "spring" }}
            />
            <motion.div
              className="absolute top-40 right-40 w-24 h-24 bg-accent"
              initial={{ scale: 0 }}
              animate={{ scale: step >= 2 ? 1 : 0 }}
              transition={{ type: "spring" }}
            />
          </div>

        </div>
      </motion.div>
    </AnimatePresence >
  );
}
