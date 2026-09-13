import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PROCESS_STEPS } from "@/lib/constants";
import { cx } from "@/lib/utils";

export default function ProcessTimeline({
  eyebrow = "The Process",
  title = "How It Works",
  highlight = "Works",
  description = "A clear five-step process, so you always know what has happened, what is happening now and what comes next.",
  background = "shell",
  showHeading = true,
}) {
  return (
    <section className={cx("section-y", background === "shell" ? "bg-panel" : "bg-elev")}>
      <div className="container-x">
        {showHeading && (
          <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
          />
          </Reveal>
        )}

        {/* Desktop: horizontal timeline */}
        <ol className="mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 90} className="group relative">
              <div className="flex items-center">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-hair bg-elev text-brand shadow-[0_6px_18px_-10px_rgba(11,11,12,0.4)] transition-all duration-400 group-hover:-translate-y-1 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon name={step.icon} size={19} />
                </span>
                {index < PROCESS_STEPS.length - 1 && (
                  <span aria-hidden="true" className="h-px flex-1 bg-hair" />
                )}
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                Step {step.number}
              </p>
              <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-head">
                {step.title}
              </h3>
              <p className="mt-2.5 pr-4 text-[13.5px] leading-relaxed text-dim">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="mt-11 space-y-8 lg:hidden">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.number} className="relative flex gap-5">
              <div className="flex flex-col items-center">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hair bg-elev text-brand">
                  <Icon name={step.icon} size={18} />
                </span>
                {index < PROCESS_STEPS.length - 1 && (
                  <span aria-hidden="true" className="mt-2 w-px flex-1 bg-hair" />
                )}
              </div>
              <div className="pb-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                  Step {step.number}
                </p>
                <h3 className="mt-1.5 text-base font-bold tracking-tight text-head">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dim">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
