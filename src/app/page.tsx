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
import { CalendlySection } from "@/components/calendly-section";
import { MobileStickyActions } from "@/components/mobile-sticky-actions";
import { SiteFooter } from "@/components/site-footer";
import { LiveCallDemo } from "@/components/live-call-demo";
import { MissedCallMath } from "@/components/missed-call-math";

const navLinks = [
  { href: "/web-solutions", label: "Web Solutions" },
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
    href: "#book",
  },
  {
    icon: "24/7",
    eyebrow: "Voice Stack",
    title: "Voice AI & Phone Automation",
    copy: "AI answers your phone. Handles calls. Books appointments. 24/7.",
    href: "#voice-demo",
  },
  {
    icon: "OPS",
    eyebrow: "Systems",
    title: "Multi-Agent Architecture",
    copy: "Orchestrated AI teams: research, execute, verify, report.",
    href: "#book",
  },
  {
    icon: "EDU",
    eyebrow: "Enablement",
    title: "AI Consultation & Training",
    copy: "Hands-on training. Prompt engineering to full agent deployment.",
    href: "#book",
  },
  {
    icon: "API",
    eyebrow: "Automation",
    title: "Workflow Automation",
    copy: "CRM, APIs, SMS, and email wired into intelligent pipelines. Less manual work.",
    href: "#book",
  },
  {
    icon: "WEB",
    eyebrow: "Web",
    title: "AI-Ready Websites",
    copy: "Modern sites with AI chatbots and voice agents built in. From $149/mo.",
    href: "/web-solutions",
  },
];

const verticals = [
  {
    href: "/restaurants",
    title: "Restaurants",
    product: "Restaurant AI Host",
    copy: "AI that works for the restaurant: answers calls, takes orders, books tables, and keeps the front desk clear.",
    callLine: "“Table for four at 7:45 — confirmed.”",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/law-firms",
    title: "Law Firms",
    product: "Legal Intake",
    copy: "Qualify leads, collect case details, and schedule consultations after hours.",
    callLine: "“Consultation booked for Tuesday at 10.”",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/hvac",
    title: "HVAC / Plumbing",
    product: "Emergency Call AI",
    copy: "Separate true emergencies from next-day jobs without missing a revenue call.",
    callLine: "“Tech dispatched — 40 minutes out.”",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/medical",
    title: "Medical / Dental",
    product: "Patient Scheduling",
    copy: "Scheduling, rescheduling, and cancellation support without phone trees.",
    callLine: "“You're rescheduled for Thursday at 2.”",
    image:
      "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/contractors",
    title: "Contractors",
    product: "Lead Conversion",
    copy: "Turn visitors into booked estimates before competitors call them back.",
    callLine: "“Estimate booked for Saturday morning.”",
    image:
      "https://images.unsplash.com/photo-1646119955125-7ef8819c813a?auto=format&fit=crop&w=900&q=80",
  },
];

const proofItems = [
  "DineLine V2: live diner-side restaurant concierge",
  "ODSC AI Engineering Accelerator graduate",
  "20+ years enterprise sales and business development",
  "Systems built around real calls, real customers, real revenue",
];

