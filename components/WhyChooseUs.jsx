import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { WHY_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand/15 blur-[110px]"
      />

      <div className="container-x section-y relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Professional Support When You Need It Most"
          highlight="Professional Support"
          theme="dark"
          description="No unrealistic promises. Just structured, transparent assistance that helps you deal with repayment pressure in an organised way."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <li
              key={item.title}
              className="group bg-ink p-6 transition-colors duration-300 hover:bg-charcoal md:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand transition-colors duration-300 group-hover:border-brand/40">
                <Icon name={item.icon} size={18} />
              </span>
              <h3 className="mt-5 text-base font-bold tracking-tight text-white">{item.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/55">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
