"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AuroraBackground,
  AnimatedGrid,
  BackgroundBeams,
  BackgroundGradientAnimation,
} from "@/components/ui/background-effects";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { VapiWidgetPlaceholder } from "@/components/vapi-widget-placeholder";
import { AgentMark } from "@/components/agent-mark";
import { CalendlySection } from "@/components/calendly-section";
import { MobileStickyActions } from "@/components/mobile-sticky-actions";
import { SiteFooter } from "@/components/site-footer";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#verticals", label: "Industries" },
  { href: "#proof", label: "Proof" },
  { href: "#about", label: "About" },
  { href: "#voice-demo", label: "Voice Demo" },
  { href: "#book", label: "Book" },
];

const services = [
  {
    icon: "AI",
    eyebrow: "Agent Build",
    title: "AI Agent Development",
    copy: "Custom autonomous agents. From chatbots to multi-step reasoning systems.",
  },
  {
    icon: "24/7",
    eyebrow: "Voice Stack",
    title: "Voice AI & Phone Automation",
    copy: "AI answers your phone. Handles calls. Books appointments. 24/7.",
  },
  {
    icon: "OPS",
    eyebrow: "Systems",
    title: "Multi-Agent Architecture",
    copy: "Orchestrated AI teams: research, execute, verify, report.",
  },
  {
    icon: "EDU",
    eyebrow: "Enablement",
    title: "AI Consultation & Training",
    copy: "Hands-on training. Prompt engineering to full agent deployment.",
  },
  {
    icon: "API",
    eyebrow: "Automation",
    title: "Workflow Automation",
    copy: "CRM, APIs, SMS, and email wired into intelligent pipelines. Less manual work.",
  },
  {
    icon: "WEB",
    eyebrow: "Web",
    title: "AI-Ready Websites",
    copy: "Modern sites with AI chatbots and voice agents built in. From $149/mo.",
  },
];

const verticals = [
  {
    href: "/restaurants",
    title: "Restaurants",
    product: "DineLine",
    copy: "AI that books reservations by phone and keeps the front desk clear during the rush.",
  },
  {
    href: "/law-firms",
    title: "Law Firms",
    product: "Legal Intake",
    copy: "Qualify leads, collect case details, and schedule consultations after hours.",
  },
  {
    href: "/hvac",
    title: "HVAC / Plumbing",
    product: "Emergency Call AI",
    copy: "Separate true emergencies from next-day jobs without missing a revenue call.",
  },
  {
    href: "/medical",
    title: "Medical / Dental",
    product: "Patient Scheduling",
    copy: "Scheduling, rescheduling, and cancellation support without phone trees.",
  },
  {
    href: "/contractors",
    title: "Contractors",
    product: "Lead Conversion",
    copy: "Turn visitors into booked estimates before competitors call them back.",
  },
];

const proofItems = [
  "DineLine V2: live AI restaurant booking system",
  "ODSC AI Engineering Accelerator: 96% average",
  "20+ years enterprise sales and business development",
  "Systems built around real calls, real customers, real revenue",
];

