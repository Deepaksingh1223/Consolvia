import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  return (
    <article className="card-base group relative flex h-full flex-col p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-30px_rgba(11,11,12,0.35)] md:p-7">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-shell text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon name={service.icon} size={20} />
        </span>
        <span className="text-sm font-bold tracking-tight text-line transition-colors duration-300 group-hover:text-brand">
          {service.number}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{service.short}</p>

      <Link
        href={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors duration-300 group-hover:text-brand"
      >
        Learn More
        <ArrowUpRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </article>
  );
}
