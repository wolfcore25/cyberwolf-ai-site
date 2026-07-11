import Link from "next/link";

export const metadata = {
  title: "DineLine",
  description:
    "DineLine is CyberWolf AI Systems' original diner-side restaurant concierge that finds restaurants, calls on behalf of the diner, and attempts reservations by phone.",
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
            The original restaurant concierge that calls on behalf of the diner.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
            DineLine began as a diner-side voice concierge. A caller tells it what kind of
            restaurant they want, DineLine searches for options, presents recommendations, calls
            the restaurant on the caller&apos;s behalf, and reports back whether the reservation was
            confirmed or declined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:gregs@cyberwolfaisystems.com?subject=DineLine%20Demo%20Request"
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
              title: "Autonomous outbound booking",
              desc: "DineLine can call the restaurant on behalf of the caller, ask for availability, handle simple back-and-forth, and report the outcome.",
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
        <div className="max-w-5xl mx-auto border border-[var(--cyber-blue)]/25 rounded-xl p-8 md:p-12 bg-[var(--cyber-gray)]">
          <div className="inline-block px-4 py-1 border border-[var(--cyber-blue)]/30 rounded-full text-[var(--cyber-blue)] text-xs tracking-widest uppercase mb-6">
            What DineLine Proved
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            From diner-side concierge to restaurant-owned AI employee.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            Building DineLine revealed the larger business opportunity. If an AI concierge can
            search, call, and book restaurants for the diner, the same architecture can be pointed
            at the restaurant&apos;s own phones.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The restaurant-facing version works for the business: answering incoming calls,
            taking reservation or order details, handling common guest questions, confirming by
            SMS, and routing edge cases to staff. DineLine is the proof system. The restaurant AI
            host is the commercial deployment.
          </p>
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
            <p>Contact email: <a href="mailto:gregs@cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">gregs@cyberwolfaisystems.com</a></p>
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
