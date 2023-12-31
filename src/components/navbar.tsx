'use client';
import { GithubIcon, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { cn } from '~/utils/cn';
import Link from 'next/link';
import { links } from '~/content/nav-links';
import { useNavigationMenu } from '~/hooks/use-nav-menu';
import { useScrollDirection } from '~/hooks/use-scroll-direction';
import IconLink from '~/components/common/icon-link';
import { socials } from '~/utils/socials';

function DesktopNavbar() {
  const { scrollOffset } = useNavigationMenu();
  const scrollDirection = useScrollDirection(5);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const linkTextVariants: Variants = {
    hovered: {
      color: 'rbg(var(--primary-color))',
    },
    unhovered: {
      color: 'white',
    },
  };

  const linkUnderlineVariants: Variants = {
    hovered: {
      width: '100%',
    },
    unhovered: {
      width: '2ch',
    },
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 z-50 hidden w-screen items-center justify-between gap-8 bg-background px-8 py-6 transition-shadow lg:flex',
        scrollOffset > 100 && 'shadow-nav',
      )}
      animate={{
        y: scrollDirection === 'up' || scrollOffset === 0 ? 0 : '-105%',
      }}
      transition={{
        y: {
          duration: 0.2,
          ease: 'easeIn',
        },
      }}
    >
      <Link
        href='/#header'
        className='text-2xl text-primary transition-opacity hover:opacity-80'
      >
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          KH
        </motion.span>
      </Link>
      <motion.div
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.5,
            },
          },
        }}
        initial='initial'
        animate='animate'
        className='flex items-center gap-8'
      >
        {links.map((link, index) => (
          <motion.div
            key={`navbar__link__${link.url}__${link.label}`}
            className='relative'
            variants={{
              initial: {
                y: -10,
                opacity: 0,
              },
              animate: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <Link href={link.url}>
              <motion.div
                className='-mb-1 flex flex-col py-2 text-center font-roboto text-xs'
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
                  initial={{ width: '2ch' }}
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
        <motion.div
          variants={{
            initial: {
              y: -10,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <IconLink href={`${socials.github.url}/portfolio`} bordered colored>
            <GithubIcon className='h-4 w-4' />
            <span className='text-xs'>View Source</span>
          </IconLink>
        </motion.div>
      </motion.div>
    </motion.nav>
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
