import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aitanzil.me";
  const routes = ["", "/cv", "/work/greenpeft", "/work/cohere", "/work/sprint", "/work/chestxray-distillation", "/work/nirapod"];
  return routes.map(route => ({
    url: `${base}${route}${route ? "/" : "/"}`,
    lastModified: "2026-11-22",
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
