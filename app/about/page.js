import { Compass, Eye, HeartHandshake, Lock, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DisclaimerNote from "@/components/DisclaimerNote";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "About Us",
  description:
    "Consolvia Prime helps customers navigate loan repayment challenges with transparent, professional and confidential assistance.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Consolvia Prime",
    description:
      "Transparent, professional and confidential assistance for loan repayment and debt resolution challenges.",
    url: "/about",
  },
};

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear explanations of what we can assist with, what we cannot influence and what your lender decides.",
  },
  {
    icon: ShieldCheck,
    title: "Professionalism",
    description:
      "Structured processes, documented communication and consistent follow-through on every request.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Your information is used only to assist you, and handled with appropriate care and restraint.",
  },
  {
    icon: Compass,
    title: "Responsible Guidance",
    description:
      "No unrealistic promises. We explain likely implications before you decide on any course of action.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Support",
    description:
      "A dedicated point of contact who understands your case and stays with it through the process.",
  },
];

const APPROACH = [
  {
    step: "Understand",
    text: "We begin by understanding your obligations, income position and the specific pressure points in your repayment schedule.",
  },
  {
    step: "Organise",
    text: "We help you assemble the loan records, statements and correspondence that any lender discussion will require.",
  },
  {
    step: "Represent",
    text: "We assist you in preparing structured, factual representations rather than emotional or ad-hoc requests.",
  },
  {
    step: "Follow Through",
    text: "We support you through lender responses, follow-ups and the formalities that follow an agreed outcome.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About Consolvia Prime"
        title="Helping Customers Navigate Loan Repayment Challenges"
        highlight="Loan Repayment Challenges"
        description="We provide assistance and guidance to borrowers facing repayment difficulty — with clear processes, documented communication and realistic expectations."
        meta={[
          { term: "Focus", detail: "Repayment assistance" },
          { term: "Approach", detail: "Documented & case by case" },
          { term: "Handling", detail: "Confidential" },
          { term: "Outcome", detail: "Lender-dependent" },
        ]}
      />

      <section className="section-y bg-elev">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Professional Assistance Practice, Not a Lender"
              highlight="Not a Lender"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-dim">
              <p>
                {SITE.name} is an assistance and guidance practice focused on loan repayment and
                debt resolution matters. We work with individuals and small business borrowers who
                are finding it difficult to keep up with scheduled repayments on personal loans,
                consumer loans, credit cards, business loans and digital lending products.
              </p>
              <p>
                We are not a bank, a non-banking financial company or a recovery agency. We do not
                lend money, we do not collect repayments on behalf of lenders, and we are not
                affiliated with any regulatory or government authority. What we do is help you
                understand your position, organise your documentation and communicate with your
                lender in a structured, professional manner.
              </p>
              <p>
                Every case is assessed on its own facts. Where a resolution route is unlikely to be
                available, we say so plainly rather than keeping a file open indefinitely.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-hair bg-panel p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-deep text-brand">
                <Users size={18} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-head">Our Mission</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-dim">
                To make repayment difficulty less overwhelming by giving borrowers clarity about
                their obligations, structure in their communication and realistic guidance on the
                resolution options that may be available to them.
              </p>
            </div>
            <DisclaimerNote />
          </div>
        </div>
      </section>

      <section className="section-y bg-panel">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Approach"
            title="Structured, Documented, Realistic"
            highlight="Documented"
            description="A repeatable method that replaces guesswork and anxious phone calls with organised, evidence-backed representation."
          />

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((item, index) => (
              <li key={item.step} className="card-base p-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold tracking-tight text-head">{item.step}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-dim">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-elev">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="The Standards We Hold Ourselves To"
            highlight="Standards"
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => {
              const IconComponent = value.icon;
              return (
                <li
                  key={value.title}
                  className="card-base group p-6 hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-panel text-head transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <IconComponent size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold tracking-tight text-head">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-dim">
                    {value.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection
        eyebrow="Work With Us"
        title="Understand Where You Stand"
        description="Share your situation and we will explain the options that may realistically be available."
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
