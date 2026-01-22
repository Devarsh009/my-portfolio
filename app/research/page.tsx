import { researchPosts } from "@/lib/content";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Research | Devarsh Radadia",
  description: "LLM systems notes, RAG optimization, and FastAPI scaling.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#0b0b12] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <Badge>Research</Badge>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">Research notes</h1>
        <p className="mt-4 text-white/70">Deep dives into RAG quality, vector search, and inference performance.</p>
        <div className="mt-10 grid gap-6">
          {researchPosts.map((post) => (
            <a key={post.slug} href={`/research/${post.slug}`} className="glass-panel rounded-3xl p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">{post.date}</div>
              <div className="mt-3 text-lg text-white">{post.title}</div>
              <p className="mt-2 text-sm text-white/60">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
