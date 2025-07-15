
import { pets } from '@/lib/data';
import { notFound } from 'next/navigation';
import PetDetailPageClient from '@/components/pet-detail-page-client';

// This function tells Next.js which pet IDs to pre-render at build time.
export async function generateStaticParams() {
  return pets.map((pet) => ({
    id: pet.id.toString(),
  }));
}

export default function PetDetailPage({ params }: { params: { id: string } }) {
  const pet = pets.find((p) => p.id.toString() === params.id);

  // If no pet is found for the given ID, show a 404 page.
  if (!pet) {
    notFound();
  }

  return <PetDetailPageClient pet={pet} />;
}
