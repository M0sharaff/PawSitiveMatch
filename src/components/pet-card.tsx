import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Pet } from '@/lib/data';
import { MapPin } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Link href={`/pets/${pet.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="overflow-hidden">
          <Image
            src={pet.photos[0]}
            alt={`A photo of ${pet.name}`}
            data-ai-hint={`${pet.species} ${pet.breed}`}
            width={600}
            height={400}
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">{pet.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{pet.description}</p>
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4"/>
            <span>{pet.location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">{pet.age}</Badge>
            <Badge variant="secondary">{pet.size}</Badge>
            <Badge variant="secondary">{pet.gender}</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
