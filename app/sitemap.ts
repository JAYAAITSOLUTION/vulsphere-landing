import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://vulsphere.com", changeFrequency: "monthly", priority: 1 },
    { url: "https://vulsphere.com/blog", changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `https://vulsphere.com/blog/${p.slug}`,
      lastModified: p.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
