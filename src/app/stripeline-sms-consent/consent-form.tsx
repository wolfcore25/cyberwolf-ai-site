"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";

type ConsentReceipt = {
  id: string;
  createdAt: string;
  status: "declined" | "opted-in";
  maskedPhone?: string;
};

const consentStorageKey = "cyberwolf:stripeline-sms-consent";
const consentSavedEvent = "cyberwolf:stripeline-sms-consent-saved";

function subscribeToConsentReceipt(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(consentSavedEvent, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(consentSavedEvent, onStoreChange);
  };
}

function getConsentReceiptSnapshot() {
  return localStorage.getItem(consentStorageKey) ?? "";
}

function parseConsentReceipt(stored: string): ConsentReceipt | null {
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored) as Partial<ConsentReceipt>;
    if (
      typeof parsed.id === "string" &&
      typeof parsed.createdAt === "string" &&
      (parsed.status === "declined" ||
        parsed.status === "opted-in" ||
        typeof parsed.maskedPhone === "string")
    ) {
      return {
        id: parsed.id,
        createdAt: parsed.createdAt,
        status: parsed.status === "declined" ? "declined" : "opted-in",
        maskedPhone:
          typeof parsed.maskedPhone === "string" ? parsed.maskedPhone : undefined,
      };
    }
  } catch {
    // Leave an invalid local receipt hidden without changing stored browser data.
  }

  return null;
}

export function StriperLineConsentForm() {
  const [phone, setPhone] = useState("");
  const [ownsNumber, setOwnsNumber] = useState(false);
  const [acceptsSms, setAcceptsSms] = useState(false);
  const [error, setError] = useState("");
  const storedReceipt = useSyncExternalStore(
    subscribeToConsentReceipt,
    getConsentReceiptSnapshot,
    () => "",
  );
  const receipt = parseConsentReceipt(storedReceipt);

  function savePreference(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!acceptsSms) {
      const record: ConsentReceipt = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        status: "declined",
      };
      localStorage.setItem(consentStorageKey, JSON.stringify(record));
      window.dispatchEvent(new Event(consentSavedEvent));
      return;
    }

    const digits = phone.replace(/\D/g, "");
    const normalized = digits.length === 11 && digits.startsWith("1")
      ? digits.slice(1)
      : digits;

    if (normalized.length !== 10) {
      setError("Enter a valid 10-digit US mobile number.");
      return;
    }
    if (!ownsNumber) {
      setError("Confirm that you own or control the number before opting in to SMS.");
      return;
    }

    const record: ConsentReceipt = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "opted-in",
      maskedPhone: `***-***-${normalized.slice(-4)}`,
    };
    localStorage.setItem(consentStorageKey, JSON.stringify(record));
    window.dispatchEvent(new Event(consentSavedEvent));
  }

  return (
    <form
      onSubmit={savePreference}
      className="rounded-2xl border border-[var(--cyber-border)] bg-white/[0.035] p-6 md:p-8"
    >
      <div className="mb-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--cyber-blue)]">
          Optional owner-only SMS preference
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Choose whether to receive texts</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          SMS enrollment is optional. You can keep using StriperLine by voice at +1 848-266-6003
          without entering a mobile number or agreeing to receive texts. This form is only for the
          CyberWolf AI Systems owner-controlled mobile number and does not enroll fishing clients,
          customers, or any third party.
        </p>
      </div>

      <label className="block text-sm font-semibold text-white" htmlFor="stripeline-mobile">
        Owner-controlled mobile number (optional; required only for SMS opt-in)
      </label>
      <input
        id="stripeline-mobile"
        name="mobile"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="(555) 555-5555"
        className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[var(--cyber-blue)]"
      />

      <div className="mt-6 space-y-4">
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:border-white/20">
          <input
            type="checkbox"
            checked={ownsNumber}
            onChange={(event) => setOwnsNumber(event.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--cyber-blue)]"
          />
          <span className="text-sm leading-relaxed text-gray-300">
            I confirm that I own or control the mobile number entered above. This is required only
            if I choose the optional SMS consent below.
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:border-white/20">
          <input
            type="checkbox"
            checked={acceptsSms}
            onChange={(event) => setAcceptsSms(event.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--cyber-blue)]"
          />
          <span className="text-sm leading-relaxed text-gray-300">
            <strong className="text-white">Optional SMS consent:</strong> I agree to receive
            recurring transactional StriperLine text messages from CyberWolf AI Systems at this
            number. Messages may include answers to my striped bass fishing questions, requested
            current-condition summaries, trip-log confirmations, clarification questions, and
            owner-only condition alerts. Message frequency varies. Message and data rates may
            apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase
            or use of StriperLine&apos;s voice service.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-full bg-[var(--cyber-blue)] px-6 py-3 text-sm font-bold text-black transition hover:brightness-110"
      >
        Save SMS Preference
      </button>

      <p className="mt-3 text-xs leading-relaxed text-gray-400">
        Leave the optional SMS box unchecked and select Save SMS Preference to decline texts. No
        mobile number is required, and StriperLine voice access remains available.
      </p>

      {error && (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-300">
          {error}
        </p>
      )}

      {receipt?.status === "opted-in" && (
        <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          <p className="font-bold">Owner consent acknowledgment saved in this browser.</p>
          <p className="mt-2">Mobile: {receipt.maskedPhone}</p>
          <p>Recorded: {receipt.createdAt}</p>
          <p className="break-all">Consent record: {receipt.id}</p>
        </div>
      )}

      {receipt?.status === "declined" && (
        <div className="mt-6 rounded-xl border border-sky-400/30 bg-sky-400/10 p-4 text-sm text-sky-100">
          <p className="font-bold">No SMS consent was recorded.</p>
          <p className="mt-2">StriperLine voice service remains available without text messages.</p>
          <p>Preference recorded: {receipt.createdAt}</p>
          <p className="break-all">Preference record: {receipt.id}</p>
        </div>
      )}

      <p className="mt-5 text-xs leading-relaxed text-gray-500">
        Saving an opt-in does not send a text or immediately activate messaging. CyberWolf AI
        Systems separately verifies the owner-controlled number before enabling the StriperLine
        SMS channel. An opt-in receipt stores only a masked number in this browser; a declined
        preference stores no mobile number.
      </p>
    </form>
  );
}
