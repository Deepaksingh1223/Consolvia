import { Info } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { TESTIMONIALS, TESTIMONIAL_NOTE } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-brand/15 blur-[120px]"
        style={{ animation: "drift-b 19s ease-in-out infinite" }}
      />

      <div className="container-x section-y relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <Reveal axis="left">
            <SectionHeading
              index="06"
              eyebrow="Client Experiences"
              title="What People Say After Working With Us"
              highlight="What People Say"
              theme="dark"
              description="Honest accounts of the assistance provided — the review, the paperwork and the conversation with the lender."
            />

            <p className="mt-8 flex max-w-md gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-[13px] leading-relaxed text-white/55">
              <Info size={15} className="mt-0.5 shrink-0 text-brand-light" aria-hidden="true" />
              {TESTIMONIAL_NOTE}
            </p>
          </Reveal>

          <Reveal axis="scale" delay={120} className="w-full min-w-0">
            <TestimonialsCarousel items={TESTIMONIALS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
