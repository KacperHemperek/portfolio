import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import Highlight from '~/components/common/hightlight';
import IconLink from '~/components/common/icon-link';
import OutsideLink from '~/components/common/outside-link';
import HomeHeader from '~/components/homepage/home-header';

export default function Home() {
  return (
    <main className='px-6'>
      <HomeHeader />
    </main>
  );
}
