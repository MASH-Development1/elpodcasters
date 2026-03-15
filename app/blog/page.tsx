'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';
import { GeometricGrid } from '@/components/geometric-grid';
import { ScrollReveal, RevealItem } from '@/components/scroll-reveal';
import Link from 'next/link';

const BLOG_POSTS = [
  { id: 1, title: 'The Power of Meaningful Conversations', excerpt: 'In a world of endless noise, El-Podcasters stands as a beacon of thoughtful dialogue.', date: '2024-03-10', category: 'Culture', readTime: '5 min read', color: 'var(--primary)' },
  { id: 2, title: 'Bridging Cultures Through Podcasting', excerpt: 'From the heart of Egypt to global minds, we explore how podcasting transcends borders.', date: '2024-03-08', category: 'Media', readTime: '7 min read', color: 'var(--secondary)' },
  { id: 3, title: 'Building Knowledge Communities', excerpt: 'How listeners become community members, and why creating spaces for learning is essential.', date: '2024-03-05', category: 'Community', readTime: '6 min read', color: 'var(--accent)' },
  { id: 4, title: 'The Art of Thoughtful Interviewing', excerpt: 'Behind every great conversation is preparation, curiosity, and a genuine desire to understand.', date: '2024-03-01', category: 'Storytelling', readTime: '8 min read', color: 'var(--primary)' },
  { id: 5, title: 'Knowledge That Stays With You', excerpt: 'Why podcast conversations create lasting impact and how to retain and apply what you learn.', date: '2024-02-25', category: 'Learning', readTime: '6 min read', color: 'var(--secondary)' },
  { id: 6, title: 'The Future of Digital Storytelling', excerpt: 'What\'s next for podcasting? We explore emerging trends and the evolution of audio.', date: '2024-02-20', category: 'Innovation', readTime: '9 min read', color: 'var(--accent)' },
];

export default function BlogPage() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    stopLoading();
  }, [stopLoading]);

  return (
    <main className="w-full bg-background overflow-hidden relative">
      <GeometricGrid pattern="random" className="w-full pt-40 pb-20 z-0">
        <ScrollReveal className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <RevealItem>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-foreground">
                El-Podcasters <span className="text-secondary">Stories</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-cairo leading-relaxed bg-card/80 p-6 border border-border backdrop-blur-sm">
                Insights, reflections, and deep dives into the worlds we explore.
              </p>
            </RevealItem>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {BLOG_POSTS.map((post, index) => (
                <RevealItem key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                    <article className="group p-10 border border-border bg-card cursor-pointer relative overflow-hidden flex flex-col justify-between hover:border-foreground transition-colors duration-300">
                      {/* background color slide */}
                      <motion.div
                        className="absolute inset-0 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                        style={{ backgroundColor: post.color, opacity: 0.05 }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-8 border-b border-border pb-4">
                          <span
                            className="px-4 py-2 bg-background font-bold uppercase tracking-widest text-xs border border-border"
                            style={{ borderLeftColor: post.color, borderLeftWidth: '4px' }}
                          >
                            {post.category}
                          </span>
                          <span className="text-sm font-bold text-foreground/50 tracking-wider font-cairo uppercase">{post.date}</span>
                        </div>

                        <h2 className="text-4xl font-bold text-foreground mb-6 uppercase tracking-tight group-hover:text-white transition-colors leading-none" style={{ textDecorationColor: post.color }}>
                          {post.title}
                        </h2>

                        <p className="text-foreground/70 font-cairo text-lg mb-8 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between font-bold uppercase tracking-widest text-sm pt-4 border-t border-border">
                          <span className="text-foreground/50">{post.readTime}</span>
                          <span className="group-hover:opacity-100 opacity-50 transition-opacity flex items-center gap-2" style={{ color: post.color }}>
                            Read Full Story <span>→</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </RevealItem>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <RevealItem>
                  <div className="p-10 border-2 border-primary bg-card relative overflow-hidden group">
                    <motion.div
                      className="absolute -right-16 -top-16 w-32 h-32 bg-primary transform rotate-45 pointer-events-none group-hover:scale-150 transition-transform duration-500"
                    />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-foreground uppercase tracking-widest mb-4">Stay <span className="text-primary">Updated</span></h3>
                      <p className="text-foreground/70 text-base font-cairo mb-6">
                        Get the latest stories and insights delivered directly to your inbox.
                      </p>
                      <div className="flex flex-col gap-4">
                        <input
                          type="email"
                          placeholder="YOUR EMAIL"
                          className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors font-bold tracking-widest uppercase text-sm"
                        />
                        <button className="w-full px-5 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </RevealItem>

                <RevealItem>
                  <div className="p-10 border border-border bg-card">
                    <h3 className="text-2xl font-bold text-foreground uppercase tracking-widest mb-6 border-b border-border pb-4">Categories</h3>
                    <div className="flex flex-col gap-1">
                      {['Culture', 'Media', 'Community', 'Storytelling', 'Learning', 'Innovation'].map((cat) => (
                        <a
                          key={cat}
                          href="#"
                          className="py-3 text-foreground/70 hover:text-secondary hover:pl-4 transition-all uppercase font-bold tracking-widest text-sm border-b border-border/50 last:border-0"
                        >
                          {cat}
                        </a>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              </div>
            </div>
          </div>
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
