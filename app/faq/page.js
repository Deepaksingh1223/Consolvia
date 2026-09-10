import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import DisclaimerNote from "@/components/DisclaimerNote";
import { FAQ_CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "FAQs",
  description:
    "Answers about loan repayment assistance, settlement processes, documents, charges, privacy and the assistance process at Consolvia Prime.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQs | Consolvia Prime",
    description: "Common questions about loan repayment assistance and debt resolution guidance.",
    url: "/faq",
  },
};

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHero
        breadcrumb="FAQs"
        eyebrow="Frequently Asked Questions"
        title="Clear Answers, Including the Uncomfortable Ones"
        highlight="Clear Answers"
        description="What assistance covers, what it does not, and which decisions always remain with your lender."
      />

      <section className="border-b border-line bg-white py-8">
        <div className="container-x">
          <nav aria-label="FAQ categories">
            <ul className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map((group) => (
                <li key={group.category}>
                  <a
                    href={`#${slugify(group.category)}`}
                    className="inline-flex rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    {group.category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section-y bg-shell">
        <div className="container-x space-y-12">
          {FAQ_CATEGORIES.map((group) => (
            <div key={group.category} id={slugify(group.category)} className="scroll-mt-28">
              <h2 className="flex items-center gap-3 text-lg font-bold tracking-tight text-ink">
                <span className="h-px w-6 bg-brand" aria-hidden="true" />
                {group.category}
              </h2>
              <div className="mt-5">
                <FAQAccordion items={group.items} />
              </div>
            </div>
          ))}

          <DisclaimerNote className="bg-white" />
        </div>
      </section>

      <CTASection
        eyebrow="Still Unsure?"
        title="Ask Us About Your Specific Case"
        description="General answers only go so far. Share your details and we will respond to your actual situation."
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
