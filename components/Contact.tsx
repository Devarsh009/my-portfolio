'use client';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import { contactLinks } from '@/lib/content';
import Badge from './ui/Badge';

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Contact</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Let’s collaborate</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-3xl font-semibold text-white sm:text-5xl"
        >
          Ready to build reliable AI systems together.
        </motion.h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/70"
          >
            <p className="text-lg sm:text-xl">
              Open to AI/ML internships, research collaborations, and backend ML platform work. I respond quickly and value clarity — not 12-page requirements with no problem statement.
            </p>
            <div className="grid gap-4 text-sm">
              <div className="glass-panel rounded-2xl p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Email</div>
                <div className="mt-2 text-white">devarshradadia2580@gmail.com</div>
              </div>
              <div className="glass-panel rounded-2xl p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Location</div>
                <div className="mt-2 text-white">India · IST</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel rounded-3xl p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Connect</div>
            <div className="mt-4 text-sm text-white/70">
              Prefer a quick intro? Reach out on your favorite channel.
            </div>
            <div className="mt-6">
              <SocialIcons align="center" />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={contactLinks.email}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                Email me
              </a>
              {contactLinks.calendly ? (
                <a
                  href={contactLinks.calendly}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
                >
                  Book a call
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
