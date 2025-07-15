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
  
  // Memoize dimensions to avoid re-calculating on every render
  const dimensions = React.useMemo(() => {
    if (typeof window === 'undefined' || !id) return { width: 0, height: 0 };
    const container = document.getElementById(id);
    return container ? { width: container.offsetWidth, height: container.offsetHeight } : { width: 0, height: 0 };
  }, [id]);

  useEffect(() => {
    if (typeof window === 'undefined' || !id) return;

    const container = document.getElementById(id);
    if (!container) return;
    
    const obs = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        // This is where you would update state based on new dimensions
        // For this component, we'll let the dependency array handle regeneration
    });
    obs.observe(container);

    return () => obs.disconnect();
  }, [id]);


  useEffect(() => {
    const generateSparkles = () => {
      const density = particleDensity || 75;
      const count = Math.floor((dimensions.width * dimensions.height) / (100000 / density));
      const newSparkles = Array.from({ length: count }).map(() => {
        const size = (minSize || 0.5) + Math.random() * ((maxSize || 1.2) - (minSize || 0.5));
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
  }, [dimensions.width, dimensions.height, particleDensity, minSize, maxSize, particleColor]);

  return (
    <div className={cn('relative w-full h-full pointer-events-none', className)} id={id} style={{ background }}>
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
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
