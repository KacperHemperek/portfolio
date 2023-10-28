import { HTMLMotionProps } from 'framer-motion';

export type CustomComponentMotionProps<T extends HTMLMotionProps<any>> = Omit<
  T,
  'className' | 'children'
>;
