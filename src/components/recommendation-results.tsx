import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { PetRecommendation } from "@/ai/flows/personalized-pet-recommendations"
import PetCard from "./pet-card"
import type { Pet } from "@/lib/data"
import Link from "next/link"

interface RecommendationResultsProps {
  recommendations: PetRecommendation[]
}

export function RecommendationResults({ recommendations }: RecommendationResultsProps) {
  
  // Map the recommendation data to the Pet data structure
  const mappedPets: Pet[] = recommendations.map(rec => ({
    id: parseInt(rec.petId, 10), // The AI might return string IDs
    name: rec.name,
    species: rec.species as Pet['species'],
    breed: rec.breed || 'Mixed Breed',
    age: rec.age as Pet['age'],
    gender: rec.gender as Pet['gender'],
    size: rec.size as Pet['size'],
    location: 'AI Match', // Placeholder location
    description: rec.description,
    photos: [rec.photoUrl],
    traits: [`Match Score: ${Math.round(rec.matchScore * 100)}%`],
    history: 'This pet was recommended by our AI based on your preferences.',
    careRequirements: 'Please review the full profile for detailed care needs.',
  }));

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {mappedPets.map((pet) => (
          <CarouselItem key={pet.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Link href={`/pets/${pet.id}`} className="block h-full">
                <PetCard pet={pet} />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
