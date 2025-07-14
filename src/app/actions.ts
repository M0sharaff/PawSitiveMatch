'use server';

import {
  getPetRecommendations,
  type PetPreferencesInput,
  type PetRecommendationsOutput,
} from '@/ai/flows/personalized-pet-recommendations';
import {
  generatePetBio,
  type GeneratePetBioInput,
  type GeneratePetBioOutput,
} from '@/ai/flows/generate-pet-bio';
import {
  askVetAssistant,
  type AskVetAssistantInput,
  type AskVetAssistantOutput,
} from '@/ai/flows/ask-vet-assistant';

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

export async function generatePetBioAction(
  input: GeneratePetBioInput
): Promise<{ bio: GeneratePetBioOutput | null; error: string | null }> {
  try {
    const result = await generatePetBio(input);
    if (!result || !result.bio) {
      return { bio: null, error: 'Could not generate a bio.' };
    }
    return { bio: result, error: null };
  } catch (error) {
    console.error(error);
    return { bio: null, error: 'An unexpected error occurred while generating the bio.' };
  }
}

export async function askVetAssistantAction(
  input: AskVetAssistantInput
): Promise<{ result: AskVetAssistantOutput | null; error: string | null }> {
    try {
        const result = await askVetAssistant(input);
        if (!result || !result.answer) {
            return { result: null, error: 'Could not get an answer.' };
        }
        return { result, error: null };
    } catch (error) {
        console.error(error);
        return { result: null, error: 'An unexpected error occurred while getting an answer.' };
    }
}