const proofBadges = ["Anthropic", "CrewAI", "NVIDIA", "n8n", "VAPI", "ElevenLabs"];

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070b]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-horizontal-light.png"
            alt="CyberWolf AI Systems"
            width={320}
            height={96}
            priority
            className="h-11 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)] lg:flex xl:gap-6 xl:tracking-[0.18em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--accent-teal)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="#voice-demo"
          className="hidden rounded-full border border-[var(--accent-teal)]/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-teal)] transition hover:bg-[var(--accent-teal)] hover:text-black sm:inline-flex"
        >
          Talk to the AI
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
      <AuroraBackground />
      <BackgroundBeams />
      <AnimatedGrid />
      <div className="pointer-events-none absolute inset-x-0 top-10 z-[1] mx-auto h-[40rem] max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(0,185,255,0.15)_0%,rgba(70,235,159,0.06)_38%,transparent_70%)] blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mb-8 inline-flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.04] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--accent-green)] sm:max-w-full sm:px-4 sm:text-xs sm:tracking-[0.26em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)] shadow-[0_0_12px_rgba(70,235,159,0.9)]" />
            Not chatbots. Not widgets. AI employees.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-display w-full max-w-[18.5rem] break-words text-balance text-[2.08rem] font-bold leading-[1.08] text-white sm:max-w-2xl sm:text-5xl md:text-6xl md:leading-[1.0] xl:text-7xl"
          >
            Your AI employee answers the phone,{" "}
            <span className="cyber-gradient-text">books the appointment</span>, and never calls
            in sick.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-7 w-full max-w-[18.5rem] text-sm leading-7 text-[var(--text-muted)] sm:max-w-xl sm:text-base md:text-lg md:leading-8"
          >
            Production voice AI that makes and takes real phone calls — deployed on your
            accounts, wired into your calendar, owned by you. Watch one work →
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex w-full max-w-[18.5rem] flex-col items-center gap-4 sm:max-w-none sm:flex-row"
          >
            <MagneticButton href="#voice-demo">Talk to the AI</MagneticButton>
            <MagneticButton href="#book" variant="secondary">
              Book the Build Call
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 grid w-full max-w-[18.5rem] grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-3"
          >
            {["DineLine V2 Live", "20+ Years Enterprise Sales", "You Own Everything"].map(
              (proof) => (
                <div
                  key={proof}
                  className="rounded-xl border border-[var(--accent-teal)]/20 bg-black/35 px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent-teal)]"
                >
                  {proof}
                </div>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex w-full min-w-0 justify-center lg:justify-end"
        >
          <LiveCallDemo />
        </motion.div>
      </div>
    </section>
  );
}

function MissionManifesto() {
  const missions = [
    {
      industry: "Restaurants",
      mission: "Never miss a reservation.",
      copy: "Never lose a customer to a busy signal. At 7 PM on a Friday when your host stand is slammed and three lines are ringing, your AI employee answers every call. It can take reservation details, capture takeout orders, handle special requests, and route anything complex to staff. No hold music. No voicemail. No lost covers. Your human staff stays with the guests. Your AI employee handles the phones.",
    },
    {
      industry: "Law Firms",
      mission: "Get the case.",
      copy: "Don't let a million dollar lead hang up without a consultation booked. A human receptionist is thinking about five things at once. Your AI employee is thinking about one thing: converting that call into a signed client.",
    },
    {
      industry: "HVAC Companies",
      mission: "Capture the emergency.",
      copy: "At 11 PM when your staff is asleep, your AI employee answers, qualifies the urgency, collects the details, and routes the call. That $2,000 emergency job doesn't go to your competitor.",
    },
    {
      industry: "Contractors",
      mission: "Book the estimate.",
      copy: "The first contractor to respond wins 78% of jobs. Your AI employee responds in seconds. Every time. Every call. Every lead.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,185,255,0.12),transparent_38%),radial-gradient(circle_at_85%_65%,rgba(70,235,159,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <AnimatedGrid />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            The CyberWolf Standard
          </p>
          <h2 className="font-display text-balance text-4xl font-bold leading-[1.03] text-white md:text-6xl">
            Your AI employee has{" "}
            <span className="text-[var(--accent-green)] drop-shadow-[0_0_22px_rgba(70,235,159,0.3)]">
              one mission.
            </span>{" "}
            And it never stops.
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-[var(--text-muted)] md:text-lg md:leading-9">
            CyberWolf AI employees don&apos;t take lunch breaks. They don&apos;t call in sick.
            They&apos;re not thinking about date night or checking their phone. They don&apos;t
            get tired at 2 AM. They keep following up until the workflow is complete.
          </p>
        </div>

        <div className="mx-auto my-12 max-w-4xl rounded-[2rem] border border-[var(--accent-teal)]/30 bg-black/45 px-6 py-8 text-center shadow-[0_0_60px_rgba(0,185,255,0.09)] backdrop-blur-sm md:px-12 md:py-10">
          <p className="font-display text-xl font-bold leading-8 text-white md:text-3xl md:leading-10">
            They have <span className="text-[var(--accent-teal)]">one mission.</span> It&apos;s
            binary. It&apos;s encoded. And they execute it{" "}
            <span className="text-[var(--accent-green)]">relentlessly.</span>
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {missions.map((item, index) => (
            <motion.article
              key={item.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--bg-card)]/85 p-6 shadow-[0_0_35px_rgba(0,185,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-teal)]/35 hover:shadow-[0_0_45px_rgba(0,185,255,0.1)] md:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent-teal)]/10 blur-3xl transition group-hover:bg-[var(--accent-green)]/10" />
              <p className="relative mb-5 text-xs font-black uppercase tracking-[0.32em] text-[var(--accent-teal)]">
                For {item.industry}
              </p>
              <h3 className="font-display relative mb-4 text-2xl font-bold text-white md:text-3xl">
                That mission is:{" "}
                <span className="text-[var(--accent-green)]">{item.mission}</span>
              </h3>
              <p className="relative text-sm leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
                {item.copy}{" "}
                {item.industry === "Restaurants" && (
                  <span className="font-black text-[var(--accent-green)]">Relentlessly.</span>
                )}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl text-center">
          <p className="font-display text-balance text-2xl font-bold leading-tight text-white md:text-4xl">
            No breaks. No distractions. No excuses.{" "}
            <span className="text-[var(--accent-teal)]">One mission.</span> Executed{" "}
            <span className="text-[var(--accent-green)]">relentlessly.</span>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="#voice-demo">Talk to the AI</MagneticButton>
            <MagneticButton href="#book" variant="secondary">
              Book the Build Call
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="relative px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            What We Build
          </p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            AI systems that answer, route, book, follow up, and execute.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const spanClass = index === 0 ? "lg:col-span-2" : "";

            return (
              <Link
                key={service.title}
                href={service.href}
                className={`${spanClass} group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
              >
                <SpotlightCard className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent-teal)]/55 group-hover:shadow-[0_30px_90px_rgba(0,185,255,0.16)]">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-green)]">
                      {service.eyebrow}
                    </p>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--accent-teal)]/30 bg-[var(--accent-teal)]/10 text-xs font-black tracking-[0.16em] text-[var(--accent-teal)] shadow-[0_0_24px_rgba(0,185,255,0.12)]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-muted)]">{service.copy}</p>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-[var(--accent-teal)] transition group-hover:text-[var(--accent-green)]">
                    Learn more -&gt;
                  </p>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Differentiator() {
  const rows = [
    ["Answers your phone 24/7", false, false, true],
    ["Books appointments automatically", false, false, true],
    ["You own everything", false, true, true],
    ["Production-grade AI", false, false, true],
    ["Live in days, not months", false, true, true],
  ] as const;

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)]/70 p-6 md:p-10">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            The Difference
          </p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Other agencies build websites. CyberWolf builds AI employees.
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-4 bg-white/[0.04] text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            <div className="p-4">Capability</div>
            <div className="p-4 text-center">Agency</div>
            <div className="p-4 text-center">DIY</div>
            <div className="p-4 text-center text-[var(--accent-teal)]">CyberWolf</div>
          </div>
          {rows.map((row) => (
            <div key={row[0]} className="grid grid-cols-4 border-t border-white/10 text-sm">
              <div className="p-4 font-semibold text-[var(--text-primary)]">{row[0]}</div>
              {row.slice(1).map((value, index) => (
                <div key={`${row[0]}-${index}`} className="grid place-items-center p-4">
                  {value ? (
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-full text-xs font-black ${
                        index === 2
                          ? "bg-[var(--accent-green)]/15 text-[var(--accent-green)] shadow-[0_0_16px_rgba(70,235,159,0.25)]"
                          : "bg-white/[0.06] text-[var(--text-muted)]"
                      }`}
                    >
                      ✓
                    </span>
                  ) : (
                    <span className="text-[var(--text-muted)]/50">—</span>
                  )}
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
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Built on your accounts. Owned by you.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <SpotlightCard key={step.step}>
              <div className="font-display mb-6 text-5xl font-bold text-[var(--accent-teal)]/30">
                {step.step}
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-[var(--text-primary)]">
                {step.title}
              </h3>
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
            <h2 className="font-display max-w-3xl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
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
              className="group min-h-[340px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[radial-gradient(circle_at_top,rgba(0,185,255,0.16),rgba(13,17,23,0.82)_44%,rgba(5,7,11,0.95))] transition duration-300 group-hover/grid:opacity-55 hover:-translate-y-2 hover:border-[var(--accent-teal)] hover:opacity-100 hover:shadow-[0_0_45px_rgba(0,185,255,0.12)]"
            >
              <div className="relative h-36 overflow-hidden border-b border-[var(--accent-teal)]/20">
                <Image
                  src={vertical.image}
                  alt={`${vertical.title} AI workflow photo`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.05),rgba(5,7,11,0.72)),radial-gradient(circle_at_top_left,rgba(0,185,255,0.24),transparent_44%)]" />
                <p className="absolute bottom-2 left-3 right-3 truncate text-[10px] font-semibold italic text-white/80">
                  {vertical.callLine}
                </p>
              </div>
              <div className="p-5">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-green)]">
                  {vertical.title}
                </p>
                <h3 className="font-display mb-3 text-2xl font-bold text-[var(--text-primary)]">
                  {vertical.product}
                </h3>
                <p className="mb-5 text-sm leading-6 text-[var(--text-muted)]">{vertical.copy}</p>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-teal)]">
                  Learn More -&gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipCase() {
  const callSnippet = [
    { who: "Caller", text: "Find a nice restaurant for six people on Saturday." },
    { who: "AI", text: "I found a strong option and can call to book 8:15." },
    { who: "Caller", text: "Perfect. Book it under Chen." },
  ];

  return (
    <section id="proof" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
          Proof Of Work
        </p>
        <h2 className="font-display mb-12 max-w-3xl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
          Shipped systems, not slide decks.
        </h2>

        <div className="grid gap-6 rounded-[2rem] border border-[var(--accent-teal)]/25 bg-[radial-gradient(circle_at_top_left,rgba(0,185,255,0.12),rgba(13,17,23,0.9)_46%,rgba(5,7,11,0.96))] p-6 md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div className="flex flex-col justify-center">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070b12]/90 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent-green)]">
                  ● Live production call flow
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  DineLine V2
                </p>
              </div>
              <div className="space-y-2.5">
                {callSnippet.map((line) => (
                  <div
                    key={line.text}
                    className={`max-w-[88%] rounded-xl px-3.5 py-2 text-xs leading-5 ${
                      line.who === "AI"
                        ? "border border-[var(--accent-teal)]/25 bg-[var(--accent-teal)]/10 text-[var(--text-primary)]"
                        : "ml-auto border border-white/10 bg-white/[0.06] text-[var(--text-primary)]"
                    }`}
                  >
                    <span
                      className={`mr-2 text-[9px] font-bold uppercase tracking-[0.18em] ${
                        line.who === "AI" ? "text-[var(--accent-teal)]" : "text-[var(--accent-green)]"
                      }`}
                    >
                      {line.who}
                    </span>
                    {line.text}
                  </div>
                ))}
                <div className="rounded-xl border border-[var(--accent-green)]/35 bg-[var(--accent-green)]/10 px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)]">
                  ✓ Booked — Chen · 6 guests · Sat 8:15 PM · SMS sent
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-green)]">
              Flagship Proof System
            </p>
            <h3 className="font-display mt-3 text-2xl font-bold text-white md:text-4xl">
              DineLine V2: the diner-side concierge that books restaurants by phone.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
              The original DineLine build works on behalf of the restaurant seeker: it finds
              options, presents recommendations, calls the restaurant, and reports the confirmed
              or declined outcome. Building it exposed the bigger business opportunity: the same
              architecture can work for restaurants as their autonomous phone host for reservations,
              order capture, guest questions, and front-desk overflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["VAPI", "n8n", "ElevenLabs", "Twilio"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--accent-teal)]/25 bg-[var(--accent-teal)]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent-teal)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="/dineline">See DineLine</MagneticButton>
              <MagneticButton href="/restaurants" variant="secondary">
                Restaurant AI Host
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {proofItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 text-sm text-[var(--text-muted)]"
            >
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
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(0,185,255,0.12),rgba(5,7,11,0.92)_42%,rgba(70,235,159,0.09))] p-6 shadow-[0_0_70px_rgba(0,185,255,0.08)] md:p-10">
        <div className="grid gap-8 md:grid-cols-[0.32fr_1fr] md:items-center">
          <div className="mx-auto flex w-full max-w-[220px] flex-col items-center rounded-[1.75rem] border border-[var(--accent-teal)]/25 bg-black/40 p-6 text-center">
            <div className="font-display grid h-24 w-24 place-items-center rounded-full border-2 border-[var(--accent-teal)]/40 bg-[radial-gradient(circle_at_50%_35%,rgba(0,185,255,0.25),rgba(5,7,11,0.95)_70%)] text-3xl font-bold text-[var(--text-primary)] shadow-[0_0_40px_rgba(0,185,255,0.25)]">
              GS
            </div>
            <p className="font-display mt-4 text-lg font-bold text-white">Greg Schwartz</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent-teal)]">
              Founder & AI Engineer
            </p>
            <p className="mt-3 text-[11px] leading-5 text-[var(--text-muted)]">
              Enterprise sales veteran. ODSC AI Engineering Accelerator graduate.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
              About CyberWolf
            </p>
            <h2 className="font-display mb-5 max-w-3xl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
              You talk to the person who builds the system.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              No account managers, no offshore hand-offs, no ticket queues. CyberWolf was founded
              by Greg Schwartz — a 20-year enterprise sales and business development leader who
              builds the AI systems he deploys. Builder of DineLine V2, a live diner-side
              restaurant concierge that calls and books by phone. Greg sits in both seats: he closes enterprise deals and
              opens the terminal. That&apos;s the CyberWolf difference.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Strategy", "Implementation", "Testing", "Deployment"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
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
        <h2 className="font-display mb-5 text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
          Don&apos;t book a demo. Have the demo answer you.
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

