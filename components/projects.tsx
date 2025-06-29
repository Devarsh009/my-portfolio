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
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Next.js, React Three Fiber, and Tailwind CSS.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-10 md:mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-5 md:p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 min-h-[180px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex justify-end items-center">
                  <a 
                    href={project.link}
                    className="text-white hover:text-purple-400 transition-colors duration-300 text-lg md:text-xl"
                  >
                    →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 italic">
            "EVER POSITIVE NEVER NEGATIVE"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
