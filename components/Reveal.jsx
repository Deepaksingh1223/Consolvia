"use client";

import { useEffect, useRef } from "react";
import { cx } from "@/lib/utils";

/**
 * Reveals its children once when they scroll into view.
 * Uses IntersectionObserver directly on the node, so no state and no re-render.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  axis = "up",
  delay = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => node.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    observer.observe(node);

    // Failsafe for environments where IO callbacks never arrive:
    // reveal anything that is in or near the viewport.
    const timer = window.setInterval(() => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight + 120 && rect.bottom > 0) {
        reveal();
        window.clearInterval(timer);
      }
    }, 400);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-axis={axis}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cx("reveal", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
