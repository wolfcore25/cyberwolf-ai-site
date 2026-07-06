"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CLOSE_RATE = 0.3;

function formatMoney(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function MissedCallMath() {
  const [missedPerWeek, setMissedPerWeek] = useState(10);
  const [jobValue, setJobValue] = useState(300);

  const annual = missedPerWeek * 52 * jobValue * CLOSE_RATE;

  return (
    <section id="math" className="relative px-6 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,185,255,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-teal)]">
            The Hard Truth
          </p>
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Every missed call is a customer you already paid to lose.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
            You spent money to make that phone ring — ads, reviews, referrals, years of
            reputation. Then it rang while you were on a ladder, in a consult, or asleep.
            Slide the numbers. This is what walking away sounds like.
          </p>
        </div>

        <div className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)]/75 p-6 md:grid-cols-[1fr_0.9fr] md:p-10">
          {/* controls */}
          <div className="space-y-9">
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <label htmlFor="missed-calls" className="text-sm font-semibold text-[var(--text-primary)]">
                  Calls you miss per week
                </label>
                <span className="font-display text-2xl font-bold text-[var(--accent-teal)]">
                  {missedPerWeek}
                </span>
              </div>
              <input
                id="missed-calls"
                type="range"
                min={1}
                max={40}
                value={missedPerWeek}
                onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                className="cw-range w-full"
              />
              <p className="mt-2 text-xs text-[var(--text-muted)]">
                After hours, during the rush, second line ringing — they add up fast.
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <label htmlFor="job-value" className="text-sm font-semibold text-[var(--text-primary)]">
                  Average value of a booked customer
                </label>
                <span className="font-display text-2xl font-bold text-[var(--accent-teal)]">
                  {formatMoney(jobValue)}
                </span>
              </div>
              <input
                id="job-value"
                type="range"
                min={50}
                max={5000}
                step={50}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="cw-range w-full"
              />
              <p className="mt-2 text-xs text-[var(--text-muted)]">
                A dinner for four, an HVAC emergency, a signed case — pick your number.
              </p>
            </div>
          </div>

          {/* output */}
          <div className="flex flex-col justify-between rounded-[1.5rem] border border-[var(--accent-teal)]/25 bg-black/40 p-6 md:p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Revenue walking to whoever answers first
              </p>
              <motion.p
                key={annual}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-display mt-3 text-5xl font-bold leading-none text-[var(--text-primary)] md:text-6xl"
              >
                {formatMoney(annual)}
                <span className="ml-2 text-lg font-semibold text-[var(--text-muted)]">/ year</span>
              </motion.p>
              <p className="mt-4 text-xs leading-6 text-[var(--text-muted)]">
                Assumes you&apos;d close just {Math.round(CLOSE_RATE * 100)}% of the calls
                you&apos;re currently missing. The first business to respond wins 78% of
                customers <span className="text-[var(--text-primary)]">(Lead Connect study)</span> —
                and most callers who hit voicemail simply dial the next result.
              </p>
            </div>
            <div className="mt-8">
              <MagneticButton href="#voice-demo" className="w-full">
                Stop the leak — talk to the AI
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
