'use client';

import { useState } from 'react';
import type { Pet } from '@/lib/data';
import { Button } from './ui/button';
import { Camera, Loader2 } from 'lucide-react';
import { generatePetImageAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface GenerateImageProps {
  pet: Pet;
}

export function GenerateImage({ pet }: GenerateImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateImage = async () => {
    setIsLoading(true);
    setImageUrl(null);
    const result = await generatePetImageAction({
      species: pet.species,
      breed: pet.breed,
    });
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error generating image',
        description: result.error,
      });
    } else if (result.image) {
      setImageUrl(result.image.imageUrl);
      toast({
        title: 'New image generated!',
        description: 'A unique AI-powered image has been created.',
      });
    }
  };

  return (
    <Card className="w-full h-full aspect-[4/3] flex flex-col items-center justify-center bg-secondary/30">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Generate a New Image</CardTitle>
        <CardDescription>Want a unique look for {pet.name}? Let AI create one!</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center w-full">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Creating a masterpiece...</p>
          </div>
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={`AI generated image of ${pet.name}`}
            width={800}
            height={600}
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="text-center">
            <Camera className="mx-auto h-16 w-16 text-primary/50 mb-4" />
             <Button onClick={handleGenerateImage} disabled={isLoading} size="lg">
                Generate Image
            </Button>
          </div>
        )}
         {imageUrl && !isLoading && (
            <Button onClick={handleGenerateImage} disabled={isLoading} size="sm" variant="outline" className="mt-4">
                Generate Another
            </Button>
        )}
      </CardContent>
    </Card>
  );
}
