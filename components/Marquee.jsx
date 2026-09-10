import { MARQUEE_ITEMS } from "@/lib/constants";

/**
 * Continuous ticker strip. The list is rendered twice so the CSS translation
 * of -50% loops seamlessly. Pauses on hover (see .marquee-track in globals.css).
 */
export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
      />

      <div className="marquee-track items-center gap-10 md:gap-14" aria-hidden="true">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-10 md:gap-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 md:text-xs">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-brand" />
          </span>
        ))}
      </div>

      <span className="sr-only">
        Assistance available across {MARQUEE_ITEMS.join(", ")}.
      </span>
    </div>
  );
}
