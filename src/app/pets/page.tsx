// src/app/pets/page.tsx
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import PetsPageClient from '@/components/pets-page-client';

function PetsPageSkeleton() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
                <div className="sticky top-20">
                    <Skeleton className="h-[500px] w-full" />
                </div>
                <main>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                    </div>
                </main>
            </div>
        </div>
    );
}


export default function PetsPage() {
  return (
    <Suspense fallback={<PetsPageSkeleton />}>
      <PetsPageClient />
    </Suspense>
  );
}
