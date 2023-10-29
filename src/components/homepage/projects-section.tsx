'use client';
import React from 'react';
import { motion } from 'framer-motion';
import DetailedProjectCard from '~/components/common/detailed-project-card';
import SectionHeading from '~/components/common/section-heading';
import SimpleProjectCard from '~/components/common/simple-project-card';
import { featuredProjects, otherProjects } from '~/content/projects';

export default function ProjectsSection() {
  return (
    <section id='projects' className='pb-16'>
      <SectionHeading title='Projects' number='02' />
      <motion.h2
        viewport={{ once: true, amount: 'all' }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.25,
          },
        }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        className='pb-8 pt-16 text-2xl font-black'
      >
        Featured Projects
      </motion.h2>
      <div className='flex flex-col divide-y divide-white/20 pb-8'>
        {featuredProjects.map((project) => (
          <DetailedProjectCard
            key={`project__card__${project.title}`}
            {...project}
          />
        ))}
      </div>
      <motion.h2
        viewport={{ once: true, amount: 'all' }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.25,
          },
        }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        className='pb-8 text-2xl font-black'
      >
        Other Projects
      </motion.h2>
      <div className='flex flex-col gap-6'>
        {otherProjects.map((project) => (
          <SimpleProjectCard
            key={`simple__project__card__${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
