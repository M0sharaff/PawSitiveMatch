'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Heart, Settings, Trash2 } from 'lucide-react';
import Link from 'next/link';
import useSavedPets from '@/hooks/use-saved-pets';
import PetCard from '@/components/pet-card';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


export default function ProfilePage() {
  const { savedPets, unsavePet, clearSavedPets } = useSavedPets();

  return (
    <motion.div 
      className="container mx-auto px-4 md:px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
        <User className="w-12 h-12 text-primary" />
        <div>
            <h1 className="text-3xl font-bold font-serif">My Profile</h1>
            <p className="text-muted-foreground">Manage your preferences and saved pets.</p>
        </div>
      </motion.div>
      
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <div className="flex items-center gap-3">
                            <Heart className="w-6 h-6 text-accent"/>
                            <CardTitle className="font-serif text-2xl">Saved Pets</CardTitle>
                        </div>
                        <CardDescription>
                          Here are the pets you've saved for later consideration.
                        </CardDescription>
                    </div>
                    {savedPets.length > 0 && (
                        <Button variant="destructive" size="sm" onClick={clearSavedPets}>
                           <Trash2 className="mr-2 h-4 w-4" />
                            Clear All
                        </Button>
                    )}
                </CardHeader>
                <CardContent>
                    {savedPets.length > 0 ? (
                        <motion.div 
                          className="grid sm:grid-cols-2 gap-6"
                          variants={containerVariants}
                        >
                            {savedPets.map(pet => (
                                <motion.div key={pet.id} variants={itemVariants}>
                                  <PetCard pet={pet} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center text-muted-foreground py-16">
                            <Heart className="mx-auto h-12 w-12 text-gray-300" />
                            <p className="mt-4">You haven't saved any pets yet.</p>
                            <Button variant="link" asChild className="mt-2">
                                <Link href="/pets">Start Browsing</Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="sticky top-24">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Settings className="w-6 h-6 text-accent"/>
                        <CardTitle className="font-serif text-2xl">My Preferences</CardTitle>
                    </div>
                    <CardDescription>
                    Update your preferences to get better pet recommendations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Your current preferences help our AI find the best match for you. Go to the homepage to get new recommendations based on different criteria.</p>
                    <Button asChild className="w-full">
                        <Link href="/#ai-recommendations">Update Preferences</Link>
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
