'use client';
import { motion } from 'framer-motion';
import { projects } from '@/lib/content';
import Badge from './ui/Badge';
import Separator from './ui/Separator';
import Button from './ui/Button';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Projects</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Case studies</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-3xl font-semibold text-white sm:text-5xl"
        >
          Production-grade systems with measurable impact.
        </motion.h2>
        <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
          Each project highlights architecture decisions, ML pipelines and reliability tradeoffs from real deployments. No hand wavy magic. Just systems that work.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">{project.title}</div>
              <p className="mt-4 text-sm text-white/70">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Button href={`/projects/${project.slug}`} variant="outline" className="w-full">
                  View case study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Separator />
    </section>
  );
}
