
'use client';

import { useState, useEffect } from 'react';
import { Pet, pets as initialPets } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { X, Heart, Send, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';

const storyVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const StoryViewer = () => {
  const [stories, setStories] = useState<Pet[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Safely initialize state on the client after mount
    setStories(initialPets);
    setIsLoading(false);
  }, []);

  const currentPet = stories[currentStoryIndex];

  const paginate = (newDirection: number) => {
    if (stories.length === 0) return;
    setDirection(newDirection);
    setCurrentStoryIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return stories.length - 1;
      if (nextIndex >= stories.length) return 0;
      return nextIndex;
    });
    setProgress(0); // Reset progress on manual navigation
  };

  useEffect(() => {
    if (isLoading || stories.length === 0) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 2; // ~5 seconds per story
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentStoryIndex, stories.length, isLoading]);

  if (isLoading || !currentPet) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm h-[85vh] md:h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentStoryIndex}
          className="absolute inset-0 w-full h-full"
          custom={direction}
          variants={storyVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <Image
            src={currentPet.photos[0]}
            alt={currentPet.name}
            data-ai-hint={`${currentPet.species.toLowerCase()} ${currentPet.breed.toLowerCase()}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Areas */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-20" onClick={() => paginate(-1)} />
      <div className="absolute right-0 top-0 h-full w-1/2 z-20" onClick={() => paginate(1)} />
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-30">
        <Progress value={progress} className="h-1 bg-white/30" />
        <div className="flex items-center gap-3 mt-3">
          <Avatar>
            <AvatarImage src="/pawsitive-logo.png" alt="PawsitiveMatch Logo" data-ai-hint="logo paw" />
            <AvatarFallback>PM</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-white text-shadow">{currentPet.name}</h3>
          <span className="text-white/80 text-sm text-shadow">{currentPet.age}</span>
          <Link href="/" className="ml-auto">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <X />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-30 text-white">
        <p className="text-shadow-lg mb-4 line-clamp-3">{currentPet.description}</p>
        <div className="flex items-center gap-3">
          <Link href={`/pets/${currentPet.id}`} className="flex-grow">
            <Button variant="secondary" className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
              View Profile
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="hover:bg-white/20">
            <Heart className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-white/20">
            <Send className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
