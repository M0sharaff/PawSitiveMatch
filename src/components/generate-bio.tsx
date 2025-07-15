
'use client';

import { useState } from 'react';
import type { Pet } from '@/lib/data';
import { Button } from './ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { generatePetBioAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';
import { useCompletion } from 'ai/react';

interface GenerateBioProps {
  pet: Pet;
}

export function GenerateBio({ pet }: GenerateBioProps) {
  const { toast } = useToast();
  const [hasGenerated, setHasGenerated] = useState(false);

  const { completion, isLoading, handleSubmit, error } = useCompletion({
    api: '/api/chat/generate-bio', // This is a dummy endpoint, the action is what matters
    body: {
      ...pet
    },
    onFinish: () => {
      setHasGenerated(true);
      toast({
        title: 'New bio generated!',
        description: 'A new AI-powered bio has been created.',
      });
    },
    onError: (err) => {
       toast({
        variant: 'destructive',
        title: 'Error generating bio',
        description: err.message,
      });
    }
  });

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    // The useCompletion hook expects form data. We can pass a dummy
    // element to trigger it since the pet data is passed in the body.
    handleSubmit(e);
  };
  
  const handleResetBio = () => {
    setHasGenerated(false);
  };

  const displayBio = hasGenerated ? completion : pet.description;

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6">
            <p className="text-lg whitespace-pre-wrap">{displayBio}</p>
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <form onSubmit={handleGenerate}>
          <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate New Bio
          </Button>
        </form>
        {hasGenerated && !isLoading && (
             <Button onClick={handleResetBio} variant="outline">
                Reset
             </Button>
        )}
      </div>
    </div>
  );
}
