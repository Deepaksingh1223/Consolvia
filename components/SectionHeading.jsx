import { cx } from "@/lib/utils";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  theme = "light",
  level = "h2",
  className = "",
}) {
  const Tag = level;
  const centered = align === "center";
  const isDark = theme === "dark";

  const titleText =
    highlight && typeof title === "string" && title.includes(highlight) ? (
      <>
        {title.split(highlight)[0]}
        <span className="text-brand">{highlight}</span>
        {title.split(highlight).slice(1).join(highlight)}
      </>
    ) : (
      title
    );

  return (
    <div className={cx(centered && "mx-auto max-w-2xl text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cx(
            "mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em]",
            centered && "justify-center",
            isDark ? "text-brand-light" : "text-brand",
          )}
        >
          {index ? (
            <span className="tabular-nums font-extrabold" aria-hidden="true">
              {index}
            </span>
          ) : null}
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cx(
          "text-balance text-3xl font-bold leading-[1.1] tracking-[-0.025em] md:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-head",
        )}
      >
        {titleText}
      </Tag>
      {description && (
        <p
          className={cx(
            "mt-5 text-[15px] leading-relaxed md:text-base",
            isDark ? "text-white/65" : "text-dim",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
