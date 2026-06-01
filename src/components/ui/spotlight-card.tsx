"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)]/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgba(0,185,255,0.16), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

