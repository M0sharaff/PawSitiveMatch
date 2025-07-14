import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pets } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Heart, Search, User, PawPrint, MessageSquare, Bone } from "lucide-react";
import { RecommendationForm } from "@/components/recommendation-form";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  const testimonials = [
    {
      photoURL: "https://placehold.co/40x40.png",
      userName: "Sarah L. & 'Buddy'",
      message: "The AI matching was incredible! It found us Buddy, who fits our active lifestyle perfectly. The whole process was so smooth and supportive. We couldn't be happier.",
      petName: "Buddy"
    },
    {
      photoURL: "https://placehold.co/40x40.png",
      userName: "Mike D. & 'Luna'",
      message: "I was nervous about adopting, but PawsitiveMatch made it easy. The pet profiles are so detailed, and I found my calm, cuddly Luna in just a few days. Highly recommend!",
      petName: "Luna"
    },
    {
      photoURL: "https://placehold.co/40x40.png",
      userName: "The Chen Family & 'Rocky'",
      message: "As a family with kids, finding the right pet was crucial. The 'Verified Profiles' gave us peace of mind. Rocky is the gentle, playful giant we were looking for. Thank you!",
      petName: "Rocky"
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary font-serif">
              Find Your Forever Friend.
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              Discover the joy of pet adoption. We use smart technology and a whole lot of heart to connect wonderful pets with loving homes. Begin your journey to unconditional love today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/pets">Find Your Pet</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                <Link href="/pets">Browse All</Link>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto animate-fade-in-zoom">
            <HeroCarousel />
          </div>
        </div>
      </section>
      
      {/* Featured Pets Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Featured Pets</h2>
             <p className="mt-4 text-lg text-foreground/80">
                Meet some of our adorable friends waiting for a loving home. One of them might just be your perfect match!
             </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pets.slice(0,3).map(pet => (
                    <Card key={pet.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
                        <Image src={pet.photos[0]} alt={pet.name} data-ai-hint={`${pet.species} ${pet.breed}`} width={400} height={300} className="w-full object-cover aspect-[4/3] rounded-t-lg" />
                        <CardContent className="pt-6 flex-grow flex flex-col">
                           <h3 className="font-bold text-xl text-primary font-serif">{pet.name}</h3>
                           <p className="text-sm text-muted-foreground">{pet.breed}</p>
                           <p className="text-sm text-foreground/80 mt-2 flex-grow">{pet.description.substring(0, 100)}...</p>
                           <Button asChild className="mt-4 w-full"><Link href={`/pets/${pet.id}`}>View Profile</Link></Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendation Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
               <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Let Our AI Find Your Perfect Match</h2>
               <p className="mt-4 text-lg text-foreground/80">
                  Finding the right pet is about more than just breed. Our AI-powered tool analyzes your lifestyle, personality, and preferences to suggest a companion who truly fits your life. It's the smarter, more heartfelt way to find your new best friend.
               </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <RecommendationForm />
                </CardContent>
              </Card>
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Your Adoption Journey</h2>
             <p className="mt-4 text-lg text-foreground/80">
                Adopting a pet is a special experience. We've made the process simple, transparent, and supportive every step of the way.
             </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                <span className="text-5xl font-bold mr-2">1</span>
                <Search className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold font-serif">Browse & Discover</h3>
              <p className="mt-2 text-foreground/70">Use our smart filters or AI recommendations to explore available pets. Read their stories, view their photos, and fall in love with their unique personalities.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                 <span className="text-5xl font-bold mr-2">2</span>
                <MessageSquare className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold font-serif">Meet & Greet</h3>
              <p className="mt-2 text-foreground/70">Once you find a potential friend, submit an inquiry to schedule a visit. This is the perfect chance to get to know them in a relaxed setting and see if the connection is right.</p>
            </div>
             <div className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                <span className="text-5xl font-bold mr-2">3</span>
                <Heart className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold font-serif">Welcome Home</h3>
              <p className="mt-2 text-foreground/70">After a successful meeting, complete the final adoption paperwork. Our team will provide all the resources you need to welcome your new companion home.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
               <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Happy Tails from Our Community</h2>
               <p className="mt-4 text-lg text-foreground/80">
                  Hear from families who found their furry, feathery, or scaly friend through PawsitiveMatch.
               </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Avatar>
                                <AvatarImage src={testimonial.photoURL} alt={testimonial.userName} data-ai-hint="person face" />
                                <AvatarFallback>{testimonial.userName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold font-serif">{testimonial.userName}</p>
                            </div>
                        </div>
                        <blockquote className="text-foreground/80 italic">"{testimonial.message}"</blockquote>
                    </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-20 md:py-32 bg-gray-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Happy adopted pets"
            data-ai-hint="happy pets"
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Ready to Change a Life (Including Yours)?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Your new best friend is waiting. Start your search today and open your heart to a lifetime of unconditional love and companionship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="transition-transform hover:scale-105">
                  <Link href="/pets">Start Searching</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                    <Link href="/profile">
                      <User className="mr-2 h-5 w-5" /> Sign In to Save Favorites
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
