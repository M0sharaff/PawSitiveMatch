'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Pet } from '@/lib/data';
import { MapPin } from 'lucide-react';
import { SavePetButton } from './save-pet-button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React from 'react';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-6deg', '6deg']);
  
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ['100%', '-100%']);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ['100%', '-100%']);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full group"
    >
      <motion.div
         style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
      >
        <Card 
          className="h-full overflow-hidden transition-all duration-300 ease-in-out bg-card/60 backdrop-blur-sm flex flex-col relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(400px at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, hsl(var(--primary) / 0.15), transparent 80%)`,
              transform: 'translateZ(-1px)',
            }}
          />
          {/* Image Layer */}
          <motion.div 
            className="relative overflow-hidden aspect-[4/3] rounded-t-lg"
            style={{ transform: 'translateZ(60px)' }}
          >
            <Link href={`/pets/${pet.id}`} className="block">
              <Image
                src={pet.photos[0]}
                alt={`A photo of ${pet.name}`}
                data-ai-hint={`${pet.species.toLowerCase()} ${pet.breed.toLowerCase()}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/wcAAgAB/epv2AAAAABJRU5ErkJggg=="
              />
            </Link>
            <div className="absolute top-3 right-3 z-10">
              <SavePetButton pet={pet} />
            </div>
          </motion.div>
          
          {/* Content Layer */}
          <motion.div 
            className="p-4 flex flex-col flex-grow"
            style={{ transform: 'translateZ(40px)' }}
          >
            <Link href={`/pets/${pet.id}`} className="block">
              <h3 className="font-bold text-xl text-primary">{pet.name}</h3>
              <p className="text-sm text-muted-foreground">{pet.breed}</p>
            </Link>
            <div className="flex-grow mt-2">
              <p className="text-sm text-foreground/80 line-clamp-2">{pet.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4"/>
              <span>{pet.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{pet.age}</Badge>
              <Badge variant="secondary">{pet.size}</Badge>
              <Badge variant="secondary">{pet.gender}</Badge>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
