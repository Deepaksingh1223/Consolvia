/**
 * Delivery layer for submitted requests.
 *
 * This is the single integration point. Replace the body of `deliverLead` with
 * your CRM call, database insert or transactional email call. Keep the returned
 * shape ({ ok, reference }) so the route handlers and forms stay unchanged.
 *
 * Examples of what typically goes here:
 *   - await crm.leads.create({ ... })            // CRM
 *   - await db.collection("leads").insertOne()   // database
 *   - await mailer.send({ ... })                 // email service
 *   - await fetch(process.env.WEBHOOK_URL, ...)  // webhook / automation
 */
export async function deliverLead(type, payload) {
  const reference = `CP-${type.toUpperCase().slice(0, 3)}-${Date.now().toString(36).toUpperCase()}`;

  const record = {
    reference,
    type,
    receivedAt: new Date().toISOString(),
    ...payload,
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      throw new Error(`Lead delivery failed with status ${response.status}`);
    }

    return { ok: true, reference, delivered: "webhook" };
  }

  // No integration configured yet: record the submission in server logs so the
  // request is never silently lost, and report honestly that it was accepted.
  console.info("[consolvia-prime] lead received", record);

  return { ok: true, reference, delivered: "log" };
}
