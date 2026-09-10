import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Grievance Redressal",
  description:
    "How to raise a complaint with Consolvia Prime, the escalation levels available and the response timelines we follow.",
  alternates: { canonical: "/grievance-redressal" },
};

const SECTIONS = [
  {
    heading: "Our Commitment",
    paragraphs: [
      `${SITE.legalName} takes every complaint seriously. This page explains how to raise a grievance, who handles it and what response you can expect.`,
    ],
  },
  {
    heading: "Level 1 — Customer Support",
    list: [
      `Email: ${SITE.email}`,
      `Phone: ${SITE.phone}`,
      `Business hours: ${SITE.hours}`,
      "[Insert the acknowledgement timeline and target resolution timeline for Level 1 complaints.]",
    ],
  },
  {
    heading: "Level 2 — Grievance Officer",
    paragraphs: [
      "If your complaint remains unresolved, or you are not satisfied with the response received, you may escalate it to the Grievance Officer.",
    ],
    list: [
      "[Insert Grievance Officer name]",
      "[Insert designation]",
      `Email: ${SITE.grievanceEmail}`,
      "[Insert direct contact number and working hours]",
      `Address: ${SITE.address}`,
    ],
  },
  {
    heading: "Information to Include",
    list: [
      "Your full name and registered mobile number",
      "Your case or request reference, if one has been issued",
      "A clear description of the issue and the dates on which it occurred",
      "Copies of relevant correspondence or documents",
      "The outcome you are seeking",
    ],
  },
  {
    heading: "Response Timelines",
    paragraphs: [
      "[Insert the acknowledgement period for each escalation level, the target closure period, and the process followed when a complaint requires additional time.]",
    ],
  },
  {
    heading: "Complaints About Your Lender",
    paragraphs: [
      "Complaints relating to your lender's own conduct, charges or decisions must be raised with that lender through its grievance mechanism. We can assist you in preparing and documenting such a complaint, but we cannot decide it on the lender's behalf.",
      "[Insert guidance on external escalation options available to borrowers under applicable law, as confirmed by your legal advisor.]",
    ],
  },
  {
    heading: "Record Keeping",
    paragraphs: [
      "All grievances received are logged with a reference number and tracked until closure.",
      "[Insert the retention period for grievance records.]",
    ],
  },
];

export default function GrievanceRedressalPage() {
  return (
    <LegalLayout
      breadcrumb="Grievance Redressal"
      title="Grievance Redressal"
      intro="How to raise a complaint, who reviews it and what happens next."
      sections={SECTIONS}
      relatedLinks={[
        { label: "Contact", href: "/contact" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
      ]}
    />
  );
}
