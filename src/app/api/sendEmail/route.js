import nodemailer from "nodemailer";

// --- Anti-abuse: lightweight in-memory sliding-window rate limiter ---------
// NOTE: this is per-server-instance. For a low-traffic portfolio it's a solid
// first line of defense. If this ever runs on multi-instance serverless and
// needs to be authoritative, swap for a shared store (e.g. Upstash Redis).
const RATE_LIMIT_MAX = 5; // requests
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const hits = new Map(); // ip -> number[] (timestamps)

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

// --- Input sanitization helpers -------------------------------------------
const MAX = { name: 100, email: 254, phone: 30, type: 40, budget: 40, description: 2000 };

const escapeHtml = (s = "") =>
  String(s).replace(
    /[<>&"']/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c])
  );

// Trim, cap length, collapse CRLF (prevents header injection) then HTML-escape.
const clean = (value, max) =>
  escapeHtml(String(value ?? "").slice(0, max).replace(/[\r\n]+/g, " ").trim());

const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const json = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function POST(req) {
  try {
    // 1. Rate limit by client IP.
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return json({ error: "Too many requests. Please try again later." }, 429);
    }

    // 2. Guard against oversized payloads (DoS / cost vector).
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > 10_000) {
      return json({ error: "Payload too large." }, 413);
    }

    // 3. Parse + validate.
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return json({ error: "Invalid request body." }, 400);
    }

    // Honeypot: bots fill hidden fields; humans leave them empty.
    if (body.company) {
      return json({ message: "Email sent successfully" }, 200); // silently drop
    }

    const rawEmail = String(body.email ?? "").trim();
    const name = clean(body.name, MAX.name);
    const description = clean(body.description, MAX.description);

    if (!name || !rawEmail || !description) {
      return json({ error: "Name, email, and description are required." }, 400);
    }
    if (!isValidEmail(rawEmail) || rawEmail.length > MAX.email) {
      return json({ error: "Please provide a valid email address." }, 400);
    }

    const safe = {
      name,
      email: escapeHtml(rawEmail),
      phone: clean(body.phone || "N/A", MAX.phone),
      type: clean(body.type || "N/A", MAX.type),
      budget: clean(body.budget || "Not specified", MAX.budget),
      description,
    };

    // 4. Send.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: rawEmail, // hit "reply" to answer the submitter directly
      subject: `New Quote Request from ${safe.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Type:</strong> ${safe.type}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Description:</strong><br/>${safe.description}</p>
      `,
    });

    return json({ message: "Email sent successfully" }, 200);
  } catch (error) {
    console.error("Email error:", error);
    return json({ error: "Email send failed" }, 500);
  }
}
