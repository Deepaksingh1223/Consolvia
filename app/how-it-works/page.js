import { FileText, IdCard, Landmark, MessageSquareText, Receipt } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import DisclaimerNote from "@/components/DisclaimerNote";
import { PROCESS_STEPS } from "@/lib/constants";
import Icon from "@/components/Icon";

export const metadata = {
  title: "How It Works",
  description:
    "A five-step assistance process: submit your request, consultation, information review, assistance and communication, and resolution support.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Consolvia Prime",
    description: "Understand the five-step loan repayment assistance process.",
    url: "/how-it-works",
  },
};

const REQUIREMENTS = [
  {
    icon: IdCard,
    title: "Basic contact information",
    description: "Your name, mobile number and email address so we can reach you reliably.",
  },
  {
    icon: Landmark,
    title: "Loan details",
    description: "Lender name, product type, sanction details and current repayment schedule.",
  },
  {
    icon: Receipt,
    title: "Outstanding amount",
    description: "An approximate figure for dues, along with the current EMI where applicable.",
  },
  {
    icon: MessageSquareText,
    title: "Relevant lender communication",
    description: "Notices, emails, SMS or letters you have received regarding the account.",
  },
  {
    icon: FileText,
    title: "Supporting documents where applicable",
    description:
      "Loan agreements, account statements and any records of income or financial hardship.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        breadcrumb="How It Works"
        eyebrow="The Process"
        title="A Clear Five-Step Assistance Process"
        highlight="Five-Step"
        description="From your first request to the closure formalities — here is exactly what happens at each stage, and what is expected from you."
        meta={[
          { term: "Steps", detail: "Five defined stages" },
          { term: "Start", detail: "A simple request form" },
          { term: "Communication", detail: "Fully documented" },
          { term: "Timelines", detail: "Vary by lender" },
        ]}
      />

      <ProcessTimeline showHeading={false} background="white" />

      <section className="section-y border-t border-line bg-shell">
        <div className="container-x">
          <SectionHeading
            eyebrow="Stage Detail"
            title="What Happens at Each Stage"
            highlight="Each Stage"
            description="Each step has a defined objective and a defined output, so progress is always visible."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PROCESS_STEPS.map((step) => (
              <article key={step.number} className="card-base flex gap-5 p-6 md:p-7">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-brand">
                  <Icon name={step.icon} size={19} />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                    Step {step.number}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Preparation"
              title="What You May Need"
              highlight="You May Need"
              description="You do not need everything on this list to start. Share what you have, and we will guide you on the rest."
            />
            <DisclaimerNote className="mt-8" />
          </div>

          <ul className="space-y-4">
            {REQUIREMENTS.map((item) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={item.title}
                  className="card-base flex items-start gap-4 p-5 hover:border-brand/40"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-shell text-brand">
                    <IconComponent size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Step One"
        title="Submit Your Request"
        description="It takes a few minutes. Our team reviews every submission before contacting you."
        secondary={{ label: "Read the FAQs", href: "/faq" }}
      />
    </>
  );
}