function ContactBlock() {
  return (
    <section id="contact" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--accent-teal)]/30 bg-[radial-gradient(circle_at_top_left,rgba(0,185,255,0.18),rgba(13,17,23,0.88)_42%,rgba(5,7,11,0.96))] p-6 shadow-[0_0_70px_rgba(0,185,255,0.1)] md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
              Start Here
            </p>
            <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
              Ready to put an AI employee to work?
            </h2>
            <p className="text-sm leading-7 text-[var(--text-muted)] md:text-base">
              Email CyberWolf directly, book a consultation, or talk to the homepage AI and hear
              the product explain itself.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:gregs@cyberwolfaisystems.com"
              className="block rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm font-bold text-white transition hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)]"
            >
              gregs@cyberwolfaisystems.com
            </a>
            <div className="grid gap-3 sm:grid-cols-2">
              <MagneticButton href="#book">Book the Build Call</MagneticButton>
              <MagneticButton href="#voice-demo" variant="secondary">
                Talk to the AI
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <MissionManifesto />
      <MissedCallMath />
      <ServicesGrid />
      <Differentiator />
      <Process />
      <VerticalCards />
      <FlagshipCase />
      <AboutFounder />
      <VoiceDemo />
      <ContactBlock />
      <CalendlySection />
      <SiteFooter />
      <MobileStickyActions />
    </main>
  );
}
