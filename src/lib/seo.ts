import type { Metadata } from "next";
import type { VerticalPage } from "@/data/vertical-pages";

const siteUrl = "https://cyberwolfaisystems.com";
const siteName = "CyberWolf AI Systems";
const defaultImage = "/logo-main.png";

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
