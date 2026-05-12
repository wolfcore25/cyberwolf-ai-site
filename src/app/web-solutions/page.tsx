"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[var(--cyber-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/wolf-logo.svg" alt="CyberWolf" width={36} height={36} />
          <span className="text-[var(--cyber-blue)] font-bold text-xl tracking-tight">
            CYBERWOLF
          </span>
          <span className="text-[var(--cyber-chrome)] text-sm font-light">AI SYSTEMS</span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/web-solutions" className="text-[var(--cyber-blue)] transition-colors">Web Solutions</Link>
          <Link href="/#services" className="hover:text-[var(--cyber-blue)] transition-colors">Services</Link>
          <Link href="/#about" className="hover:text-[var(--cyber-blue)] transition-colors">About</Link>
          <Link
            href="/#contact"
            className="px-4 py-2 bg-[var(--cyber-blue)] text-white font-semibold rounded hover:bg-[var(--cyber-blue-dim)] transition-colors"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[var(--cyber-border)] px-6 py-6 flex flex-col gap-4 text-sm">
          <Link href="/web-solutions" className="text-[var(--cyber-blue)] transition-colors" onClick={() => setMenuOpen(false)}>Web Solutions</Link>
          <Link href="/#services" className="text-gray-300 hover:text-[var(--cyber-blue)] transition-colors" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/#about" className="text-gray-300 hover:text-[var(--cyber-blue)] transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link
            href="/#contact"
            className="px-4 py-2 bg-[var(--cyber-blue)] text-white font-semibold rounded text-center hover:bg-[var(--cyber-blue-dim)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

const tiers = [
  {
    name: "Starter",
    build: "$800",
    monthly: "$149/mo",
    features: [
      "One-page website",
      "AI chatbot (5,000 convos/mo)",
      "SEO optimization",
      "Hosting included",
      "2 content updates/mo",
    ],
  },
  {
    name: "Pro",
    build: "$2,500",
    monthly: "$399/mo",
    featured: true,
    features: [
      "Multi-page site",
      "AI chatbot (10,000 convos/mo)",
      "AI phone agent (200 min/mo)",
      "Lead capture forms",
      "CRM integration",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    build: "$5,000+",
    monthly: "$799/mo",
    features: [
      "Full custom site with CMS",
      "AI chatbot (25,000 convos/mo)",
      "AI phone agent (500 min/mo)",
      "SMS automation",
      "Custom integrations",
      "Dedicated account management",
    ],
  },
];

const included = [
  { icon: "⚡", title: "Modern Tech Stack", desc: "Next.js, React, Tailwind — fast, scalable, future-proof." },
  { icon: "🤖", title: "AI Chatbot", desc: "24/7 conversational AI that answers questions and captures leads." },
  { icon: "📞", title: "Voice Agent", desc: "AI phone agent that handles calls with natural-sounding voice." },
  { icon: "🔍", title: "SEO Optimized", desc: "Built for search engines from day one. Get found by your customers." },
  { icon: "📱", title: "Mobile Responsive", desc: "Pixel-perfect on every device — phone, tablet, and desktop." },
  { icon: "📊", title: "Monthly Analytics", desc: "Clear reports on traffic, leads, and AI agent performance." },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn your business, goals, and requirements." },
  { num: "02", title: "We Build", desc: "Rapid development with your feedback at every step." },
  { num: "03", title: "Launch", desc: "Your AI-powered site goes live with full testing." },
  { num: "04", title: "Monthly Support", desc: "Ongoing updates, optimization, and AI agent management." },
];

export default function WebSolutions() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="grid-bg min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cyber-blue)] rounded-full opacity-[0.04] blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-20">
          <div className="inline-block px-4 py-1 border border-[var(--cyber-blue)]/30 rounded-full text-[var(--cyber-blue)] text-xs tracking-widest uppercase mb-8">
            AI-Ready Web Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            AI-Ready Websites That Work For You{" "}
            <span className="text-[var(--cyber-blue)] glow-text">24/7</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Modern websites with built-in AI chatbots and voice agents. Your business never sleeps.
          </p>
          <a
            href="#pricing"
            className="px-8 py-3 bg-[var(--cyber-blue)] text-white font-bold rounded glow-blue hover:bg-[var(--cyber-blue-dim)] transition-all inline-block"
          >
            View Packages →
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-[var(--cyber-dark)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What&apos;s <span className="text-[var(--cyber-blue)]">Included</span>
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div key={item.title} className="service-card bg-[var(--cyber-gray)] rounded-lg p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-[var(--cyber-blue)]">Package</span>
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`service-card bg-[var(--cyber-gray)] rounded-lg p-8 flex flex-col ${
                  tier.featured ? "border-glow ring-1 ring-[var(--cyber-blue)]/40" : ""
                }`}
              >
                {tier.featured && (
                  <div className="text-xs text-[var(--cyber-blue)] font-mono uppercase tracking-widest mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-[var(--cyber-blue)]">{tier.build}</span>
                  <span className="text-gray-500 text-sm ml-2">build</span>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold text-[var(--cyber-chrome)]">{tier.monthly}</span>
                  <span className="text-gray-500 text-sm ml-2">ongoing</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-[var(--cyber-blue)] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="block text-center px-6 py-3 bg-[var(--cyber-blue)] text-white font-bold rounded glow-blue hover:bg-[var(--cyber-blue-dim)] transition-all"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[var(--cyber-dark)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-[var(--cyber-blue)]">Works</span>
            </h2>
            <div className="gradient-line max-w-xs mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-[var(--cyber-blue)] font-mono text-sm mb-3">{step.num}</div>
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Launch Your <span className="text-[var(--cyber-blue)]">AI-Powered</span> Website?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Stop losing leads to a static website. Let AI work for you around the clock.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-3 bg-[var(--cyber-blue)] text-white font-bold rounded glow-blue hover:bg-[var(--cyber-blue-dim)] transition-all inline-block"
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--cyber-border)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} CyberWolf AI Systems. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--cyber-blue)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--cyber-blue)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
