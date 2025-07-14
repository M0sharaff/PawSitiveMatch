import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { PetRecommendationsOutput } from "@/ai/flows/personalized-pet-recommendations"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface RecommendationResultsProps {
  recommendations: PetRecommendationsOutput
}

export function RecommendationResults({ recommendations }: RecommendationResultsProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {recommendations.map((pet) => (
          <CarouselItem key={pet.petId} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">{pet.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={pet.photoUrl || 'https://placehold.co/600x400.png'}
                    alt={`Photo of ${pet.name}`}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-video mb-4"
                  />
                  <p className="text-sm text-muted-foreground mb-2">{pet.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="secondary">{pet.breed}</Badge>
                      <Badge variant="secondary">{pet.age}</Badge>
                      <Badge variant="secondary">{pet.size}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <div className="text-sm font-bold text-primary">
                        Match: {Math.round(pet.matchScore * 100)}%
                    </div>
                   <Button variant="outline">View Profile</Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
