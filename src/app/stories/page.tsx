'use client';

import StoryViewer from '@/components/story-viewer';
import { motion } from 'framer-motion';

export default function StoriesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex items-center justify-center w-full h-screen bg-black"
    >
      <StoryViewer />
    </motion.div>
  );
}
