"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { isContactPurpose, type ContactPurpose } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n";

const purposes = ["contact", "consulting", "invoice"] as const;

export function ContactForm({ copy }: { copy: Dictionary["contact"] }) {
  const requested = useSearchParams().get("purpose") ?? "contact";
  const initialPurpose: ContactPurpose = isContactPurpose(requested) ? requested : "contact";
  const [purpose, setPurpose] = useState<ContactPurpose>(initialPurpose);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto">("idle");
  const [error, setError] = useState("");

  function messageFor(code: string) {
    if (code in copy.errors) return copy.errors[code as keyof typeof copy.errors];
    return copy.errors.send;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          purpose: form.get("purpose"),
          message: form.get("message"),
          reference: form.get("reference"),
          company: form.get("company"),
        }),
      });
      const payload = (await response.json()) as { error?: string; delivery?: string; href?: string };
      if (!response.ok) {
        setError(messageFor(payload.error || "send"));
        setStatus("idle");
        return;
      }
      if (payload.delivery === "mailto" && payload.href) {
        window.location.href = payload.href;
        setStatus("mailto");
        return;
      }
      setStatus("sent");
      event.currentTarget.reset();
      setPurpose(initialPurpose);
    } catch {
      setError(copy.errors.send);
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-success" role="status">
        {copy.sent}
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        {copy.name}
        <input name="name" autoComplete="name" required maxLength={80} />
      </label>
      <label>
        {copy.email}
        <input name="email" type="email" autoComplete="email" required maxLength={120} />
      </label>
      <label>
        {copy.about}
        <select name="purpose" value={purpose} onChange={(event) => setPurpose(event.target.value as ContactPurpose)}>
          {purposes.map((id) => (
            <option key={id} value={id}>
              {copy.purposes[id]}
            </option>
          ))}
        </select>
      </label>
      {purpose === "invoice" ? (
        <label>
          {copy.reference} <span>{copy.optional}</span>
          <input name="reference" maxLength={80} />
        </label>
      ) : (
        <input type="hidden" name="reference" value="" />
      )}
      <label>
        {copy.message}
        <textarea name="message" required minLength={10} maxLength={4000} rows={7} />
      </label>
      <label className="hp-field" aria-hidden="true">
        {copy.company}
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      {status === "mailto" ? (
        <p className="setup-note" role="status">
          {copy.mailto}
        </p>
      ) : null}
      <button className="pay-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : copy.send}
      </button>
    </form>
  );
}
