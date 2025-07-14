// src/components/adoption-process-tracker.tsx
'use client';

import { Check, Dot, Circle, Home, HeartHandshake, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const stepsData = [
  { name: 'Inquiry Sent', icon: Circle, status: 'completed' },
  { name: 'Meet & Greet', icon: HeartHandshake, status: 'upcoming' },
  { name: 'Home Check', icon: Stethoscope, status: 'upcoming' },
  { name: 'Adopted!', icon: Home, status: 'upcoming' },
];

export function AdoptionProcessTracker() {
  const [steps, setSteps] = useState(stepsData);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    // Animate the steps to make it feel more dynamic
    stepsData.forEach((_, stepIndex) => {
        if (stepIndex > 0) { // Start animating from the second step
            const timeout = setTimeout(() => {
                setSteps(prevSteps => {
                    const newSteps = [...prevSteps];
                    if (stepIndex > 0) {
                      newSteps[stepIndex - 1] = { ...newSteps[stepIndex - 1], status: 'completed' };
                    }
                    newSteps[stepIndex] = { ...newSteps[stepIndex], status: 'current' };
                    return newSteps;
                });
            }, 1000 * stepIndex);
            timeouts.push(timeout);
        }
    });
    
    // Final step after a delay
    const finalTimeout = setTimeout(() => {
        setSteps(prevSteps => {
            const newSteps = [...prevSteps];
            newSteps[newSteps.length - 2].status = 'completed';
            newSteps[newSteps.length - 1].status = 'current';
            return newSteps;
        });
    }, 1000 * stepsData.length);
    timeouts.push(finalTimeout);

    return () => {
        timeouts.forEach(clearTimeout);
    };
  }, []);

  const currentStepIndex = steps.findIndex(step => step.status === 'current');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-primary">Your Adoption Journey</CardTitle>
        <CardDescription>Track your progress towards welcoming your new friend home.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          {steps.map((step, stepIdx) => (
            <div key={step.name} className={cn('relative flex-1', stepIdx < steps.length - 1 ? 'pr-8 sm:pr-20' : '')}>
                <div className="absolute inset-0 top-1/2 -translate-y-1/2" aria-hidden="true">
                    <motion.div 
                      className="h-1 w-full bg-border"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: stepIdx * 0.2 }}
                      style={{ originX: 0 }}
                    />
                     {stepIdx < currentStepIndex && (
                       <motion.div 
                          className="absolute inset-0 h-1 w-full bg-primary" 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + stepIdx * 0.2 }}
                          style={{ originX: 0 }}
                        />
                     )}
                </div>

                <motion.div 
                    className="relative flex h-8 w-8 items-center justify-center rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.8 + stepIdx * 0.2 }}
                >
                {step.status === 'completed' ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-5 w-5" />
                  </span>
                ) : step.status === 'current' ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background ring-4 ring-primary/20">
                    <step.icon className="h-5 w-5 text-primary animate-pulse" />
                  </span>
                ) : (
                   <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
                     <step.icon className="h-5 w-5 text-muted-foreground" />
                   </span>
                )}
                 <p className="absolute top-10 text-center text-sm font-medium text-foreground w-28">{step.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
