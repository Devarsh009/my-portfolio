import { projects, researchPosts } from "@/lib/content";

export default function sitemap() {
  const baseUrl = "https://devarsh.tech";

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const researchEntries = researchPosts.map((post) => ({
    url: `${baseUrl}/research/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/research`,
      lastModified: new Date(),
    },
    ...projectEntries,
    ...researchEntries,
  ];
}
