'use client';
import { useEffect, useMemo, useState } from 'react';
import { roles } from '@/lib/content';

export default function TypingRoles() {
  const phrases = useMemo(() => roles, []);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const speed = deleting ? 45 : 75;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) {
          setDeleting(true);
        }
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, display === current && !deleting ? 1200 : speed);

    return () => clearTimeout(timeout);
  }, [display, deleting, index, phrases]);

  return (
    <span className="text-white">
      {display}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-white/70" />
    </span>
  );
}
