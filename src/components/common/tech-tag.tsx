import React from 'react';

export default function TechTag({ title }: { title: string }) {
  return (
    <span className='cursor-default rounded-full border border-white/50 px-2 py-1 font-mono text-xs text-white/50 transition-colors hover:text-white/80 md:text-sm'>
      {title}
    </span>
  );
}
