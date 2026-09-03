import Link from "next/link";

export const metadata = {
  title: "SMS Consent",
  description:
    "CyberWolf AI Systems SMS messaging program, verbal opt-in script, and consent process.",
};

const privacyUrl = "https://cyberwolfaisystems.com/privacy";
const termsUrl = "https://cyberwolfaisystems.com/terms";

export default function SmsConsentPage() {
  return (
    <main className="min-h-screen bg-[var(--cyber-darker)]">
      <nav className="border-b border-[var(--cyber-border)] px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link href="/" className="shrink-0 text-lg font-bold text-[var(--cyber-blue)] sm:text-xl">
            CYBERWOLF <span className="text-sm font-light text-gray-500">AI SYSTEMS</span>
          </Link>
          <Link href="/" className="whitespace-nowrap text-sm text-gray-400 transition-colors hover:text-white">
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--cyber-blue)]">
          Compliance disclosure
        </p>
        <h1 className="text-4xl font-bold text-white">SMS Consent and Opt-In Process</h1>
        <p className="mb-12 mt-3 text-sm text-gray-500">Last updated: September 3, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="rounded-2xl border border-[var(--cyber-border)] bg-white/[0.03] p-6 md:p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              CyberWolf AI Systems SMS Messaging Program
            </h2>
            <p>
              CyberWolf AI Systems sends one-to-one transactional text messages only after the
              recipient gives clear consent. Messages may include appointment confirmations,
              scheduling reminders, callback confirmations, requested follow-up information, call
              or task-status notifications, and support replies. We do not send promotional or
              unsolicited text messages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              External recipient verbal opt-in
            </h2>
            <p className="mb-4">
              During a direct telephone conversation, the CyberWolf AI Systems representative or
              AI voice assistant reads the following disclosure before asking for consent:
            </p>
            <blockquote className="rounded-2xl border-l-4 border-[var(--cyber-blue)] bg-white/[0.04] p-6 text-white">
              Before you decide, you can review the CyberWolf AI Systems Privacy Policy at
              https://cyberwolfaisystems.com/privacy and Terms and Conditions at
              https://cyberwolfaisystems.com/terms. Do you agree to receive individual
              transactional text messages from CyberWolf AI Systems about your appointment,
              requested follow-up, or call status at the mobile number you provide? Message
              frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP
              for help. Consent is not a condition of purchase.
            </blockquote>
            <p className="mt-4 text-sm text-gray-400">
              The assistant speaks the addresses as cyberwolfaisystems dot com slash privacy and
              cyberwolfaisystems dot com slash terms so the caller can understand the exact URLs.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6">
              <li>The recipient must clearly say yes and provide or confirm the mobile number.</li>
              <li>If the recipient declines or does not clearly consent, no SMS is sent.</li>
              <li>CyberWolf AI Systems does not use keyword opt-in for this program.</li>
              <li>Consent applies only to the number and transactional purpose described.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Owner operational-alert opt-in</h2>
            <p>
              The CyberWolf AI Systems owner may separately enroll an owner-controlled mobile
              number for operational call and task-status alerts. The owner enters the number,
              manually selects separate ownership and SMS-consent checkboxes that open unchecked,
              and selects Save Owner Alert Configuration. Previously saved consent never
              preselects either checkbox.
            </p>
            <a
              href="https://drive.google.com/file/d/1iwDRrGdRqw3mFM0lUgLr4bTty3a3qoOy/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-[var(--cyber-blue)] px-5 py-3 text-sm font-semibold text-[var(--cyber-blue)] transition hover:bg-[var(--cyber-blue)] hover:text-black"
            >
              View unchecked opt-in controls
            </a>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Required disclosures</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to opt out at any time.</li>
              <li>Reply HELP for help.</li>
              <li>Consent is not a condition of purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Privacy and program terms</h2>
            <p>
              Mobile phone numbers, SMS opt-in data, and SMS consent information are not sold,
              rented, shared, or disclosed to third parties or affiliates for marketing or
              promotional purposes.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={privacyUrl}
                className="rounded-full bg-[var(--cyber-blue)] px-5 py-3 text-sm font-bold text-black"
              >
                Privacy Policy
              </a>
              <a
                href={termsUrl}
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white/50"
              >
                Terms and Conditions
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Privacy Policy: {privacyUrl}
              <br />
              Terms and Conditions: {termsUrl}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Support</h2>
            <p>
              For assistance, reply HELP or email{" "}
              <a
                href="mailto:gregs@cyberwolfaisystems.com"
                className="text-[var(--cyber-blue)] hover:underline"
              >
                gregs@cyberwolfaisystems.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
