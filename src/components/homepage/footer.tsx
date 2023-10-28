import React from 'react';
import Highlight from '~/components/common/highlight';
import { socials } from '~/utils/socials';

export default function Footer() {
  return (
    <footer className='py-24 text-center font-roboto text-sm text-white/50'>
      <a href={socials.github.url} target='_blank'>
        Created by <Highlight>Kacper Hemperek</Highlight> <br />
        source code can be found here
      </a>
    </footer>
  );
}
