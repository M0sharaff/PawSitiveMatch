// src/components/theme-provider.tsx
'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import type { ReactNode } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

type Theme = "light" | "dark";
type Palette = "default" | "forest" | "sky" | "night";

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  palette: Palette
  setPalette: (palette: Palette) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme: nextTheme, setTheme: setNextTheme } = useNextTheme()
  const [palette, setPaletteState] = useState<Palette>('default')
  
  const theme = (nextTheme === 'dark' || (nextTheme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light';

  useEffect(() => {
    const storedPalette = localStorage.getItem('pawsitive-palette') as Palette | null
    if (storedPalette) {
      setPaletteState(storedPalette)
    }
  }, [])
  
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('theme-forest', 'theme-sky', 'theme-night')

    if (palette !== 'default') {
      root.classList.add(`theme-${palette}`)
    }
  }, [palette])

  const setPalette = (newPalette: Palette) => {
    localStorage.setItem('pawsitive-palette', newPalette)
    setPaletteState(newPalette)
  }

  const value = useMemo(() => ({
    theme,
    setTheme: setNextTheme,
    palette,
    setPalette,
  }), [theme, setNextTheme, palette])

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
