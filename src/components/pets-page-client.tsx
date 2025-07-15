// src/components/pets-page-client.tsx
'use client';

import PetFilters from '@/components/pet-filters';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Skeleton } from './ui/skeleton';
import PetsList from './pets-list';


function PetsListSkeleton() {
    return (
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-[400px] w-full" />
        </div>
    )
}

export default function PetsPageClient() {

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
            <Suspense fallback={<PetsListSkeleton />}>
                <PetsList />
            </Suspense>
        </main>
      </div>
    </div>
  );
}
