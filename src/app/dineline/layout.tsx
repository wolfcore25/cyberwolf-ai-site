import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "DineLine Restaurant Concierge AI",
    description:
      "DineLine is CyberWolf AI Systems' original diner-side restaurant concierge that finds restaurants, calls on behalf of the diner, and attempts reservations by phone.",
    path: "/dineline",
  }),
};

export default function DineLineLayout({ children }: { children: React.ReactNode }) {
  return children;
}

