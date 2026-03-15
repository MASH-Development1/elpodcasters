'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';
import { GeometricGrid } from '@/components/geometric-grid';
import { ScrollReveal, RevealItem } from '@/components/scroll-reveal';

const HOSTS = [
  {
    name: 'Bassel Alzaro',
    title: 'Co-Founder & Host',
    bio: 'With a passion for knowledge and storytelling, Bassel brings depth and nuance to every conversation. His curiosity spans from ancient history to cutting-edge innovation.',
    image: '👨‍💼',
    specialties: ['Business', 'History', 'Innovation'],
    color: 'var(--primary)',
    bgClass: 'bg-primary/10',
    hoverClass: 'hover:border-primary group-hover:text-primary',
  },
  {
    name: 'Karim Rihan',
    title: 'Co-Founder & Host',
    bio: 'Karim\'s unique perspective on culture, media, and human connection creates engaging dialogues. He believes in the power of conversations to transform understanding.',
    image: '🎤',
    specialties: ['Media', 'Culture', 'Community'],
    color: 'var(--secondary)',
    bgClass: 'bg-secondary/10',
    hoverClass: 'hover:border-secondary group-hover:text-secondary',
  },
];

export default function HostsPage() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    stopLoading();
  }, [stopLoading]);

  return (
    <main className="w-full bg-background overflow-hidden relative">
      <GeometricGrid pattern="checker" className="w-full pt-40 pb-20 z-0">
        <ScrollReveal className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <RevealItem>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-foreground">
                Meet <span className="text-accent">Our Hosts</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-cairo leading-relaxed bg-card/80 p-6 border border-border backdrop-blur-sm">
                The minds behind El-Podcasters, dedicated to creating meaningful conversations built on curiosity and passion.
              </p>
            </RevealItem>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {HOSTS.map((host, index) => (
              <RevealItem key={host.name}>
                <div className={`group rounded-none border-2 border-border bg-card transition-all duration-300 overflow-hidden relative h-full flex flex-col cursor-pointer ${host.hoverClass.split(' ')[0]}`}>
                  {/* Colored slide reveal */}
                  <motion.div
                    className="absolute inset-0 z-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                    style={{ backgroundColor: host.color, opacity: 0.05 }}
                  />

                  <div className={`p-12 text-center border-b-2 border-border relative z-10 bg-background`}>
                    <div className="text-8xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 inline-block shadow-2xl drop-shadow-xl">
                      {host.image}
                    </div>
                    <h2 className={`text-5xl font-bold uppercase tracking-wider mb-2 transition-colors duration-300`} style={{ color: host.color }}>
                      {host.name}
                    </h2>
                    <p className="text-foreground/70 font-cairo text-xl mb-4 font-bold uppercase tracking-widest">{host.title}</p>
                  </div>

                  <div className="p-10 relative z-10 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-foreground/80 text-lg mb-8 leading-relaxed font-cairo font-medium">
                        {host.bio}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest border-b border-border pb-2 inline-block">
                          Primary Domains
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {host.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-4 py-2 bg-background border border-border text-foreground font-bold tracking-wider uppercase text-xs"
                              style={{ borderLeftColor: host.color, borderLeftWidth: '4px' }}
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-border mt-auto">
                      <a
                        href="#"
                        className="flex-1 px-4 py-3 bg-card border border-border hover:bg-background transition-colors text-sm font-bold tracking-widest text-center uppercase"
                        style={{ color: host.color }}
                      >
                        Twitter
                      </a>
                      <a
                        href="#"
                        className="flex-1 px-4 py-3 bg-card border border-border hover:bg-background transition-colors text-sm font-bold tracking-widest text-center uppercase"
                        style={{ color: host.color }}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>

          <RevealItem>
            <div className="mt-32 p-16 bg-card border border-border relative overflow-hidden group">
              <motion.div
                className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-none transform rotate-12 pointer-events-none group-hover:rotate-45 transition-transform duration-700"
              />
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-foreground">
                  Join The <span className="text-primary italic">Conversation</span>
                </h2>
                <p className="text-foreground/80 text-lg mb-10 font-cairo">
                  Interested in being a guest on El-Podcasters? We're always looking for compelling voices and unique perspectives. Get in touch with us.
                </p>
                <button className="px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Reach Out
                </button>
              </div>
            </div>
          </RevealItem>
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
