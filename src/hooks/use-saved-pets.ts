
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

  const saveToLocalStorage = (pets: Pet[]) => {
    try {
        localStorage.setItem(SAVED_PETS_KEY, JSON.stringify(pets));
    } catch (error) {
        console.error("Could not save pets to localStorage", error);
    }
  };
  
  const isPetSaved = useCallback((petId: number) => {
    return savedPets.some(p => p.id === petId);
  }, [savedPets]);

  const toggleSave = useCallback((pet: Pet) => {
    setSavedPets(currentSavedPets => {
        const isCurrentlySaved = currentSavedPets.some(p => p.id === pet.id);
        let newSavedPets;
        if (isCurrentlySaved) {
            newSavedPets = currentSavedPets.filter(p => p.id !== pet.id);
        } else {
            newSavedPets = [...currentSavedPets, pet];
        }
        saveToLocalStorage(newSavedPets);
        return newSavedPets;
    });
  }, []);
  
  const savePet = useCallback((pet: Pet) => {
    setSavedPets(currentSavedPets => {
      if (currentSavedPets.some(p => p.id === pet.id)) {
        return currentSavedPets; 
      }
      const newSavedPets = [...currentSavedPets, pet];
      saveToLocalStorage(newSavedPets);
      return newSavedPets;
    });
  }, []);

  const clearSavedPets = useCallback(() => {
    setSavedPets([]);
    saveToLocalStorage([]);
  }, []);

  return { savedPets, isPetSaved, toggleSave, savePet, clearSavedPets };
};

export default useSavedPets;
