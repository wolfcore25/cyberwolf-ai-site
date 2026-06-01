"use client";

import dynamic from "next/dynamic";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false }
);

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export function CalendlySection() {
  return (
    <section id="book" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            Book The Build Call
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] md:text-5xl">
            Ready to deploy AI that actually works?
          </h2>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)]/80 p-2">
          {calendlyUrl ? (
            <InlineWidget
              url={calendlyUrl}
              styles={{ height: "650px", minWidth: "320px" }}
              pageSettings={{
                backgroundColor: "0A0A0C",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "00B9FF",
                textColor: "F5FAFF",
                hideGdprBanner: true,
              }}
            />
          ) : (
            <div className="grid min-h-[360px] place-items-center rounded-[1.5rem] bg-black/45 p-8 text-center">
              <div>
                <p className="mb-3 text-lg font-bold text-[var(--text-primary)]">
                  Calendly placeholder
                </p>
                <p className="max-w-xl text-sm text-[var(--text-muted)]">
                  Add `NEXT_PUBLIC_CALENDLY_URL` when Wolf provides the booking link.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

