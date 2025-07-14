'use client';

import Link from 'next/link';
import { PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pets', label: 'Browse Pets' },
  { href: '/profile', label: 'Profile' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-card/80 backdrop-blur-lg sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <PawPrint className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl font-headline text-primary tracking-wide">
            PawsitiveMatch
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-foreground/70 transition-colors hover:text-foreground',
                pathname === link.href && 'text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 flex justify-end">
          <Button>Make a Donation</Button>
        </div>
      </div>
    </header>
  );
}
