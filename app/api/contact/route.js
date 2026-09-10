import { validateContactForm } from "@/lib/validations";
import { deliverLead } from "@/lib/leads";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (body, status = 200) =>
  Response.json(body, { status, headers: CORS_HEADERS });

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const errors = validateContactForm(payload || {});
  if (Object.keys(errors).length > 0) {
    return json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      422,
    );
  }

  try {
    const result = await deliverLead("contact", {
      name: payload.name?.trim(),
      email: payload.email?.trim().toLowerCase(),
      phone: payload.phone?.trim(),
      message: payload.message?.trim(),
    });

    return json({
      ok: true,
      reference: result.reference,
      message: `Thank you for reaching out. Reference ${result.reference}. Our team will respond shortly.`,
    });
  } catch (error) {
    console.error("[consolvia-prime] contact request failed", error);
    return json(
      { ok: false, message: "We could not send your message. Please try again." },
      502,
    );
  }
}
