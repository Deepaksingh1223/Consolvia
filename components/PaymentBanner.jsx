import { Landmark, ShieldAlert } from "lucide-react";
import { BANK_DETAILS, PAYMENT_DISCLAIMER } from "@/lib/constants";

const FIELDS = [
  { label: "Account Holder", value: BANK_DETAILS.accountHolder, wide: true },
  { label: "Account Number", value: BANK_DETAILS.accountNumber },
  { label: "IFSC", value: BANK_DETAILS.ifsc },
  { label: "SWIFT Code", value: BANK_DETAILS.swift },
  { label: "Bank", value: BANK_DETAILS.bankName },
  { label: "Branch", value: BANK_DETAILS.branch },
];

export default function PaymentBanner() {
  return (
    <section className="grain relative overflow-hidden border-y border-hair bg-deep text-white">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-blue/14 blur-[100px]"
        style={{ animation: "drift-a 22s ease-in-out infinite" }}
      />

      <div className="container-x relative py-10 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-light">
            <Landmark size={13} aria-hidden="true" />
            Official Payment Details
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-white md:text-[1.75rem]">
            Make Payments Only to Our Authorised Bank Account
          </h2>
        </div>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FIELDS.map((field) => (
            <div
              key={field.label}
              className={`rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors duration-300 hover:border-brand/40 ${
                field.wide ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/40">
                {field.label}
              </dt>
              <dd className="mt-1 text-[14px] font-semibold leading-snug text-white/85">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-6 flex max-w-4xl items-start gap-3.5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.07] p-5 text-left md:p-6">
          <ShieldAlert size={18} className="mt-0.5 shrink-0 text-amber-300" aria-hidden="true" />
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300/80">
              Payment Disclaimer
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/65 md:text-[13.5px]">
              {PAYMENT_DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
