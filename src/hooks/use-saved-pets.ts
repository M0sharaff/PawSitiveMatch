
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Pet } from '@/lib/data';
import { useToast } from './use-toast';

const SAVED_PETS_KEY = 'pawsitivematch_saved_pets';

const useSavedPets = () => {
  const { toast } = useToast();
  const [savedPets, setSavedPets] = useState<Pet[]>([]);

  useEffect(() => {
    try {
      const savedItems = localStorage.getItem(SAVED_PETS_KEY);
      const pets = savedItems ? JSON.parse(savedItems) : [];
      setSavedPets(pets);
    } catch (error) {
        console.error("Could not load saved pets from localStorage", error);
        setSavedPets([]);
    }
  }, []);

  const saveToLocalStorage = (pets: Pet[]) => {
    try {
        localStorage.setItem(SAVED_PETS_KEY, JSON.stringify(pets));
    } catch (error) {
        console.error("Could not save pets to localStorage", error);
        toast({
            variant: 'destructive',
            title: 'Storage Error',
            description: 'Could not save your preferences.'
        })
    }
  };
  
  const isPetSaved = useCallback((petId: number) => {
    return savedPets.some(p => p.id === petId);
  }, [savedPets]);

  const toggleSave = useCallback((pet: Pet) => {
    const currentlySaved = isPetSaved(pet.id);
    let newSavedPets;
    if (currentlySaved) {
      newSavedPets = savedPets.filter(p => p.id !== pet.id);
      toast({ title: "Pet Unsaved", description: `${pet.name} has been removed from your profile.`});
    } else {
      newSavedPets = [...savedPets, pet];
      toast({ title: "Pet Saved!", description: `${pet.name} has been added to your profile.` });
    }
    setSavedPets(newSavedPets);
    saveToLocalStorage(newSavedPets);
  }, [savedPets, toast, isPetSaved]);
  
  const savePet = useCallback((pet: Pet) => {
    if (isPetSaved(pet.id)) return; // Don't save if already saved
    const newSavedPets = [...savedPets, pet];
    setSavedPets(newSavedPets);
    saveToLocalStorage(newSavedPets);
  }, [savedPets, isPetSaved]);

  const clearSavedPets = useCallback(() => {
    setSavedPets([]);
    saveToLocalStorage([]);
     toast({ title: "Cleared All", description: "All your saved pets have been removed.", variant: 'destructive' });
  }, [toast]);

  return { savedPets, isPetSaved, toggleSave, savePet, clearSavedPets };
};

export default useSavedPets;
