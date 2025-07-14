import { pets, type Pet } from '@/lib/data';
import PetCard from '@/components/pet-card';
import PetFilters from '@/components/pet-filters';

export const metadata = {
  title: 'Browse Pets - PawsitiveMatch',
  description: 'Find your new best friend from our available pets.',
};

type SearchParams = {
  species?: string;
  age?: string;
  size?: string;
  gender?: string;
  location?: string;
};

export default function PetsPage({ searchParams }: { searchParams: SearchParams }) {
  const filteredPets = pets.filter((pet) => {
    return (
      (!searchParams.species || pet.species === searchParams.species) &&
      (!searchParams.age || pet.age === searchParams.age) &&
      (!searchParams.size || pet.size === searchParams.size) &&
      (!searchParams.gender || pet.gender === searchParams.gender) &&
      (!searchParams.location || pet.location.toLowerCase().includes(searchParams.location.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
        <aside className="sticky top-20">
          <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Filter Pets</h2>
          <PetFilters />
        </aside>
        <main>
          {filteredPets.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold font-headline">No Pets Found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters to find more pets.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
