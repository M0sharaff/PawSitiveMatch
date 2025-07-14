// src/components/shimmering-loader.tsx
'use client';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ShimmeringLoaderProps {
    count?: number;
    className?: string;
    isCard?: boolean;
}

export function ShimmeringLoader({ count = 1, className, isCard = false }: ShimmeringLoaderProps) {
  const Shimmer = () => (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      }}
      className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
    />
  );

  if (isCard) {
    return (
      <div className={cn("relative overflow-hidden rounded-lg border bg-card/50 p-4 shadow-sm", className)}>
        <div className="space-y-3">
          <div className="h-40 rounded-md bg-muted" />
          <div className="h-5 w-3/5 rounded-lg bg-muted" />
          <div className="h-4 w-4/5 rounded-lg bg-muted" />
          <div className="h-4 w-2/5 rounded-lg bg-muted" />
        </div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="relative h-4 w-full overflow-hidden rounded-lg bg-muted">
           <Shimmer />
        </div>
      ))}
    </div>
  );
}
