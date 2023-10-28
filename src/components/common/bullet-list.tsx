'use client';

import { Check } from 'lucide-react';
import React from 'react';
import { cn } from '~/utils/cn';

import { HTMLMotionProps, Variants, motion } from 'framer-motion';
import { CustomComponentMotionProps } from '~/types';

function BulletItem({
  text,
  icon,
  ...motionProps
}: {
  text: string;
  icon: React.ReactNode;
} & CustomComponentMotionProps<'li'>) {
  return (
    <motion.li {...motionProps} className='flex gap-4'>
      <div>{icon}</div>
      <p className='text-sm text-white/50 md:text-base'>{text}</p>
    </motion.li>
  );
}

const listVariants: Variants = {
  shown: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listChildrenVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  shown: {
    opacity: 1,
    x: 0,
  },
};

export default function BulletList({
  list,
  icon = <Check className='h-4 w-4 text-primary md:h-5 md:w-5' />,
  className,
  parentAnimationProps = {
    initial: 'hidden',
    whileInView: 'shown',
    variants: listVariants,
    viewport: {
      once: true,
      amount: 0.3,
    },
  },
  childAnimationProps = {
    variants: listChildrenVariants,
  },
}: {
  list: string[];
  icon?: React.ReactNode;
  className?: string;
  parentAnimationProps?: CustomComponentMotionProps<'ul'>;
  childAnimationProps?: CustomComponentMotionProps<'li'>;
}) {
  return (
    <motion.ul
      className={cn('flex list-none flex-col gap-2 py-4', className)}
      {...parentAnimationProps}
    >
      {list.map((item, index) => (
        <BulletItem
          text={item}
          key={'bullet__item__' + index}
          icon={icon}
          {...childAnimationProps}
        />
      ))}
    </motion.ul>
  );
}
