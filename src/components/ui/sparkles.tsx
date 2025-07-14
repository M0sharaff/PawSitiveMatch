'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
}

export const SparklesCore = (props: SparklesProps) => {
  const { id, className, background, minSize, maxSize, particleColor, particleDensity } = props;
  const [sparkles, setSparkles] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => {
      if (id) {
        const container = document.getElementById(id);
        if (container) {
          const { width, height } = container.getBoundingClientRect();
          setDimensions({ width, height });
        }
      }
    };
    getDimensions();
    window.addEventListener('resize', getDimensions);
    return () => window.removeEventListener('resize', getDimensions);
  }, [id]);

  useEffect(() => {
    const generateSparkles = () => {
      const density = particleDensity || 50;
      const count = Math.floor((dimensions.width * dimensions.height) / (100000 / density));
      const newSparkles = Array.from({ length: count }).map(() => {
        const size = (minSize || 0.5) + Math.random() * ((maxSize || 1) - (minSize || 0.5));
        return {
          id: Math.random(),
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: size,
          opacity: 0.5 + Math.random() * 0.5,
          color: particleColor || '#FFFFFF',
          duration: 1 + Math.random() * 2,
        };
      });
      setSparkles(newSparkles);
    };
    if (dimensions.width > 0 && dimensions.height > 0) {
      generateSparkles();
    }
  }, [dimensions, particleDensity, minSize, maxSize, particleColor]);

  return (
    <div className={cn('relative w-full h-full', className)} id={id} style={{ background }}>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, sparkle.opacity, 0],
              scale: [0, 1, 0],
              x: sparkle.x,
              y: sparkle.y,
            }}
            transition={{
              duration: sparkle.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{
              position: 'absolute',
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: sparkle.color,
              borderRadius: '50%',
              boxShadow: `0 0 2px ${sparkle.color}, 0 0 5px ${sparkle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
