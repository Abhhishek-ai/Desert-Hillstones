import { MetadataRoute } from "next";
import { STONES } from "@/lib/stones";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deserthillstone.com";
  
  // Static pages
  const staticRoutes = [
    "",
    "/collections",
    "/instagram",
    "/the-founder",
    "/our-legacy",
    "/consultation",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic stone product pages
  const dynamicRoutes = STONES.map((stone) => ({
    url: `${baseUrl}/collections/${stone.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
