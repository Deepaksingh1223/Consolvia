import { validateAssistanceForm } from "@/lib/validations";
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

  const errors = validateAssistanceForm(payload || {});
  if (Object.keys(errors).length > 0) {
    return json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      422,
    );
  }

  try {
    const result = await deliverLead("assistance", {
      fullName: payload.fullName?.trim(),
      mobile: payload.mobile?.trim(),
      email: payload.email?.trim().toLowerCase(),
      loanType: payload.loanType,
      lenderName: payload.lenderName?.trim() || null,
      outstandingAmount: payload.outstandingAmount?.trim() || null,
      monthlyEmi: payload.monthlyEmi?.trim() || null,
      repaymentStatus: payload.repaymentStatus || null,
      preferredContact: payload.preferredContact || null,
      description: payload.description?.trim(),
    });

    return json({
      ok: true,
      reference: result.reference,
      message: `Your request has been received. Reference ${result.reference}. Our team will contact you shortly.`,
    });
  } catch (error) {
    console.error("[consolvia-prime] assistance request failed", error);
    return json(
      { ok: false, message: "We could not submit your request. Please try again." },
      502,
    );
  }
}
