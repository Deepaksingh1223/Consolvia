import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, highlight, description, breadcrumb }) {
  const titleContent =
    highlight && title.includes(highlight) ? (
      <>
        {title.split(highlight)[0]}
        <span className="text-brand">{highlight}</span>
        {title.split(highlight).slice(1).join(highlight)}
      </>
    ) : (
      title
    );

  return (
    <section className="relative overflow-hidden border-b border-line bg-shell">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-[110px]"
      />
      <div className="container-x relative py-14 md:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex items-center gap-1.5 text-[12px] font-medium text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={13} />
              </li>
              <li className="font-semibold text-ink">{breadcrumb}</li>
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3rem]">
          {titleContent}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
