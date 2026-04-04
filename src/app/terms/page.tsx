import Link from "next/link";

export const metadata = {
  title: "Terms of Service — CyberWolf AI Systems",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[var(--cyber-darker)]">
      <nav className="border-b border-[var(--cyber-border)] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-[var(--cyber-orange)] font-bold text-xl">
            CYBERWOLF <span className="text-gray-500 text-sm font-light">AI SYSTEMS</span>
          </Link>
          <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: April 3, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By engaging CyberWolf AI Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              for services, you agree to these Terms of Service. If you do not agree, please do
              not engage our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              CyberWolf AI Systems provides AI agent development, voice automation, multi-agent
              system architecture, consulting, and workflow automation services. The specific
              scope of work for each engagement will be defined in a separate project agreement
              or statement of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing timely access to necessary accounts, APIs, and credentials</li>
              <li>Maintaining their own accounts with third-party services (Twilio, ElevenLabs, cloud providers, etc.)</li>
              <li>Responding to reasonable requests for information and approvals</li>
              <li>Ensuring compliance with applicable laws for their use of AI systems</li>
              <li>Backing up their own data and systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Ownership & Intellectual Property</h2>
            <p>
              <strong className="text-[var(--cyber-orange)]">You own your systems.</strong> All
              custom code, configurations, agents, and integrations built for your project are
              your property upon full payment. We retain no proprietary claim to work delivered
              under a client engagement.
            </p>
            <p className="mt-2">
              We may retain generalized knowledge and methodologies gained during engagements
              for use in future projects, provided no confidential client information is disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payment terms and rates will be specified in each project agreement</li>
              <li>For hourly engagements, invoices are issued weekly or bi-weekly</li>
              <li>Payment is due within 14 days of invoice unless otherwise agreed</li>
              <li>Late payments may incur a 1.5% monthly interest charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Confidentiality</h2>
            <p>
              We treat all client information as confidential. We will not disclose your business
              information, credentials, strategies, or system details to any third party without
              your explicit consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              AI systems involve inherent uncertainties. While we strive for reliable,
              production-grade deployments, we cannot guarantee specific outcomes, uptime
              percentages, or revenue results. Our total liability for any claim arising from
              our services shall not exceed the total fees paid for the specific engagement
              giving rise to the claim.
            </p>
            <p className="mt-2">
              We are not liable for damages arising from third-party service outages (Twilio,
              ElevenLabs, OpenAI, Anthropic, cloud providers), client misuse of delivered
              systems, or force majeure events.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
            <p>
              Either party may terminate an engagement with 7 days written notice. Upon
              termination:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Client receives all completed work and documentation</li>
              <li>Outstanding invoices become immediately due</li>
              <li>We will provide reasonable transition support</li>
              <li>Your systems continue running on your accounts — no disruption</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Warranty Disclaimer</h2>
            <p>
              Services are provided &quot;as is&quot; and &quot;as available.&quot; We disclaim all
              warranties, express or implied, including merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that AI systems will be error-free
              or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of New Jersey, United States.
              Any disputes shall be resolved in the courts of New Jersey.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued engagement after changes
              constitutes acceptance. We will notify active clients of material changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
            <p>
              For questions about these Terms, contact:
            </p>
            <p className="mt-2">
              <strong className="text-white">CyberWolf AI Systems</strong><br />
              Email:{" "}
              <a href="mailto:Gregory.schwartz525@gmail.com" className="text-[var(--cyber-orange)] hover:underline">
                Gregory.schwartz525@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
