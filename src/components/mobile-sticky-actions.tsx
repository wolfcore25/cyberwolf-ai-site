type MobileStickyActionsProps = {
  demoHref?: string;
};

export function MobileStickyActions({ demoHref = "#voice-demo" }: MobileStickyActionsProps) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 rounded-full border border-[var(--border)] bg-[#05070b]/90 p-2 shadow-[0_0_35px_rgba(0,185,255,0.18)] backdrop-blur-xl md:hidden">
      <a
        href={demoHref}
        className="min-w-0 rounded-full bg-[var(--accent-teal)] px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.12em] text-black"
      >
        Talk to AI
      </a>
      <a
        href="#book"
        className="min-w-0 rounded-full border border-[var(--accent-teal)]/45 px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.12em] text-[var(--accent-teal)]"
      >
        Book Call
      </a>
    </div>
  );
}
