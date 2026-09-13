"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import LoadingButton from "./LoadingButton";
import {
  CONTACT_METHOD_OPTIONS,
  FORM_PRIVACY_NOTE,
  LOAN_TYPE_OPTIONS,
  REPAYMENT_STATUS_OPTIONS,
} from "@/lib/constants";
import { validateAssistanceForm } from "@/lib/validations";
import { submitForm } from "@/lib/utils";

const INITIAL_VALUES = {
  fullName: "",
  mobile: "",
  email: "",
  loanType: "",
  lenderName: "",
  outstandingAmount: "",
  monthlyEmi: "",
  repaymentStatus: "",
  description: "",
  preferredContact: "",
  consent: false,
};

export default function AssistanceForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (field) => (event) => {
    const nextValue = field === "consent" ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [field]: nextValue }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
    if (status === "success" || status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateAssistanceForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      const firstField = Object.keys(validationErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await submitForm("/api/assistance-request", values);
      setStatus("success");
      setServerMessage(
        response?.message ||
          "Your request has been received. Our team will contact you shortly.",
      );
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus("error");
      if (error.fieldErrors) setErrors(error.fieldErrors);
      setServerMessage(
        error.message === "Failed to fetch"
          ? "We could not reach the server. Please check your connection and try again."
          : error.message || "Your request could not be submitted. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card-base p-6 md:p-8">
      <fieldset disabled={status === "loading"} className="space-y-5">
        <legend className="sr-only">Assistance request details</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            id="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleChange("fullName")}
            error={errors.fullName}
            placeholder="As per your loan records"
            autoComplete="name"
            required
          />
          <FormInput
            id="mobile"
            label="Mobile Number"
            type="tel"
            inputMode="tel"
            value={values.mobile}
            onChange={handleChange("mobile")}
            error={errors.mobile}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            required
          />
        </div>

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <SelectInput
            id="loanType"
            label="Loan Type"
            value={values.loanType}
            onChange={handleChange("loanType")}
            options={LOAN_TYPE_OPTIONS}
            error={errors.loanType}
            placeholder="Select loan type"
            required
          />
          <FormInput
            id="lenderName"
            label="Lender Name"
            value={values.lenderName}
            onChange={handleChange("lenderName")}
            error={errors.lenderName}
            placeholder="Bank / NBFC / lending app"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            id="outstandingAmount"
            label="Approximate Outstanding Amount"
            inputMode="numeric"
            value={values.outstandingAmount}
            onChange={handleChange("outstandingAmount")}
            error={errors.outstandingAmount}
            placeholder="e.g. 250000"
            hint="Amount in rupees, numbers only."
          />
          <FormInput
            id="monthlyEmi"
            label="Monthly EMI"
            inputMode="numeric"
            value={values.monthlyEmi}
            onChange={handleChange("monthlyEmi")}
            error={errors.monthlyEmi}
            placeholder="e.g. 12500"
            hint="Current monthly instalment, if applicable."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <SelectInput
            id="repaymentStatus"
            label="Current Repayment Status"
            value={values.repaymentStatus}
            onChange={handleChange("repaymentStatus")}
            options={REPAYMENT_STATUS_OPTIONS}
            error={errors.repaymentStatus}
            placeholder="Select current status"
          />
          <SelectInput
            id="preferredContact"
            label="Preferred Contact Method"
            value={values.preferredContact}
            onChange={handleChange("preferredContact")}
            options={CONTACT_METHOD_OPTIONS}
            error={errors.preferredContact}
            placeholder="Select preference"
          />
        </div>

        <FormInput
          id="description"
          label="Brief Description"
          textarea
          rows={5}
          value={values.description}
          onChange={handleChange("description")}
          error={errors.description}
          placeholder="Tell us what changed, which repayments are affected and what kind of assistance you are looking for."
          required
        />

        <div>
          <label
            htmlFor="consent"
            className="flex items-start gap-3 rounded-xl border border-hair bg-panel p-4"
          >
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={handleChange("consent")}
              aria-invalid={errors.consent ? "true" : "false"}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-hair accent-[#00E5FF]"
            />
            <span className="text-[13px] leading-relaxed text-dim">
              I confirm the details shared are accurate and I agree to be contacted by Consolvia
              Prime regarding my request. I understand that any settlement, restructuring or
              repayment arrangement is subject to my lender&apos;s policies and approval.
            </span>
          </label>
          {errors.consent && (
            <p
              id="consent-error"
              role="alert"
              className="mt-1.5 text-[12.5px] font-medium text-red-400"
            >
              {errors.consent}
            </p>
          )}
        </div>
      </fieldset>

      <div className="mt-7 flex flex-col gap-4">
        <LoadingButton status={status} />
        <p className="flex items-start gap-2 text-[12.5px] leading-relaxed text-dim">
          <ShieldCheck size={14} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          {FORM_PRIVACY_NOTE}
        </p>

        {status === "success" && serverMessage && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-[13.5px] leading-relaxed text-emerald-300"
          >
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            {serverMessage}
          </p>
        )}

        {status === "error" && serverMessage && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-[13.5px] leading-relaxed text-red-300"
          >
            <AlertTriangle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            {serverMessage}
          </p>
        )}
      </div>
    </form>
  );
}
