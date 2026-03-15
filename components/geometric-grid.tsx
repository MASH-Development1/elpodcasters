'use client';

import { motion } from 'framer-motion';
import { gridBlock, staggerContainer } from '@/lib/motion-variants';

interface GeometricGridProps {
    children?: React.ReactNode;
    pattern: 'stair-left' | 'stair-right' | 'checker' | 'random';
    className?: string;
    colors?: string[];
}

export function GeometricGrid({ children, pattern, className = '', colors = ['bg-primary', 'bg-secondary', 'bg-accent'] }: GeometricGridProps) {

    // Define grid layouts based on pattern
    const renderBlocks = () => {
        switch (pattern) {
            case 'stair-left':
                return (
                    <>
                        <motion.div custom={0} variants={gridBlock} className={`absolute bottom-0 left-0 w-16 h-16 ${colors[0]} opacity-80`} />
                        <motion.div custom={1} variants={gridBlock} className={`absolute bottom-16 left-0 w-16 h-16 ${colors[1]} opacity-60`} />
                        <motion.div custom={2} variants={gridBlock} className={`absolute bottom-0 left-16 w-16 h-16 ${colors[2]} opacity-70`} />
                        <motion.div custom={3} variants={gridBlock} className={`absolute bottom-32 left-0 w-16 h-16 ${colors[0]} opacity-40`} />
                        <motion.div custom={4} variants={gridBlock} className={`absolute bottom-16 left-16 w-16 h-16 ${colors[1]} opacity-50`} />
                        <motion.div custom={5} variants={gridBlock} className={`absolute bottom-0 left-32 w-16 h-16 ${colors[2]} opacity-60`} />
                    </>
                );
            case 'stair-right':
                return (
                    <>
                        <motion.div custom={5} variants={gridBlock} className={`absolute top-0 right-0 w-24 h-24 ${colors[2]} opacity-80`} />
                        <motion.div custom={4} variants={gridBlock} className={`absolute top-24 right-0 w-24 h-24 ${colors[0]} opacity-60`} />
                        <motion.div custom={3} variants={gridBlock} className={`absolute top-0 right-24 w-24 h-24 ${colors[1]} opacity-70`} />
                        <motion.div custom={2} variants={gridBlock} className={`absolute top-48 right-0 w-24 h-24 ${colors[2]} opacity-40`} />
                        <motion.div custom={1} variants={gridBlock} className={`absolute top-24 right-24 w-24 h-24 ${colors[0]} opacity-50`} />
                        <motion.div custom={0} variants={gridBlock} className={`absolute top-0 right-48 w-24 h-24 ${colors[1]} opacity-60`} />
                    </>
                );
            case 'checker':
                return (
                    <>
                        <motion.div custom={0} variants={gridBlock} className={`absolute top-10 left-10 w-20 h-20 ${colors[0]} opacity-30`} />
                        <motion.div custom={2} variants={gridBlock} className={`absolute bottom-20 right-10 w-32 h-32 ${colors[1]} opacity-40`} />
                        <motion.div custom={1} variants={gridBlock} className={`absolute bottom-10 left-1/4 w-16 h-16 ${colors[2]} opacity-50`} />
                        <motion.div custom={3} variants={gridBlock} className={`absolute top-1/3 right-1/4 w-24 h-24 ${colors[0]} opacity-20`} />
                    </>
                );
            case 'random':
            default:
                return (
                    <>
                        <motion.div custom={1} variants={gridBlock} className={`absolute top-0 left-1/2 w-40 h-40 ${colors[0]} opacity-10`} />
                        <motion.div custom={3} variants={gridBlock} className={`absolute bottom-0 right-1/2 w-48 h-48 ${colors[1]} opacity-10`} />
                        <motion.div custom={2} variants={gridBlock} className={`absolute top-1/4 left-1/4 w-24 h-24 ${colors[2]} opacity-20`} />
                    </>
                );
        }
    };

    return (
        <div className={`relative ${className}`}>
            {/* Background Grid Elements */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none z-0"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                {renderBlocks()}
            </motion.div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
