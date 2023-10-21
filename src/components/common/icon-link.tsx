import React from 'react';
import { cn } from '~/utils/cn';

export default function IconLink({
  children,
  href,
  bordered = false,
  colored = false,
}: {
  children: React.ReactNode;
  href: string;
  bordered?: boolean;
  colored?: boolean;
}) {
  const classNames = cn(
    'flex rounded-md p-2 transition-colors hover:bg-background-muted/80 hover:text-primary w-fit text-sm font-roboto h-min gap-2 items-center cursor-pointer',
    bordered && 'border border-primary hovered:text-inherit',
    colored && 'text-primary',
  );

  return (
    <a target='_blank' href={href} className={classNames}>
      {children}
    </a>
  );
}
