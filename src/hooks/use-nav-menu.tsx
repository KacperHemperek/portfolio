'use client';
import { useEffect, useState } from 'react';

export function useNavigationMenu() {
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
