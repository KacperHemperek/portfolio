import React from 'react';
import { cn } from '~/utils/cn';

export default function IconLink({
  children,
  href,
  bordered = false,
  colored = false,
  newTab = true,
}: {
  children: React.ReactNode;
  href: string;
  bordered?: boolean;
  colored?: boolean;
  newTab?: boolean;
}) {
  return (
    <a
      target={newTab ? '_blank' : '_self'}
      href={href}
      className='group relative h-min'
    >
      <div
        className={cn(
          'flex h-min w-fit cursor-pointer items-center gap-2 rounded-md p-2 font-roboto text-sm transition-all group-hover:text-primary',
          bordered &&
            'hovered:text-inherit border border-primary bg-background group-hover:-translate-x-1 group-hover:-translate-y-1',
          colored && 'text-primary',
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-md bg-primary',
          !bordered && 'hidden',
        )}
      />
    </a>
  );
}
