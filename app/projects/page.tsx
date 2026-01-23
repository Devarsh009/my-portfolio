import { projects } from "@/lib/content";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Projects | Devarsh Radadia",
  description: "Case studies on AI systems, RAG pipelines and ML backend platforms.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b12] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-5xl">
        <Badge>Projects</Badge>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">Case studies</h1>
        <p className="mt-4 text-white/70">Detailed breakdowns of production ML systems and engineering decisions.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <a key={project.slug} href={`/projects/${project.slug}`} className="glass-panel rounded-3xl p-6">
              <div className="text-sm text-white/80">{project.title}</div>
              <p className="mt-3 text-sm text-white/60">{project.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
