"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import {
  CONTACT_TIME_OPTIONS,
  DEBT_TYPE_OPTIONS,
  FORM_PRIVACY_NOTE,
  HERO_FORM,
} from "@/lib/constants";
import { validateLeadForm } from "@/lib/validations";
import { submitForm } from "@/lib/utils";

const EMPTY = {
  fullName: "",
  phone: "",
  email: "",
  debtType: "",
  preferredTime: "",
};

/**
 * Hero lead-capture card. Posts to /api/lead, which hands the lead to whatever
 * CRM or webhook is configured in lib/leads.js — no hardcoded success state.
 */
export default function HeroLeadForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateLeadForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const result = await submitForm("/api/lead", { ...values, source: "homepage-hero" });
      setStatus("success");
      setServerMessage(result.message || "Thank you. An advisor will contact you shortly.");
      setValues(EMPTY);
    } catch (error) {
      setStatus("error");
      if (error.fieldErrors) setErrors(error.fieldErrors);
      setServerMessage(error.message || "We could not submit your details. Please try again.");
    }
  };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/20 via-purple/10 to-pink/10 blur-2xl"
      />

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label={HERO_FORM.title}
        className="relative overflow-hidden rounded-[1.5rem] border border-hair bg-elev p-6 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9)] md:p-8"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent"
        />

        <p className="rule-label text-brand">
          <span className="h-px w-6 bg-brand" aria-hidden="true" />
          Free Consultation
        </p>

        <h2 className="mt-4 text-balance text-[1.35rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-head md:text-[1.6rem]">
          {HERO_FORM.title}
        </h2>
        <p className="mt-3 text-[13.5px] leading-relaxed">{HERO_FORM.subtitle}</p>

        <div className="mt-7 grid gap-5">
          <FormInput
            id="heroFullName"
            label="Name"
            value={values.fullName}
            onChange={handleChange("fullName")}
            error={errors.fullName}
            placeholder="Your full name"
            autoComplete="name"
            required
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <FormInput
              id="heroPhone"
              label="Phone"
              type="tel"
              value={values.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
              placeholder="10-digit mobile number"
              autoComplete="tel"
              inputMode="numeric"
              required
            />
            <FormInput
              id="heroEmail"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="gap-5 sm:grid-cols-2">
            <SelectInput
              id="heroDebtType"
              label="Type of Debt"
              value={values.debtType}
              onChange={handleChange("debtType")}
              options={DEBT_TYPE_OPTIONS}
              placeholder="Select debt type"
              error={errors.debtType}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group/btn relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold tracking-tight !text-black transition-all duration-300 hover:bg-brand-light hover:!text-black hover:shadow-[0_16px_34px_-14px_rgba(0,229,255,0.9)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={17} className="animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              {HERO_FORM.submitLabel}
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </>
          )}
        </button>

        {status === "success" && serverMessage && (
          <p
            role="status"
            className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-[13px] leading-relaxed text-emerald-300"
          >
            <CheckCircle2 size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            {serverMessage}
          </p>
        )}

        {status === "error" && serverMessage && (
          <p
            role="alert"
            className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-[13px] leading-relaxed text-red-300"
          >
            <AlertTriangle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            {serverMessage}
          </p>
        )}

        <p className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed">
          <ShieldCheck size={13} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          {FORM_PRIVACY_NOTE}
        </p>
      </form>
    </div>
  );
}
