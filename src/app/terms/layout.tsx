import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "Terms of Service",
    description:
      "CyberWolf AI Systems terms of service for website visitors, DineLine users, and AI service customers.",
    path: "/terms",
  }),
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

