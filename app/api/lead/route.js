export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPSTREAM_URL = "https://consolvia.onrender.com/api/leads";

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

  const name = (payload?.name ?? payload?.fullName ?? "").toString().trim();
  const phone = (payload?.phone ?? "").toString().trim();
  const email = (payload?.email ?? "").toString().trim().toLowerCase();
  const debtType = (payload?.debtType ?? "").toString().trim();

  const errors = {};
  if (!name) errors.fullName = "Please enter your name.";
  if (!phone) errors.phone = "Please enter your phone number.";
  if (!email) errors.email = "Please enter your email.";
  if (!debtType) errors.debtType = "Please select a debt type.";

  if (Object.keys(errors).length > 0) {
    return json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      422,
    );
  }

  const upstreamBody = { name, phone, email, debtType };

  let upstreamRes;
  try {
    upstreamRes = await fetch(UPSTREAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(upstreamBody),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err) {
    console.error("[api/lead] upstream fetch failed", err);
    return json(
      { ok: false, message: "We could not reach the service. Please try again." },
      502,
    );
  }

  const raw = await upstreamRes.text();
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = { message: raw };
  }

  if (!upstreamRes.ok) {
    console.error("[api/lead] upstream error", upstreamRes.status, data);

    const message =
      upstreamRes.status === 401 || upstreamRes.status === 403
        ? "Lead service is temporarily unavailable. Please try again later."
        : data?.message ||
          "We could not submit your details. Please try again.";

    return json(
      { ok: false, message, errors: data?.errors ?? undefined },
      upstreamRes.status,
    );
  }

  return json({
    ok: true,
    message:
      data?.message || "Thank you. An advisor will contact you shortly.",
    reference: data?.reference ?? data?.id ?? null,
  });
}