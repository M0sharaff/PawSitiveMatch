// src/app/layout.tsx
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Alegreya, Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import BottomNav from '@/components/layout/bottom-nav';

const alegreya = Alegreya({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// export const metadata: Metadata = {
//   title: 'PawsitiveMatch',
//   description: 'Find your perfect pet companion.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
       <head>
        <title>PawsitiveMatch</title>
        <meta name="description" content="Find your perfect pet companion." />
      </head>
      <body className={cn('font-sans antialiased bg-background text-foreground min-h-screen flex flex-col', inter.variable, alegreya.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex-grow"
            >
              <main className="flex-grow pb-20 md:pb-0">{children}</main>
            </motion.div>
          </AnimatePresence>
          <Footer />
          <Toaster />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
