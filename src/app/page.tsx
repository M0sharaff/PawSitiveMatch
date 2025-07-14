import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RecommendationForm } from "@/components/recommendation-form";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
              Find Your Pawsitive Match
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Connecting loving homes with pets in need. Start your journey to find a new best friend today. Every pet deserves a second chance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/pets">
                  Browse Pets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="max-w-xl">
                 <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                    Personalized Recommendations
                 </h2>
                 <p className="mt-4 text-lg text-foreground/80">
                    Tell us about your lifestyle and preferences, and our AI-powered tool will find the perfect pet for you.
                 </p>
              </div>
              <div className="mt-8">
                <RecommendationForm />
              </div>
            </div>
            <div className="order-1 md:order-2">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="A happy dog"
                  data-ai-hint="happy dog"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-2xl object-cover aspect-square"
                />
            </div>
           </div>
        </div>
      </section>
    </div>
  );
}
