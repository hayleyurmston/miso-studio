"use client";

import { useState } from "react";

const TOPICS = [
  "A new website",
  "Refresh my existing website",
  "SEO or AI search",
  "Brand identity",
  "Google Ads",
  "AI Readiness Audit",
  "Something else (including technical support)",
];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-charcoal bg-cream p-8">
        <h3>Thank you - your message is in.</h3>
        <p className="mt-3 text-[#2b2b29]">I'll be in touch within one working day.</p>
      </div>
    );
  }

  const field = "mt-1.5 w-full rounded-2xl border border-ink/25 bg-white px-4 py-3";
  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Phone (optional)
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Business or website
          <input name="business" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        What do you need help with?
        <select name="topic" className={field} defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        Tell me a little about it
        <textarea name="message" rows={5} required className={field} />
      </label>
      {/* Honeypot: real people never fill this in */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Leave blank
          <input name="website_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-full border border-charcoal bg-sage-dark px-10 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#55664f] disabled:opacity-60"
      >
        {state === "sending" ? "Sending..." : "Send message"}
      </button>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-700">
          That didn't send. Please email hayley@miso-studio.au or call 0403 670 603 and I'll help straight away.
        </p>
      )}
    </form>
  );
}
