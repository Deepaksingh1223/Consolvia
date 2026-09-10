import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import PageHero from "./PageHero";
import { SITE } from "@/lib/constants";

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/**
 * Shared layout for legal pages.
 * `sections` = [{ heading, paragraphs: [], list: [] }]
 */
export default function LegalLayout({
  title,
  breadcrumb,
  intro,
  updated = "[Insert last updated date]",
  sections = [],
  relatedLinks = [],
}) {
  return (
    <>
      <PageHero breadcrumb={breadcrumb} eyebrow="Legal" title={title} description={intro} />

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-shell p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                Last updated
              </p>
              <p className="mt-2 text-[14px] font-semibold text-ink">{updated}</p>

              <h2 className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                On this page
              </h2>
              <nav aria-label="Section navigation" className="mt-4">
                <ul className="space-y-2.5">
                  {sections.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugify(section.heading)}`}
                        className="text-[13px] font-medium text-muted transition-colors duration-300 hover:text-brand"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand/25 bg-brand/[0.06] p-5">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-[12.5px] leading-relaxed text-body/80">
                This page contains clearly marked placeholders. Company-specific legal wording must
                be reviewed and inserted by {SITE.legalName}&apos;s legal advisor before the site
                goes live.
              </p>
            </div>

            {relatedLinks.length > 0 && (
              <nav aria-label="Related legal pages" className="mt-5">
                <ul className="space-y-2.5">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] font-semibold text-ink transition-colors duration-300 hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>

          <article className="max-w-3xl">
            {sections.map((section) => (
              <section
                key={section.heading}
                id={slugify(section.heading)}
                className="scroll-mt-28 border-b border-line py-8 first:pt-0 last:border-b-0"
              >
                <h2 className="text-xl font-bold tracking-tight text-ink md:text-[1.4rem]">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[14.5px] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="mt-10 rounded-2xl border border-line bg-shell p-5 text-[13px] leading-relaxed text-muted">
              Questions about this page can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-ink hover:text-brand">
                {SITE.email}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
