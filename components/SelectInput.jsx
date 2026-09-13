"use client";

import { AlertCircle, ChevronDown } from "lucide-react";
import { cx } from "@/lib/utils";

export default function SelectInput({
  id,
  label,
  value,
  onChange,
  options = [],
  placeholder = "Please select",
  error,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold text-head">
        {label}
        {required && (
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        )}
        {!required && <span className="ml-1.5 text-[11px] font-medium text-dim">(optional)</span>}
      </label>

      <div className="relative mt-2">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-required={required}
          className={cx(
            "w-full appearance-none rounded-xl border bg-elev px-4 py-3 pr-11 text-[15px] transition-colors duration-300 focus:outline-none",
            value ? "text-copy" : "text-dim",
            error
              ? "border-red-400 focus:border-red-500"
              : "border-hair focus:border-brand focus:ring-4 focus:ring-brand/10",
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dim"
        />
      </div>

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-400"
        >
          <AlertCircle size={13} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
