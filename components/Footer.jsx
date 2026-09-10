import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { DISCLAIMER, SITE } from "@/lib/constants";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Get Assistance", href: "/get-assistance" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Grievance Redressal", href: "/grievance-redressal" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-brand/15 blur-[100px]"
      />

      <div className="container-x relative py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Professional assistance and guidance for loan repayment challenges, lender
              communication, documentation and debt resolution.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand" aria-hidden="true" />
                <a href={SITE.phoneHref} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                  {column.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors duration-300 hover:text-brand-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
            Important Disclaimer
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-white/55">{DISCLAIMER}</p>
          <p className="mt-3 text-[13px] leading-relaxed text-white/55">
            {SITE.name} is not a bank, non-banking financial company or lender, and is not
            affiliated with any regulatory or government authority.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {SITE.name}. All Rights Reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
