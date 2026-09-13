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
        meta={[
          { term: "Topics", detail: "Seven categories" },
          { term: "Written For", detail: "First-time enquiries" },
          { term: "Still Unsure", detail: "Talk to the team" },
          { term: "Promises", detail: "None — only assistance" },
        ]}
      />

      <section className="sticky top-[72px] z-40 border-b border-hair bg-base/90 py-5 backdrop-blur-xl">
        <div className="container-x">
          <nav aria-label="FAQ categories">
            <ul className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map((group) => (
                <li key={group.category}>
                  <a
                    href={`#${slugify(group.category)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-hair bg-elev px-4 py-2 text-[13px] font-semibold text-head transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-[0_10px_22px_-14px_rgba(0,229,255,0.75)]"
                  >
                    {group.category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="bg-panel pb-16 pt-12 md:pb-24 md:pt-14">
        <div className="container-x space-y-12">
          {FAQ_CATEGORIES.map((group) => (
            <div key={group.category} id={slugify(group.category)} className="scroll-mt-28">
              <h2 className="flex items-center gap-3 text-lg font-bold tracking-tight text-head">
                <span className="h-px w-6 bg-brand" aria-hidden="true" />
                {group.category}
              </h2>
              <div className="mt-5">
                <FAQAccordion items={group.items} />
              </div>
            </div>
          ))}

          <DisclaimerNote className="bg-elev" />
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
