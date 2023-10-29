'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { BadgeCheck, ExternalLink, Github } from 'lucide-react';
import { Variants, motion } from 'framer-motion';
import BulletList from '~/components/common/bullet-list';
import IconLink from '~/components/common/icon-link';
import TechTagList from '~/components/common/tech-tag-list';

const defaultHiddenAnimationConfig = {
  opacity: 0,
  y: 10,
};

const defaultShownAnimationConfig = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.25,
  },
};

const defaultAnimationVariants: Variants = {
  hidden: defaultHiddenAnimationConfig,
  shown: defaultShownAnimationConfig,
};

function ProjectItemSectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h4
      initial={defaultHiddenAnimationConfig}
      whileInView={defaultShownAnimationConfig}
      className='font-roboto text-xs text-primary md:text-sm'
    >
      {children}
    </motion.h4>
  );
}

export type DetailedProjectCardProps = {
  image: StaticImageData;
  description: string;
  skills: string[];
  title: string;
  features: string[];
  link: string;
  repoLink: string;
};

export default function DetailedProjectCard({
  image,
  description,
  skills,
  title,
  features,
  link,
  repoLink,
}: DetailedProjectCardProps) {
  return (
    <div className='flex flex-col gap-4 py-8 first:pt-0 last:pb-0 lg:gap-6'>
      <motion.a
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.25,
          },
        }}
        initial={{
          opacity: 0,
        }}
        viewport={{ once: true, amount: 'all' }}
        href={link}
        className='group relative flex overflow-hidden rounded-lg'
      >
        <span className='absolute right-4 top-4 opacity-100 mix-blend-difference duration-300 group-hover:opacity-100 lg:opacity-0'>
          <ExternalLink className='h-4 w-4 md:h-6 md:w-6' />
        </span>
        <Image
          src={image}
          alt='project image'
          className='rounded-lg transition-all'
        />
      </motion.a>
      <motion.div
        whileInView='shown'
        initial='hidden'
        variants={{
          shown: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true, amount: 'all' }}
        className='flex items-center justify-between'
      >
        <motion.h3
          variants={defaultAnimationVariants}
          className=' text-xl font-bold md:text-2xl'
        >
          {title}
        </motion.h3>
        <motion.span
          variants={defaultAnimationVariants}
          className='flex items-center font-roboto text-xs text-primary md:text-sm'
        >
          Featured
          <BadgeCheck className='ml-2 h-4 w-4 md:h-5 md:w-5' />
        </motion.span>
      </motion.div>
      <ProjectItemSectionHeading>Description:</ProjectItemSectionHeading>
      <motion.p
        initial={defaultHiddenAnimationConfig}
        whileInView={defaultShownAnimationConfig}
        viewport={{ once: true, amount: 'all' }}
        className=' text-sm text-white/50 md:text-base'
      >
        {description}
      </motion.p>
      <ProjectItemSectionHeading>Features:</ProjectItemSectionHeading>
      <BulletList list={features} className='py-0' />
      <ProjectItemSectionHeading>Skills:</ProjectItemSectionHeading>
      <TechTagList list={skills} />
      <motion.div
        whileInView='shown'
        initial='hidden'
        variants={{
          shown: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true, amount: 'all' }}
        className='flex gap-4'
      >
        <IconLink
          variants={defaultAnimationVariants}
          href={repoLink}
          bordered
          colored
        >
          <>
            <div>
              <Github className='h-4 w-4' />
            </div>
            <span>
              <span className='hidden md:inline'>View on </span>Github
            </span>
          </>
        </IconLink>
        <IconLink
          variants={defaultAnimationVariants}
          href={link}
          bordered
          colored
        >
          <>
            <div>
              <ExternalLink className='h-4 w-4' />
            </div>
            <span>
              <span className='hidden md:inline'>Checkout </span>Demo
            </span>
          </>
        </IconLink>
      </motion.div>
    </div>
  );
}
