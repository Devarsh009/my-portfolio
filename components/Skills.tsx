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
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-4 py-2 bg-white border rounded-full text-sm shadow-sm cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
