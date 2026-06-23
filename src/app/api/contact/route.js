import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  // Rate limit — max 3 submissions per IP per 24 hours
  const { count } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("ip", ip)
    .gte(
      "created_at",
      new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    );

  if (count >= 3) {
    return Response.json(
      { error: "You already submitted. Please wait 24 hours." },
      { status: 429 },
    );
  }

  // Parse body
  const { name, email, message } = await req.json();

  // Validation
  if (!name || !email || !message) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (message.trim().length < 10) {
    return Response.json({ error: "Message too short." }, { status: 400 });
  }

  const blockedDomains = [
    "test.com",
    "fake.com",
    "example.com",
    "mailinator.com",
    "tempmail.com",
    "guerrillamail.com",
  ];
  if (blockedDomains.includes(email.split("@")[1])) {
    return Response.json(
      { error: "Please use a real email address." },
      { status: 400 },
    );
  }

  // Save to Supabase + send email
  try {
    const { error: dbError } = await supabase
      .from("contacts")
      .insert([{ name, email, message, ip }]);

    if (dbError) throw dbError;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rahatdeveloper007@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="color:#888;font-size:12px;">Submitted from IP: ${ip}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
