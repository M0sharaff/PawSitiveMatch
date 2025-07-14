import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pets } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Heart, Search, User, PawPrint, MessageSquare, Bone } from "lucide-react";

export default function Home() {
  // In V2, these would be fetched from Firestore
  const carouselPets = pets.slice(0, 5); 
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
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter !font-serif text-primary">
              Your New Best Friend Awaits.
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              We use smart technology and a whole lot of heart to connect wonderful pets with loving homes. Begin your journey to unconditional love.
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
            <Carousel 
              opts={{ loop: true }}
              className="w-full"
              plugins={[
                  require('embla-carousel-autoplay')({ delay: 4000, stopOnInteraction: true }),
              ]}
            >
              <CarouselContent>
                {carouselPets.map((pet) => (
                  <CarouselItem key={pet.id}>
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-2xl shadow-2xl">
                        <CardContent className="p-0">
                          <Image
                            src={pet.photos[0]}
                            alt={`Photo of ${pet.name}`}
                            data-ai-hint={`${pet.species} ${pet.breed}`}
                            width={800}
                            height={800}
                            className="w-full aspect-square object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 animate-fade-in-scroll">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <CheckCircle className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-bold">Verified Profiles</h3>
              <p className="mt-2 text-foreground/70">Every pet profile is carefully reviewed, ensuring you get accurate information about their history, health, and temperament.</p>
            </div>
            <div className="flex flex-col items-center p-6 animate-fade-in-scroll">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <PawPrint className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-bold">Smart Matching</h3>
              <p className="mt-2 text-foreground/70">Our AI-powered tools go beyond breed, matching your lifestyle and personality with the perfect pet companion for a lifelong bond.</p>
            </div>
            <div className="flex flex-col items-center p-6 animate-fade-in-scroll">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <MessageSquare className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-bold">Easy Inquiries</h3>
              <p className="mt-2 text-foreground/70">Found a potential friend? Submit an inquiry with a single click and get connected with their caretaker to schedule a meet & greet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
               <h2 className="text-4xl font-bold tracking-tight text-primary">Happy Tails from Our Community</h2>
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
                                <p className="font-semibold">{testimonial.userName}</p>
                            </div>
                        </div>
                        <blockquote className="text-foreground/80 italic">"{testimonial.message}"</blockquote>
                    </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold tracking-tight text-primary">Your Adoption Journey</h2>
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
              <h3 className="text-xl font-bold">Browse Pets</h3>
              <p className="mt-2 text-foreground/70">Use our smart filters or AI recommendations to discover available pets. Read their stories and fall in love.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                 <span className="text-5xl font-bold mr-2">2</span>
                <Heart className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold">Submit Inquiry</h3>
              <p className="mt-2 text-foreground/70">Once you find a potential friend, submit an inquiry to schedule a visit and get to know them.</p>
            </div>
             <div className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                <span className="text-5xl font-bold mr-2">3</span>
                <Bone className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold">Meet & Adopt</h3>
              <p className="mt-2 text-foreground/70">After a successful meeting, complete the final adoption paperwork and welcome your new companion home.</p>
            </div>
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
            layout="fill"
            objectFit="cover"
            className="opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Change a Life (Including Yours)?</h2>
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

// Add fade-in scroll animation styles to globals.css if they don't exist
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInZoom { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
// .animate-fade-in { animation: fadeIn 1s ease-in-out; }
// .animate-fade-in-zoom { animation: fadeInZoom 1s ease-in-out; }
// .animate-fade-in-scroll { @apply motion-safe:animate-fadeIn; }
// Ensure tailwind config has keyframes and animations for these
