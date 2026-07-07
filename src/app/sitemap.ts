import type { MetadataRoute } from "next";

const baseUrl = "https://cyberwolfaisystems.com";

const routes = [
  "",
  "/restaurants",
  "/law-firms",
  "/hvac",
  "/medical",
  "/contractors",
  "/web-solutions",
  "/dineline",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
