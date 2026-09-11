/**
 * Consolvia Prime logo mark + wordmark.
 * Mark: a stepped-down bar sequence resolving into an upward chevron —
 * debt reducing, stability returning.
 */
export default function Logo({ variant = "dark", withWordmark = true, className = "" }) {
  const isLight = variant === "light";
  const primary = isLight ? "#FFFFFF" : "#0B0B0C";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo/logo.png"
        alt="Consolvia Prime logo"
        className="h-12 8 w-auto object-contain sm:h-10 md:h-12 lg:h-14"
      />
    </span>
  );
}
