'use client';

import Link from 'next/link';
import { PawPrint, Menu, X, Heart, Film, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeSwitcher } from '../theme-switcher';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pets', label: 'Browse Pets' },
  { href: '/swipe', label: 'Swipe', icon: Layers },
  { href: '/stories', label: 'Stories', icon: Film },
  { href: '/profile', label: 'Profile' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <PawPrint className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-primary tracking-wide">
            PawsitiveMatch
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary',
                pathname === link.href && 'text-primary font-semibold'
              )}
            >
              {link.icon && <link.icon className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end items-center gap-2">
           <ThemeSwitcher />
           <Button>
              <Heart className="mr-2 h-4 w-4"/>
              Donate
            </Button>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                            <PawPrint className="h-7 w-7 text-primary" />
                            <span className="font-bold text-xl text-primary tracking-wide">
                                PawsitiveMatch
                            </span>
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                'flex items-center gap-3 text-lg font-medium text-foreground/80 transition-colors hover:text-primary',
                                pathname === link.href && 'text-primary font-bold'
                                )}
                            >
                                {link.icon && <link.icon className="h-5 w-5" />}
                                {link.label}
                            </Link>
                        </SheetClose>
                    ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
