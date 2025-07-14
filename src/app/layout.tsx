import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Alegreya } from 'next/font/google';

const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'PawsitiveMatch',
  description: 'Find your perfect pet companion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn('font-serif antialiased bg-background text-foreground min-h-screen flex flex-col', alegreya.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
