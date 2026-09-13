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
      <svg
        viewBox="0 0 40 40"
        width="34"
        height="34"
        role="img"
        aria-label="Consolvia Prime logo"
        fill="none"
        className="shrink-0"
      >
        <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="9" fill={primary} />
        <rect
          x="0.75"
          y="0.75"
          width="38.5"
          height="38.5"
          rx="9"
          stroke={isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
        />
        <rect x="9" y="11" width="4" height="18" rx="2" fill={isLight ? "#050509" : "#FFFFFF"} />
        <rect
          x="16"
          y="16"
          width="4"
          height="13"
          rx="2"
          fill={isLight ? "#050509" : "#FFFFFF"}
          opacity="0.65"
        />
        <rect x="23" y="21" width="4" height="8" rx="2" fill="#00E5FF" />
        <path
          d="M22 14.5L26.5 10L31 14.5"
          stroke="#00E5FF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`text-[15px] font-extrabold tracking-tight ${
              isLight ? "text-white" : "text-head"
            }`}
          >
            CONSOLVIA <span className="text-brand">PRIME</span>
          </span>
          <span
            className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${
              isLight ? "text-white/50" : "text-dim"
            }`}
          >
            Loan Repayment Assistance
          </span>
        </span>
      )}
    </span>
  );
}
