import { pets } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PawPrint, Heart, Stethoscope, Bone } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry-form';
import { GenerateBio } from '@/components/generate-bio';

export async function generateStaticParams() {
  return pets.map((pet) => ({
    id: pet.id.toString(),
  }));
}

export default function PetDetailPage({ params }: { params: { id: string } }) {
  const pet = pets.find((p) => p.id.toString() === params.id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {pet.photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={photo}
                    alt={`Photo ${index + 1} of ${pet.name}`}
                    data-ai-hint={`${pet.species} ${pet.breed}`}
                    width={800}
                    height={600}
                    className="w-full object-cover aspect-[4/3]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold text-primary">{pet.name}</h1>
          <p className="text-xl text-muted-foreground">{pet.breed}</p>
          <div className="flex flex-wrap gap-2">
            <Badge>{pet.age}</Badge>
            <Badge>{pet.gender}</Badge>
            <Badge>{pet.size}</Badge>
            <Badge>{pet.species}</Badge>
          </div>
          <GenerateBio pet={pet} />
          <div className="pt-4">
             <InquiryForm petName={pet.name} />
          </div>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
             <Heart className="w-8 h-8 text-accent" />
            <CardTitle className="font-headline text-2xl">Personality</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {pet.traits.map((trait) => (
                <Badge key={trait} variant="outline">{trait}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
             <Stethoscope className="w-8 h-8 text-accent" />
            <CardTitle className="font-headline text-2xl">History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{pet.history}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
             <Bone className="w-8 h-8 text-accent" />
            <CardTitle className="font-headline text-2xl">Care Needs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{pet.careRequirements}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
