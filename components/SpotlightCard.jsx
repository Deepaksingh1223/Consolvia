"use client";

import { cx } from "@/lib/utils";

/**
 * Wraps content and tracks the pointer position as CSS custom properties,
 * so the glow in `.spotlight` follows the cursor. No state, no re-renders.
 */
export default function SpotlightCard({
  children,
  as: Tag = "div",
  theme = "light",
  className = "",
  ...rest
}) {
  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      onPointerMove={handleMove}
      className={cx(theme === "dark" ? "spotlight-dark" : "spotlight", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
