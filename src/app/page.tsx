import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RecommendationForm } from "@/components/recommendation-form";
import { ArrowRight, Search, Heart, Home as HomeIcon, Star, Users, Dog } from "lucide-react";
import { pets } from "@/lib/data";
import PetCard from "@/components/pet-card";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              We connect loving homes with pets in need. Start your journey to find a new best friend today. Every pet deserves a second chance at happiness.
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
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <Users className="w-10 h-10 text-primary"/>
                <p className="text-2xl font-bold">1,200+</p>
                <p className="text-muted-foreground">Happy Adopters</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Dog className="w-10 h-10 text-primary"/>
                <p className="text-2xl font-bold">1,500+</p>
                <p className="text-muted-foreground">Pets Homed</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-10 h-10 text-primary"/>
                <p className="text-2xl font-bold">5-Star</p>
                <p className="text-muted-foreground">Average Rating</p>
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
                These lovely souls are looking for a warm lap and a loving heart. Get to know some of our available friends.
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
                  Meet All Our Friends
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
                    Get AI-Powered Recommendations
                 </h2>
                 <p className="mt-4 text-lg text-foreground/80">
                    Our smart matching tool goes beyond breeds. It analyzes your personality, lifestyle, and home environment to find a pet with a compatible temperament, ensuring a truly harmonious match. Just answer a few questions to meet your perfect companion.
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
                Adopting a pet is a rewarding experience. We've made the process simple, transparent, and supportive.
             </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Search className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold">1. Find Your Pet</h3>
              <p className="mt-2 text-foreground/70">Use our smart filters or AI-powered recommendation tool to browse available pets. Read their stories and fall in love.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Heart className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold">2. Schedule a Meetup</h3>
              <p className="mt-2 text-foreground/70">Once you find a potential friend, submit an inquiry to schedule a visit. This is the perfect time to get to know them.</p>
            </div>
             <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <HomeIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold">3. Welcome Them Home</h3>
              <p className="mt-2 text-foreground/70">After a successful meeting, complete the final adoption paperwork. We'll provide support to ensure a smooth transition for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto">
               <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  Stories from Our Community
               </h2>
               <p className="mt-4 text-lg text-foreground/80">
                  Hear from families who found their furry, feathery, or scaly friend through PawsitiveMatch.
               </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Avatar>
                                <AvatarImage src="https://placehold.co/40x40.png" alt="@jane" data-ai-hint="person face" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">Jane & "Buddy"</p>
                                <p className="text-sm text-muted-foreground">Adopted in 2023</p>
                            </div>
                        </div>
                        <blockquote className="text-foreground/80 italic">"The process was so smooth, and the AI recommendation was spot on. Buddy is the perfect addition to our family. We can't imagine life without him!"</blockquote>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                           <Avatar>
                                <AvatarImage src="https://placehold.co/40x40.png" alt="@mark" data-ai-hint="person face" />
                                <AvatarFallback>MS</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">Mark & "Lucy"</p>
                                <p className="text-sm text-muted-foreground">Adopted in 2024</p>
                            </div>
                        </div>
                        <blockquote className="text-foreground/80 italic">"I was looking for a calm companion, and the detailed profiles helped me find Lucy. The vet assistant answered all my questions. Highly recommend!"</blockquote>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                         <div className="flex items-center gap-4 mb-4">
                           <Avatar>
                                <AvatarImage src="https://placehold.co/40x40.png" alt="@sara" data-ai-hint="person face" />
                                <AvatarFallback>SP</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">The Smith Family & "Max"</p>
                                <p className="text-sm text-muted-foreground">Adopted in 2023</p>
                            </div>
                        </div>
                        <blockquote className="text-foreground/80 italic">"We found our gentle giant Max here. The staff and volunteers were incredibly supportive throughout the entire adoption journey."</blockquote>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Ready to Find Your Friend?</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                Your new best friend is waiting. Browse our available pets, or help us care for them by making a donation.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
                <Button asChild size="lg">
                  <Link href="/pets">
                    Meet The Pets
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="#">
                      <Heart className="mr-2 h-5 w-5" /> Donate Now
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
