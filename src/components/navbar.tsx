'use client';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/utils/cn';
import Link from 'next/link';
import { links } from '~/content/nav-links';

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (!isMenuOpen) document.body.style.overflow = 'auto';
    else document.body.style.overflow = 'hidden';

    function handleScroll(e: Event) {
      const topScroll = window.scrollY;
      setScrollOffset(topScroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className='lg:hidden'>
      <button
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
        className={cn(
          'fixed right-8 top-8 z-50 rounded-full p-4 text-white transition-shadow',
          !isMenuOpen && scrollOffset !== 0 && 'shadow-nav',
        )}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      <motion.nav
        className='fixed inset-0 z-40 flex items-center justify-center bg-background-muted px-6 py-6 transition-colors'
        initial={{
          clipPath: 'circle(1.75rem at calc(100% - 3.75rem) 3.75rem)',
          backgroundColor: 'rgba(16 29 42)',
        }}
        animate={{
          backgroundColor:
            isMenuOpen || scrollOffset !== 0
              ? 'rgba(17 34 64)'
              : 'rgba(16 29 42)',
          clipPath: isMenuOpen
            ? 'circle(150% at calc(100% - 3.75rem) 3.75rem)'
            : 'circle(1.75rem at calc(100% - 3.75rem) 3.75rem)',
        }}
        transition={{
          backgroundColor: {
            duration: 0.5,
          },
          clipPath: {
            duration: 0.5,
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
    </div>
  );
}
