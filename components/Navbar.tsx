'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['home', 'about', 'skills', 'projects', 'research', 'experience', 'resume', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const navOffset = 120;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + navOffset;
      let current = 'home';

      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full px-5 py-3 glass-panel">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-semibold">DR</span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Devarsh Radadia</div>
              <div className="text-xs text-white/60">AI/ML Engineer</div>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/60">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item}`}
                className={`transition-colors duration-200 ${active === item ? 'text-white' : 'hover:text-white'}`}
                onClick={() => handleNavClick(item)}
                aria-current={active === item ? 'page' : undefined}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="xl:hidden rounded-full border border-white/10 p-2 text-white/80 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
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
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 z-40 h-screen w-4/5 max-w-sm bg-[#0b0b12] shadow-2xl xl:hidden"
          >
            <div className="flex h-full flex-col gap-6 px-6 py-10">
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">Navigation</div>
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-2xl font-semibold capitalize ${active === item ? 'text-white' : 'text-white/60'}`}
                  onClick={() => { setOpen(false); handleNavClick(item); }}
                  aria-current={active === item ? 'page' : undefined}
                >
                  {item}
                </a>
              ))}
              <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                Building AI systems, RAG pipelines, and ML platforms.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
