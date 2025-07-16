
'use client';

import Link from 'next/link';
import { PawPrint, Heart, Film, Layers, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '../theme-switcher';
import { useToast } from '@/hooks/use-toast';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pets', label: 'Browse Pets' },
  { href: '/swipe', label: 'Swipe', icon: Layers },
  { href: '/stories', label: 'Stories', icon: Film },
  { href: '/profile', label: 'Profile' },
];

export default function Header() {
  const pathname = usePathname();
  const { toast } = useToast();

  const handleDonateClick = () => {
    toast({
      title: 'Coming Soon!',
      description: 'The donation feature is not yet implemented.',
    });
  };

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
           <Button onClick={handleDonateClick}>
              <Heart className="mr-2 h-4 w-4"/>
              Donate
            </Button>
        </div>
      </div>
    </header>
  );
}
