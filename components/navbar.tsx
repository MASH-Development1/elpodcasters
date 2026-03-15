'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/loading-context';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();
  const { startLoading } = useLoading();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore Worlds' },
    { href: '/hosts', label: 'Hosts' },
    { href: '/blog', label: 'Blog' },
  ];

  const handleNavClick = () => {
    startLoading();
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="El-Podcasters"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <motion.div
                className="font-bold text-primary text-lg"
                animate={{ textShadow: ['0 0 10px rgba(252, 221, 71, 0)', '0 0 20px rgba(252, 221, 71, 0.5)', '0 0 10px rgba(252, 221, 71, 0)'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                El-Podcasters
              </motion.div>
              <div className="text-xs text-secondary">Experience Knowledge</div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.div
              key={link.href}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-all ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
