import LoanCategoryCard from "./LoanCategoryCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { LOAN_TYPES } from "@/lib/constants";

export default function LoanTypesSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal>
        <SectionHeading
          index="05"
          eyebrow="Coverage"
          title="Credit Facilities We Can Review"
          highlight="Credit Facilities"
          description="Assistance is available across common retail credit products. Eligibility is assessed case by case, based on the details you share."
        />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOAN_TYPES.map((category, i) => (
            <Reveal key={category.title} as="li" axis="scale" delay={i * 60} className="h-full">
              <LoanCategoryCard category={category} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
