'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { petFilters } from '@/lib/data';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export default function PetFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );
  
  const handleReset = () => {
    router.push(pathname);
  };

  const hasFilters = searchParams.size > 0;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="species">Species</Label>
            <Select
              value={searchParams.get('species') ?? ''}
              onValueChange={(value) => router.push(`${pathname}?${createQueryString('species', value)}`)}
            >
              <SelectTrigger id="species"><SelectValue placeholder="All Species" /></SelectTrigger>
              <SelectContent>
                {petFilters.species.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Age</Label>
            <Select
              value={searchParams.get('age') ?? ''}
              onValueChange={(value) => router.push(`${pathname}?${createQueryString('age', value)}`)}
            >
              <SelectTrigger id="age"><SelectValue placeholder="Any Age" /></SelectTrigger>
              <SelectContent>
                {petFilters.age.map((a) => (<SelectItem key={a} value={a}>{a}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size">Size</Label>
            <Select
              value={searchParams.get('size') ?? ''}
              onValueChange={(value) => router.push(`${pathname}?${createQueryString('size', value)}`)}
            >
              <SelectTrigger id="size"><SelectValue placeholder="Any Size" /></SelectTrigger>
              <SelectContent>
                {petFilters.size.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={searchParams.get('gender') ?? ''}
              onValueChange={(value) => router.push(`${pathname}?${createQueryString('gender', value)}`)}
            >
              <SelectTrigger id="gender"><SelectValue placeholder="Any Gender" /></SelectTrigger>
              <SelectContent>
                {petFilters.gender.map((g) => (<SelectItem key={g} value={g}>{g}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              placeholder="e.g. Sunnyvale"
              defaultValue={searchParams.get('location') ?? ''}
              onChange={(e) => router.push(`${pathname}?${createQueryString('location', e.target.value)}`)}
            />
          </div>
          {hasFilters && (
             <Button variant="ghost" onClick={handleReset}>
                <X className="mr-2 h-4 w-4" />
                Reset Filters
             </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
