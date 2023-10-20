import React from 'react';
import OutsideLink from '~/components/common/outside-link';
import TechTag from '~/components/common/tech-tag';
import { cn } from '~/utils/cn';

export type WorkItemProps = {
  position: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  number: string;
  skills: string[];
  description?: string;
  last?: boolean;
};

export default function WorkItem({
  position,
  companyName,
  companyUrl,
  endDate,
  startDate,
  description,
  number,
  skills,
  last = false,
}: WorkItemProps) {
  return (
    <div className='flex gap-2 md:gap-6'>
      <div className='flex flex-col items-center'>
        <div className='font-roboto z-10 flex aspect-square items-center justify-center rounded-full bg-primary p-2 text-xs text-background ring-8 ring-background md:text-sm'>
          {number}
        </div>
        {!last && <div className='w-[1px] flex-1 bg-white/50' />}
      </div>
      <div className={cn('flex flex-col', last ? 'pb-0' : 'pb-10 md:pb-16')}>
        <h5 className=' text-lg font-semibold md:text-xl'>{position}</h5>
        <OutsideLink href={companyUrl}>
          <span className='w-fit text-sm md:text-base'>@{companyName}</span>
        </OutsideLink>
        <p className='py-2 font-mono text-xs text-white/50 md:text-sm'>
          {startDate} - {endDate}
        </p>
        <p className='pb-4 text-sm text-white/50 md:text-base'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <TechTag
              title={skill}
              key={'work__item__tag__' + companyName + '__' + skill + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
