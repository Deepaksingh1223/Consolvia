import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { WHY_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-purple/14 blur-[110px]"
        style={{ animation: "drift-a 17s ease-in-out infinite" }}
      />

      <div className="container-x section-y relative">
        <Reveal>
        <SectionHeading
          index="04"
          eyebrow="Why Choose Us"
          title="Professional Support When You Need It Most"
          highlight="Professional Support"
          theme="dark"
          description="No unrealistic promises. Just structured, transparent assistance that helps you deal with repayment pressure in an organised way."
        />
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <SpotlightCard
              as="li"
              theme="dark"
              key={item.title}
              className="group relative isolate bg-deep p-6 transition-colors duration-500 hover:bg-charcoal md:p-7"
            >
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-brand/50 group-hover:bg-brand/10">
                <Icon name={item.icon} size={18} />
              </span>
              <h3 className="relative mt-5 text-base font-bold tracking-[-0.015em] text-white">{item.title}</h3>
              <p className="relative mt-2.5 text-[14px] leading-relaxed text-white/55">
                {item.description}
              </p>
            </SpotlightCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
