'use client';
import { motion } from 'framer-motion';
import Badge from './ui/Badge';
import Separator from './ui/Separator';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>About</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">AI systems builder</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-3xl font-semibold text-white sm:text-5xl"
        >
          Engineering AI platforms with rigorous data pipelines and measurable outcomes.
        </motion.h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base text-white/70 sm:text-lg">
            <p>
              I’m Devarsh Radadia, a computer engineering student focused on building production grade ML systems. I’m most energized by
              backend pipelines that transform messy data into reliable, decision ready intelligence and keep stakeholders from inventing their own metrics.
            </p>
            <p>
              My recent work spans FDA MAUDE ETL pipelines, RAG systems with citation grounding and FastAPI services optimized for
              low latency inference. I care deeply about traceability, evaluation and designing AI that earns trust. Not just applause.
            </p>
            <p>
              Outside product delivery, I study system design patterns for agentic workflows, vector search tradeoffs and scalable AI
              infrastructure with an eye on performance and correctness.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Timeline</div>
            <ol className="mt-6 space-y-5 text-sm text-white/70">
              <li>
                <div className="text-white">Dec 2025 to Present · AI Engineering Intern</div>
                <div className="text-white/50">Neujin Solutions</div>
              </li>
              <li>
                <div className="text-white">2023 · Software Engineering Intern</div>
                <div className="text-white/50">Yo4GIS</div>
              </li>
              <li>
                <div className="text-white">B.E. Computer Engineering</div>
                <div className="text-white/50">GTU · CGPA 8.8</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}