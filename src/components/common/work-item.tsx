'use client';
import { Variants, motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import React from 'react';
import TechTagList from '~/components/common/tech-tag-list';
import BulletList from '~/components/common/bullet-list';
import { cn } from '~/utils/cn';

export type WorkItemProps = {
  position: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  number: string;
  skills: string[];
  list: string[];
  last?: boolean;
};

export default function WorkItem({
  position,
  companyName,
  companyUrl,
  endDate,
  startDate,
  list,
  number,
  skills,
  last = false,
}: WorkItemProps) {
  const headerVariants: Variants = {
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
  };

  return (
    <div className='flex gap-2 md:gap-6'>
      <div className='flex flex-col items-center'>
        <motion.div
          whileInView='shown'
          initial='hidden'
          viewport={{ once: true, amount: 'all' }}
          variants={{
            shown: {
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 700,
                damping: 30,
              },
            },
            hidden: {
              scale: 0,
            },
          }}
          className='z-10 flex aspect-square items-center justify-center rounded-full bg-primary p-2 font-roboto text-xs text-background md:text-sm'
        >
          {number}
        </motion.div>
        {!last && (
          <motion.div
            initial='hidden'
            whileInView='shown'
            viewport={{ once: true, amount: 'all' }}
            className='flex flex-1 py-2'
          >
            <motion.div
              variants={{
                shown: {
                  height: '100%',
                  transition: {
                    duration: 0.75,
                  },
                },
                hidden: {
                  height: 0,
                },
              }}
              className='w-[1px] bg-white/50'
            />
          </motion.div>
        )}
      </div>
      <motion.div
        initial='hidden'
        whileInView='shown'
        viewport={{ once: true, amount: 0.2 }}
        className={cn('flex flex-col', last ? 'pb-0' : 'pb-10 md:pb-16')}
      >
        <motion.h5
          variants={headerVariants}
          className='text-lg font-semibold md:text-xl'
        >
          {position}
        </motion.h5>

        <motion.a
          href={companyUrl}
          target='_blank'
          variants={headerVariants}
          className='w-fit text-sm text-primary underline md:text-base'
        >
          @{companyName}
        </motion.a>

        <motion.p
          variants={headerVariants}
          className='pt-4 font-mono text-xs text-white/50 md:text-sm'
        >
          {startDate} - {endDate}
        </motion.p>

        <BulletList
          list={list}
          icon={<Briefcase className='h-4 w-4 text-primary md:h-5 md:w-5' />}
        />
        <TechTagList list={skills} />
      </motion.div>
    </div>
  );
}
