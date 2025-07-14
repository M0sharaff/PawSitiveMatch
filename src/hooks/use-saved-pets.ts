'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Pet } from '@/lib/data';
import { useToast } from './use-toast';

const SAVED_PETS_KEY = 'pawsitivematch_saved_pets';

const useSavedPets = (petId?: number) => {
  const { toast } = useToast();
  const [savedPets, setSavedPets] = useState<Pet[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const savedItems = localStorage.getItem(SAVED_PETS_KEY);
      const pets = savedItems ? JSON.parse(savedItems) : [];
      setSavedPets(pets);
      if (petId) {
        setIsSaved(pets.some((p: Pet) => p.id === petId));
      }
    } catch (error) {
        console.error("Could not load saved pets from localStorage", error);
        setSavedPets([]);
    }
  }, [petId]);

  const saveToLocalStorage = (pets: Pet[]) => {
    try {
        localStorage.setItem(SAVED_PETS_KEY, JSON.stringify(pets));
    } catch (error) {
        console.error("Could not save pets to localStorage", error);
    }
  };

  const savePet = useCallback((pet: Pet) => {
    const newSavedPets = [...savedPets, pet];
    setSavedPets(newSavedPets);
    saveToLocalStorage(newSavedPets);
    if(pet.id === petId) setIsSaved(true);
    toast({ title: "Pet Saved!", description: `${pet.name} has been added to your profile.` });
  }, [savedPets, petId, toast]);

  const unsavePet = useCallback((petToRemove: Pet) => {
    const newSavedPets = savedPets.filter(p => p.id !== petToRemove.id);
    setSavedPets(newSavedPets);
    saveToLocalStorage(newSavedPets);
    if(petToRemove.id === petId) setIsSaved(false);
    toast({ title: "Pet Unsaved", description: `${petToRemove.name} has been removed from your profile.`, variant: 'destructive' });
  }, [savedPets, petId, toast]);

  const toggleSave = useCallback((pet: Pet) => {
    const currentlySaved = savedPets.some(p => p.id === pet.id);
    if (currentlySaved) {
      unsavePet(pet);
    } else {
      savePet(pet);
    }
  }, [savedPets, savePet, unsavePet]);
  
  const clearSavedPets = useCallback(() => {
    setSavedPets([]);
    saveToLocalStorage([]);
    setIsSaved(false);
     toast({ title: "Cleared All", description: "All your saved pets have been removed.", variant: 'destructive' });
  }, [toast]);

  return { savedPets, isSaved, toggleSave, unsavePet, savePet, clearSavedPets };
};

export default useSavedPets;
