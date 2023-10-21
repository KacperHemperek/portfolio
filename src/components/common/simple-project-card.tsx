import { AppWindow, ExternalLink, Github } from 'lucide-react';
import IconLink from '~/components/common/icon-link';

export default function SimpleProjectCard({
  title,
  description,
  skills,
  link,
  repoLink,
}: {
  title: string;
  description: string;
  skills: string[];
  link: string;
  repoLink: string;
}) {
  return (
    <div className='bg-background-accent flex flex-col gap-3 rounded-lg p-4 transition-transform hover:-translate-y-1'>
      <div className='flex justify-between'>
        <a
          href={link}
          target='_blank'
          className='transition-opacity hover:opacity-80'
        >
          <AppWindow className='h-12 w-12 text-primary' />
        </a>
        <div className='flex gap-1'>
          <IconLink href={repoLink} bordered={false}>
            <Github className='h-5 w-5' />
          </IconLink>
          <IconLink href={link} bordered={false}>
            <ExternalLink className='h-5 w-5' />
          </IconLink>
        </div>
      </div>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-sm text-white/50 md:text-base'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={`simple__project__card__skill__${skill}`}
            className='font-roboto rounded-full border border-primary px-2 py-1 text-xs text-primary md:text-sm'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
