
import { generatePetBioAction } from '@/app/actions';
import type { GeneratePetBioInput } from '@/ai/flows/generate-pet-bio';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { 
    name, 
    species, 
    breed, 
    traits 
  } = (await req.json()) as GeneratePetBioInput;
  
  const result = await generatePetBioAction({ name, species, breed, traits });

  return new Response(result.text as ReadableStream);
}
