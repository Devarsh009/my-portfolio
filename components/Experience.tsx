'use client';
import { motion } from 'framer-motion';
import { experience } from '@/lib/content';
import Badge from './ui/Badge';
import Separator from './ui/Separator';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Experience</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Impact timeline</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-3xl font-semibold text-white sm:text-5xl"
        >
          Shipping AI infrastructure with measurable outcomes.
        </motion.h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experience.map((item) => (
            <div key={item.role} className="glass-panel rounded-3xl p-6">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="font-semibold text-white">{item.role}</span>
                <span>{item.period}</span>
              </div>
              <div className="mt-2 text-white/60">{item.company}</div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator />
    </section>
  );
}
