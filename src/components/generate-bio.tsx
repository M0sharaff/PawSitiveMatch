'use client';

import { useState } from 'react';
import type { Pet } from '@/lib/data';
import { Button } from './ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { generatePetBioAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';

interface GenerateBioProps {
  pet: Pet;
}

export function GenerateBio({ pet }: GenerateBioProps) {
  const [bio, setBio] = useState(pet.description);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateBio = async () => {
    setIsLoading(true);
    const result = await generatePetBioAction({
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
      traits: pet.traits,
    });
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error generating bio',
        description: result.error,
      });
    } else if (result.bio) {
      setBio(result.bio.bio);
      toast({
        title: 'New bio generated!',
        description: 'A new AI-powered bio has been created.',
      });
    }
  };
  
  const handleResetBio = () => {
    setBio(pet.description);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
            <p className="text-lg whitespace-pre-wrap">{bio}</p>
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button onClick={handleGenerateBio} disabled={isLoading}>
            {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate New Bio
        </Button>
        {bio !== pet.description && (
             <Button onClick={handleResetBio} variant="outline">
                Reset
             </Button>
        )}
      </div>
    </div>
  );
}
