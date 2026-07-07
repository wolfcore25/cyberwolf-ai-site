import Link from "next/link";
import Image from "next/image";
import { CalendlySection } from "@/components/calendly-section";
import { MobileStickyActions } from "@/components/mobile-sticky-actions";
import { SiteFooter } from "@/components/site-footer";
import { VapiWidgetPlaceholder } from "@/components/vapi-widget-placeholder";
import { AuroraBackground, AnimatedGrid, BackgroundGradientAnimation } from "@/components/ui/background-effects";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import type { VerticalPage } from "@/data/vertical-pages";

type VerticalLandingPageProps = {
  page: VerticalPage;
};

export function VerticalLandingPage({ page }: VerticalLandingPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="relative min-h-[86vh] overflow-hidden px-4 pb-24 pt-8 sm:px-6">
        <AuroraBackground />
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-7xl">
          <nav className="mb-20 flex items-center justify-between">
            <Link
              href="/"
              className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent-teal)] transition hover:text-[var(--accent-green)]"
            >
              CyberWolf AI Systems
            </Link>
            <a
              href="#book"
              className="hidden rounded-full border border-[var(--accent-teal)]/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-teal)] transition hover:bg-[var(--accent-teal)] hover:text-black sm:inline-flex"
            >
              Book the Build Call
            </a>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex max-w-xs rounded-2xl border border-[var(--border)] bg-white/[0.04] px-3 py-2 text-[8px] font-bold uppercase leading-5 tracking-[0.14em] text-[var(--accent-green)] sm:max-w-sm sm:rounded-full sm:text-xs sm:tracking-[0.28em]">
                {page.product} / {page.industry}
              </p>
              <h1 className="max-w-xs text-balance text-xl font-black leading-[1.08] tracking-[-0.015em] text-white drop-shadow-[0_0_34px_rgba(0,185,255,0.28)] sm:max-w-none sm:text-4xl md:text-7xl md:leading-[0.95] md:tracking-[-0.045em]">
                {page.headline}
              </h1>
              <p className="mt-7 max-w-xs text-sm leading-7 text-[var(--text-muted)] sm:max-w-3xl sm:text-base md:text-xl">
                CyberWolf builds practical voice AI agents that answer real calls, qualify real customers,
                and keep working when the office is closed.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <MagneticButton href="#demo">Talk to the AI</MagneticButton>
                <MagneticButton href="#book" variant="secondary">
                  Book the Build Call
                </MagneticButton>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--accent-teal)]/35 bg-black shadow-[0_0_70px_rgba(0,185,255,0.18)] md:min-h-[520px]">
              <Image
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,185,255,0.26),rgba(4,11,22,0.16)_36%,rgba(5,7,11,0.62)_100%),radial-gradient(circle_at_78%_18%,rgba(70,235,159,0.16),transparent_34%),linear-gradient(180deg,rgba(5,7,11,0.02),rgba(5,7,11,0.7))]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.35rem] border border-[var(--accent-teal)]/20 bg-[#04111d]/58 p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--accent-teal)]">
                  {page.industry} AI Deployed
                </p>
                <p className="mt-3 text-lg font-black leading-7 text-white">
                  Real calls. Real workflows. Built for the front line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
              Pain Points
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
              The calls you miss are the revenue you never see.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {page.painPoints.map((point, index) => (
              <SpotlightCard key={point}>
                <div className="mb-5 text-4xl font-black text-[var(--accent-teal)]/30">
                  0{index + 1}
                </div>
                <p className="text-xl font-black leading-8 text-[var(--text-primary)]">{point}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)]/80 p-8 shadow-[0_0_70px_rgba(0,185,255,0.08)] md:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
            The CyberWolf Solution
          </p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
            An AI employee built for {page.industry.toLowerCase()}.
          </h2>
          <p className="text-lg leading-9 text-[var(--text-muted)]">{page.solutionCopy}</p>
        </div>
      </section>

      <section id="demo" className="relative overflow-hidden px-6 py-24">
        <BackgroundGradientAnimation />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-green)]">
            Live Demo
          </p>
          <h2 className="mb-5 text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
            {page.primaryCta}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
            Talk to the CyberWolf homepage agent and hear how this workflow could be deployed
            for your business.
          </p>
          <VapiWidgetPlaceholder />
        </div>
      </section>

      <CalendlySection />
      <SiteFooter />
      <MobileStickyActions demoHref="#demo" />
    </main>
  );
}
