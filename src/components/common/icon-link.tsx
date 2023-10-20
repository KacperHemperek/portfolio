import React from 'react';
import { cn } from '~/utils/cn';

export default function IconLink({
  children,
  href,
  bordered = false,
}: {
  children: React.ReactNode;
  href: string;
  bordered?: boolean;
}) {
  const classNames = cn(
    'flex rounded-md p-2 transition-colors hover:bg-background-muted/80',
    bordered && 'border border-primary',
  );

  return (
    <a
      target='_blank'
      href={href}
      className={cn(
        'flex rounded-md p-2 transition-colors hover:bg-background-muted',
        bordered && 'border border-primary',
      )}
    >
      {children}
    </a>
  );
}
