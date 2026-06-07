import Link from "next/link";

export default function PrivacyPolicy() {
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

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: May 22, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              CyberWolf AI Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy describes how we collect, use, and safeguard
              information when you visit cyberwolfaisystems.com, use our services, or interact
              with DineLine and related CyberWolf AI Systems products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p><strong className="text-white">Information you provide directly:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact information, including email address and phone number, when you contact us or request service</li>
              <li>Restaurant lookup, booking request, and support information you choose to provide through DineLine</li>
              <li>Business information relevant to project scoping or customer support</li>
              <li>Communications via email, phone, SMS, or messaging platforms</li>
            </ul>
            <p className="mt-4"><strong className="text-white">Information collected automatically:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Basic website analytics, such as page views and referral source</li>
              <li>Device and browser information</li>
              <li>IP address and standard server log information</li>
            </ul>
            <p className="mt-4"><strong className="text-white">Voice and phone interactions:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>When you interact with DineLine or other CyberWolf AI Systems voice services, call details and transcripts may be used to complete your request and improve service quality</li>
              <li>Phone numbers may be collected to provide customer-requested transactional updates, reservation confirmations, booking status updates, and support messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide DineLine restaurant lookup and booking assistance you request</li>
              <li>To send customer-requested transactional updates, reservation confirmations, booking status updates, and support messages</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To operate, maintain, and improve CyberWolf AI Systems services</li>
              <li>To comply with legal obligations and protect against misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. SMS Consent and SMS Data</h2>
            <p>
              DineLine sends SMS only after a caller requests restaurant booking assistance and
              verbally agrees during the call to receive text updates. The assistant asks for
              permission before sending SMS confirmation or booking updates.
            </p>
            <p className="mt-4">
              CyberWolf AI Systems does not sell, rent, share, or disclose mobile phone numbers,
              SMS opt-in data, or SMS consent information to third parties or affiliates for
              marketing or promotional purposes. SMS data is used only to provide requested
              DineLine reservation updates, confirmations, support messages, and related
              transactional communications.
            </p>
            <p className="mt-4">
              Users may opt out of SMS messages at any time by replying STOP. Users may reply
              HELP for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
            <p>
              We do <strong className="text-[var(--cyber-blue)]">not</strong> sell, rent, or trade
              your personal information. We may share information only with service providers
              that help us deliver requested services, when required by law, or when necessary to
              protect the rights, safety, or property of CyberWolf AI Systems or others.
            </p>
            <p className="mt-4">
              SMS consent, SMS opt-in data, and mobile phone numbers are not shared with third
              parties or affiliates for marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security and Retention</h2>
            <p>
              We use reasonable administrative, technical, and organizational safeguards to protect
              personal information. We retain information only as long as needed to provide the
              requested service, support customer communications, comply with law, and maintain
              business records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Choices and Rights</h2>
            <p>You may request access, correction, deletion, or a copy of personal information we hold about you. You may opt out of SMS by replying STOP.</p>
            <p className="mt-2">
              To exercise privacy rights or ask questions, contact us at{" "}
              <a href="mailto:gregs@cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">
                gregs@cyberwolfaisystems.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Services</h2>
            <p>
              Our services may integrate with third-party platforms such as telecommunications,
              voice AI, hosting, analytics, and cloud providers. These providers process data only
              as needed to support requested CyberWolf AI Systems services and are subject to their
              own privacy terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              <strong className="text-white">CyberWolf AI Systems</strong><br />
              Contact email: <a href="mailto:gregs@cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">gregs@cyberwolfaisystems.com</a><br />
              Website: <a href="https://cyberwolfaisystems.com" className="text-[var(--cyber-blue)] hover:underline">https://cyberwolfaisystems.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
