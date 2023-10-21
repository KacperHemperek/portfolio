import { Check, Cog, LucideIcon } from 'lucide-react';
import React from 'react';
import { cn } from '~/utils/cn';

function BulletItem({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <li className='flex gap-4'>
      <div>{icon}</div>
      <p className='text-sm text-white/50 md:text-base'>{text}</p>
    </li>
  );
}

export default function BulletList({
  list,
  icon = <Check className='h-4 w-4 text-primary md:h-5 md:w-5' />,
  className,
}: {
  list: string[];
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn('flex list-none flex-col gap-2 py-4', className)}>
      {list.map((item, index) => (
        <BulletItem text={item} key={'bullet__item__' + index} icon={icon} />
      ))}
    </ul>
  );
}
