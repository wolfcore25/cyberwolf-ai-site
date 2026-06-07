import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { metadataBase } from "@/lib/seo";
import { createBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const businessSchema = createBusinessSchema();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "CyberWolf AI Systems | AI Employees for Real Business Workflows",
    template: "%s | CyberWolf AI Systems",
  },
  description:
    "CyberWolf AI Systems builds production voice AI agents, phone automation, AI-ready websites, and multi-agent systems on your accounts. You own everything.",
  keywords: [
    "AI agent development",
    "voice AI",
    "phone automation",
    "ElevenLabs",
    "VAPI",
    "Twilio",
    "n8n",
    "Claude",
    "AI employees",
    "AI consulting",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/wolf-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/wolf-logo.png",
  },
  openGraph: {
    title: "CyberWolf AI Systems | AI Employees for Real Business Workflows",
    description:
      "Production AI agents that handle real calls, real customers, real revenue. Deployed on your accounts. Owned by you.",
    url: "/",
    siteName: "CyberWolf AI Systems",
    images: [
      {
        url: "/logo-main.png",
        width: 1200,
        height: 630,
        alt: "CyberWolf AI Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberWolf AI Systems | AI Employees for Real Business Workflows",
    description:
      "Production AI agents that handle real calls, real customers, real revenue. Deployed on your accounts. Owned by you.",
    images: ["/logo-main.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
