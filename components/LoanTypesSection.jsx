import LoanCategoryCard from "./LoanCategoryCard";
import SectionHeading from "./SectionHeading";
import { LOAN_TYPES } from "@/lib/constants";

export default function LoanTypesSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Coverage"
          title="Credit Facilities We Can Review"
          highlight="Credit Facilities"
          description="Assistance is available across common retail credit products. Eligibility is assessed case by case, based on the details you share."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOAN_TYPES.map((category) => (
            <LoanCategoryCard key={category.title} category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
}
