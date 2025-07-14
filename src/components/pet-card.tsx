import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Pet } from '@/lib/data';
import { MapPin } from 'lucide-react';
import { SavePetButton } from './save-pet-button';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-card flex flex-col group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Link href={`/pets/${pet.id}`} className="block">
          <Image
            src={pet.photos[0]}
            alt={`A photo of ${pet.name}`}
            data-ai-hint={`${pet.species.toLowerCase()} ${pet.breed.toLowerCase()}`}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-2 right-2 z-10">
          <SavePetButton pet={pet} />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/pets/${pet.id}`} className="block">
          <h3 className="font-bold text-xl text-primary">{pet.name}</h3>
          <p className="text-sm text-muted-foreground">{pet.breed}</p>
        </Link>
        <div className="flex-grow mt-2">
          <p className="text-sm text-foreground/80 line-clamp-2">{pet.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          <MapPin className="h-4 w-4"/>
          <span>{pet.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary">{pet.age}</Badge>
          <Badge variant="secondary">{pet.size}</Badge>
          <Badge variant="secondary">{pet.gender}</Badge>
        </div>
      </div>
    </Card>
  );
}
