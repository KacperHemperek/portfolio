'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/utils/cn';
import { useNavigationMenu } from '~/hooks/use-nav-menu';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const { scrollOffset } = useNavigationMenu();

  const showNavBackground = scrollOffset >= 100;

  return (
    <Link href='/#header' className=''>
      <motion.button
        className={cn(
          'fixed bottom-8 right-8 z-30 cursor-pointer rounded-full bg-background-muted p-4 shadow-nav lg:bottom-12 lg:right-12',
          !showNavBackground && 'pointer-events-none',
        )}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 110 }}
        animate={{
          y: showNavBackground ? 0 : 110,
        }}
      >
        <ArrowUp />
      </motion.button>
    </Link>
  );
}
