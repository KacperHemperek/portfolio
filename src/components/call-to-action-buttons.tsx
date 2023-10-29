'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socials } from '~/utils/socials';
import IconLink from '~/components/common/icon-link';

const callToActionButtons = [
  {
    icon: <Github className='h-5 w-5' />,
    href: socials.github.url,
  },
  {
    icon: <Linkedin className='h-5 w-5' />,
    href: socials.linkedin.url,
  },
  {
    icon: <Mail className='h-5 w-5' />,
    href: socials.email.url,
  },
];

export function CallToActionButtons() {
  return (
    <motion.div
      initial='hidden'
      animate='shown'
      variants={{
        shown: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 2,
          },
        },
      }}
      className='fixed bottom-0 left-12 hidden flex-col items-center gap-3 lg:flex'
    >
      {callToActionButtons.map(({ icon, href }, index) => (
        <IconLink
          variants={{
            hidden: {
              scale: 0,
            },
            shown: {
              scale: 1,
            },
          }}
          href={href}
          key={`call__to__action__button__${index}`}
          bordered={false}
          colored={false}
        >
          {icon}
        </IconLink>
      ))}
      <div className='h-24 w-[1px]'>
        <motion.div
          variants={{
            hidden: {
              height: 0,
            },
            shown: {
              height: '100%',
            },
          }}
          className='bg-white/50'
        />
      </div>
    </motion.div>
  );
}
