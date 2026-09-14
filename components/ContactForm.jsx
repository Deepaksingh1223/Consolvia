"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import FormInput from "./FormInput";
import { FORM_PRIVACY_NOTE } from "@/lib/constants";
import LoadingButton from "./LoadingButton";
import { validateContactForm } from "@/lib/validations";
import { submitForm } from "@/lib/utils";

const INITIAL_VALUES = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (field) => (event) => {
    const nextValue = event.target.value;
    setValues((current) => ({ ...current, [field]: nextValue }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
    if (status === "success" || status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      document.getElementById(Object.keys(validationErrors)[0])?.focus();
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await submitForm("/api/contact", values);
      setStatus("success");
      setServerMessage(
        response?.message || "Thank you for reaching out. Our team will respond shortly.",
      );
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus("error");
      if (error.fieldErrors) setErrors(error.fieldErrors);
      setServerMessage(
        error.message === "Failed to fetch"
          ? "We could not reach the server. Please check your connection and try again."
          : error.message || "Your message could not be sent. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card-base p-6 md:p-8">
      <fieldset disabled={status === "loading"} className="space-y-5">
        <legend className="sr-only">Contact details</legend>

        <FormInput
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
          error={errors.name}
          placeholder="Your full name"
          autoComplete="name"
          required
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <FormInput
            id="phone"
            label="Phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            error={errors.phone}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            required
          />
        </div>
        <FormInput
          id="message"
          label="Message"
          textarea
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          error={errors.message}
          placeholder="How can we assist you?"
          required
        />
      </fieldset>

      <div className="mt-7 flex flex-col gap-4">
        <LoadingButton
          status={status}
          labels={{
            idle: "Send Message",
            loading: "Sending...",
            success: "Message Sent Successfully",
            error: "Something went wrong. Please try again.",
          }}
        />

        <p className="flex items-start gap-2 text-[12.5px] leading-relaxed">
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
