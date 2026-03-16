'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

export function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center pt-20 border-b-8 border-primary">
      {/* Dynamic Background Grid Pattern (Behind Spline) */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
          transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Spline 3D Scene - Covering the entire hero section */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] hidden md:block">
        <Spline
          scene="https://prod.spline.design/EtAHnj9uvWyl5Dcr/scene.splinecode"
          className="w-full h-full"
        />
        {/* Anti-Watermark Overlay Block */}
        <div className="absolute bottom-0 right-0 w-[160px] h-[70px] bg-background pointer-events-none z-[2]" />
      </div>

      {/* Floating Geometric Shapes (Parallax) */}
      <motion.div style={{ y: y1 }} className="absolute z-0 w-full h-full pointer-events-none flex items-center justify-center">
        <motion.div
          className="absolute left-[10%] top-[20%] w-32 h-32 bg-secondary border-4 border-background"
          animate={{ rotate: [0, 90, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[15%] bottom-[15%] w-48 h-48 bg-primary rounded-full border-4 border-background"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[20%] bottom-[30%] w-24 h-24 bg-accent border-4 border-background"
          animate={{ rotate: [0, -90, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute right-[25%] top-[30%] w-16 h-16 bg-foreground border-4 border-background"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">

        {/* Left Typography Block */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 8 }}
          >
            <div className="inline-block bg-primary text-background font-bold tracking-widest uppercase px-4 py-2 mb-6">
              Welcome to the Universe
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold text-foreground leading-[0.9] tracking-tighter uppercase mb-6 drop-shadow-lg">
              El-Pod<br />
              <span className="text-secondary" style={{ WebkitTextStroke: '2px var(--secondary)', color: 'transparent' }}>
                Casters
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-cairo max-w-lg leading-relaxed border-l-4 border-accent pl-6 py-2">
              Conversations that inspire. Enter knowledge universes where voices matter and stories transform understanding from the heart of Egypt.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 pt-4 pointer-events-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 8 }}
          >
            <Link href="/explore">
              <motion.button
                className="px-8 py-5 bg-primary text-background font-bold uppercase tracking-widest text-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 w-full h-full bg-foreground translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  Explore Worlds
                </span>
              </motion.button>
            </Link>

            <Link href="/hosts">
              <motion.button
                className="px-8 py-5 border-2 border-foreground text-foreground font-bold uppercase tracking-widest text-sm relative overflow-hidden group bg-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 w-full h-full bg-foreground translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                  Meet The Hosts
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Interactive Image/Logo Block */}

      </div>
    </div>
  );
}

// <motion.div
//           className="relative h-[60vh] hidden lg:flex items-center justify-center p-12"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           style={{ y: y2 }}
//         >
//           {/* Interactive Tilt Container */}
//           <motion.div
//             className="relative w-full h-full bg-card border-2 border-border flex items-center justify-center shadow-2xl"
//             style={{
//               x: mousePosition.x * 1,
//               y: mousePosition.y * 1,
//               rotateX: mousePosition.y * -0.5,
//               rotateY: mousePosition.x * 0.5,
//               transformStyle: "preserve-3d"
//             }}
//           >
//             {/* Inner Brand Elements */}
//             <div className="absolute inset-4 border border-border/50" />

//             <motion.div
//               className="relative w-64 h-64 z-20"
//               style={{ translateZ: 50 }}
//             >
//               <Image
//                 src="/logo.png"
//                 alt="El-Podcasters"
//                 fill
//                 className="object-contain drop-shadow-2xl"
//                 priority
//               />
//             </motion.div>

//             {/* Accent corner blocks */}
//             <div className="absolute top-0 left-0 w-8 h-8 bg-primary" />
//             <div className="absolute bottom-0 right-0 w-8 h-8 bg-secondary" />
//           </motion.div>

//           {/* Background offset block for depth */}
//           <div className="absolute inset-12 bg-accent/20 border-2 border-accent translate-x-8 translate-y-8 -z-10" />
//         </motion.div>
