import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#0b0b12] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <Badge>Case Study</Badge>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-white/70">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stack.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6">
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Problem Statement</h2>
            <p className="mt-3 text-sm text-white/70">{project.problem}</p>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Dataset / Scale</h2>
            <p className="mt-3 text-sm text-white/70">{project.datasetScale}</p>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Architecture Diagram</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {project.architecture.map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">ML / LLM Pipeline</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
              {project.pipeline.map((step) => (
                <span key={step} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {step}
                </span>
              ))}
            </div>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">System Design</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {project.systemDesign.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Engineering Challenges</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {project.challenges.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Metrics</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {project.metrics.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Screenshots</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {project.screenshots.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="glass-panel rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-white">Links</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.github ? (
                <Button href={project.links.github} variant="outline">
                  GitHub
                </Button>
              ) : null}
              {project.links.demo ? (
                <Button href={project.links.demo}>Live demo</Button>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
