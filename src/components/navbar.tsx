'use client';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/utils/cn';
import Link from 'next/link';
import { links } from '~/content/nav-links';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) document.body.style.overflow = 'auto';
    else document.body.style.overflow = 'hidden';
  }, [isMenuOpen]);

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
        className={cn(
          'fixed right-6 top-6 z-50 rounded-full p-4 text-white ',
          isMenuOpen ? 'shadow-none ' : 'shadow-lg delay-300',
        )}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      <motion.nav
        className='fixed inset-0 z-40 flex items-center justify-center bg-background-muted px-6 py-6 shadow-lg'
        initial={{
          clipPath: 'circle(1.75rem at calc(100% - 3.25rem) 3.25rem)',
        }}
        animate={{
          clipPath: isMenuOpen
            ? 'circle(150% at calc(100% - 3.25rem) 3.25rem)'
            : 'circle(1.75rem at calc(100% - 3.25rem) 3.25rem)',
          transition: {
            duration: isMenuOpen ? 0.5 : 0.3,
          },
        }}
      >
        <motion.div className='flex flex-1 flex-col gap-12'>
          {links.map((link, index) => (
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={link.url}
              key={`navbar__link__${link.url}__${link.label}`}
              className='flex flex-col text-center font-roboto'
            >
              <span className='text-sm text-primary'>{`0${index + 1}`}</span>
              <span className='text-lg'>{link.label}</span>
            </Link>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
}
