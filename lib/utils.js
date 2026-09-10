/** Joins class names, ignoring falsy values. */
export const cx = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Base URL for API requests.
 * Empty by default so requests hit this app's own Next.js route handlers.
 * Set NEXT_PUBLIC_API_BASE to point the forms at an external CRM/API gateway.
 */
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

/**
 * Resolves an API path against API_BASE.
 * Absolute bases (https://api.example.com) and same-origin bases are both supported;
 * a relative base is resolved against the site root so nested routes still work.
 */
export function resolveEndpoint(endpoint) {
  if (!API_BASE) return endpoint;
  if (/^https?:\/\//.test(API_BASE) || API_BASE.startsWith("/")) {
    return `${API_BASE.replace(/\/$/, "")}${endpoint}`;
  }
  const root =
    typeof window === "undefined"
      ? "/"
      : window.location.pathname.replace(/\/[^/]*\/?$/, "/");
  return `${root}${API_BASE.replace(/^\//, "").replace(/\/$/, "")}${endpoint}`;
}

/**
 * Single place where form submissions leave the browser.
 * Swap the endpoint or add headers here to connect a CRM, database or email service.
 */
export async function submitForm(endpoint, payload) {
  const response = await fetch(resolveEndpoint(endpoint), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.ok) {
    const error = new Error(data?.message || "Request failed");
    error.status = response.status;
    error.fieldErrors = data?.errors || null;
    throw error;
  }

  return data;
}

/** Formats a number-ish string with Indian digit grouping for display. */
export function formatAmount(value) {
  const digits = String(value || "").replace(/[^\d]/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("en-IN");
}
