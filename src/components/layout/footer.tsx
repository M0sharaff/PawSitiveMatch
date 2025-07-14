import Link from 'next/link';
import { Button } from '../ui/button';
import { PawPrint, Heart, Github } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">PawsitiveMatch</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">About</Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                    </a>
                </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-foreground/60">
                © {new Date().getFullYear()} PawsitiveMatch. All rights reserved.
            </p>
            <div className="text-center text-sm text-foreground/60">
                Powered by <a href="https://firebase.google.com/" className="font-semibold hover:underline">Firebase</a> & <a href="https://firebase.google.com/docs/genkit" className="font-semibold hover:underline">Genkit</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
