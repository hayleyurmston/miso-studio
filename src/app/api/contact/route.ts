import { NextResponse } from "next/server";

const TO = process.env.CONTACT_TO || "hayley@miso-studio.au";
const FROM = process.env.CONTACT_FROM || "MISO Studio <hello@miso-studio.au>";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: pretend success so bots move on
  if (typeof body.website_url === "string" && body.website_url.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const get = (k: string, max = 2000) => (typeof body[k] === "string" ? (body[k] as string).trim().slice(0, max) : "");
  const name = get("name", 120);
  const email = get("email", 200);
  const phone = get("phone", 40);
  const business = get("business", 200);
  const topic = get("topic", 120);
  const message = get("message", 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set - contact form cannot send");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const html = `<p><strong>${esc(name)}</strong> sent an enquiry through miso-studio.au</p>
<p>Email: ${esc(email)}<br>Phone: ${esc(phone) || "-"}<br>Business: ${esc(business) || "-"}<br>Topic: ${esc(topic) || "-"}</p>
<p>${esc(message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website enquiry: ${topic || "General"} - ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
