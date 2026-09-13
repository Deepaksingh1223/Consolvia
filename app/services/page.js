import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import DisclaimerNote from "@/components/DisclaimerNote";
import { SERVICES } from "@/lib/constants";

export const metadata = {
  title: "Services",
  description:
    "Loan repayment assistance, settlement assistance, lender communication, debt resolution guidance, documentation support and closure assistance.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Consolvia Prime",
    description:
      "Assistance across repayment, settlement, lender communication, documentation and closure formalities.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our Services"
        title="Assistance Across Every Stage of Resolution"
        highlight="Every Stage"
        description="Six focused services that cover understanding your position, representing your case and completing the formalities that follow."
        meta={[
          { term: "Services", detail: "Six assistance tracks" },
          { term: "Coverage", detail: "Retail credit facilities" },
          { term: "Delivery", detail: "Guided, step by step" },
          { term: "Approval", detail: "Rests with your lender" },
        ]}
      />

      <section className="sticky top-[72px] z-40 border-b border-hair bg-base/90 py-5 backdrop-blur-xl">
        <div className="container-x">
          <ul className="flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-hair bg-elev px-4 py-2 text-[13px] font-semibold text-head transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-[0_10px_22px_-14px_rgba(244,123,32,0.8)]"
                >
                  <span className="text-[11px] font-bold tabular-nums text-brand/70">{service.number}</span>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-elev">
        {SERVICES.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 border-b border-hair py-14 md:py-20 ${
              index % 2 === 1 ? "bg-panel" : "bg-elev"
            }`}
          >
            <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-deep text-brand">
                    <Icon name={service.icon} size={21} />
                  </span>
                  <span className="text-sm font-bold tracking-tight text-dim">
                    {service.number}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-head md:text-[2rem]">
                  {service.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-dim md:text-base">
                  {service.short}
                </p>

                {service.note && (
                  <p className="mt-6 flex items-start gap-2.5 rounded-xl border border-brand/25 bg-brand/[0.06] p-4 text-[13px] leading-relaxed text-copy/85">
                    <Info size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    {service.note}
                  </p>
                )}

                <Link
                  href="/get-assistance"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-light hover:-translate-y-0.5"
                >
                  Request This Assistance
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-hair bg-elev p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                    What We Assist With
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {service.assist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        <span className="text-[13.5px] leading-relaxed text-dim">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-hair bg-deep p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-light">
                    Process
                  </h3>
                  <ol className="mt-5 space-y-3.5">
                    {service.process.map((item, stepIndex) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 text-[10px] font-bold text-white/70">
                          {stepIndex + 1}
                        </span>
                        <span className="text-[13.5px] leading-relaxed text-white/60">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-elev pt-14">
        <div className="container-x">
          <DisclaimerNote />
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Not Sure Which Assistance You Need?"
        description="Share your situation and we will tell you which of these services actually applies to your case."
        secondary={{ label: "How It Works", href: "/how-it-works" }}
      />
    </>
  );
}
