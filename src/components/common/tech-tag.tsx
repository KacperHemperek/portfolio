'use client';
import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

export default function TechTag({
  title,
  ...rest
}: { title: string } & Omit<
  HTMLMotionProps<'span'>,
  'className' | 'children'
>) {
  return (
    <motion.span
      {...rest}
      className='cursor-default rounded-full border border-white/50 px-2 py-1 font-mono text-xs text-white/50 transition-colors hover:text-white/80 md:text-sm'
    >
      {title}
    </motion.span>
  );
}
