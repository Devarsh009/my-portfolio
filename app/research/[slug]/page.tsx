import { notFound } from "next/navigation";
import { researchPosts } from "@/lib/content";
import Badge from "@/components/ui/Badge";

export function generateStaticParams() {
  return researchPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = researchPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Research`,
    description: post.summary,
  };
}

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const post = researchPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#0b0b12] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-3xl">
        <Badge>Research</Badge>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">{post.title}</h1>
        <div className="mt-3 text-sm text-white/50">
          {post.date} · {post.readTime}
        </div>
        <p className="mt-6 text-base text-white/70">{post.summary}</p>
        <div className="mt-8 space-y-5 text-base text-white/70">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 space-y-3 text-sm text-white/70">
          {post.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
