"use client";

import Vapi from "@vapi-ai/web";
import { useEffect, useRef, useState } from "react";

type VoiceStatus = "idle" | "connecting" | "live" | "ended" | "error" | "unconfigured";

const vapiPublicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
const vapiAssistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

export function VapiWidgetPlaceholder() {
  const configured = Boolean(vapiPublicKey && vapiAssistantId);
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<VoiceStatus>(configured ? "idle" : "unconfigured");
  const [consoleLines, setConsoleLines] = useState<string[]>([
    configured
      ? "Voice agent ready. Tap the button and allow microphone access."
      : "VAPI is not configured yet. Add the public key and assistant ID environment variables.",
  ]);

  useEffect(() => {
    if (!configured || !vapiPublicKey) {
      return;
    }

    const vapi = new Vapi(vapiPublicKey);
    vapiRef.current = vapi;

    const addLine = (line: string) => {
      setConsoleLines((current) => [line, ...current].slice(0, 5));
    };

    vapi.on("call-start", () => {
      setStatus("live");
      addLine("Call connected. CyberWolf is listening.");
    });

    vapi.on("call-end", () => {
      setStatus("ended");
      addLine("Call ended.");
    });

    vapi.on("speech-start", () => {
      addLine("CyberWolf is speaking.");
    });

    vapi.on("speech-end", () => {
      addLine("CyberWolf finished speaking.");
    });

    vapi.on("error", (error) => {
      console.error("VAPI widget error", error);
      setStatus("error");
      addLine("Voice connection hit an error. Please try again.");
    });

    return () => {
      vapi.removeAllListeners();
      void vapi.stop().catch(() => undefined);
      vapiRef.current = null;
    };
  }, [configured]);

  const startCall = async () => {
    if (!configured || !vapiAssistantId || !vapiRef.current) {
      setStatus("unconfigured");
      return;
    }

    try {
      setStatus("connecting");
      setConsoleLines((current) => ["Requesting microphone access and starting voice demo.", ...current].slice(0, 5));
      await vapiRef.current.start(vapiAssistantId);
    } catch (error) {
      console.error("Unable to start VAPI call", error);
      setStatus("error");
      setConsoleLines((current) => ["Could not start the voice demo. Check browser mic permissions.", ...current].slice(0, 5));
    }
  };

  const stopCall = async () => {
    await vapiRef.current?.stop();
    setStatus("ended");
  };

  const buttonLabel =
    status === "connecting"
      ? "Connecting"
      : status === "live"
        ? "End Voice Demo"
        : "Talk to CyberWolf";

  const statusLabel =
    status === "unconfigured"
      ? "Needs Env"
      : status === "connecting"
        ? "Connecting"
        : status === "live"
          ? "Live"
          : status === "error"
            ? "Error"
            : "Ready";

  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-black/45 p-6 shadow-[0_0_70px_rgba(0,185,255,0.1)] backdrop-blur">
      <div className="flex flex-col items-center gap-5 text-center">
        <button
          type="button"
          onClick={status === "live" ? stopCall : startCall}
          disabled={status === "connecting" || status === "unconfigured"}
          className="relative rounded-full bg-[var(--accent-teal)] px-9 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-[0_0_45px_rgba(0,185,255,0.45)] transition hover:bg-[var(--accent-green)] disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-900"
        >
          {status !== "unconfigured" && <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent-teal)]/20" />}
          <span className="relative">{buttonLabel}</span>
        </button>
        <p className="max-w-xl text-sm text-[var(--text-muted)]">
          Launch a live voice conversation with CyberWolf directly from the homepage. This is the
          product demoing itself.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[#05070b] p-5 text-left">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--accent-green)]">
          <span>Voice Demo Console</span>
          <span>{statusLabel}</span>
        </div>
        <div className="space-y-3 text-sm text-[var(--text-muted)]">
          {consoleLines.map((line) => (
            <p key={line}>
              <span className="text-[var(--text-primary)]">CyberWolf AI:</span> {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
