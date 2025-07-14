'use server';

/**
 * @fileOverview An AI vet assistant that answers questions about a specific pet.
 *
 * - askVetAssistant - A function that takes pet details and a user's question, and returns an answer.
 * - AskVetAssistantInput - The input type for the askVetAssistant function.
 * - AskVetAssistantOutput - The return type for the askVetAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskVetAssistantInputSchema = z.object({
  petDetails: z.object({
      name: z.string(),
      species: z.string(),
      breed: z.string(),
      age: z.string(),
      history: z.string(),
      careRequirements: z.string(),
  }),
  question: z.string().describe('The user\'s question about the pet.'),
});
export type AskVetAssistantInput = z.infer<typeof AskVetAssistantInputSchema>;

const AskVetAssistantOutputSchema = z.object({
  answer: z.string().describe("An expert answer to the user's question, as if from a veterinary assistant."),
});
export type AskVetAssistantOutput = z.infer<typeof AskVetAssistantOutputSchema>;

export async function askVetAssistant(input: AskVetAssistantInput): Promise<AskVetAssistantOutput> {
  return askVetAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askVetAssistantPrompt',
  input: {schema: AskVetAssistantInputSchema},
  output: {schema: AskVetAssistantOutputSchema},
  prompt: `You are an AI Veterinary Assistant for a pet adoption agency. Your role is to provide helpful, general advice based on a pet's profile in response to questions from potential adopters.

You are not a real veterinarian and cannot provide medical diagnoses. ALWAYS include a disclaimer in your answer: "Remember, I'm an AI assistant, not a substitute for a real veterinarian. Please consult a professional for any serious health concerns."

A user is asking about a pet named {{{petDetails.name}}}. Here are the pet's details:
- Species: {{{petDetails.species}}}
- Breed: {{{petDetails.breed}}}
- Age: {{{petDetails.age}}}
- History: {{{petDetails.history}}}
- Known Care Requirements: {{{petDetails.careRequirements}}}

Here is the user's question:
"{{{question}}}"

Please provide a helpful, friendly, and safe answer to their question based *only* on the information provided. Structure your answer in 1-2 paragraphs.
`,
});

const askVetAssistantFlow = ai.defineFlow(
  {
    name: 'askVetAssistantFlow',
    inputSchema: AskVetAssistantInputSchema,
    outputSchema: AskVetAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
