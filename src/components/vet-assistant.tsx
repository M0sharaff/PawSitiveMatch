
'use client';

import type { Pet } from '@/lib/data';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Stethoscope, Sparkles, User, Bot } from 'lucide-react';
import { useChat } from 'ai/react';
import { askVetAssistantAction } from '@/app/actions';

interface VetAssistantProps {
  pet: Pet;
}

export function VetAssistant({ pet }: VetAssistantProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
      api: '/api/chat/vet-assistant', // This is a dummy endpoint
      body: {
        petDetails: {
            name: pet.name,
            species: pet.species,
            breed: pet.breed,
            age: pet.age,
            history: pet.history,
            careRequirements: pet.careRequirements,
        },
      }
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
            <Stethoscope className="w-8 h-8 text-primary" />
            <div>
                <CardTitle className="font-serif text-2xl">AI Vet Assistant</CardTitle>
                <CardDescription>Have a question about {pet.name}? Ask our AI assistant!</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.map(m => (
            <div key={m.id} className="flex gap-3">
              <div className="flex-shrink-0">
                {m.role === 'user' ? <User className="w-6 h-6 text-accent" /> : <Bot className="w-6 h-6 text-primary" />}
              </div>
              <div className="flex-grow">
                <p className="whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length-1].role === 'user' && (
             <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <div className="flex-grow">
                  <p className="whitespace-pre-wrap text-muted-foreground">Thinking...</p>
                </div>
              </div>
          )}
        </div>
      </CardContent>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
                value={input}
                onChange={handleInputChange}
                placeholder={`e.g., "What kind of food is best for a ${pet.breed}?"`}
                disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
                <Sparkles className="mr-2 h-4 w-4" />
                Ask
            </Button>
        </form>
         {error && (
            <p className="text-sm text-destructive mt-2">
                An error occurred: {error.message}
            </p>
        )}
      </CardContent>
    </Card>
  );
}
