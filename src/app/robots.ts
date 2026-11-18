import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://ai-tanzil811.github.io/PORTFOLIO2/sitemap.xml" };
}
