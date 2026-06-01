import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "AI-Ready Web Solutions",
    description:
      "CyberWolf AI Systems builds AI-ready websites with voice agents, chatbots, analytics, and conversion-focused automation.",
    path: "/web-solutions",
  }),
};

export default function WebSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
