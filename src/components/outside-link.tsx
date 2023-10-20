import React from 'react';

export default function OutsideLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className='cursor-pointer text-primary underline underline-offset-2 transition-colors hover:text-primary/80'
      target='_blank'
    >
      {children}
    </a>
  );
}
