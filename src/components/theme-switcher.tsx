'use client'

import * as React from "react"
import { Moon, Sun, Monitor, Palette as PaletteIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Palette = "default" | "forest" | "sky" | "night";

const palettes: { name: Palette; label: string; color: string }[] = [
  { name: 'default', label: 'Default', color: 'hsl(60 80% 35%)' },
  { name: 'forest', label: 'Forest', color: 'hsl(140 60% 30%)' },
  { name: 'sky', label: 'Sky', color: 'hsl(220 90% 55%)' },
  { name: 'night', label: 'Night', color: 'hsl(260 80% 70%)' },
];

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const [palette, setPalette] = React.useState<Palette>('default');

  React.useEffect(() => {
    const storedPalette = localStorage.getItem('pawsitive-palette') as Palette | null
    if (storedPalette && palettes.find(p => p.name === storedPalette)) {
      setPalette(storedPalette)
    }
  }, []);

  React.useEffect(() => {
    const root = window.document.documentElement;
    // Remove all theme classes
    palettes.forEach(p => {
      if (p.name !== 'default') {
        root.classList.remove(`theme-${p.name}`);
      }
    });

    // Add the current theme class
    if (palette !== 'default') {
      root.classList.add(`theme-${palette}`);
    }
    localStorage.setItem('pawsitive-palette', palette);
  }, [palette]);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme or palette</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <PaletteIcon className="mr-2 h-4 w-4" />
                <span>Color Palette</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup value={palette} onValueChange={(p) => setPalette(p as Palette)}>
                        {palettes.map((p) => (
                             <DropdownMenuRadioItem key={p.name} value={p.name}>
                                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: p.color }} />
                                {p.label}
                             </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
