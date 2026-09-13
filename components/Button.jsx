import Link from "next/link";
import { cx } from "@/lib/utils";

const BASE =
  "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60";

/** Light sweep that runs across solid buttons on hover. */
const SHEEN = (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 -left-1/2 z-[-1] w-1/3 bg-white/25 opacity-0 group-hover/btn:opacity-100 group-hover/btn:[animation:sheen_0.9s_ease-out]"
  />
);

const VARIANTS = {
  primary:
    "bg-brand text-base shadow-[0_8px_24px_-10px_rgba(0,229,255,0.85)] hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgba(0,229,255,0.9)]",
  dark: "bg-white text-base hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_16px_34px_-18px_rgba(255,255,255,0.35)]",
  outline:
    "border border-hair bg-elev text-head hover:border-white/35 hover:bg-elev-2 hover:-translate-y-0.5",
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
  const solid = variant === "primary" || variant === "dark";
  const content = (
    <>
      {solid && SHEEN}
      {children}
    </>
  );

  if (as === "link" && href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
