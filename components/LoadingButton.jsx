"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { cx } from "@/lib/utils";

export default function LoadingButton({
  status = "idle",
  labels = {
    idle: "Submit Request",
    loading: "Submitting...",
    success: "Request Submitted Successfully",
    error: "Something went wrong. Please try again.",
  },
  className = "",
  ...props
}) {
  const loading = status === "loading";
  const success = status === "success";
  const error = status === "error";
  const label = labels[status] || labels.idle;

  return (
    <button
      type="submit"
      disabled={loading || success}
      aria-busy={loading}
      className={cx(
        "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 ease-out disabled:cursor-not-allowed sm:w-auto",
        success
          ? "bg-emerald-600 text-white"
          : error
            ? "bg-deep text-white hover:bg-charcoal"
            : "bg-brand text-white shadow-[0_10px_28px_-12px_rgba(244,123,32,0.9)] hover:bg-brand-light hover:-translate-y-0.5",
        loading && "opacity-80",
        className,
      )}
      {...props}
    >
      {loading && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
      {label}
      {status === "idle" && <ArrowRight size={16} aria-hidden="true" />}
    </button>
  );
}
