'use client';
import { motion } from 'framer-motion';
import { researchPosts } from '@/lib/content';
import Badge from './ui/Badge';
import Separator from './ui/Separator';

export default function Research() {
  return (
    <section id="research" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Research</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">LLM systems writing</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-3xl font-semibold text-white sm:text-5xl"
        >
          Notes on RAG quality, vector search and inference at scale.
        </motion.h2>
        <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
          Written like a human who has actually debugged a pipeline at 2 AM. Sarcasm is a side effect, not the feature.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {researchPosts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/research/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">{post.date}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm text-white/70">{post.summary}</p>
              <div className="mt-4 text-xs text-white/50">{post.readTime} read</div>
            </motion.a>
          ))}
        </div>
      </div>
      <Separator />
    </section>
  );
}
