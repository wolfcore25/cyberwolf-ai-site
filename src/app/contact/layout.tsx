import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "Contact CyberWolf AI Systems",
    description:
      "Contact CyberWolf AI Systems for DineLine support, AI agent development, voice automation, and AI-ready website services.",
    path: "/contact",
  }),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

