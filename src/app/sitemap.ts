import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/studio-services", priority: 0.9 },
  { path: "/web-design-orange", priority: 0.9 },
  { path: "/web-design-bathurst", priority: 0.9 },
  { path: "/portfolio", priority: 0.7 },
  { path: "/about-us", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/free-ai-seo-audit", priority: 0.7 },
  { path: "/order-ai-audit", priority: 0.7 },
  { path: "/digital-guide", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
