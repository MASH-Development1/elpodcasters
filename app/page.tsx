'use client';

import { motion } from 'framer-motion';
import { Hero3D } from '@/components/hero-3d';
import { ScrollReveal, RevealItem } from '@/components/scroll-reveal';
import { useEffect } from 'react';
import Link from 'next/link';
import { revealText, fadeInUp, staggerContainer } from '@/lib/motion-variants';
import { GeometricGrid } from '@/components/geometric-grid';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-background">
      <Hero3D />

      {/* Content Section */}
      <GeometricGrid pattern="stair-left" className="w-full pt-32 pb-32">
        <ScrollReveal as="section" className="relative w-full">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-24"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <RevealItem>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase">
                  Welcome to <span className="text-primary tracking-tighter">Knowledge</span> Universes
                </h2>
              </RevealItem>
              <RevealItem>
                <div className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-cairo bg-card/80 p-8 rounded-xl border border-primary/20 backdrop-blur-sm">
                  Step into immersive worlds where conversations shape understanding and knowledge stays with you forever. We believe that
                  <span className="bg-primary text-primary-foreground font-bold px-2 py-1 mx-2 inline-block -rotate-1 transform">we can all learn</span>
                  while we are still entertained.
                </div>
              </RevealItem>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12 mt-20"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div variants={fadeInUp}>
                <Link href="/explore">
                  <motion.div
                    className="block p-10 bg-card rounded-none hover:bg-card/80 transition-all duration-500 cursor-pointer h-full relative overflow-hidden group"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-secondary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                    />
                    <motion.div
                      className="w-16 h-16 bg-secondary rounded-none mb-8 abstract-shape flex items-center justify-center transform group-hover:rotate-12 transition-transform"
                    >
                      <div className="w-8 h-8 rounded-full border-4 border-background" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wider group-hover:text-secondary transition-colors">Explore Worlds</h3>
                    <p className="text-foreground/80 font-cairo text-lg relative z-10">
                      Discover podcasts across Business, Cinema, Health, History, Media, Music, Social, and Sports. Each world is a journey into knowledge.
                    </p>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href="/hosts">
                  <motion.div
                    className="block p-10 bg-card rounded-none hover:bg-card/80 transition-all duration-500 cursor-pointer h-full relative overflow-hidden group"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                    />
                    <motion.div
                      className="w-16 h-16 bg-accent rounded-none mb-8 flex items-center justify-center transform group-hover:-rotate-12 transition-transform"
                    >
                      <div className="w-8 h-8 rounded-none border-4 border-background" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wider group-hover:text-accent transition-colors">Meet Our Hosts</h3>
                    <p className="text-foreground/80 font-cairo text-lg relative z-10">
                      Learn about Bassel Alzaro and Karim Rihan, the minds behind El-Podcasters. Their passion drives our mission.
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </GeometricGrid>

      <GeometricGrid pattern="stair-right" className="w-full py-24 bg-card border-t border-b border-border">
        <ScrollReveal className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 mt-12 mb-12">

            {/* Mission Block */}
            <RevealItem>
              <div className="p-16 border-2 border-primary bg-background relative overflow-hidden group h-full flex flex-col justify-center">
                <motion.div
                  className="absolute -right-16 -top-16 w-32 h-32 bg-primary transform rotate-45 pointer-events-none group-hover:scale-150 transition-transform duration-500"
                />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-foreground">
                    Our <span className="text-primary italic">Mission</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-foreground/80 font-cairo leading-relaxed font-medium">
                    To inspire our community through authentic conversations that empower and connect them to their goals.
                  </p>
                </div>
              </div>
            </RevealItem>

            {/* Vision Block */}
            <RevealItem>
              <div className="p-16 border-2 border-accent bg-background relative overflow-hidden group h-full flex flex-col justify-center">
                <motion.div
                  className="absolute -left-16 -bottom-16 w-32 h-32 bg-accent transform -rotate-45 pointer-events-none group-hover:scale-150 transition-transform duration-500"
                />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-foreground text-right">
                    Our <span className="text-accent italic">Vision</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-foreground/80 font-cairo leading-relaxed text-right font-medium">
                    Creating conversations from the heart of Egypt reaching our community's hearts all over the globe.
                  </p>
                </div>
              </div>
            </RevealItem>

          </div>

          <div className="text-center mt-12">
            <RevealItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href="/blog"
                  className="px-10 py-5 bg-foreground text-background font-bold tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Read Our Stories
                </Link>
              </motion.div>
            </RevealItem>
          </div>
        </ScrollReveal>
      </GeometricGrid>

      {/* Footer */}
      <motion.footer
        className="w-full bg-card border-t border-border py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-foreground/60 text-sm font-cairo">
          <p>El-Podcasters © 2024 | Where Knowledge Lives</p>
        </div>
      </motion.footer>
    </main>
  );
}
