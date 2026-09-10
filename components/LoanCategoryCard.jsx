import Icon from "./Icon";

export default function LoanCategoryCard({ category }) {
  return (
    <li className="card-base group flex items-start gap-4 p-5 hover:-translate-y-1 hover:border-brand/40 md:p-6">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-shell text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon name={category.icon} size={18} />
      </span>
      <div>
        <h3 className="text-[15px] font-bold leading-snug tracking-tight text-ink">
          {category.title}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{category.description}</p>
      </div>
    </li>
  );
}
