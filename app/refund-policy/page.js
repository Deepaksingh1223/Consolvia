import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Refund Policy",
  description:
    "Consolvia Prime's policy on service fees, refund eligibility, processing timelines and how to raise a refund request.",
  alternates: { canonical: "/refund-policy" },
};

const SECTIONS = [
  {
    heading: "Applicability",
    paragraphs: [
      `This policy applies to service fees paid to ${SITE.legalName} for assistance services. It does not apply to any amount paid by you directly to a lender.`,
      "[Insert the effective date and the services to which this policy applies.]",
    ],
  },
  {
    heading: "Service Fees",
    paragraphs: [
      "[Insert the fee structure: one-time fee, staged fees, applicable taxes and the point at which each fee becomes payable.]",
    ],
  },
  {
    heading: "Refund Eligibility",
    paragraphs: ["Refund eligibility is assessed against the following criteria:"],
    list: [
      "[Insert the cooling-off period, if any, during which a full refund may be requested.]",
      "[Insert the circumstances in which a partial refund may be considered, and how the deductible portion is calculated.]",
      "[Insert the circumstances in which fees are non-refundable, such as work already performed.]",
    ],
  },
  {
    heading: "Fees Not Linked to Outcome",
    paragraphs: [
      "Service fees relate to the assistance and guidance provided, not to any particular result. As lender decisions are outside our control, an unfavourable lender decision does not by itself create a refund entitlement, except as expressly stated in this policy.",
    ],
  },
  {
    heading: "How to Request a Refund",
    list: [
      `Write to ${SITE.email} with your name, registered mobile number and case reference`,
      "State the reason for the refund request and attach the payment receipt",
      "[Insert the acknowledgement timeline and the internal review process.]",
    ],
  },
  {
    heading: "Processing Timelines",
    paragraphs: [
      "[Insert the number of business days for review and, once approved, for the refund to be credited to the original payment method.]",
    ],
  },
  {
    heading: "Cancellation of Engagement",
    paragraphs: [
      "[Insert the process by which either party may cancel an ongoing engagement and the consequences for fees already paid.]",
    ],
  },
  {
    heading: "Disputes",
    paragraphs: [
      `If you are not satisfied with the outcome of a refund request, you may escalate the matter through our grievance redressal process at ${SITE.grievanceEmail}.`,
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      breadcrumb="Refund Policy"
      title="Refund Policy"
      intro="How service fees, refund eligibility and cancellations are handled."
      sections={SECTIONS}
      relatedLinks={[
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Grievance Redressal", href: "/grievance-redressal" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
