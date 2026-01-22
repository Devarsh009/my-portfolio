'use client';
import { motion } from 'framer-motion';
import { skillsMatrix } from '@/lib/content';
import Badge from './ui/Badge';
import Separator from './ui/Separator';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Skills</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">ML · Data · Backend</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-3xl font-semibold text-white sm:text-5xl"
        >
          Depth across AI, data engineering, and scalable backend systems.
        </motion.h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skillsMatrix.map((group, groupIndex) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">{group.group}</div>
              <div className="mt-6 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Separator />
    </section>
  );
}
