import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "./Button";
import HeroLeadForm from "./HeroLeadForm";

export default function HeroSection() {
  return (
    <section className="grain relative overflow-hidden border-b border-hair bg-panel">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/15 blur-[110px]"
        style={{ animation: "drift-a 16s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple/18 blur-[120px]"
        style={{ animation: "drift-b 21s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-y-0 left-0 w-24 opacity-40 [mask-image:linear-gradient(to_right,black,transparent)]"
      />

      <div className="container-x relative grid items-center gap-14 py-16 md:py-20 lg:grid-cols-[1fr_minmax(0,1.02fr)] lg:gap-14 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-elev px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Loan Repayment Assistance
          </span>

          <h1 className="mt-6 text-balance text-[2.15rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-head sm:text-5xl lg:text-[3.5rem]">
            Facing <span className="relative whitespace-nowrap text-brand">
              Difficulty Repaying
           
            </span> Your Loan?
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-dim md:text-lg">
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

          <dl className="mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-hair pt-7">
            {[
              { term: "Approach", detail: "Case by case" },
              { term: "Handling", detail: "Confidential" },
              { term: "Process", detail: "Fully documented" },
            ].map((item) => (
              <div key={item.term} className="group">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-dim">
                  {item.term}
                </dt>
                <dd className="mt-1.5 text-sm font-bold tracking-[-0.01em] text-head transition-colors duration-300 group-hover:text-brand">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in lg:pl-4" id="hero-form">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
