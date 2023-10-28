'use client';
import { Briefcase } from 'lucide-react';
import React from 'react';
import BulletList from '~/components/common/bullet-list';
import TechTag from '~/components/common/tech-tag';
import { cn } from '~/utils/cn';
import { VIEWPORT_SETTINGS } from '~/utils/framer-viewport-settings';
import { MotionConfig, Variants, motion } from 'framer-motion';

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
        duration: 0.75,
      },
    },
  };

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
      x: -10,
    },
    shown: {
      opacity: 1,
      x: 0,
    },
  };

  const skillsListVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
    shown: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  return (
    <motion.div
      whileInView='shown'
      initial='hidden'
      viewport={VIEWPORT_SETTINGS}
      className='flex gap-2 md:gap-6'
    >
      <div className='flex flex-col items-center'>
        <motion.div
          variants={{
            shown: {
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
          className='z-10 flex aspect-square items-center justify-center rounded-full bg-primary p-2 font-roboto text-xs text-background ring-8 ring-background md:text-sm'
        >
          {number}
        </motion.div>
        {!last && (
          <motion.div
            variants={{
              shown: {
                height: '100%',
                transition: {
                  delay: 3,
                  duration: 0.75,
                },
              },
              hidden: {
                height: 0,
              },
            }}
            className='w-[1px] bg-white/50'
          />
        )}
      </div>
      <div className={cn('flex flex-col', last ? 'pb-0' : 'pb-10 md:pb-16')}>
        <MotionConfig
          transition={{
            duration: 0.5,
            delay: last ? 0.5 : 1,
          }}
        >
          <motion.h5
            variants={headerVariants}
            className=' text-lg font-semibold md:text-xl'
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
        </MotionConfig>
        <BulletList
          list={list}
          icon={<Briefcase className='h-4 w-4 text-primary md:h-5 md:w-5' />}
          parentVariants={listVariants}
          childVariants={listChildrenVariants}
        />
        <motion.div
          variants={skillsListVariants}
          className='flex flex-wrap gap-2'
        >
          {skills.map((skill, index) => (
            <TechTag
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                shown: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                  },
                },
              }}
              title={skill}
              key={'work__item__tag__' + companyName + '__' + skill + index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
