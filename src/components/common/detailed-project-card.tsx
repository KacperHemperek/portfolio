import { BadgeCheck, Check, ExternalLink, Github } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import BulletList from '~/components/common/bullet-list';
import IconLink from '~/components/common/icon-link';
import TechTag from '~/components/common/tech-tag';

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
      <a href={link} className='group relative flex overflow-hidden rounded-lg'>
        <span className='absolute right-4 top-4 opacity-100 mix-blend-difference duration-300 group-hover:opacity-100 lg:opacity-0'>
          <ExternalLink className='h-4 w-4 md:h-6 md:w-6' />
        </span>
        <Image
          src={image}
          alt='project image'
          className='rounded-lg transition-all'
        />
      </a>
      <div className='flex items-center justify-between'>
        <h3 className=' text-xl font-bold md:text-2xl'>{title}</h3>
        <span className='font-roboto flex items-center text-xs text-primary md:text-sm'>
          Featured
          <BadgeCheck className='ml-2 h-4 w-4 md:h-5 md:w-5' />
        </span>
      </div>
      <h4 className='font-roboto text-xs text-primary md:text-sm'>
        Description:
      </h4>
      <p className=' text-sm text-white/50 md:text-base'>{description}</p>
      <h4 className='font-roboto text-xs text-primary md:text-sm'>Features:</h4>
      <BulletList list={features} className='py-0' />
      <h4 className='font-roboto text-xs text-primary md:text-sm'>Skills:</h4>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <TechTag key={`tech__tag__${skill}__${title}`} title={skill} />
        ))}
      </div>
      <div className='flex gap-4'>
        <IconLink href={repoLink} bordered colored>
          <>
            <div>
              <Github className='h-4 w-4' />
            </div>
            <span>
              <span className='hidden md:inline'>View on </span>Github
            </span>
          </>
        </IconLink>
        <IconLink href={link} bordered colored>
          <>
            <div>
              <ExternalLink className='h-4 w-4' />
            </div>
            <span>
              <span className='hidden md:inline'>Checkout </span>Demo
            </span>
          </>
        </IconLink>
      </div>
    </div>
  );
}
