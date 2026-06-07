import type { Metadata } from "next";
import type { VerticalPage } from "@/data/vertical-pages";

const siteUrl = "https://cyberwolfaisystems.com";
const siteName = "CyberWolf AI Systems";
const defaultImage = "/logo-main.png";

export const businessInfo = {
  name: siteName,
  url: siteUrl,
  email: "gregs@cyberwolfaisystems.com",
  description:
    "CyberWolf AI Systems builds production AI employees, voice AI agents, phone automation, AI-ready websites, workflow automation, and multi-agent systems for real business workflows.",
  areaServed: "United States",
  // Add a public business phone and street address here once Wolf confirms the exact NAP.
  telephone: "",
  address: {
    addressCountry: "US",
  },
  services: [
    "AI agent development",
    "Voice AI and phone automation",
    "AI-ready website development",
    "Workflow automation",
    "Multi-agent system architecture",
    "Restaurant reservation AI",
    "Legal intake AI",
    "HVAC and plumbing emergency call AI",
    "Medical and dental appointment scheduling AI",
    "Contractor lead conversion AI",
  ],
} as const;

export const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/restaurants", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/law-firms", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/hvac", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/medical", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contractors", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/web-solutions", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/dineline", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.25, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.25, changeFrequency: "yearly" as const },
];

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createSeoMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
}: SeoOptions): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    metadataBase,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const metadataBase = new URL(siteUrl);

export function createVerticalSeoMetadata(page: VerticalPage): Metadata {
  return createSeoMetadata({
    title: `${page.product} for ${page.industry}`,
    description: page.headline,
    path: `/${page.slug}`,
  });
}
