/**
 * Consolvia Prime logo mark + wordmark.
 * Mark: a stepped-down bar sequence resolving into an upward chevron —
 * debt reducing, stability returning.
 */
export default function Logo({ variant = "dark", withWordmark = true, className = "" }) {
  const isLight = variant === "light";
  const primary = isLight ? "#FFFFFF" : "#050509";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo/logo.png"
        alt="Consolvia Prime logo"
        className="w-auto h-10 sm:h-12 md:h-14 lg:h-16 max-w-full object-contain"
      />
    </span>
  );
}
