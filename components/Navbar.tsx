'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

// Add smooth scrolling globally
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

function getActiveSection() {
  if (typeof window === 'undefined') return '';
  const scrollY = window.scrollY;
  let active = navItems[0];
  for (let i = 0; i < navItems.length; i++) {
    const el = document.getElementById(navItems[i]);
    if (el) {
      const offsetTop = el.offsetTop - 80; // account for navbar height
      const nextEl = navItems[i + 1] ? document.getElementById(navItems[i + 1]) : null;
      const nextOffset = nextEl ? nextEl.offsetTop - 80 : Infinity;
      if (scrollY >= offsetTop && scrollY < nextOffset) {
        active = navItems[i];
        break;
      }
    }
  }
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const navOffset = 100; // adjust if your navbar height changes

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + navOffset + 1;
      let current = 'home';
      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      // Special case: if at bottom, set to contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = 'contact';
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (item: string) => {
    setActive(item);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 w-full z-50 bg-black/40 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-extrabold text-2xl tracking-tight text-white select-none">DR</span>
        <div className="hidden md:flex gap-8">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize hover:text-blue-400 text-white transition-colors duration-200 ${active === item ? 'border-b-2 border-blue-400 pb-1' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-black/90 shadow-lg p-6 z-40 md:hidden"
          >
            <div className="flex flex-col gap-8 mt-12">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize text-lg hover:text-blue-400 text-white transition-colors duration-200 ${active === item ? 'border-b-2 border-blue-400 pb-1' : ''}`}
                  onClick={() => { setOpen(false); handleNavClick(item); }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
