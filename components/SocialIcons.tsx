'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconData = [
  { Icon: FaGithub, url: 'https://github.com/Devarsh009' },
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/devarsh-radadia-79220b251' },
  { Icon: FaEnvelope, url: 'mailto:devarshradadia2580@gmail.com' },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      {iconData.map(({ Icon, url }, i) => (
        <motion.a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-gray-600 hover:text-gray-900"
        >
          <Icon size={30} />
        </motion.a>
      ))}
    </div>
  );
}
