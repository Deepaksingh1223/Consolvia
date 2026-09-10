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

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
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
