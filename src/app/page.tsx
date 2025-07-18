
'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pets } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageSquare, Heart, User } from "lucide-react";
import React from 'react';
import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/hero-carousel";
import PetCard from "@/components/pet-card";
import { Skeleton } from "@/components/ui/skeleton";

const RecommendationForm = React.lazy(() => import('@/components/recommendation-form'));

const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const STAGGER_CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const testimonials = [
    {
      photoURL: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
      userName: "Sarah L. & 'Buddy'",
      message: "The AI matching was incredible! It found us Buddy, who fits our active lifestyle perfectly. The whole process was so smooth and supportive. We couldn't be happier.",
      petName: "Buddy"
    },
    {
      photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      userName: "Mike D. & 'Luna'",
      message: "I was nervous about adopting, but PawsitiveMatch made it easy. The pet profiles are so detailed, and I found my calm, cuddly Luna in just a few days. Highly recommend!",
      petName: "Luna"
    },
    {
      photoURL: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop",
      userName: "The Chen Family & 'Rocky'",
      message: "As a family with kids, finding the right pet was crucial. The 'Verified Profiles' gave us peace of mind. Rocky is the gentle, playful giant we were looking for. Thank you!",
      petName: "Rocky"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={STAGGER_CONTAINER_VARIANTS}
      className="flex flex-col overflow-x-hidden bg-background"
    >
      {/* Hero Section */}
      <section className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
          <motion.div 
            className="flex flex-col justify-center space-y-6"
            variants={STAGGER_CONTAINER_VARIANTS}
          >
            <motion.h1 variants={FADE_IN_VARIANTS} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-primary font-serif">
              Find Your Forever Friend.
            </motion.h1>
            <motion.p variants={FADE_IN_VARIANTS} className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
              Discover the joy of pet adoption. We use smart technology and a whole lot of heart to connect wonderful pets with loving homes. Begin your journey to unconditional love today.
            </motion.p>
            <motion.div variants={FADE_IN_VARIANTS} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/pets">Find Your Pet</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                <Link href="/pets">Browse All</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </section>
      
      {/* Featured Pets Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={FADE_IN_VARIANTS}
          >
             <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Featured Pets</h2>
             <p className="mt-4 text-lg text-foreground/80">
                Meet some of our adorable friends waiting for a loving home. One of them might just be your perfect match!
             </p>
          </motion.div>
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={STAGGER_CONTAINER_VARIANTS}
          >
              {pets.slice(0,3).map(pet => (
                  <motion.div key={pet.id} variants={FADE_IN_VARIANTS}>
                    <PetCard pet={pet} />
                  </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* AI Recommendation Section */}
      <section id="ai-recommendations" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={FADE_IN_VARIANTS}
            >
               <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Let Our AI Find Your Perfect Match</h2>
               <p className="mt-4 text-lg text-foreground/80">
                  Finding the right pet is about more than just breed. Our AI-powered tool analyzes your lifestyle, personality, and preferences to suggest a companion who truly fits your life. It's the smarter, more heartfelt way to find your new best friend.
               </p>
            </motion.div>
            <motion.div 
              className="mt-12 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={FADE_IN_VARIANTS}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <React.Suspense fallback={<RecommendationFormSkeleton />}>
                    <RecommendationForm />
                  </React.Suspense>
                </CardContent>
              </Card>
            </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={FADE_IN_VARIANTS}
          >
             <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Your Adoption Journey</h2>
             <p className="mt-4 text-lg text-foreground/80">
                Adopting a pet is a special experience. We've made the process simple, transparent, and supportive every step of the way.
             </p>
          </motion.div>
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={STAGGER_CONTAINER_VARIANTS}
          >
            <motion.div variants={FADE_IN_VARIANTS} className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                <span className="text-5xl font-bold mr-2">1</span>
                <Search className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold font-serif">Browse & Discover</h3>
              <p className="mt-2 text-foreground/70">Use our smart filters or AI recommendations to explore available pets. Read their stories, view their photos, and fall in love with their unique personalities.</p>
            </motion.div>
            <motion.div variants={FADE_IN_VARIANTS} className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                 <span className="text-5xl font-bold mr-2">2</span>
                <MessageSquare className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold font-serif">Meet & Greet</h3>
              <p className="mt-2 text-foreground/70">Once you find a potential friend, submit an inquiry to schedule a visit. This is the perfect chance to get to know them in a relaxed setting and see if the connection is right.</p>
            </motion.div>
             <motion.div variants={FADE_IN_VARIANTS} className="flex flex-col items-center p-6">
              <div className="flex items-center justify-center text-primary mb-4">
                <span className="text-5xl font-bold mr-2">3</span>
                <Heart className="w-12 h-12"/>
              </div>
              <h3 className="text-xl font-bold font-serif">Welcome Home</h3>
              <p className="mt-2 text-foreground/70">After a successful meeting, complete the final adoption paperwork. Our team will provide all the resources you need to welcome your new companion home.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={FADE_IN_VARIANTS}
            >
               <h2 className="text-4xl font-bold tracking-tight text-primary font-serif">Happy Tails from Our Community</h2>
               <p className="mt-4 text-lg text-foreground/80">
                  Hear from families who found their furry, feathery, or scaly friend through PawsitiveMatch.
               </p>
            </motion.div>
            <motion.div 
              className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={STAGGER_CONTAINER_VARIANTS}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={FADE_IN_VARIANTS}>
                  <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-20 md:py-32 bg-gray-800 text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Happy adopted pets"
            data-ai-hint="happy pets"
            fill
            className="object-cover opacity-20 blur-sm"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/wcAAgAB/epv2AAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-serif"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={FADE_IN_VARIANTS}
            >
              Ready to Change a Life (Including Yours)?
            </motion.h2>
            <motion.p 
              className="mt-4 max-w-2xl mx-auto text-lg text-white/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={FADE_IN_VARIANTS}
              transition={{ delay: 0.2 }}
            >
              Your new best friend is waiting. Start your search today and open your heart to a lifetime of unconditional love and companionship.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={FADE_IN_VARIANTS}
              transition={{ delay: 0.4 }}
            >
                <Button asChild size="lg" className="transition-transform hover:scale-105">
                  <Link href="/pets">Start Searching</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                    <Link href="/profile">
                      <User className="mr-2 h-5 w-5" /> Sign In to Save Favorites
                    </Link>
                </Button>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}


function RecommendationFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
         <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  )
}
