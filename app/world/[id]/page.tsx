'use client';

import { useEffect } from 'react';
import { useLoading } from '@/contexts/loading-context';
import { ParallaxWrapper } from '@/components/parallax-wrapper';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const WORLD_DETAILS: Record<string, any> = {
  business: {
    name: 'Business',
    description: 'Entrepreneurship, strategy, and innovation conversations',
    icon: '💼',
    color: 'blue',
    episodes: [
      { title: 'The Future of Entrepreneurship', date: '2024-03-10', host: 'Bassel' },
      { title: 'Scaling from Startup to Unicorn', date: '2024-03-08', host: 'Karim' },
      { title: 'Innovation in Middle East Markets', date: '2024-03-05', host: 'Bassel' },
    ],
  },
  cinema: {
    name: 'Cinema',
    description: 'Film, storytelling, and entertainment discussions',
    icon: '🎬',
    color: 'purple',
    episodes: [
      { title: 'Egyptian Cinema Renaissance', date: '2024-03-09', host: 'Karim' },
      { title: 'Storytelling Across Cultures', date: '2024-03-07', host: 'Bassel' },
      { title: 'The Art of Film Direction', date: '2024-03-04', host: 'Karim' },
    ],
  },
  health: {
    name: 'Health',
    description: 'Wellness, medicine, and lifestyle wisdom',
    icon: '⚕️',
    color: 'green',
    episodes: [
      { title: 'Mental Health in Modern Times', date: '2024-03-08', host: 'Bassel' },
      { title: 'Nutrition and Lifestyle', date: '2024-03-06', host: 'Karim' },
      { title: 'Holistic Wellness Approach', date: '2024-03-03', host: 'Bassel' },
    ],
  },
  history: {
    name: 'History',
    description: 'Stories from the past that shape our future',
    icon: '📚',
    color: 'amber',
    episodes: [
      { title: 'Ancient Egypt Mysteries', date: '2024-03-07', host: 'Karim' },
      { title: 'Historical Turning Points', date: '2024-03-05', host: 'Bassel' },
      { title: 'Learning from History', date: '2024-03-02', host: 'Karim' },
    ],
  },
  media: {
    name: 'Media',
    description: 'News, journalism, and digital storytelling',
    icon: '📰',
    color: 'red',
    episodes: [
      { title: 'The Future of Journalism', date: '2024-03-06', host: 'Bassel' },
      { title: 'Digital Transformation in Media', date: '2024-03-04', host: 'Karim' },
      { title: 'Truth in the Digital Age', date: '2024-03-01', host: 'Bassel' },
    ],
  },
  music: {
    name: 'Music',
    description: 'Sound, art, and creative expression',
    icon: '🎵',
    color: 'pink',
    episodes: [
      { title: 'The Evolution of Arab Music', date: '2024-03-05', host: 'Karim' },
      { title: 'Producing Timeless Sound', date: '2024-03-03', host: 'Bassel' },
      { title: 'Music and Culture', date: '2024-02-29', host: 'Karim' },
    ],
  },
  social: {
    name: 'Social Chats',
    description: 'Community, culture, and human connection',
    icon: '🗣️',
    color: 'cyan',
    episodes: [
      { title: 'Building Communities Online', date: '2024-03-04', host: 'Bassel' },
      { title: 'Social Change Through Dialogue', date: '2024-03-02', host: 'Karim' },
      { title: 'Connection in a Digital World', date: '2024-02-28', host: 'Bassel' },
    ],
  },
  sports: {
    name: 'Sports',
    description: 'Athletics, competition, and performance',
    icon: '⚽',
    color: 'orange',
    episodes: [
      { title: 'Sports Science and Performance', date: '2024-03-03', host: 'Karim' },
      { title: 'The Spirit of Competition', date: '2024-03-01', host: 'Bassel' },
      { title: 'Athletes and Their Journey', date: '2024-02-27', host: 'Karim' },
    ],
  },
};

export default function WorldPage() {
  const params = useParams();
  const { stopLoading } = useLoading();
  const worldId = params.id as string;
  const world = WORLD_DETAILS[worldId];

  useEffect(() => {
    stopLoading();
  }, [stopLoading]);

  if (!world) {
    return (
      <main className="w-full pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">World not found</h1>
          <Link href="/explore" className="text-primary hover:underline">
            Back to Explore
          </Link>
        </div>
      </main>
    );
  }

  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30',
    amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30',
    red: 'from-red-500/20 to-red-600/20 border-red-500/30',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
  };

  return (
    <main className="w-full pt-24 pb-20">
      <section className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ParallaxWrapper strength={0.8}>
            <div className="mb-12">
              <Link href="/explore" className="text-secondary hover:text-primary transition-colors mb-4 inline-block">
                ← Back to Explore
              </Link>
              <div className="text-6xl mb-4">{world.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {world.name}
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl">
                {world.description}
              </p>
            </div>
          </ParallaxWrapper>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Latest Episodes</h2>
              <div className="space-y-4">
                {world.episodes.map((episode: any, index: number) => (
                  <ParallaxWrapper key={index} strength={0.3}>
                    <div className={`p-6 rounded-lg border ${colorClasses[world.color]} bg-gradient-to-br backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground flex-grow">{episode.title}</h3>
                        <span className="text-xs text-secondary ml-4">{episode.date}</span>
                      </div>
                      <p className="text-sm text-foreground/60">Hosted by {episode.host}</p>
                      <div className="mt-4 text-sm text-secondary opacity-0 hover:opacity-100 transition-opacity">
                        Listen Now →
                      </div>
                    </div>
                  </ParallaxWrapper>
                ))}
              </div>
            </div>

            <div>
              <div className={`sticky top-24 p-8 rounded-lg border bg-gradient-to-br ${colorClasses[world.color]} backdrop-blur-sm`}>
                <h3 className="text-xl font-bold text-primary mb-4">About This World</h3>
                <p className="text-foreground/70 text-sm mb-6">
                  Dive deep into conversations about {world.name.toLowerCase()}. Our hosts bring expertise, curiosity, and passion to every episode.
                </p>
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-card border-t border-border py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-foreground/60 text-sm">
          <p>El-Podcasters © 2024 | Where Knowledge Lives</p>
        </div>
      </footer>
    </main>
  );
}
