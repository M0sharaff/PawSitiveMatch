// src/ai/flows/personalized-pet-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized pet recommendations based on user profile and preferences.
 *
 * - getPetRecommendations - A function that takes user profile and preferences as input and returns personalized pet recommendations.
 * - PetPreferencesInput - The input type for the getPetRecommendations function.
 * - PetRecommendationsOutput - The return type for the getPetRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PetPreferencesInputSchema = z.object({
  species: z.string().describe('Preferred species of pet (e.g., dog, cat, bird).'),
  breed: z.string().optional().describe('Preferred breed of pet (e.g., Labrador, Siamese).'),
  age: z.string().describe('Preferred age of pet (e.g., baby, young, adult, senior).'),
  gender: z.string().describe('Preferred gender of pet (e.g., male, female).'),
  size: z.string().describe('Preferred size of pet (e.g., small, medium, large).'),
  location: z.string().describe('The user location to find pets nearby.'),
  lifestyle: z.string().describe('User lifestyle (e.g., active, relaxed).'),
  temperament: z.string().describe('Desired temperament of pet (e.g., playful, calm).'),
});

export type PetPreferencesInput = z.infer<typeof PetPreferencesInputSchema>;

const PetRecommendationSchema = z.object({
  petId: z.string().describe('Unique identifier for the pet.'),
  name: z.string().describe('Name of the pet.'),
  species: z.string().describe('Species of the pet.'),
  breed: z.string().optional().describe('Breed of the pet.'),
  age: z.string().describe('Age of the pet.'),
  gender: z.string().describe('Gender of the pet.'),
  size: z.string().describe('Size of the pet.'),
  description: z.string().describe('Brief description of the pet.'),
  photoUrl: z.string().describe('URL of the pet photo.'),
  matchScore: z.number().describe('A score indicating how well the pet matches the user preferences, higher is better.'),
});

export type PetRecommendation = z.infer<typeof PetRecommendationSchema>;

const PetRecommendationsOutputSchema = z.array(PetRecommendationSchema);

export type PetRecommendationsOutput = z.infer<typeof PetRecommendationsOutputSchema>;

export async function getPetRecommendations(input: PetPreferencesInput): Promise<PetRecommendationsOutput> {
  return personalizedPetRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPetRecommendationsPrompt',
  input: {schema: PetPreferencesInputSchema},
  output: {schema: PetRecommendationsOutputSchema},
  prompt: `You are an AI assistant that recommends pets for adoption based on user preferences.

  Given the following user preferences, generate a list of pet recommendations that match these preferences closely. Include a match score between 0 and 1 indicating how well the pet matches the user's preferences.

  User Preferences:
  - Species: {{{species}}}
  - Breed: {{{breed}}}
  - Age: {{{age}}}
  - Gender: {{{gender}}}
  - Size: {{{size}}}
  - Location: {{{location}}}
  - Lifestyle: {{{lifestyle}}}
  - Temperament: {{{temperament}}}

  Format the response as a JSON array of pet objects, each containing the following fields:
  - petId: Unique identifier for the pet.
  - name: Name of the pet.
  - species: Species of the pet.
  - breed: Breed of the pet.
  - age: Age of the pet.
  - gender: Gender of the pet.
  - size: Size of the pet.
  - description: Brief description of the pet.
  - photoUrl: URL of the pet photo.
  - matchScore: A number between 0 and 1 indicating how well the pet matches the user preferences (higher is better).
  `,
});

const personalizedPetRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedPetRecommendationsFlow',
    inputSchema: PetPreferencesInputSchema,
    outputSchema: PetRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
