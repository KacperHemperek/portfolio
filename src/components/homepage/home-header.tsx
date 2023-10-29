'use client';
import { animate, useMotionValue, useTransform, motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import Highlight from '~/components/common/highlight';
import IconLink from '~/components/common/icon-link';
import OutsideLink from '~/components/common/outside-link';
import { useIsClient } from '~/components/context-provider';
import { socials } from '~/utils/socials';

function Cursor() {
  return (
    <motion.div
      className='h-full w-[1px] bg-white'
      animate={{
        opacity: [0, 0, 1, 1],
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1,
          times: [0, 0.5, 0.5, 1],
        },
      }}
    />
  );
}

export default function HomeHeader() {
  const baseText = 'Hi my name is' as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  const isClient = useIsClient();

  const DURATION = 1.5;
  const TYPING_DELAY = isClient && window.innerWidth >= 1024 ? 1.75 : 0.5;

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      duration: DURATION,
      ease: 'easeInOut',
      delay: TYPING_DELAY,
    });
    return controls.stop;
  }, []);

  return (
    <motion.header
      transition={{ staggerChildren: 2 }}
      id='header'
      className='flex h-screen flex-col justify-center'
    >
      <div className='flex pb-4'>
        <motion.h1 className=' h-4 font-roboto text-xs tracking-wide text-primary md:h-5 md:text-sm'>
          {displayText}
        </motion.h1>
        <Cursor />
      </div>
      <motion.h2
        key='title'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: DURATION + TYPING_DELAY + 0.25 }}
        className=' pb-4 text-4xl font-black text-white md:text-6xl'
      >
        Kacper Hemperek
        <br />
        <span className=' text-white/60'>I build web apps</span>
      </motion.h2>
      <motion.p
        key='description'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: DURATION + TYPING_DELAY + 0.75 }}
        className='pb-4 text-white/60'
      >
        I&#39;m a <Highlight>Frontend Developer</Highlight> based in Poland
        passionate about creating beautiful and functional user interfaces. I
        use React as my day to day tool and sometimes Angular for creating great
        UIs. You can see all of my <Highlight>projects</Highlight> on github or
        check out my{' '}
        <OutsideLink href='/#projects' openInNewTab={false}>
          projects section
        </OutsideLink>
        . Currently working at{' '}
        <OutsideLink href='https://apptimia.com/'>@Apptimia</OutsideLink>.
      </motion.p>
      <motion.div
        key='buttons'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: DURATION + TYPING_DELAY + 1.25 }}
        className='flex gap-4'
      >
        <IconLink bordered href={socials.github.url}>
          <GithubIcon className='h-4 w-4 md:h-5 md:w-5' />
        </IconLink>
        <IconLink bordered href={socials.linkedin.url}>
          <LinkedinIcon className='h-4 w-4 md:h-5 md:w-5' />
        </IconLink>
      </motion.div>
    </motion.header>
  );
}
