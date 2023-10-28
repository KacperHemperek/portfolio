'use client';

import { Check } from 'lucide-react';
import React from 'react';
import { cn } from '~/utils/cn';

import { HTMLMotionProps, motion } from 'framer-motion';

type CustomComponentMotionProps<T extends HTMLMotionProps<any>> = Omit<
  T,
  'className' | 'children'
>;

function BulletItem({
  text,
  icon,
  ...motionProps
}: {
  text: string;
  icon: React.ReactNode;
} & CustomComponentMotionProps<HTMLMotionProps<'li'>>) {
  return (
    <motion.li {...motionProps} className='flex gap-4'>
      <div>{icon}</div>
      <p className='text-sm text-white/50 md:text-base'>{text}</p>
    </motion.li>
  );
}

export default function BulletList({
  list,
  icon = <Check className='h-4 w-4 text-primary md:h-5 md:w-5' />,
  className,
  parentAnimationProps,
  childAnimationProps,
}: {
  list: string[];
  icon?: React.ReactNode;
  className?: string;
  parentAnimationProps?: CustomComponentMotionProps<HTMLMotionProps<'ul'>>;
  childAnimationProps?: CustomComponentMotionProps<HTMLMotionProps<'li'>>;
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
