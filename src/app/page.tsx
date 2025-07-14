import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RecommendationForm } from "@/components/recommendation-form";
import { ArrowRight, Search, Heart, Home as HomeIcon } from "lucide-react";
import { pets } from "@/lib/data";
import PetCard from "@/components/pet-card";

export default function Home() {
  const featuredPets = pets.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Find Your Forever Friend
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
              We connect loving homes with pets in need. Start your journey to find a new best friend today. Every pet deserves a second chance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/pets">
                  Browse Pets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-pets" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto">
             <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Featured Pets
             </h2>
             <p className="mt-4 text-lg text-foreground/80">
                These furry friends are waiting for a loving home.
             </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
                <Link href="/pets">
                  View All Pets
                </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="recommendations" className="w-full py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="max-w-xl">
                 <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Get Personalized Recommendations
                 </h2>
                 <p className="mt-4 text-lg text-foreground/80">
                    Not sure where to start? Tell us about your lifestyle and preferences, and our AI-powered tool will find the perfect pet for you.
                 </p>
              </div>
              <div className="mt-8 bg-card p-6 rounded-lg shadow-sm border">
                <RecommendationForm />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
                <Image
                  src="https://placehold.co/500x600.png"
                  alt="A happy dog being held by its owner"
                  data-ai-hint="happy dog owner"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl object-cover"
                />
            </div>
           </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto">
             <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Your Adoption Journey
             </h2>
             <p className="mt-4 text-lg text-foreground/80">
                Finding your new best friend is simple. Here’s how it works.
             </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Search className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold">1. Search for a Pet</h3>
              <p className="mt-2 text-foreground/70">Browse our available pets or use the recommendation tool to find your perfect match.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Heart className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold">2. Meet & Greet</h3>
              <p className="mt-2 text-foreground/70">Submit an inquiry to schedule a visit with the pet you're interested in.</p>
            </div>
             <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <HomeIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold">3. Take Them Home</h3>
              <p className="mt-2 text-foreground/70">Complete the adoption process and welcome your new companion into your family.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
