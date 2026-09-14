import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { PROBLEMS } from "@/lib/constants";

export default function ProblemSection() {
  return (
    <section className="grain section-y relative bg-panel">
      <div className="container-x">
        <Reveal>
        <SectionHeading
          index="01"
          eyebrow="The Challenge"
          title="Loan Repayment Challenges Can Feel Overwhelming"
          highlight="Overwhelming"
          description="Most repayment difficulties are not caused by a single factor. Understanding what is actually driving the pressure is the first step towards a workable resolution."
        />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} as="li" axis="scale" delay={i * 80} className="h-full">
              <SpotlightCard className="card-base group relative isolate h-full overflow-hidden p-6 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_26px_54px_-30px_rgba(11,11,12,0.38)]">
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-brand transition-all duration-400 group-hover:-rotate-6 group-hover:bg-brand group-hover:">
                  <Icon name={problem.icon} size={20} />
                </span>
                <h3 className="relative mt-5  font-bold tracking-[-0.015em] text-head">
                  {problem.title}
                </h3>
                <p className="relative mt-2.5 text-[14px] leading-relaxed">
                  {problem.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
