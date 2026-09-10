"use client";

import { useEffect, useRef } from "react";

/**
 * Thin reading-progress line pinned under the navbar.
 * Writes directly to the DOM inside a rAF loop, so scrolling never re-renders React.
 */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const bar = ref.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-brand to-brand-light"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
