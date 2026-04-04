import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberWolf AI Systems — Production AI Agent Development",
  description:
    "Custom AI agent development, voice automation, and multi-agent system architecture. We build on YOUR accounts. You own everything.",
  keywords: [
    "AI agent development",
    "voice AI",
    "phone automation",
    "ElevenLabs",
    "Twilio",
    "OpenClaw",
    "Claude",
    "GPT-4o",
    "AI consulting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
