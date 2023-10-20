import React from 'react';

export default function OutsideLink({
  href,
  children,
  openInNewTab = true,
}: {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
}) {
  return (
    <a
      href={href}
      className='cursor-pointer text-primary underline underline-offset-2 transition-colors hover:text-primary/80'
      target={openInNewTab ? '_blank' : undefined}
    >
      {children}
    </a>
  );
}
