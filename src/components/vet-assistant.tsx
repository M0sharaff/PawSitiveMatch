'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Pet } from '@/lib/data';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Stethoscope, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { askVetAssistantAction } from '@/app/actions';

interface VetAssistantProps {
  pet: Pet;
}

const formSchema = z.object({
  question: z.string().min(10, 'Your question must be at least 10 characters.'),
});

export function VetAssistant({ pet }: VetAssistantProps) {
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnswer('');
    
    const result = await askVetAssistantAction({
        petDetails: {
            name: pet.name,
            species: pet.species,
            breed: pet.breed,
            age: pet.age,
            history: pet.history,
            careRequirements: pet.careRequirements,
        },
        question: values.question,
    });

    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.result?.answer) {
      setAnswer(result.result.answer);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
            <Stethoscope className="w-8 h-8 text-primary" />
            <div>
                <CardTitle className="font-headline text-2xl">AI Vet Assistant</CardTitle>
                <CardDescription>Have a question about {pet.name}? Ask our AI assistant!</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Question</FormLabel>
                  <FormControl>
                    <Textarea placeholder={`e.g., "What kind of food is best for a ${pet.breed}?"`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Ask Question
            </Button>
          </form>
        </Form>
        
        {isLoading && (
            <div className="mt-6 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-4 text-muted-foreground">Thinking...</p>
            </div>
        )}

        {answer && (
          <Card className="mt-6 bg-accent/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Assistant's Answer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{answer}</p>
            </CardContent>
          </Card>
        )}

      </CardContent>
    </Card>
  );
}
