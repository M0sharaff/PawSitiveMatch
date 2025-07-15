// src/app/pets/[id]/page.tsx
import { pets } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PawPrint, Heart, Stethoscope, Bone, Camera } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry-form';
import { GenerateBio } from '@/components/generate-bio';
import { VetAssistant } from '@/components/vet-assistant';
import { GenerateImage } from '@/components/generate-image';
import { SavePetButton } from '@/components/save-pet-button';
import { AdoptionProcessTracker } from '@/components/adoption-process-tracker';
import { motion } from 'framer-motion';

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

  return (
    <motion.div 
      className="container mx-auto px-4 md:px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {pet.photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={photo}
                    alt={`Photo ${index + 1} of ${pet.name}`}
                    data-ai-hint={`${pet.species.toLowerCase()} ${pet.breed.toLowerCase()}`}
                    width={800}
                    height={600}
                    className="w-full object-cover aspect-[4/3]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/wcAAgAB/epv2AAAAABJRU5ErkJggg=="
                  />
                </CarouselItem>
              ))}
               <CarouselItem>
                 <GenerateImage pet={pet} />
               </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary font-serif">{pet.name}</h1>
              <p className="text-xl text-muted-foreground">{pet.breed}</p>
            </div>
            <SavePetButton pet={pet} />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>{pet.age}</Badge>
            <Badge>{pet.gender}</Badge>
            <Badge>{pet.size}</Badge>
            <Badge>{pet.species}</Badge>
          </div>
          
          <GenerateBio pet={pet} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
             <InquiryForm petName={pet.name} />
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <AdoptionProcessTracker />
        
        <Card>
            <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">About {pet.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Heart className="w-6 h-6 text-accent" />
                        <h3 className="font-bold text-lg">Personality & Traits</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {pet.traits.map((trait) => (
                            <Badge key={trait} variant="secondary">{trait}</Badge>
                        ))}
                    </div>
                </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Stethoscope className="w-6 h-6 text-accent" />
                        <h3 className="font-bold text-lg">History</h3>
                    </div>
                    <p className="text-muted-foreground">{pet.history}</p>
                </div>
                 <div className="space-y-4 md:col-span-2">
                    <div className="flex items-center gap-3">
                        <Bone className="w-6 h-6 text-accent" />
                        <h3 className="font-bold text-lg">Care Needs</h3>
                    </div>
                    <p className="text-muted-foreground">{pet.careRequirements}</p>

                </div>
            </CardContent>
        </Card>

        <VetAssistant pet={pet} />
      </div>

    </motion.div>
  );
}
