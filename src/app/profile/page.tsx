import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { User, Heart, Settings } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'My Profile - PawsitiveMatch',
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <User className="w-12 h-12 text-primary" />
        <div>
            <h1 className="text-3xl font-bold font-headline">My Profile</h1>
            <p className="text-muted-foreground">Manage your preferences and saved pets.</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-accent"/>
                <CardTitle className="font-headline text-2xl">My Preferences</CardTitle>
            </div>
            <CardDescription>
              Update your preferences to get better pet recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Your current preferences help our AI find the best match for you. Go to the homepage to get new recommendations based on different criteria.</p>
            <Button asChild>
                <Link href="/#">Update Preferences</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent"/>
                <CardTitle className="font-headline text-2xl">Saved Pets</CardTitle>
            </div>
            <CardDescription>
              Here are the pets you've saved for later consideration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground py-8">
                <p>You haven't saved any pets yet.</p>
                <Button variant="link" asChild className="mt-2">
                    <Link href="/pets">Start Browsing</Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
