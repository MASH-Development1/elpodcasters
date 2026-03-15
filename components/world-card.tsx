'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from '@/lib/motion-variants';

interface WorldCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

export function WorldCard({ id, title, description, icon, color, delay = 0 }: WorldCardProps) {
  // Map standard colors to brand colors if they don't match, or just use the passed color
  // However we can pass brand hexes directly or use CSS classes. Since color is passed as string:
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay }}
      className="h-full"
    >
      <Link href={`/world/${id}`}>
        <motion.div
          className="relative p-8 rounded-none border border-border bg-card overflow-hidden group h-full flex flex-col justify-between cursor-pointer"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
        >
          {/* Slide-up colored background reveal */}
          <motion.div
            className="absolute inset-0 z-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
            style={{ backgroundColor: color + '20' }} // 20% opacity of the color
          />

          <div className="relative z-10 flex flex-col h-full">
            <div>
              <motion.div
                className="w-16 h-16 rounded-none mb-6 flex items-center justify-center transform group-hover:-rotate-12 transition-transform shadow-lg"
                style={{ backgroundColor: color }}
              >
                <div className="text-3xl text-background">{icon}</div>
              </motion.div>

              <h3 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wider group-hover:text-white transition-colors duration-300" style={{ textDecorationColor: color }}>
                {title}
              </h3>

              <p className="text-foreground/80 font-cairo text-lg leading-relaxed mb-8">
                {description}
              </p>
            </div>

            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm" style={{ color: color }}>
                Explore World
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
