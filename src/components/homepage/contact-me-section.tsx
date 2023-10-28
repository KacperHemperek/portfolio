import { Linkedin, Mail } from 'lucide-react';
import React from 'react';
import IconLink from '~/components/common/icon-link';
import { socials } from '~/utils/socials';

export default function ContactMeSection() {
  return (
    <section id='contact'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='pb-8 pt-8 text-3xl font-bold md:text-5xl'>
          <h1 className='relative'>
            Contact me
            <div className='absolute -right-5 top-0 font-roboto text-xs font-light text-primary'>
              04
            </div>
          </h1>
        </div>
        <p className='max-w-md pb-8 text-sm text-white/50 md:text-base'>
          If you want to get in touch, talk to me about a project collaboration,
          new work opportunities or just say hi, you can reach out to me via
          linkedin or just send me an email at
        </p>
        <div className='flex gap-6'>
          <IconLink href={socials.linkedin.url} bordered colored>
            <Linkedin className='h-4 w-4' />
            Linkedin
          </IconLink>
          <IconLink newTab={false} href={socials.email.url} bordered colored>
            <Mail className='h-4 w-4' />
            Email
          </IconLink>
        </div>
      </div>
    </section>
  );
}
