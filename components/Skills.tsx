'use client';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-10 md:mb-16"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-white border rounded-full text-sm md:text-base shadow-sm cursor-default text-black mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 120, delay: i * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
