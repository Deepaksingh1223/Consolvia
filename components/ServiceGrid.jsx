import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServiceGrid() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="How We Can Assist"
          highlight="Assist"
          description="Practical, documented assistance across every stage of a repayment or resolution discussion — always within what your lender's policies allow."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
