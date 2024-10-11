import { Mail } from 'lucide-react';
import React from 'react';
import Highlight from '~/components/common/highlight';
import { socials } from '~/utils/socials';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-6 py-24 text-center font-roboto text-sm text-white/50'>
      <a href={socials.github.url} target='_blank'>
        Created by <Highlight>Kacper Hemperek</Highlight> <br />
        source code can be found <Highlight>here</Highlight>
      </a>
      <a
        href={socials.email.url}
        className='flex items-center gap-2 text-white/50'
      >
        <Mail className='h-4 w-4' />
        <span>kacper.hemperek@o2.pl</span>
      </a>
    </footer>
  );
}
