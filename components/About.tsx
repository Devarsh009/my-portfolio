'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-10 md:mb-16"
        >
          About
        </motion.h2>
        <div className="max-w-2xl md:max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center">
            A pre-final year Computer Engineering student from India.<br />
            <br />
            Fueled by curiosity, caffeine and an urge to build before fully planning things out.<br />
            <br />
            Exploring AI, ML, and LLMs — teaching machines to be smart while I forget why I walked into the room.<br />
            <br />
            Tech, OTT binges and Gym keeps me calm.<br />
            Probably Googling something I should already know.<br />
          </p>
        </div>
        <div className="text-center mt-16">
          <p className="text-xl text-gray-400 italic">
            "Prove them wrong."
          </p>
        </div>
      </div>
    </section>
  );
}