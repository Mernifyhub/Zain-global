import type { MetadataRoute } from "next";
import { company, services } from "../data/site";

const BASE = company.domain;

/** Auto-generated from the route table + every manpower category. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/manpower-categories", priority: 0.9 },
    { path: "/employers", priority: 0.9 },
    { path: "/job-seekers", priority: 0.8 },
    { path: "/request-manpower", priority: 0.95 },
    { path: "/contact", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  const now = new Date();

  return [
    ...routes.map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
