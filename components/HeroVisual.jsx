import { ArrowDownRight, FileText, ShieldCheck } from "lucide-react";

const OBLIGATIONS = [
  { label: "Personal Loan", meta: "EMI reviewed", width: "w-[86%]" },
  { label: "Credit Card Dues", meta: "Under review", width: "w-[62%]" },
  { label: "Consumer Loan", meta: "Documented", width: "w-[38%]" },
];

/**
 * Abstract fintech "case review" visual — built with markup, not stock imagery.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/12 via-transparent to-white/5 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-deep p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] md:p-7">
        <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-80" />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand/25 blur-[80px]"
        />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Assistance Case
              </p>
              <p className="mt-2 text-lg font-bold tracking-tight text-white">
                Repayment Review
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-[11px] font-semibold text-brand-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              In Progress
            </span>
          </div>

          <div className="mt-7 space-y-4">
            {OBLIGATIONS.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-white/85">{item.label}</span>
                  <span className="text-white/40">{item.meta}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-brand to-brand-light ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <FileText size={16} className="text-brand" aria-hidden="true" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-white/40">
                Documents
              </p>
              <p className="mt-1 text-base font-bold text-white">Organised</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <ShieldCheck size={16} className="text-brand" aria-hidden="true" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-white/40">
                Handling
              </p>
              <p className="mt-1 text-base font-bold text-white">Confidential</p>
            </div>
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-white/35 sm:pl-44">
            Illustrative representation. Outcomes are subject to lender policies and approval.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-5 hidden animate-float-slow rounded-2xl border border-hair bg-elev p-4 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)] sm:block">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-panel text-brand">
            <ArrowDownRight size={17} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-dim">
              Structured
            </p>
            <p className="text-sm font-bold text-head">Repayment Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
