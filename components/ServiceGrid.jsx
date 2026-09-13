import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/constants";

export default function ServiceGrid() {
  return (
    <section className="section-y relative bg-elev">
      <div className="container-x">
        <Reveal>
        <SectionHeading
          index="02"
          eyebrow="Our Services"
          title="How We Can Assist"
          highlight="Assist"
          description="Practical, documented assistance across every stage of a repayment or resolution discussion — always within what your lender's policies allow."
        />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} axis="scale" delay={i * 70} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
