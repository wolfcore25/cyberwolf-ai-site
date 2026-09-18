import Link from "next/link";
import { StriperLineConsentForm } from "./consent-form";

export const metadata = {
  title: "StriperLine SMS Consent",
  description:
    "Owner-only consent and disclosures for CyberWolf AI Systems StriperLine transactional SMS.",
};

const privacyUrl = "https://cyberwolfaisystems.com/privacy";
const termsUrl = "https://cyberwolfaisystems.com/terms";

export default function StriperLineSmsConsentPage() {
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
          StriperLine compliance disclosure
        </p>
        <h1 className="text-4xl font-bold text-white">StriperLine SMS Consent</h1>
        <p className="mb-12 mt-3 text-sm text-gray-500">Last updated: September 18, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="rounded-2xl border border-[var(--cyber-border)] bg-white/[0.03] p-6 md:p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">What this program does</h2>
            <p>
              StriperLine is an owner-operated striped bass fishing assistant available at
              +1 848-266-6003. The owner may text questions about tackle, bait, rigging, tides,
              seasonal behavior, reports, and boat fishing. StriperLine may return conversational
              answers, requested current-condition summaries, trip-log confirmations,
              clarification questions, and owner-configured condition alerts.
            </p>
            <p className="mt-4">
              This program is limited to one verified owner-controlled mobile number. It does not
              send marketing, promotional messages, bulk messages, or messages to fishing clients
              or other third parties.
            </p>
            <p className="mt-4">
              SMS is an optional channel. StriperLine voice service remains available at +1
              848-266-6003 without SMS enrollment, a mobile-number submission, or text-message
              consent.
            </p>
          </section>

          <StriperLineConsentForm />

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Required disclosures</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to opt out at any time.</li>
              <li>Reply HELP for help.</li>
              <li>SMS consent is optional and is not a condition of purchase or voice-service use.</li>
              <li>No purchased, rented, shared, or third-party marketing lists are used.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-6 md:p-8">
            <h2 className="mb-3 text-xl font-semibold text-white">CyberWolf safety notice</h2>
            <p>
              StriperLine is an AI fishing-information assistant operated by CyberWolf AI
              Systems. Its responses may be incomplete, delayed, or incorrect. StriperLine is
              not a substitute for official weather, marine, navigation, emergency, licensing,
              or fishing-regulation sources.
            </p>
            <p className="mt-4">
              Always verify forecasts, on-water conditions, closures, seasons, size and bag
              limits, and safety requirements with NOAA, the U.S. Coast Guard, and the relevant
              state agency before acting. In an emergency, call 911 or the Coast Guard; do not
              rely on StriperLine.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Privacy and program terms</h2>
            <p>
              Mobile numbers, SMS opt-in data, and SMS consent information are not sold, rented,
              shared, or disclosed to third parties or affiliates for marketing or promotional
              purposes.
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
