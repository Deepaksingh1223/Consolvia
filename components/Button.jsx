import Link from "next/link";
import { cx } from "@/lib/utils";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-10px_rgba(244,123,32,0.9)] hover:bg-brand-light hover:-translate-y-0.5",
  dark: "bg-ink text-white hover:bg-charcoal hover:-translate-y-0.5",
  outline:
    "border border-line bg-white text-ink hover:border-ink/30 hover:-translate-y-0.5",
  ghostLight:
    "border border-white/25 bg-white/5 text-white hover:border-white/60 hover:bg-white/10",
  link: "text-brand hover:text-brand-light underline-offset-4 hover:underline",
};

const SIZES = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Button({
  as = "link",
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = cx(BASE, VARIANTS[variant], variant !== "link" && SIZES[size], className);

  if (as === "link" && href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
