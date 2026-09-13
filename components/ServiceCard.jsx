import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import SpotlightCard from "./SpotlightCard";

export default function ServiceCard({ service }) {
  return (
    <SpotlightCard
      as="article"
      className="card-base group relative isolate flex h-full flex-col overflow-hidden p-6 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_28px_60px_-32px_rgba(0,0,0,0.6)] md:p-7"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-light to-transparent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 select-none text-[5.5rem] font-extrabold leading-none tracking-tighter text-white/[0.05] transition-all duration-500 group-hover:text-brand/10"
      >
        {service.number}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-panel text-head transition-all duration-400 group-hover:-rotate-6 group-hover:bg-brand group-hover:text-base">
          <Icon name={service.icon} size={20} />
        </span>
      </div>

      <h3 className="relative mt-6 text-lg font-bold leading-snug tracking-[-0.02em] text-head">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-[14px] leading-relaxed text-dim">{service.short}</p>

      <Link
        href={`/services#${service.slug}`}
        className="relative mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold text-head transition-colors duration-300 group-hover:text-brand"
      >
        <span className="link-draw">Learn More</span>
        <ArrowUpRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </SpotlightCard>
  );
}
