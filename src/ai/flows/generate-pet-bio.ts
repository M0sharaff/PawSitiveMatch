'use server';

/**
 * @fileOverview Generates a creative and engaging biography for a pet.
 *
 * - generatePetBio - A function that takes pet details and generates a bio.
 * - GeneratePetBioInput - The input type for the generatePetBio function.
 * - GeneratePetBioOutput - The return type for the generatePetBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePetBioInputSchema = z.object({
  name: z.string().describe('The name of the pet.'),
  species: z.string().describe('The species of the pet (e.g., Dog, Cat).'),
  breed: z.string().describe('The breed of the pet.'),
  traits: z.array(z.string()).describe('A list of personality traits of the pet.'),
});
export type GeneratePetBioInput = z.infer<typeof GeneratePetBioInputSchema>;

const GeneratePetBioOutputSchema = z.object({
  bio: z.string().describe("A creative and engaging biography for the pet, written in the first person from the pet's perspective."),
});
export type GeneratePetBioOutput = z.infer<typeof GeneratePetBioOutputSchema>;

export async function generatePetBio(input: GeneratePetBioInput): Promise<GeneratePetBioOutput> {
  return generatePetBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePetBioPrompt',
  input: {schema: GeneratePetBioInputSchema},
  output: {schema: GeneratePetBioOutputSchema},
  prompt: `You are a creative writer for a pet adoption agency. Your task is to write a warm, friendly, and engaging biography for a pet, from the pet's perspective (in the first person).

The goal is to create an emotional connection with potential adopters. Make the bio about 2-3 short paragraphs.

Use the following information about the pet:
- Name: {{{name}}}
- Species: {{{species}}}
- Breed: {{{breed}}}
- Personality Traits: {{#each traits}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Generate the biography and return it in the 'bio' field.
`,
});

const generatePetBioFlow = ai.defineFlow(
  {
    name: 'generatePetBioFlow',
    inputSchema: GeneratePetBioInputSchema,
    outputSchema: GeneratePetBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
