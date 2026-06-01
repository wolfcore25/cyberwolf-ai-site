export function AgentMark() {
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-full border border-[var(--accent-teal)]/35 bg-[radial-gradient(circle_at_50%_45%,rgba(0,185,255,0.26),rgba(5,7,11,0.98)_58%)] shadow-[0_0_30px_rgba(0,185,255,0.26)]">
      <div className="absolute inset-1 rounded-full border border-[var(--accent-teal)]/20" />
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="relative h-9 w-9 overflow-visible text-[var(--accent-teal)]"
        fill="none"
      >
        <path
          d="M12 32C12 20.95 20.95 12 32 12C43.05 12 52 20.95 52 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-80"
        />
        <path
          d="M52 32C52 43.05 43.05 52 32 52C20.95 52 12 43.05 12 32"
          stroke="#46EB9F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 6"
          className="opacity-80"
        />
        <circle cx="32" cy="32" r="7" fill="#F5FAFF" />
        <circle cx="32" cy="32" r="3" fill="#00B9FF" />
        <circle cx="17" cy="24" r="3.5" fill="#46EB9F" />
        <circle cx="47" cy="24" r="3.5" fill="#8444FF" />
        <circle cx="32" cy="49" r="3.5" fill="#00B9FF" />
        <path d="M20 25.5L27 30" stroke="#9EB0C6" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 25.5L37 30" stroke="#9EB0C6" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 39V45" stroke="#9EB0C6" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M24 18L32 8L40 18"
          stroke="#F5FAFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
      </svg>
      <span className="absolute -right-0.5 top-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-green)] shadow-[0_0_14px_rgba(70,235,159,0.9)]" />
    </div>
  );
}
