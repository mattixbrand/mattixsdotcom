import { contactBody, contactSubject, mailtoHref, validateContact } from "@/lib/contact";
import { site } from "@/lib/site";

const recipients = [site.email, site.personalEmail];

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Send the form as JSON." }, { status: 400 });
  }

  const parsed = validateContact(payload);
  if (!parsed.ok) return Response.json({ error: parsed.error }, { status: 400 });
  if (!parsed.value) return Response.json({ ok: true, delivery: "sent" });

  const message = parsed.value;
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (apiKey) {
    const from = process.env.CONTACT_FROM?.trim() || "Mattix <onboarding@resend.dev>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: message.email,
        subject: contactSubject(message),
        text: contactBody(message),
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: "send" },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, delivery: "sent" });
  }

  return Response.json({
    ok: true,
    delivery: "mailto",
    href: mailtoHref(message, recipients),
  });
}
