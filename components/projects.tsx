'use client';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Portfolio Website', description: 'A modern developer portfolio using Next.js and Tailwind.', link: '#' },
  { title: 'Task Manager App', description: 'A full-stack app for managing tasks using MERN stack.', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 rounded-xl shadow-md border hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <a href={project.link} className="text-blue-600 underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}