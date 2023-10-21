import React from 'react';

export default function SectionHeading({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <div className='flex items-center gap-2 py-2'>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <span className='font-roboto -translate-y-2 text-xs font-light text-primary'>
        {number}
      </span>
      <hr className='border-t-1 flex-1 border-white/50' />
    </div>
  );
}
