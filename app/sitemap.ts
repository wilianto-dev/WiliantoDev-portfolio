import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wiliantodev.my.id";

  const projectUrls: MetadataRoute.Sitemap = projects
    .filter((p) => p.published)
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
      // lastModified dihilangkan: tidak ada updatedAt nyata per proyek
    }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}