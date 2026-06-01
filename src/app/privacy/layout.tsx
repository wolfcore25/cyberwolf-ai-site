import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "Privacy Policy",
    description:
      "CyberWolf AI Systems privacy policy for website visitors, DineLine users, and AI service customers.",
    path: "/privacy",
  }),
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

