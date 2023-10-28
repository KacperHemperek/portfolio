import { HTMLMotionProps } from 'framer-motion';
import { ReactHTML } from 'react';

export type CustomComponentMotionProps<T extends keyof ReactHTML> = Omit<
  HTMLMotionProps<T>,
  'className' | 'children'
>;
