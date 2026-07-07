type MobileStickyActionsProps = {
  demoHref?: string;
};

export function MobileStickyActions({ demoHref = "#voice-demo" }: MobileStickyActionsProps) {
  return (
    <div className="fixed inset-x-2 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 grid grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] gap-2 rounded-2xl border border-[var(--border)] bg-[#05070b]/92 p-2 shadow-[0_0_35px_rgba(0,185,255,0.18)] backdrop-blur-xl md:hidden">
      <a
        href={demoHref}
        className="min-w-0 whitespace-nowrap rounded-xl bg-[var(--accent-teal)] px-1.5 py-3 text-center text-[9px] font-black uppercase tracking-[-0.02em] text-black sm:text-[11px] sm:tracking-normal"
      >
        Talk to the AI
      </a>
      <a
        href="#book"
        className="min-w-0 whitespace-nowrap rounded-xl border border-[var(--accent-teal)]/45 px-1.5 py-3 text-center text-[9px] font-black uppercase tracking-[-0.02em] text-[var(--accent-teal)] sm:text-[11px] sm:tracking-normal"
      >
        Book the Build Call
      </a>
    </div>
  );
}
