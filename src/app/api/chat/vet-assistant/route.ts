
import { askVetAssistantAction } from '@/app/actions';
import type { AskVetAssistantInput } from '@/ai/flows/ask-vet-assistant';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { 
    petDetails, 
    question 
  } = (await req.json()) as AskVetAssistantInput;
  
  const result = await askVetAssistantAction({ petDetails, question });

  return new Response(result.text as ReadableStream);
}
