"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cx } from "@/lib/utils";

/**
 * Interactive accordion. Only one item can be open at a time.
 */
export default function FAQAccordion({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();

  return (
    <div className={cx("divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group/faq relative flex w-full items-start justify-between gap-5 px-5 py-5 text-left transition-colors duration-300 hover:bg-shell md:px-6"
              >
                <span
                  aria-hidden="true"
                  className={cx(
                    "absolute inset-y-0 left-0 w-[3px] origin-top bg-brand transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "scale-y-100" : "scale-y-0 group-hover/faq:scale-y-100",
                  )}
                />
                <span
                  className={cx(
                    "text-[15px] font-bold leading-snug tracking-[-0.015em] transition-colors duration-300 group-hover/faq:text-brand",
                    open ? "text-brand" : "text-ink",
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cx(
                    "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open
                      ? "rotate-45 border-brand bg-brand text-white"
                      : "border-line text-muted group-hover/faq:rotate-90 group-hover/faq:border-brand group-hover/faq:text-brand",
                  )}
                >
                  <Plus size={15} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cx(
                "grid overflow-hidden transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pr-12 text-[14.5px] leading-relaxed text-muted md:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
