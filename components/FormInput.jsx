"use client";

import { AlertCircle } from "lucide-react";
import { cx } from "@/lib/utils";

const FIELD_CLASSES =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-body placeholder:text-muted/60 transition-all duration-300 hover:border-ink/25 focus:outline-none";

export default function FormInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  hint,
  required = false,
  textarea = false,
  rows = 5,
  ...props
}) {
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null]
    .filter(Boolean)
    .join(" ");

  const Field = textarea ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold tracking-[-0.005em] text-ink">
        {label}
        {required && (
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        )}
        {!required && <span className="ml-1.5 text-[11px] font-medium text-muted">(optional)</span>}
      </label>

      <Field
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? rows : undefined}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedBy || undefined}
        aria-required={required}
        className={cx(
          FIELD_CLASSES,
          "mt-2",
          textarea && "resize-y",
          error
            ? "border-red-400 focus:border-red-500"
            : "border-line focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/12",
        )}
        {...props}
      />

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[12px] text-muted">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600"
        >
          <AlertCircle size={13} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
