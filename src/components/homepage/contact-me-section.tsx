'use client';
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import IconLink from '~/components/common/icon-link';
import { socials } from '~/utils/socials';

export default function ContactMeSection() {
  return (
    <section id='contact'>
      <div className='flex flex-col items-center justify-center text-center'>
        <motion.div
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.25,
            },
          }}
          initial={{
            y: 10,
            opacity: 0,
          }}
          viewport={{
            once: true,
            amount: 'all',
          }}
          className='pb-8 pt-8 text-3xl font-bold md:text-5xl'
        >
          <h1 className='relative'>
            Contact me
            <div className='absolute -right-5 top-0 font-roboto text-xs font-light text-primary'>
              03
            </div>
          </h1>
        </motion.div>
        <motion.p
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.25,
            },
          }}
          initial={{
            y: 10,
            opacity: 0,
          }}
          viewport={{
            once: true,
            amount: 'all',
          }}
          className='max-w-md pb-8 text-sm text-white/50 md:text-base'
        >
          If you want to get in touch, talk to me about a project collaboration,
          new work opportunities or just say hi, you can reach out to me via
          linkedin or just send me an email
        </motion.p>
        <motion.div
          whileInView='shown'
          initial='hidden'
          viewport={{
            once: true,
            amount: 'all',
          }}
          variants={{
            shown: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
          className='flex gap-6'
        >
          <IconLink
            variants={{
              shown: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.25,
                },
              },
              hidden: {
                y: 10,
                opacity: 0,
              },
            }}
            href={socials.linkedin.url}
            bordered
            colored
          >
            <Linkedin className='h-4 w-4' />
            Linkedin
          </IconLink>
          <IconLink
            variants={{
              shown: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.25,
                },
              },
              hidden: {
                y: 10,
                opacity: 0,
              },
            }}
            newTab={false}
            href={socials.email.url}
            bordered
            colored
          >
            <Mail className='h-4 w-4' />
            Email
          </IconLink>
        </motion.div>
      </div>
    </section>
  );
}
