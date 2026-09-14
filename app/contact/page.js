import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import DisclaimerNote from "@/components/DisclaimerNote";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description:
    "Contact Consolvia Prime for loan repayment assistance — phone, email, office address and business hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Consolvia Prime",
    description: "Reach the Consolvia Prime assistance team by phone, email or message.",
    url: "/contact",
  },
};

const DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Available during business hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "We aim to respond within one business day",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: SITE.address,
    note: "Visits by prior appointment only",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: SITE.hours,
    note: "Closed on Sundays and public holidays",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact Us"
        title="Talk to the Assistance Team"
        highlight="Assistance Team"
        description="Send us a message or reach us directly. For a detailed case review, use the Get Assistance form so we have your loan details in advance."
        meta={[
          { term: "Working Hours", detail: "Mon–Sat, 10 AM – 7 PM IST" },
          { term: "Response", detail: "Usually within 1 working day" },
          { term: "Email", detail: "support@consolviaprime.com" },
          { term: "Phone", detail: "+91 00000 00000" },
        ]}
      />

      <section className="section-y bg-panel">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="space-y-5">
            <ul className="space-y-4">
              {DETAILS.map((detail) => {
                const IconComponent = detail.icon;
                return (
                  <li key={detail.label} className="card-base flex items-start gap-4 p-5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-deep text-brand">
                      <IconComponent size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-[11px] font-bold uppercase tracking-[0.16em]">
                        {detail.label}
                      </h2>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1.5 block text-[15px] font-bold tracking-tight text-head transition-colors hover:text-brand"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-[15px] font-bold leading-snug tracking-tight text-head">
                          {detail.value}
                        </p>
                      )}
                      <p className="mt-1.5 text-[12.5px]">{detail.note}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <DisclaimerNote className="bg-elev" />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-head">Send Us a Message</h2>
            <p className="mt-2 text-[14px]">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
