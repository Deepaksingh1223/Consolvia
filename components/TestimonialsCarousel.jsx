"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cx } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export default function TestimonialsCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const total = items.length;

  const goTo = useCallback((next) => setIndex(((next % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = window.setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [goTo, index, paused, total]);

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  }

  function handleTouchStart(event) {
    touchStart.current = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 45) {
      if (delta < 0) next();
      else prev();
    }
    touchStart.current = null;
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client experiences"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-w-0 max-w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-charcoal/80 p-6 md:p-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 text-brand/25 md:right-10 md:top-8"
      >
        <Quote size={54} strokeWidth={1.4} />
      </span>

      <div className="w-full min-w-0 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {items.map((item, i) => (
            <figure
              key={item.quote}
              aria-hidden={i !== index}
              className="flex w-full shrink-0 flex-col px-0.5 md:min-h-[230px]"
            >
              <blockquote className="max-w-3xl text-[17px] font-medium leading-[1.65] text-white/90 md:text-[21px] md:leading-[1.6]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3.5 pt-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-[13px] font-bold text-brand-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] leading-snug">
                  <span className="block font-bold text-white">{item.name}</span>
                  <span className="block text-white/55">
                    {item.role} &middot; {item.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-9 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2.5" role="tablist" aria-label="Select experience">
          {items.map((item, i) => (
            <button
              key={item.quote}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Experience ${i + 1} of ${total}`}
              onClick={() => goTo(i)}
              className={cx(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-8 bg-brand" : "w-1.5 bg-white/25 hover:bg-white/60",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous experience"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-x-0.5 hover:border-brand hover:text-brand-light"
          >
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next experience"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:translate-x-0.5 hover:border-brand hover:text-brand-light"
          >
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
