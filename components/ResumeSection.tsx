'use client';
import Badge from './ui/Badge';
import Separator from './ui/Separator';

export default function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Resume</Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">ATS-ready</span>
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-white sm:text-5xl">
          Download the full resume or scan the ATS-optimized version below. Yes, it’s ATS-friendly — you’re welcome.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-3xl p-6 text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Download</div>
            <p className="mt-4 text-sm">
              PDF resume is available for recruiters and hiring managers.
            </p>
            <a
              href="/Devarsh_Resume.pdf"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
            >
              Download PDF
            </a>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Summary</div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-white">Education</div>
                <div>B.E. Computer Engineering, GTU · CGPA 8.70</div>
              </div>
              <div>
                <div className="text-white">Core Focus</div>
                <div>LLM systems, RAG pipelines, backend ML platforms, data engineering</div>
              </div>
              <div>
                <div className="text-white">Skills</div>
                <div>Python, C++, SQL, FastAPI, Redis, Docker, PostgreSQL, PyTorch, NLP, LangGraph, RAG, AWS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}
