
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

const PawPrint = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.394 12.875c-1.188-1.125-2.288-2.313-2.288-3.563 0-1.313.938-2.313 2.25-2.313s2.25.938 2.25 2.25c0 1.25-1.063 2.438-2.212 3.625zM9 13.5c-1.35 0-2.25.9-2.25 2.025 0 1.125.75 2.063 1.838 2.063s1.763-.938 1.763-2.063c0-1.125-.9-2.025-1.35-2.025zM15 13.5c-.45 0-1.35.9-1.35 2.025 0 1.125.675 2.063 1.763 2.063s1.838-.938 1.838-2.063c0-1.125-.9-2.025-2.25-2.025zM4.725 10.25c-1.35 0-2.475.938-2.475 2.156 0 1.25.938 2.25 2.25 2.25s2.25-1.063 2.25-2.25c0-1.25-1.125-2.156-2.025-2.156zM19.275 10.25c-.9 0-2.025.906-2.025 2.156 0 1.188.938 2.25 2.25 2.25s2.25-1.062 2.25-2.25c0-1.218-1.125-2.156-2.475-2.156z" />
    </svg>
)

export default function PetCard({ pet }: PetCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-9deg', '9deg']);
  
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

  const glowColor = pet.species === 'Dog' 
    ? 'hsl(45 93% 60% / 0.15)' 
    : pet.species === 'Cat' 
    ? 'hsl(205 92% 64% / 0.15)'
    : 'hsl(140 60% 60% / 0.15)';

  return (
    <motion.div
      style={{
        perspective: '1200px',
      }}
      initial={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
            className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(600px at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, ${glowColor}, transparent 80%)`,
              transform: 'translateZ(-10px)',
            }}
          />
          {/* Parallax Paw Prints */}
           <motion.div
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ transform: 'translateZ(-20px)' }}
          >
              <PawPrint className="absolute w-20 h-20 top-[10%] left-[10%] text-primary/5 rotate-[-30deg]" />
              <PawPrint className="absolute w-16 h-16 bottom-[5%] right-[15%] text-primary/10 rotate-[20deg]" />
              <PawPrint className="absolute w-12 h-12 top-[40%] right-[10%] text-primary/5 rotate-[45deg]" />
          </motion.div>

          {/* Image Layer */}
          <motion.div 
            className="relative overflow-hidden aspect-[4/3] rounded-t-lg"
            style={{ transform: 'translateZ(80px)', transformStyle: 'preserve-3d' }}
          >
            <Link href={`/pets/${pet.id}`} className="block">
              <Image
                src={pet.photos[0]}
                alt={`A photo of ${pet.name}`}
                data-ai-hint={`${pet.species.toLowerCase()} ${pet.breed.toLowerCase()}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/wcAAgAB/epv2AAAAABJRU5ErkJggg=="
              />
            </Link>
            <div className="absolute top-3 right-3 z-10" style={{ transform: 'translateZ(20px)' }}>
              <SavePetButton pet={pet} />
            </div>
          </motion.div>
          
          {/* Content Layer */}
          <motion.div 
            className="p-4 flex flex-col flex-grow bg-card/80"
            style={{ transform: 'translateZ(50px)' }}
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
