'use client';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-gray-100 text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-white border rounded-full text-sm shadow-sm cursor-default"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 120, delay: i * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
