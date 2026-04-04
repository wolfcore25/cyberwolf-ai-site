import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — CyberWolf AI Systems",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: April 3, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              CyberWolf AI Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy describes how we collect, use, and
              safeguard information when you visit our website, use our services, or interact
              with our AI systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p><strong className="text-white">Information you provide directly:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact information (email, phone number) when you reach out to us</li>
              <li>Business information relevant to project scoping</li>
              <li>Communications via email, phone, or messaging platforms</li>
            </ul>
            <p className="mt-4"><strong className="text-white">Information collected automatically:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Basic website analytics (page views, referral source)</li>
              <li>Device and browser information</li>
              <li>IP address (anonymized)</li>
            </ul>
            <p className="mt-4"><strong className="text-white">Voice and phone interactions:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>When you interact with our AI voice systems, call recordings may be stored for quality assurance</li>
              <li>Transcriptions of voice interactions may be generated for service improvement</li>
              <li>Phone numbers are collected for callback and communication purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our AI development services</li>
              <li>To communicate with you about projects and inquiries</li>
              <li>To operate and improve our AI voice systems</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p>
              We do <strong className="text-[var(--cyber-orange)]">not</strong> sell, rent,
              or trade your personal information to third parties. We may share information only:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>With service providers who assist in delivering our services (e.g., cloud hosting, communication platforms) under strict data protection agreements</li>
              <li>When required by law, regulation, or legal process</li>
              <li>To protect the safety, rights, or property of CyberWolf AI Systems or others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including
              encryption in transit and at rest, access controls, and regular security reviews.
              However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to fulfill the purposes
              described in this policy, or as required by law. Project-related data is retained
              for the duration of our engagement and a reasonable period thereafter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of non-essential communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a href="mailto:Gregory.schwartz525@gmail.com" className="text-[var(--cyber-orange)] hover:underline">
                Gregory.schwartz525@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Services</h2>
            <p>
              Our services may integrate with third-party platforms (e.g., Twilio for
              telecommunications, ElevenLabs for voice synthesis, cloud providers for hosting).
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated revision date. Continued use of our services constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              For questions about this Privacy Policy or our data practices, contact:
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
