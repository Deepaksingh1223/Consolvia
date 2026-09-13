import { validateLeadForm } from "@/lib/validations";
import { deliverLead } from "@/lib/leads";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (body, status = 200) => Response.json(body, { status, headers: CORS_HEADERS });

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * Hero lead-capture endpoint.
 * CRM hand-off (HubSpot / Zoho / Salesforce) is wired inside lib/leads.js —
 * this route only validates and forwards, so the destination can change
 * without touching the form.
 */
export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const errors = validateLeadForm(payload || {});
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, message: "Please correct the highlighted fields.", errors }, 422);
  }

  try {
    const result = await deliverLead("hero-lead", {
      fullName: payload.fullName?.trim(),
      phone: payload.phone?.trim(),
      email: payload.email?.trim().toLowerCase(),
      debtType: payload.debtType?.trim(),
      preferredTime: payload.preferredTime?.trim() || null,
      source: payload.source?.trim() || "homepage-hero",
    });

    return json({
      ok: true,
      reference: result.reference,
      message: `Thank you. Reference ${result.reference}. An advisor will contact you at your preferred time.`,
    });
  } catch (error) {
    console.error("[consolvia-prime] lead request failed", error);
    return json(
      { ok: false, message: "We could not submit your details. Please try again." },
      502,
    );
  }
}
