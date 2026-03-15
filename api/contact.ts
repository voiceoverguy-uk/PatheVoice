import { z } from "zod";

type VercelRequest = {
  method?: string;
  body: unknown;
  headers: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
};

type VercelResponse = {
  setHeader(name: string, value: string): VercelResponse;
  status(code: number): VercelResponse;
  json(body: unknown): void;
  end(): void;
};

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().default(""),
  eventType: z.string().optional().default(""),
  message: z
    .string()
    .min(1, "Message is required")
    .refine(
      (val) => val.trim().split(/\s+/).filter(Boolean).length >= 10,
      "Message must be at least 10 words"
    ),
});

function buildEmailHtml(data: z.infer<typeof contactSchema>, ip: string) {
  const timestamp = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "full",
    timeStyle: "short",
  });

  const replyMailto = `mailto:${data.email}?subject=Re: Your Pathé Voice Enquiry&body=Hi ${encodeURIComponent(data.name)},%0D%0A%0D%0AThank you for your enquiry.%0D%0A%0D%0A`;

  const fieldRow = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:12px 16px;border-bottom:1px solid #eee;">
           <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:4px;">${label}</span>
           <span style="font-size:15px;color:#333;">${value}</span>
         </td></tr>`
      : "";

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:24px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;">

<!-- Header -->
<tr><td style="background:#c0392b;padding:20px 24px;">
  <span style="font-size:22px;font-weight:bold;color:#ffffff;letter-spacing:2px;">PATHÉ VOICE</span>
  <span style="float:right;font-size:13px;color:#f8d7da;line-height:28px;">New Enquiry</span>
</td></tr>

<!-- Fields -->
<tr><td style="padding:24px 24px 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #eee;border-radius:4px;">
    ${fieldRow("Name", data.name)}
    ${fieldRow("Email", data.email)}
    ${fieldRow("Phone", data.phone || "")}
    ${fieldRow("Event Type", data.eventType || "")}
  </table>
</td></tr>

<!-- Message -->
<tr><td style="padding:20px 24px;">
  <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:8px;">Message</span>
  <div style="border-left:4px solid #c0392b;padding:14px 16px;background:#fafafa;border-radius:0 4px 4px 0;font-size:15px;color:#333;line-height:1.6;white-space:pre-wrap;">${data.message}</div>
</td></tr>

<!-- Reply Button -->
<tr><td align="center" style="padding:8px 24px 24px;">
  <a href="${replyMailto}" style="display:inline-block;background:#c0392b;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:4px;font-size:14px;font-weight:bold;letter-spacing:1px;">REPLY TO ENQUIRY</a>
</td></tr>

<!-- Footer -->
<tr><td style="background:#f4f4f4;padding:16px 24px;border-top:1px solid #eee;">
  <span style="font-size:11px;color:#999;">Sent ${timestamp} · IP: ${ip}</span>
</td></tr>

</table>
</td></tr>
</table>
</body></html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return res.status(400).json({ error: "Validation failed", fields: errors });
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "enquiries@voiceoverguy.co.uk";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@voiceoverguy.co.uk";

  if (!apiKey) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const subject = data.eventType
    ? `[Pathé Voice] Enquiry: ${data.eventType}`
    : "[Pathé Voice] New Enquiry";

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "Unknown";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Pathé Voice <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject,
        html: buildEmailHtml(data, ip),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend API error:", err);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
