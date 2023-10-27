'use client';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/utils/cn';
import Link from 'next/link';
import { links } from '~/content/nav-links';

function useNavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (!isMenuOpen) document.body.style.overflow = 'auto';
    else document.body.style.overflow = 'hidden';
  }, [isMenuOpen]);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    isMenuOpen,
    setIsMenuOpen,
    scrollOffset: prevScrollY,
  };
}

function useScrollDirection(offset: number = 5) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > offset || scrollY - lastScrollY < -offset)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection, offset]);

  return scrollDirection;
}

function DesktopNavbar() {
  const { scrollOffset } = useNavigationMenu();
  const scrollDirection = useScrollDirection();
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const showNavBackground = scrollOffset >= 100;

  const linkTextVariants = {
    hovered: {
      color: 'rbg(var(--primary-color))',
    },
    unhovered: {
      color: 'white',
    },
  };

  const linkUnderlineVariants = {
    hovered: {
      width: '100%',
    },
    unhovered: {
      width: 0,
    },
  };

  return (
    <div className='fixed top-8 z-50 hidden w-screen justify-center lg:flex'>
      <motion.nav
        className='flex gap-8 rounded-full px-8 py-6'
        animate={{
          backgroundColor: showNavBackground
            ? 'rgba(var(--bg-muted-color))'
            : 'rgba(var(--bg-color))',
          boxShadow: showNavBackground ? '0 0 10px 0 rgba(0, 0, 0, 0.25)' : '',
          y: scrollDirection === 'up' ? 0 : -200,
        }}
        transition={{
          y: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
            mass: 0.5,
          },
        }}
      >
        {links.map((link, index) => (
          <Link
            href={link.url}
            key={`navbar__link__${link.url}__${link.label}`}
          >
            <motion.div
              className='-mb-1 flex flex-col text-center font-roboto text-sm'
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(-1)}
              animate={hoveredIndex === index ? 'hovered' : 'unhovered'}
            >
              <div>
                <span className='pr-2 text-primary'>{`0${index + 1}`}</span>
                <motion.span variants={linkTextVariants}>
                  {link.label}
                </motion.span>
              </div>
              <motion.div
                className='border-t-2 border-primary'
                variants={linkUnderlineVariants}
              />
            </motion.div>
          </Link>
        ))}
      </motion.nav>
    </div>
  );
}

function MobileNavbar() {
  const { isMenuOpen, setIsMenuOpen, scrollOffset } = useNavigationMenu();

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
          backgroundColor: 'rgba(var(--bg-color))',
        }}
        animate={{
          backgroundColor:
            isMenuOpen || scrollOffset !== 0
              ? 'rgba(var(--bg-muted-color))'
              : 'rgba(var(--bg-color))',
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

export function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
