"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Line = { who: "ai" | "caller"; text: string };

const SCRIPT: Line[] = [
  { who: "ai", text: "Good evening — Harbor & Vine reservations. How can I help?" },
  { who: "caller", text: "Hi! Any chance you have a table for four tonight, around 7:30?" },
  { who: "ai", text: "Let me check… I have 7:15 on the patio or 7:45 in the dining room. Which do you prefer?" },
  { who: "caller", text: "7:45 inside works. It's Maria." },
  { who: "ai", text: "Done — party of four at 7:45 under Maria. A text confirmation is on its way." },
  { who: "caller", text: "That was easy. Thank you!" },
];

/* step: -1 ringing, 0..SCRIPT.length-1 lines, SCRIPT.length confirmation, then loop */
const CONFIRM_STEP = SCRIPT.length;

function Waveform({ speaker }: { speaker: "ai" | "caller" | null }) {
  const bars = [14, 22, 30, 18, 26, 34, 20, 28, 16, 32, 24, 18, 30, 22, 14, 26, 34, 20, 28, 16];
  const color = speaker === "caller" ? "var(--accent-green)" : "var(--accent-teal)";
  return (
    <div className="flex h-9 items-center justify-center gap-[3px]" aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className={speaker ? "wave-bar" : ""}
          style={{
            display: "inline-block",
            width: 3,
            height: h,
            borderRadius: 99,
            background: speaker ? color : "rgba(158,176,198,0.25)",
            animationDelay: `${(i % 7) * 0.09}s`,
            transform: speaker ? undefined : "scaleY(0.3)",
          }}
        />
      ))}
    </div>
  );
}

export function LiveCallDemo() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(reduceMotion ? CONFIRM_STEP : -1);

  useEffect(() => {
    if (reduceMotion) return;
    const delay =
      step === -1 ? 1700 : step < CONFIRM_STEP - 1 ? 2100 : step === CONFIRM_STEP - 1 ? 1400 : 4600;
    const t = setTimeout(() => {
      setStep((s) => (s >= CONFIRM_STEP ? -1 : s + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [step, reduceMotion]);

  const visibleLines = step < 0 ? [] : SCRIPT.slice(0, Math.min(step + 1, SCRIPT.length));
  const speaking =
    step >= 0 && step < CONFIRM_STEP ? SCRIPT[Math.min(step, SCRIPT.length - 1)].who : null;
  const confirmed = step >= CONFIRM_STEP;

  return (
    <div className="relative w-full max-w-md">
      <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_0%,rgba(0,185,255,0.16),transparent_65%)] blur-xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--accent-teal)]/25 bg-[#070b12]/90 shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_50px_rgba(0,185,255,0.10)] backdrop-blur">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="ring-pulse absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)]" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-green)]" />
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent-green)]">
              DineLine V2 · Live System
            </p>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Fri · 7:04 PM
          </p>
        </div>

        {/* incoming call strip */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-5 py-2.5">
          <p className="text-xs font-semibold text-[var(--text-muted)]">
            {step === -1 ? "Incoming call — restaurant line…" : "Call in progress"}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-teal)]">
            {step === -1 ? "Ring 1" : confirmed ? "Wrapped" : "AI answered"}
          </p>
        </div>

        {/* transcript */}
        <div className="flex min-h-[300px] flex-col justify-end gap-2.5 px-5 py-5 sm:min-h-[320px]">
          <AnimatePresence initial={false}>
            {visibleLines.map((line, i) => (
              <motion.div
                key={`${i}-${line.who}`}
                initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-6 ${
                  line.who === "ai"
                    ? "self-start rounded-bl-md border border-[var(--accent-teal)]/25 bg-[var(--accent-teal)]/10 text-[var(--text-primary)]"
                    : "self-end rounded-br-md border border-white/10 bg-white/[0.06] text-[var(--text-primary)]"
                }`}
              >
                <span
                  className={`mb-0.5 block text-[9px] font-bold uppercase tracking-[0.22em] ${
                    line.who === "ai" ? "text-[var(--accent-teal)]" : "text-[var(--accent-green)]"
                  }`}
                >
                  {line.who === "ai" ? "AI Employee" : "Caller"}
                </span>
                {line.text}
              </motion.div>
            ))}

            {confirmed && (
              <motion.div
                key="confirmation"
                initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-1 rounded-2xl border border-[var(--accent-green)]/40 bg-[var(--accent-green)]/10 px-4 py-3.5 shadow-[0_0_35px_rgba(70,235,159,0.12)]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent-green)]">
                  ✓ Reservation confirmed
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[var(--text-primary)]">
                  Maria · 4 guests · 7:45 PM
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  SMS confirmation sent · booked into the restaurant&apos;s own system
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* waveform + footer */}
        <div className="border-t border-white/10 px-5 pb-4 pt-3">
          <Waveform speaker={reduceMotion ? null : speaking} />
          <div className="mt-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
            <span>Answered on ring one</span>
            <span className="text-[var(--accent-teal)]">42 seconds</span>
            <span>0 staff interrupted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
