import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "./Button";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-shell">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/10 blur-[110px]"
      />

      <div className="container-x relative grid items-center gap-14 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Loan Repayment Assistance
          </span>

          <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Facing <span className="text-brand">Difficulty Repaying</span> Your Loan?
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg">
            Get professional guidance and assistance for loan repayment challenges, lender
            communication, documentation and debt resolution.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/get-assistance" size="lg">
              Get Assistance
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <PhoneCall size={16} aria-hidden="true" />
              Talk to an Expert
            </Button>
          </div>

          <dl className="mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-7">
            {[
              { term: "Approach", detail: "Case by case" },
              { term: "Handling", detail: "Confidential" },
              { term: "Process", detail: "Fully documented" },
            ].map((item) => (
              <div key={item.term}>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  {item.term}
                </dt>
                <dd className="mt-1.5 text-sm font-bold text-ink">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
