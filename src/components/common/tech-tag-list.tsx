import React from 'react';
import { motion } from 'framer-motion';
import TechTag from '~/components/common/tech-tag';
import { CustomComponentMotionProps } from '~/types';

const defaultChildrenMotionProps: CustomComponentMotionProps<'span'> = {
  variants: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    shown: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  },
};

const defaultParentAnimationProps: CustomComponentMotionProps<'div'> = {
  initial: 'hidden',
  whileInView: 'shown',
  variants: {
    hidden: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    shown: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  viewport: {
    once: true,
    amount: 0.8,
  },
};

export default function TechTagList({
  list,
  childrenMotionProps = defaultChildrenMotionProps,
  parentAnimationProps = defaultParentAnimationProps,
}: {
  list: string[];
  childrenMotionProps?: CustomComponentMotionProps<'span'>;
  parentAnimationProps?: CustomComponentMotionProps<'div'>;
}) {
  return (
    <motion.div className='flex flex-wrap gap-2' {...parentAnimationProps}>
      {list.map((skill, index) => (
        <TechTag
          title={skill}
          key={`work__item__tag__${skill}__${index}`}
          {...childrenMotionProps}
        />
      ))}
    </motion.div>
  );
}
