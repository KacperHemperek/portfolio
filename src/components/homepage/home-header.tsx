import { GithubIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';
import Highlight from '~/components/common/hightlight';
import IconLink from '~/components/common/icon-link';
import OutsideLink from '~/components/common/outside-link';
import { socials } from '~/utils/socials';

export default function HomeHeader() {
  return (
    <header
      id='header'
      className='container mx-auto flex h-screen flex-col justify-center'
    >
      <h1 className='font-roboto pb-4 text-xs tracking-wide text-primary'>
        Hi, my name is
      </h1>
      <h2 className=' pb-4 text-4xl font-black text-white'>
        Kacper Hemperek
        <br />
        <span className=' text-white/60'>I build web apps</span>
      </h2>
      <p className='pb-4 text-white/60'>
        I&#39;m a <Highlight>Frontend Developer</Highlight> based in Poland. I
        have a passion for creating beautiful and functional user interfaces.
        I&#39;m currently working at{' '}
        <OutsideLink href='https://apptimia.com/'>Apptimia</OutsideLink>. I use
        React as my day to day tool for creating UIs. You can see all of my{' '}
        <Highlight>projects</Highlight>
      </p>
      <div className='flex gap-4'>
        <IconLink bordered href={socials.linkedin.url}>
          <GithubIcon className='h-4 w-4 md:h-5 md:w-5' />
        </IconLink>
        <IconLink bordered href={socials.linkedin.url}>
          <LinkedinIcon className='h-4 w-4 md:h-5 md:w-5' />
        </IconLink>
      </div>
    </header>
  );
}