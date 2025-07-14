'use server';

import {
  getPetRecommendations,
  type PetPreferencesInput,
  type PetRecommendationsOutput,
} from '@/ai/flows/personalized-pet-recommendations';

export async function getPetRecommendationsAction(
  input: PetPreferencesInput
): Promise<{ recommendations: PetRecommendationsOutput | null; error: string | null }> {
  try {
    // Adding a placeholder location if not provided, as it's required by the AI model.
    const finalInput = {
        ...input,
        location: input.location || 'Any',
    };

    const recommendations = await getPetRecommendations(finalInput);
    if (!recommendations) {
        return { recommendations: null, error: 'No recommendations found.' };
    }
    return { recommendations, error: null };
  } catch (error) {
    console.error(error);
    return { recommendations: null, error: 'An unexpected error occurred while fetching recommendations.' };
  }
}
