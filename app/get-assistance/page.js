import { Clock, Lock, Mail, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import AssistanceForm from "@/components/AssistanceForm";
import DisclaimerNote from "@/components/DisclaimerNote";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Get Assistance",
  description:
    "Share your loan repayment situation with Consolvia Prime and understand the possible next steps. Confidential and without obligation.",
  alternates: { canonical: "/get-assistance" },
  openGraph: {
    title: "Get Assistance | Consolvia Prime",
    description: "Submit your loan repayment assistance request in a few minutes.",
    url: "/get-assistance",
  },
};

const ASSURANCES = [
  {
    icon: Lock,
    title: "Confidential",
    text: "Details you share are used only to review your request and assist you.",
  },
  {
    icon: ShieldCheck,
    title: "No obligation",
    text: "Submitting a request does not commit you to any service or payment.",
  },
  {
    icon: Clock,
    title: "Reviewed by our team",
    text: "Every submission is read by a person before you are contacted.",
  },
];

export default function GetAssistancePage() {
  return (
    <>
      <PageHero
        breadcrumb="Get Assistance"
        eyebrow="Assistance Request"
        title="Tell Us How We Can Help"
        highlight="How We Can Help"
        description="Share a few details about your loans and current repayment position. The more accurate the information, the more useful our guidance will be."
      />

      <section className="section-y bg-shell">
        <div className="container-x grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <AssistanceForm />

          <aside className="space-y-5">
            <ul className="space-y-4">
              {ASSURANCES.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.title} className="card-base flex items-start gap-4 p-5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brand">
                      <IconComponent size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-[14.5px] font-bold tracking-tight text-ink">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="rounded-2xl border border-white/10 bg-ink p-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-light">
                Prefer to Talk?
              </h2>
              <ul className="mt-5 space-y-3.5 text-sm">
                <li className="flex items-center gap-3 text-white/75">
                  <Phone size={15} className="text-brand" aria-hidden="true" />
                  <a href={SITE.phoneHref} className="transition-colors hover:text-white">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/75">
                  <Mail size={15} className="text-brand" aria-hidden="true" />
                  <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-[12.5px] leading-relaxed text-white/45">{SITE.hours}</p>
            </div>

            <DisclaimerNote className="bg-white" />
          </aside>
        </div>
      </section>
    </>
  );
}
