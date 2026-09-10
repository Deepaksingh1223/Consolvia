import Icon from "./Icon";
import SpotlightCard from "./SpotlightCard";

export default function LoanCategoryCard({ category }) {
  return (
    <SpotlightCard
      as="div"
      className="card-base group flex h-full items-start gap-4 overflow-hidden p-5 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_22px_44px_-30px_rgba(11,11,12,0.35)] md:p-6"
    >
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-shell text-ink transition-all duration-400 group-hover:-rotate-6 group-hover:bg-brand group-hover:text-white">
        <Icon name={category.icon} size={18} />
      </span>
      <div className="relative">
        <h3 className="text-[15px] font-bold leading-snug tracking-[-0.015em] text-ink">
          {category.title}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{category.description}</p>
      </div>
    </SpotlightCard>
  );
}
