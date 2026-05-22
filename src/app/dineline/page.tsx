import Link from "next/link";

export const metadata = {
  title: "DineLine — CyberWolf AI Systems",
  description:
    "DineLine is a voice-based restaurant booking assistant by CyberWolf AI Systems with customer-requested transactional booking updates by SMS.",
};

export default function DineLinePage() {
  return (
    <main className="min-h-screen bg-[var(--cyber-darker)]">
      <nav className="border-b border-[var(--cyber-border)] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-[var(--cyber-blue)] font-bold text-xl">
            CYBERWOLF <span className="text-gray-500 text-sm font-light">AI SYSTEMS</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="grid-bg py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 border border-[var(--cyber-blue)]/30 rounded-full text-[var(--cyber-blue)] text-xs tracking-widest uppercase mb-8">
            DineLine by CyberWolf AI Systems
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Voice-based restaurant booking assistance with clear transactional updates.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
            DineLine is a voice-based restaurant booking assistant by CyberWolf AI Systems.
            Callers can ask DineLine to find restaurant options, attempt reservations, and send
            transactional booking updates by SMS after consent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@cyberwolfaisystems.com?subject=DineLine%20Demo%20Request"
              className="px-8 py-3 bg-[var(--cyber-blue)] text-white font-bold rounded glow-blue hover:bg-[var(--cyber-blue-dim)] transition-all text-center"
            >
              Request a DineLine Demo
            </a>
            <Link
              href="/privacy"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded hover:border-[var(--cyber-blue)]/50 hover:text-white transition-all text-center"
            >
              Review SMS Privacy
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-3xl leading-relaxed">
            By using DineLine, you may choose to receive transactional SMS updates about your
            restaurant lookup or booking request. Message and data rates may apply. Message
            frequency varies. Reply STOP to opt out, HELP for help. SMS consent is not a
            condition of purchase.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--cyber-dark)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Restaurant lookup",
              desc: "Callers can ask DineLine for restaurant options based on their request, location, timing, party size, and preferences.",
            },
            {
              title: "Booking assistance",
              desc: "DineLine can attempt reservation requests and provide booking status updates when information becomes available.",
            },
            {
              title: "Transactional SMS",
              desc: "After consent, DineLine can send customer-requested messages such as reservation confirmations and booking status updates.",
            },
          ].map((item) => (
            <div key={item.title} className="service-card bg-[var(--cyber-gray)] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto border-glow rounded-xl p-8 md:p-12 bg-[var(--cyber-gray)]">
          <h2 className="text-3xl font-bold mb-6 text-white">SMS opt-in workflow</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            DineLine sends SMS only after a caller requests restaurant booking assistance and
            verbally agrees during the call to receive text updates. The assistant asks for
            permission before sending SMS confirmation or booking updates.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-[var(--cyber-blue)] font-mono text-sm mb-2">01</div>
              <h3 className="text-white font-semibold mb-1">Caller initiates request</h3>
              <p className="text-gray-500 text-sm">The caller asks for restaurant lookup or booking help.</p>
            </div>
            <div>
              <div className="text-[var(--cyber-blue)] font-mono text-sm mb-2">02</div>
              <h3 className="text-white font-semibold mb-1">Permission is requested</h3>
              <p className="text-gray-500 text-sm">DineLine asks whether the caller agrees to receive text updates.</p>
            </div>
            <div>
              <div className="text-[var(--cyber-blue)] font-mono text-sm mb-2">03</div>
              <h3 className="text-white font-semibold mb-1">Updates are transactional</h3>
              <p className="text-gray-500 text-sm">Messages are limited to reservation confirmations, booking status updates, and support messages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--cyber-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact identity</h2>
          <div className="bg-[var(--cyber-gray)] rounded-lg p-6 text-gray-300 leading-relaxed">
            <p><strong className="text-white">CyberWolf AI Systems</strong></p>
            <p>Contact email: <a href="mailto:support@cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">support@cyberwolfaisystems.com</a></p>
            <p>Website: <a href="https://cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">https://cyberwolfaisystems.com</a></p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--cyber-border)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} CyberWolf AI Systems. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--cyber-blue)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--cyber-blue)] transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-[var(--cyber-blue)] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
