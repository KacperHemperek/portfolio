'use client';
import React from 'react';
import { Variants, motion } from 'framer-motion';
import { VIEWPORT_SETTINGS } from '~/utils/framer-viewport-settings';

const titleVariants: Variants = {
  hidden: { x: -10, opacity: 0 },
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    width: 0,
  },
  shown: {
    width: '100%',
    transition: {
      delay: 0.5,
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function SectionHeading({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <motion.div
      whileInView='shown'
      initial='hidden'
      viewport={VIEWPORT_SETTINGS}
      className='flex items-center gap-2 py-2'
    >
      <motion.h3 variants={titleVariants} className='text-2xl font-bold'>
        {title}
      </motion.h3>
      <motion.span
        variants={numberVariants}
        className='-translate-y-2 font-roboto text-xs font-light text-primary'
      >
        {number}
      </motion.span>
      <motion.hr
        variants={lineVariants}
        className='border-t-1 border-white/50'
      />
    </motion.div>
  );
}
