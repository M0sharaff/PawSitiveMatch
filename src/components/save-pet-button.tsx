'use client';

import type { Pet } from '@/lib/data';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import useSavedPets from '@/hooks/use-saved-pets';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SavePetButtonProps {
  pet: Pet;
}

export function SavePetButton({ pet }: SavePetButtonProps) {
  const { isSaved, toggleSave } = useSavedPets(pet.id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents link navigation when clicking the button on a card
    e.preventDefault();
    toggleSave(pet);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className={cn("rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80", isSaved && "text-red-500 hover:text-red-600")}
            onClick={handleClick}
          >
            <Heart className={cn("h-5 w-5", isSaved && "fill-current")} />
            <span className="sr-only">Save pet</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isSaved ? 'Unsave Pet' : 'Save Pet'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
