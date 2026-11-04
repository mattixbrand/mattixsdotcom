export const contactPurposes = [
  { id: "contact", label: "Contact" },
  { id: "consulting", label: "Consulting" },
  { id: "invoice", label: "Pay an invoice" },
] as const;

export type ContactPurpose = (typeof contactPurposes)[number]["id"];

export type ContactMessage = {
  name: string;
  email: string;
  purpose: ContactPurpose;
  message: string;
  reference: string;
};

const purposeIds = new Set<string>(contactPurposes.map((item) => item.id));

export function isContactPurpose(value: string): value is ContactPurpose {
  return purposeIds.has(value);
}

export function validateContact(input: {
  name?: unknown;
  email?: unknown;
  purpose?: unknown;
  message?: unknown;
  reference?: unknown;
  company?: unknown;
}): { ok: true; value: ContactMessage } | { ok: false; error: string } | { ok: true; value: null } {
  if (typeof input.company === "string" && input.company.trim()) {
    return { ok: true, value: null };
  }

  const name = typeof input.name === "string" ? input.name.trim().replace(/\s+/g, " ") : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const purpose = typeof input.purpose === "string" ? input.purpose : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const reference = typeof input.reference === "string" ? input.reference.trim() : "";

  if (name.length < 2 || name.length > 80) {
    return { ok: false, error: "name" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    return { ok: false, error: "email" };
  }
  if (!isContactPurpose(purpose)) {
    return { ok: false, error: "purpose" };
  }
  if (message.length < 10 || message.length > 4000) {
    return { ok: false, error: "message" };
  }
  if (reference.length > 80) {
    return { ok: false, error: "reference" };
  }

  return { ok: true, value: { name, email, purpose, message, reference } };
}

export function contactSubject(value: ContactMessage) {
  const label = contactPurposes.find((item) => item.id === value.purpose)?.label ?? "Contact";
  return `${label} from ${value.name}`;
}

export function contactBody(value: ContactMessage) {
  const lines = [
    `Name: ${value.name}`,
    `Email: ${value.email}`,
    `Purpose: ${contactPurposes.find((item) => item.id === value.purpose)?.label}`,
  ];
  if (value.reference) lines.push(`Invoice reference: ${value.reference}`);
  lines.push("", value.message);
  return lines.join("\n");
}

export function mailtoHref(value: ContactMessage, recipients: string[]) {
  const params = new URLSearchParams({
    subject: contactSubject(value),
    body: contactBody(value),
  });
  return `mailto:${recipients.join(",")}?${params.toString()}`;
}
