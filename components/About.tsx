'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-100 text-black"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I’m Devarsh, a frontend-focused web developer with experience in building full-stack applications. I enjoy crafting intuitive user interfaces and seamless experiences using modern technologies like React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </motion.section>
  );
}