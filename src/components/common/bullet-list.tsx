import { Cog } from 'lucide-react';
import React from 'react';

function BulletItem({ text }: { text: string }) {
  return (
    <li className='flex items-center gap-2'>
      <Cog className='h-4 w-4 text-primary md:h-5 md:w-5' />
      <p className='text-sm text-white/50 md:text-base'>{text}</p>
    </li>
  );
}

export default function BulletList({ list }: { list: string[] }) {
  return (
    <ul className='flex list-none flex-col gap-2 pl-4'>
      {list.map((item, index) => (
        <BulletItem text={item} key={'bullet__item__' + index} />
      ))}
    </ul>
  );
}
