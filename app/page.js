import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import Marquee from "@/components/Marquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import Reveal from "@/components/Reveal";
import ProblemSection from "@/components/ProblemSection";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoanTypesSection from "@/components/LoanTypesSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import DisclaimerNote from "@/components/DisclaimerNote";
import Button from "@/components/Button";
import { HOME_FAQS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Consolvia Prime | Loan Repayment Assistance",
  description:
    "Professional assistance and guidance for loan repayment challenges, lender communication, documentation and debt resolution.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Marquee />
      <ProblemSection />
      <ServiceGrid />
      <ProcessTimeline />
      <WhyChooseUs />
      <LoanTypesSection />
      <TestimonialsSection />
      <CTASection
        title="Start With a Simple Conversation"
        description="Tell us about your situation and understand the possible next steps."
      />

      <section className="border-t border-line bg-shell section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal axis="left">
            <SectionHeading
              index="07"
              eyebrow="FAQs"
              title="Questions People Ask Us First"
              highlight="Questions"
              description="Straight answers about what assistance covers, what it does not, and what remains in your lender's hands."
            />
            <DisclaimerNote className="mt-8 bg-white" />
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion items={HOME_FAQS} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <Reveal
            axis="scale"
            className="grain relative overflow-hidden rounded-[1.75rem] border border-line bg-shell px-6 py-14 text-center md:px-14"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-[90px]"
              style={{ animation: "drift-a 18s ease-in-out infinite" }}
            />
            <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-ink md:text-[2.4rem]">
              Don&apos;t Let Loan Repayment Challenges Overwhelm You.
            </h2>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/get-assistance" size="lg">
                Get Assistance
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
