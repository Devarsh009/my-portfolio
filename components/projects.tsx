'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ghar.com',
    description: 'Real estate listing platform built with React, Node.js, MongoDB.',
    link: 'https://ghar-dot-com.onrender.com',
  },
  {
    title: 'Expense Manager',
    description: 'Personal expense tracking web app built with Next.js, TypeScript, Tailwind.',
    link: 'https://your-expense-manager.vercel.app',
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-white text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100 transition"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
