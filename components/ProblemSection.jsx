import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { PROBLEMS } from "@/lib/constants";

export default function ProblemSection() {
  return (
    <section className="section-y bg-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Challenge"
          title="Loan Repayment Challenges Can Feel Overwhelming"
          highlight="Overwhelming"
          description="Most repayment difficulties are not caused by a single factor. Understanding what is actually driving the pressure is the first step towards a workable resolution."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => (
            <li
              key={problem.title}
              className="card-base group p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-30px_rgba(11,11,12,0.35)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name={problem.icon} size={20} />
              </span>
              <h3 className="mt-5 text-base font-bold tracking-tight text-ink">{problem.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                {problem.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
