'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconData = [
  { Icon: FaGithub, url: 'https://github.com/Devarsh009', label: 'GitHub' },
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/devarsh-radadia-79220b251', label: 'LinkedIn' },
  { Icon: FaEnvelope, url: 'mailto:devarshradadia2580@gmail.com', label: 'Email' },
];

export default function SocialIcons({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div className={`flex gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
      {iconData.map(({ Icon, url, label }, i) => (
        <motion.a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
          aria-label={label}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
