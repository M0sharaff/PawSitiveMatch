
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Pet } from '@/lib/data';

const SAVED_PETS_KEY = 'pawsitivematch_saved_pets';

const useSavedPets = () => {
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
  
  const isPetSaved = useCallback((petId: number) => {
    return savedPets.some(p => p.id === petId);
  }, [savedPets]);

  const toggleSave = useCallback((pet: Pet) => {
    const isCurrentlySaved = savedPets.some(p => p.id === pet.id);
    const optimisticState = isCurrentlySaved 
      ? savedPets.filter(p => p.id !== pet.id)
      : [...savedPets, pet];

    // Optimistically update the UI
    setSavedPets(optimisticState);

    // Sync with localStorage in the background
    try {
      localStorage.setItem(SAVED_PETS_KEY, JSON.stringify(optimisticState));
    } catch (error) {
      console.error("Failed to save to localStorage, reverting state.", error);
      // Revert to the original state on failure
      setSavedPets(savedPets);
      // The component using the hook should be responsible for showing a toast
    }
  }, [savedPets]);
  
  const savePet = useCallback((pet: Pet) => {
    if (savedPets.some(p => p.id === pet.id)) {
      return; // Already saved, do nothing.
    }
    const optimisticState = [...savedPets, pet];
    
    // Optimistically update the UI
    setSavedPets(optimisticState);

    // Sync with localStorage in the background
    try {
      localStorage.setItem(SAVED_PETS_KEY, JSON.stringify(optimisticState));
    } catch (error) {
      console.error("Failed to save to localStorage, reverting state.", error);
      // Revert to the original state on failure
      setSavedPets(savedPets);
    }
  }, [savedPets]);

  const clearSavedPets = useCallback(() => {
    const originalState = [...savedPets];
    // Optimistically update the UI
    setSavedPets([]);

    // Sync with localStorage in the background
    try {
      localStorage.setItem(SAVED_PETS_KEY, JSON.stringify([]));
    } catch (error) {
      console.error("Failed to clear localStorage, reverting state.", error);
      // Revert to the original state on failure
      setSavedPets(originalState);
    }
  }, [savedPets]);

  return { savedPets, isPetSaved, toggleSave, savePet, clearSavedPets };
};

export default useSavedPets;
