'use client';

import { Check } from 'lucide-react';
import React from 'react';
import { cn } from '~/utils/cn';

import { Variants, motion } from 'framer-motion';

function BulletItem({
  text,
  icon,
  variants,
}: {
  text: string;
  icon: React.ReactNode;
  variants?: Variants;
}) {
  return (
    <motion.li variants={variants} className='flex gap-4'>
      <div>{icon}</div>
      <p className='text-sm text-white/50 md:text-base'>{text}</p>
    </motion.li>
  );
}

export default function BulletList({
  list,
  icon = <Check className='h-4 w-4 text-primary md:h-5 md:w-5' />,
  className,
  childVariants,
  parentVariants,
}: {
  list: string[];
  icon?: React.ReactNode;
  className?: string;
  parentVariants?: Variants;
  childVariants?: Variants;
}) {
  return (
    <motion.ul
      variants={parentVariants}
      className={cn('flex list-none flex-col gap-2 py-4', className)}
    >
      {list.map((item, index) => (
        <BulletItem
          text={item}
          key={'bullet__item__' + index}
          icon={icon}
          variants={childVariants}
        />
      ))}
    </motion.ul>
  );
}
