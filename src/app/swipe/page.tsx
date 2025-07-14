
'use client';

import React, { useState, useMemo } from 'react';
import { pets as initialPets, type Pet } from '@/lib/data';
import SwipeCard from '@/components/swipe-card';
import useSavedPets from '@/hooks/use-saved-pets';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Undo } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SwipePage() {
  const [pets, setPets] = useState(() => [...initialPets].reverse());
  const { savePet } = useSavedPets();
  const { toast } = useToast();

  const handleSwipe = (pet: Pet, direction: 'left' | 'right') => {
    // Remove the pet from the stack
    setPets((prev) => prev.slice(0, prev.length - 1));

    // Save to favorites if swiped right
    if (direction === 'right') {
      savePet(pet);
       toast({
        title: 'Pet Saved!',
        description: `${pet.name} has been added to your favorites.`,
      });
    }
  };
  
  const handleReset = () => {
    setPets([...initialPets].reverse());
  };

  const currentPet = useMemo(() => pets[pets.length - 1], [pets]);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-br from-background to-secondary/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center mb-8 z-10">
        <h1 className="text-4xl font-bold font-serif text-primary">Swipe to Find a Friend</h1>
        <p className="text-muted-foreground">Swipe right to save, left to pass.</p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-sm h-[500px]">
        {pets.length > 0 ? (
          pets.map((pet, index) => (
            <SwipeCard
              key={pet.id}
              pet={pet}
              onSwipe={(direction) => handleSwipe(pet, direction)}
              isTop={index === pets.length - 1}
            />
          ))
        ) : (
          <div className="text-center p-8 bg-card rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold font-serif">That's everyone!</h2>
            <p className="text-muted-foreground mt-2">You've seen all available pets.</p>
            <Button onClick={handleReset} className="mt-4">
              <Undo className="mr-2 h-4 w-4" />
              Start Over
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
