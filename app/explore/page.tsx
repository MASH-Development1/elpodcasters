'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';
import { WorldCard } from '@/components/world-card';
import { GeometricGrid } from '@/components/geometric-grid';
import { ScrollReveal, RevealItem } from '@/components/scroll-reveal';
import { staggerContainer, fadeInUp } from '@/lib/motion-variants';

const WORLDS = [
  { id: 'business', name: 'Business', description: 'Entrepreneurship, strategy, and innovation conversations', color: 'var(--primary)', icon: '💼' },
  { id: 'cinema', name: 'Cinema', description: 'Film, storytelling, and entertainment discussions', color: 'var(--accent)', icon: '🎬' },
  { id: 'health', name: 'Health', description: 'Wellness, medicine, and lifestyle wisdom', color: 'var(--secondary)', icon: '⚕️' },
  { id: 'history', name: 'History', description: 'Stories from the past that shape our future', color: 'var(--primary)', icon: '📚' },
  { id: 'media', name: 'Media', description: 'News, journalism, and digital storytelling', color: 'var(--accent)', icon: '📰' },
  { id: 'music', name: 'Music', description: 'Sound, art, and creative expression', color: 'var(--secondary)', icon: '🎵' },
  { id: 'social', name: 'Social', description: 'Community, culture, and human connection', color: 'var(--primary)', icon: '🗣️' },
  { id: 'sports', name: 'Sports', description: 'Athletics, competition, and performance', color: 'var(--accent)', icon: '⚽' },
];

export default function ExplorePage() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    stopLoading();
  }, [stopLoading]);

  return (
    <main className="w-full bg-background overflow-hidden relative">
      <GeometricGrid pattern="stair-left" className="w-full pt-40 pb-20 z-0">
        <ScrollReveal className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <RevealItem>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-foreground">
                <span className="text-primary">Explore</span> Worlds
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-cairo leading-relaxed bg-card/50 p-6 border border-border backdrop-blur-sm">
                Each world opens a door to knowledge. Choose your journey and dive deep into conversations that matter.
              </p>
            </RevealItem>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {WORLDS.map((world, index) => (
              <WorldCard
                key={world.id}
                id={world.id}
                title={world.name}
                description={world.description}
                icon={world.icon}
                color={world.color}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </ScrollReveal>
      </GeometricGrid>

      {/* Footer */}
      <footer className="w-full bg-card border-t border-border py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-foreground/60 text-sm font-cairo">
          <p>El-Podcasters © 2024 | Where Knowledge Lives</p>
        </div>
      </footer>
    </main>
  );
}
