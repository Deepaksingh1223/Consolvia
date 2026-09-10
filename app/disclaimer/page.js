import LegalLayout from "@/components/LegalLayout";
import { DISCLAIMER, SITE } from "@/lib/constants";

export const metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer regarding the nature and limits of the assistance services provided by Consolvia Prime.",
  alternates: { canonical: "/disclaimer" },
};

const SECTIONS = [
  {
    heading: "General Disclaimer",
    paragraphs: [DISCLAIMER],
  },
  {
    heading: "No Regulatory Affiliation",
    paragraphs: [
      `${SITE.legalName} is not a bank, non-banking financial company, lender, credit bureau or recovery agency. We are not approved, certified, endorsed or authorised by the Reserve Bank of India, any other regulator, or any government body, and we make no such claim.`,
    ],
  },
  {
    heading: "No Assurance of Outcome",
    list: [
      "We do not offer loan waivers and cannot cause a loan to be waived",
      "We do not promise any fixed reduction in outstanding dues, interest or charges",
      "We do not guarantee approval of settlement, restructuring or moratorium requests",
      "We do not guarantee any specific timeline for lender responses or resolution",
    ],
  },
  {
    heading: "Information on This Website",
    paragraphs: [
      "Content on this website is provided for general information only. While we aim to keep it accurate and current, we make no representation as to its completeness or continued accuracy, and it should not be relied upon as a substitute for professional advice on your specific situation.",
    ],
  },
  {
    heading: "Credit Record Implications",
    paragraphs: [
      "Any repayment arrangement, delay or settlement may be reported by your lender to credit bureaus in accordance with applicable norms, and may affect your credit record. Decisions on such reporting rest with your lender.",
      "[Insert any additional disclosures required in relation to credit reporting.]",
    ],
  },
  {
    heading: "Payments to Lenders",
    paragraphs: [
      "All repayments must be made directly to your lender through their official channels. We do not accept, collect or hold repayment amounts on behalf of any lender.",
    ],
  },
  {
    heading: "Third-Party References",
    paragraphs: [
      "Any reference to a bank, NBFC, lending platform or other third party is for identification purposes only and does not imply any association, partnership or endorsement.",
    ],
  },
  {
    heading: "Reporting Misrepresentation",
    paragraphs: [
      `If anyone claims to represent ${SITE.legalName} and offers guaranteed outcomes or requests payment outside our official channels, please report it to ${SITE.grievanceEmail} immediately.`,
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalLayout
      breadcrumb="Disclaimer"
      title="Disclaimer"
      intro="What our assistance covers, and what remains entirely at your lender's discretion."
      sections={SECTIONS}
      relatedLinks={[
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Grievance Redressal", href: "/grievance-redressal" },
      ]}
    />
  );
}
