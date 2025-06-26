'use client';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import dynamic from 'next/dynamic';

const IcosaScene = dynamic(() => import('./IcosaScene'), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-between px-10"
    >
      {/* 3D Scene on Left */}
      <div className="w-1/2 h-full flex items-center justify-center relative z-0">
        <IcosaScene />
      </div>

      {/* Text Content on Right */}
      <div className="w-1/2 flex flex-col items-start justify-center z-10 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Hi, I'm Devarsh<br />Radadia!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300"
        >
          A passionate pre-final year developer focused on crafting beautiful web experiences.
        </motion.p>

        <SocialIcons />
      </div>
    </section>
  );
}
