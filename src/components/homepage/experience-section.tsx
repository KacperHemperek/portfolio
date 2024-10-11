'use client';
import React from 'react';
import SectionHeading from '~/components/common/section-heading';
import WorkItem from '~/components/common/work-item';
import { motion } from 'framer-motion';
import { workItemsList } from '~/content/experience';

export default function ExperienceSection() {
  return (
    <section id='experience'>
      <SectionHeading title='Experience' number='01' />
      <motion.div
        variants={{
          shown: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.25,
            },
          },
          hidden: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className='flex flex-col py-16'
      >
        {workItemsList.map((workItem, index) => (
          <WorkItem
            key={'work__item__' + workItem.companyName + index}
            number={workItem.number}
            position={workItem.position}
            companyName={workItem.companyName}
            companyUrl={workItem.companyUrl}
            endDate={workItem.endDate}
            startDate={workItem.startDate}
            list={workItem.list}
            skills={workItem.skills}
            last={index === workItemsList.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
