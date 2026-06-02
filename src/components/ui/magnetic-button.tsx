"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const base =
    "group relative inline-flex min-w-0 items-center justify-center overflow-hidden rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] transition sm:px-7 sm:text-sm sm:tracking-[0.18em]";
  const variants = {
    primary:
      "bg-[var(--accent-teal)] text-black shadow-[0_0_35px_rgba(0,185,255,0.28)] hover:bg-[var(--accent-green)]",
    secondary:
      "border border-[var(--border)] bg-white/5 text-[var(--text-primary)] hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10",
  };

  return (
    <motion.a
      {...props}
      style={{ x: springX, y: springY }}
      className={`${base} ${variants[variant]} ${className}`}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
      )}
    </motion.a>
  );
}
