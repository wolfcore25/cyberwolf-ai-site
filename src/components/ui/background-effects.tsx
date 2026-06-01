"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-12 h-96 w-96 rounded-full bg-[var(--accent-teal)]/20 blur-3xl"
        animate={{ x: [0, 80, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.18, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[var(--accent-purple)]/20 blur-3xl"
        animate={{ x: [0, -70, -20, 0], y: [0, -30, 50, 0], scale: [1, 0.92, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-10rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[var(--accent-green)]/10 blur-3xl"
        animate={{ y: [0, -40, 10, 0], scale: [1, 1.1, 0.98, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.18)_42%,#0A0A0C_82%)]" />
    </div>
  );
}

export function BackgroundBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      <motion.div
        aria-hidden="true"
        className="absolute left-[-20%] top-24 h-px w-[140%] rotate-[-12deg] bg-gradient-to-r from-transparent via-[var(--accent-teal)]/50 to-transparent"
        animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-20%] top-64 h-px w-[140%] rotate-[10deg] bg-gradient-to-r from-transparent via-[var(--accent-purple)]/45 to-transparent"
        animate={{ x: ["16%", "-16%", "16%"], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-32 left-[-20%] h-px w-[140%] rotate-[-6deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
        animate={{ x: ["-12%", "20%", "-12%"], opacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function AnimatedGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,185,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,185,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
    />
  );
}

export function BackgroundGradientAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,185,255,0.28),rgba(132,68,255,0.2),rgba(70,235,159,0.22),rgba(0,185,255,0.28))] blur-3xl"
        animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,12,0.08)_0%,#0A0A0C_74%)]" />
    </div>
  );
}
