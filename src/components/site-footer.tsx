import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <p className="text-lg font-black uppercase tracking-[0.22em] text-[var(--text-primary)]">
            CyberWolf AI Systems
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            AI-Powered. Human-Directed. Relentlessly Executed.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.04] p-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] shadow-[0_0_35px_rgba(0,185,255,0.08)]">
          {[
            ["Home", "/"],
            ["Web Solutions", "/web-solutions"],
            ["Book the Build Call", "#book"],
            ["Contact", "/contact"],
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
          ].map(([label, href]) =>
            href.startsWith("#") ? (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-3 transition hover:bg-[var(--accent-teal)] hover:text-black"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="rounded-full px-4 py-3 transition hover:bg-[var(--accent-teal)] hover:text-black"
              >
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}

