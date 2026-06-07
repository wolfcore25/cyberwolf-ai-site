import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--cyber-darker)]">
      <nav className="border-b border-[var(--cyber-border)] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-[var(--cyber-blue)] font-bold text-xl">
            CYBERWOLF <span className="text-gray-500 text-sm font-light">AI SYSTEMS</span>
          </Link>
          <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact CyberWolf AI Systems</h1>
          <p className="text-gray-400 text-lg mb-10">
            For DineLine support, CyberWolf AI Systems services, privacy questions, or SMS assistance, contact us below.
          </p>

          <div className="border-glow rounded-xl p-8 md:p-12 bg-[var(--cyber-gray)] text-gray-300 leading-relaxed">
            <p className="mb-4"><strong className="text-white">CyberWolf AI Systems</strong></p>
            <p>
              Contact email: <a href="mailto:gregs@cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">gregs@cyberwolfaisystems.com</a>
            </p>
            <p>
              Website: <a href="https://cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">https://cyberwolfaisystems.com</a>
            </p>
            <p className="mt-6 text-sm text-gray-500">
              DineLine SMS users may reply STOP to opt out at any time or HELP for assistance.
            </p>
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
