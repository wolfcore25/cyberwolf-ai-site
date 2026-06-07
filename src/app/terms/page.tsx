import Link from "next/link";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: May 22, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By using cyberwolfaisystems.com, DineLine, or other CyberWolf AI Systems services,
              you agree to these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              CyberWolf AI Systems provides AI agent development, DineLine voice-based restaurant
              booking assistance, phone automation, multi-agent system architecture, consulting,
              and workflow automation services. The specific scope of any business engagement will
              be defined in a separate project agreement or statement of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. DineLine SMS Terms</h2>
            <p>
              By agreeing to receive DineLine SMS updates, you consent to receive transactional
              text messages from CyberWolf AI Systems related to restaurant lookup and booking
              requests you initiate. Message frequency varies based on your request. Message and
              data rates may apply. Reply STOP to opt out at any time. Reply HELP for help.
              Consent to receive SMS messages is not a condition of purchase.
            </p>
            <p className="mt-4">
              CyberWolf AI Systems does not sell, rent, share, or disclose mobile phone numbers,
              SMS opt-in data, or SMS consent information to third parties or affiliates for
              marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. DineLine User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You are responsible for providing accurate restaurant lookup, party size, timing, and contact information.</li>
              <li>DineLine may attempt to find restaurant options or assist with booking requests, but reservations are not guaranteed.</li>
              <li>You agree not to use DineLine for unlawful, abusive, fraudulent, or unauthorized purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Client Responsibilities</h2>
            <p>Business clients are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing timely access to necessary accounts, APIs, and credentials</li>
              <li>Maintaining their own accounts with third-party services</li>
              <li>Responding to reasonable requests for information and approvals</li>
              <li>Ensuring compliance with applicable laws for their use of delivered AI systems</li>
              <li>Backing up their own data and systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Ownership & Intellectual Property</h2>
            <p>
              <strong className="text-[var(--cyber-blue)]">You own your systems.</strong> All custom
              code, configurations, agents, and integrations built for your project are your property
              upon full payment unless a separate agreement states otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payment terms and rates will be specified in each project agreement</li>
              <li>For hourly engagements, invoices are issued weekly or bi-weekly unless otherwise agreed</li>
              <li>Payment is due within 14 days of invoice unless otherwise agreed</li>
              <li>Late payments may incur a 1.5% monthly interest charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Confidentiality</h2>
            <p>
              We treat client information as confidential and will not disclose business information,
              credentials, strategies, or system details to any third party without permission except
              as required by law or as necessary to provide requested services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              AI and communications systems involve inherent uncertainties. While we strive for
              reliable deployments, we cannot guarantee specific outcomes, uptime percentages,
              restaurant availability, reservation success, or revenue results. Our total liability
              for any claim arising from our services shall not exceed fees paid for the specific
              engagement giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Third-Party Services</h2>
            <p>
              CyberWolf AI Systems services may depend on third-party telecommunications, voice AI,
              cloud, hosting, restaurant, or reservation services. We are not responsible for outages,
              delays, errors, or policy changes by third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Termination</h2>
            <p>
              Either party may terminate a business engagement with written notice according to the
              applicable project agreement. Outstanding invoices remain due, and completed work will
              be delivered as agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Warranty Disclaimer</h2>
            <p>
              Services are provided &quot;as is&quot; and &quot;as available.&quot; We disclaim all warranties,
              express or implied, including merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of New Jersey, United States. Any
              disputes shall be resolved in the courts of New Jersey.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with
              an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Contact</h2>
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
