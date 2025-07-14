// src/app/pets/page.tsx
'use client';

import { pets, type Pet } from '@/lib/data';
import PetCard from '@/components/pet-card';
import PetFilters from '@/components/pet-filters';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function PetsPage() {
  const searchParams = useSearchParams();
  const species = searchParams.get('species');
  const age = searchParams.get('age');
  const size = searchParams.get('size');
  const gender = searchParams.get('gender');
  const location = searchParams.get('location');

  const filteredPets = pets.filter((pet) => {
    return (
      (!species || pet.species === species) &&
      (!age || pet.age === age) &&
      (!size || pet.size === size) &&
      (!gender || pet.gender === gender) &&
      (!location || pet.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
        <motion.aside 
          className="sticky top-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Filter Pets</h2>
          <PetFilters />
        </motion.aside>
        <main>
          {filteredPets.length > 0 ? (
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPets.map((pet) => (
                <motion.div key={pet.id} variants={itemVariants}>
                  <PetCard pet={pet} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3 className="text-2xl font-bold font-headline">No Pets Found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters to find more pets.</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
