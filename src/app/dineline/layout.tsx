import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: "DineLine Restaurant Booking AI",
    description:
      "DineLine is a voice-based restaurant booking assistant by CyberWolf AI Systems with customer-requested transactional booking updates by SMS.",
    path: "/dineline",
  }),
};

export default function DineLineLayout({ children }: { children: React.ReactNode }) {
  return children;
}