const proofBadges = ["Anthropic", "CrewAI", "NVIDIA", "n8n", "VAPI", "ElevenLabs"];

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070b]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <AgentMark />
          <div className="leading-tight">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--text-primary)]">
              CyberWolf
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent-teal)]">
              AI Systems
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--accent-teal)]">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#voice-demo"
          className="hidden rounded-full border border-[var(--accent-teal)]/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-teal)] transition hover:bg-[var(--accent-teal)] hover:text-black sm:inline-flex"
        >
          Talk to AI
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32">
      <AuroraBackground />
      <BackgroundBeams />
      <AnimatedGrid />
      <div className="pointer-events-none absolute inset-x-0 top-16 z-[1] mx-auto h-[42rem] max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(0,185,255,0.18)_0%,rgba(70,235,159,0.08)_36%,transparent_70%)] blur-2xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mb-7 w-full max-w-xs rounded-2xl border border-[var(--border)] bg-white/[0.04] px-3 py-2 text-center text-[8px] font-bold uppercase leading-5 tracking-[0.14em] text-[var(--accent-green)] sm:max-w-sm sm:rounded-full sm:text-xs sm:tracking-[0.28em]"
        >
          Other agencies build websites. CyberWolf builds AI employees.
        </motion.div>

        <div className="mb-8">
          <Image
            src="/logo-main.png"
            alt="CyberWolf AI Systems"
            width={760}
            height={760}
            priority
            className="cyberwolf-logo-pulse mx-auto h-auto w-72 max-w-[78vw] brightness-125 contrast-125 drop-shadow-[0_0_42px_rgba(0,185,255,0.32)] md:w-[360px]"
          />
        </div>

        <h1 className="w-full max-w-xs text-balance text-xl font-black leading-[1.08] tracking-[-0.015em] text-white drop-shadow-[0_0_34px_rgba(0,185,255,0.28)] sm:max-w-5xl sm:text-4xl md:text-7xl md:leading-[0.95] md:tracking-[-0.05em]">
          Your AI employee answers the phone,{" "}
          <span className="cyber-gradient-text">books the appointment</span>, and never calls in sick.
        </h1>

        <p className="mt-7 w-full max-w-xs text-sm leading-7 text-[var(--text-muted)] sm:max-w-3xl sm:text-base md:text-xl">
          Production AI agents that handle real calls, real customers, real revenue. Deployed on
          your accounts. Owned by you.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton href="#voice-demo">Talk to CyberWolf</MagneticButton>
          <MagneticButton href="#book" variant="secondary">
            Book a Free Consultation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            What We Build
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
            AI systems that answer, route, book, follow up, and execute.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SpotlightCard key={service.title} className={index === 0 ? "lg:col-span-2" : ""}>
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-green)]">
                  {service.eyebrow}
                </p>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--accent-teal)]/30 bg-[var(--accent-teal)]/10 text-xs font-black tracking-[0.16em] text-[var(--accent-teal)] shadow-[0_0_24px_rgba(0,185,255,0.12)]">
                  {service.icon}
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-black text-[var(--text-primary)]">{service.title}</h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">{service.copy}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiator() {
  const rows = [
    ["Answers your phone 24/7", "No", "No", "Yes"],
    ["Books appointments automatically", "No", "No", "Yes"],
    ["You own everything", "No", "Yes", "Yes"],
    ["Production-grade AI", "No", "No", "Yes"],
    ["Live in days, not months", "No", "Yes", "Yes"],
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)]/70 p-6 md:p-10">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            The Difference
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
            Other agencies build websites. CyberWolf builds AI employees.
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-4 bg-white/[0.04] text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            <div className="p-4">Capability</div>
            <div className="p-4">Agency</div>
            <div className="p-4">DIY</div>
            <div className="p-4 text-[var(--accent-teal)]">CyberWolf</div>
          </div>
          {rows.map((row) => (
            <div key={row[0]} className="grid grid-cols-4 border-t border-white/10 text-sm">
              <div className="p-4 font-semibold text-[var(--text-primary)]">{row[0]}</div>
              {row.slice(1).map((value, index) => (
                <div
                  key={`${row[0]}-${index}`}
                  className={`p-4 ${value === "Yes" ? "text-[var(--accent-green)]" : "text-[var(--text-muted)]"}`}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      copy: "We map your workflows and find where AI creates the most leverage.",
    },
    {
      step: "02",
      title: "Build & Deploy",
      copy: "Working prototypes in days. On your accounts. You own everything.",
    },
    {
      step: "03",
      title: "Optimize & Scale",
      copy: "Monitor, refine, and expand. Your AI gets sharper over time.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <AnimatedGrid />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
            How We Work
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
            Built on your accounts. Owned by you.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <SpotlightCard key={step.step}>
              <div className="mb-6 text-5xl font-black text-[var(--accent-teal)]/30">{step.step}</div>
              <h3 className="mb-3 text-2xl font-black text-[var(--text-primary)]">{step.title}</h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">{step.copy}</p>
            </SpotlightCard>
          ))}
        </div>
        <div className="mt-10 rounded-full border border-[var(--accent-teal)]/30 bg-[var(--accent-teal)]/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[var(--accent-teal)] shadow-[0_0_36px_rgba(0,185,255,0.12)]">
          We build on your accounts. You own everything. No vendor lock-in.
        </div>
      </div>
    </section>
  );
}

function VerticalCards() {
  return (
    <section id="verticals" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
              Industry Systems
            </p>
            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
              Five verticals. One operating principle: never miss the call.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
            Each page is tailored around a real workflow, not generic AI theater.
          </p>
        </div>
        <div className="group/grid grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {verticals.map((vertical) => (
            <Link
              key={vertical.href}
              href={vertical.href}
              className="group min-h-[260px] rounded-[2rem] border border-[var(--border)] bg-[radial-gradient(circle_at_top,rgba(0,185,255,0.16),rgba(13,17,23,0.82)_44%,rgba(5,7,11,0.95))] p-5 transition duration-300 group-hover/grid:opacity-55 hover:-translate-y-2 hover:border-[var(--accent-teal)] hover:opacity-100 hover:shadow-[0_0_45px_rgba(0,185,255,0.12)]"
            >
              <p className="mb-16 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-green)]">
                {vertical.title}
              </p>
              <h3 className="mb-3 text-2xl font-black text-[var(--text-primary)]">{vertical.product}</h3>
              <p className="mb-5 text-sm leading-6 text-[var(--text-muted)]">{vertical.copy}</p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-teal)]">
                Learn More -&gt;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="proof" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
          Proof Of Work
        </p>
        <h2 className="mb-6 text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
          Shipped systems, not slide decks.
        </h2>
        <div className="space-y-4">
          {proofItems.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 text-sm text-[var(--text-muted)]">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[var(--accent-green)] shadow-[0_0_14px_rgba(70,235,159,0.65)]" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-black/35 py-4">
          <motion.div
            className="flex w-max gap-3 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...proofBadges, ...proofBadges].map((badge, index) => (
              <span
                key={`${badge}-${index}`}
                className="rounded-full border border-[var(--accent-teal)]/25 bg-[var(--accent-teal)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-teal)]"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutFounder() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(0,185,255,0.12),rgba(5,7,11,0.92)_42%,rgba(70,235,159,0.09))] p-6 shadow-[0_0_70px_rgba(0,185,255,0.08)] md:p-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
          About CyberWolf
        </p>
        <h2 className="mb-6 max-w-3xl text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
          Built by an Enterprise Sales Veteran Who Actually Ships AI.
        </h2>
        <div className="grid gap-6 md:grid-cols-[1fr_0.35fr] md:items-end">
          <p className="text-base leading-8 text-[var(--text-muted)] md:text-lg">
            CyberWolf AI Systems was founded by Greg Schwartz, a 20-year enterprise sales and
            business development leader who builds the AI systems he deploys. ODSC AI Engineering
            Accelerator graduate (96% average). Builder of DineLine V2, a live voice AI restaurant
            booking system. Greg sits in both seats: he closes enterprise deals and opens the
            terminal. That&apos;s the CyberWolf difference.
          </p>
          <div className="rounded-[1.5rem] border border-[var(--accent-teal)]/25 bg-black/35 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-teal)]">
              Sales + Systems
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
              Strategy, implementation, testing, and deployment under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VoiceDemo() {
  return (
    <section id="voice-demo" className="relative overflow-hidden px-6 py-24">
      <BackgroundGradientAnimation />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
          Live Product Demo
        </p>
        <h2 className="mb-5 text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
          Don&apos;t take our word for it. Talk to our AI right now.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
          The voice widget is the product demonstrating itself. Ask it what CyberWolf builds,
          where voice AI makes sense, or how an AI employee could help your business.
        </p>
        <VapiWidgetPlaceholder />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <AboutFounder />
      <ServicesGrid />
      <Differentiator />
      <Process />
      <VerticalCards />
      <SocialProof />
      <VoiceDemo />
      <CalendlySection />
      <SiteFooter />
      <MobileStickyActions />
    </main>
  );
}
