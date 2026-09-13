import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, highlight, description, breadcrumb, meta }) {
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
    <section className="grain relative overflow-hidden border-b border-hair bg-panel">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-[110px]"
        style={{ animation: "drift-a 18s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-purple/14 blur-[110px]"
        style={{ animation: "drift-b 24s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-y-0 right-0 hidden w-1/3 opacity-50 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
      />

      <div className="container-x relative grid gap-10 py-14 md:py-[4.5rem] lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="stagger">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-7 block">
              <ol className="flex items-center gap-1.5 text-[12px] font-medium text-dim">
                <li>
                  <Link href="/" className="transition-colors duration-300 hover:text-brand">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="flex items-center text-white/25">
                  <ChevronRight size={13} />
                </li>
                <li className="font-semibold text-head">{breadcrumb}</li>
              </ol>
            </nav>
          )}

          {eyebrow && (
            <p className="mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-3xl text-balance text-[2rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-head sm:text-4xl lg:text-[3rem]">
            {titleContent}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-dim md:text-lg">
              {description}
            </p>
          )}
        </div>

        {meta?.length ? (
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2 lg:mb-1">
            {meta.map((item) => (
              <div
                key={item.term}
                className="group bg-elev px-5 py-4 transition-colors duration-300 hover:bg-elev-2"
              >
                <dt className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-dim">
                  {item.term}
                </dt>
                <dd className="mt-1.5 text-[14px] font-bold tracking-[-0.01em] text-head transition-colors duration-300 group-hover:text-brand">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
