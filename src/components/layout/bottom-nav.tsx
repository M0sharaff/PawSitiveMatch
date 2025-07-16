
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Layers, Film, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/pets', label: 'Browse', icon: Search },
  { href: '/swipe', label: 'Swipe', icon: Layers },
  { href: '/stories', label: 'Stories', icon: Film },
  { href: '/profile', label: 'Profile', icon: User },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border shadow-t-lg z-50"
    >
      <nav className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex-1 flex flex-col items-center justify-center h-full">
              <item.icon
                className={cn(
                  'h-6 w-6 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <span
                className={cn(
                  'text-xs transition-colors',
                  isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default BottomNav;
