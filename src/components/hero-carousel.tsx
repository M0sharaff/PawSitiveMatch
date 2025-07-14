'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { pets } from "@/lib/data";

export function HeroCarousel() {
  const carouselPets = pets.slice(0, 5); 

  return (
    <Carousel 
      opts={{ loop: true }}
      className="w-full"
      plugins={[
        Autoplay({ delay: 4000, stopOnInteraction: true }),
      ]}
    >
      <CarouselContent>
        {carouselPets.map((pet) => (
          <CarouselItem key={pet.id}>
            <div className="p-1">
              <Card className="overflow-hidden rounded-2xl shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={pet.photos[0]}
                    alt={`Photo of ${pet.name}`}
                    data-ai-hint={`${pet.species.toLowerCase()} ${pet.breed.toLowerCase()}`}
                    width={800}
                    height={800}
                    className="w-full aspect-square object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
