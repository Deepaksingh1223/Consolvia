import LegalLayout from "@/components/LegalLayout";
import { DISCLAIMER, SITE } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing the use of the Consolvia Prime website and the assistance services offered through it.",
  alternates: { canonical: "/terms-and-conditions" },
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      `By accessing ${SITE.domain} or submitting a request through it, you agree to these terms.`,
      "[Insert the legal entity name, registration number and governing jurisdiction.]",
    ],
  },
  {
    heading: "Nature of Services",
    paragraphs: [
      `${SITE.legalName} provides assistance and guidance services related to loan repayment and debt resolution. We are not a bank, non-banking financial company, lender or recovery agency, and we are not affiliated with any regulatory or government authority.`,
      DISCLAIMER,
    ],
  },
  {
    heading: "No Guaranteed Outcome",
    paragraphs: [
      "We do not represent that any particular settlement, restructuring, waiver, reduction or repayment arrangement will be approved. All such decisions rest solely with the concerned lender and are subject to their internal policies and applicable law.",
    ],
  },
  {
    heading: "Not Legal or Financial Advice",
    paragraphs: [
      "Information provided on this website and during the assistance process is general in nature and does not constitute legal, tax, accounting or investment advice. You should obtain independent professional advice where required.",
    ],
  },
  {
    heading: "Your Responsibilities",
    list: [
      "Provide accurate, complete and current information about your loans and financial position",
      "Continue to deal with your lender directly and make repayments through official channels",
      "Inform us promptly of any material change in your circumstances or any lender communication received",
      "Retain your own copies of documents submitted to us or to your lender",
    ],
  },
  {
    heading: "Fees and Charges",
    paragraphs: [
      "[Insert the fee structure, payment schedule, applicable taxes and accepted payment channels. State clearly that no amount is payable to any individual outside the official channels described here.]",
    ],
  },
  {
    heading: "Engagement and Termination",
    paragraphs: [
      "[Insert the terms under which an engagement begins, may be suspended and may be terminated by either party, including notice requirements.]",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "[Insert the limitation of liability clause reviewed by your legal advisor, including any monetary cap and excluded categories of loss.]",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      `All content, branding and design elements on ${SITE.domain} belong to ${SITE.legalName} unless otherwise stated, and may not be reproduced without written permission.`,
    ],
  },
  {
    heading: "Governing Law and Jurisdiction",
    paragraphs: [
      "[Insert the governing law and the courts having exclusive jurisdiction over disputes arising from these terms.]",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "These terms may be revised from time to time. Continued use of the website after publication of revised terms constitutes acceptance of them.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      breadcrumb="Terms & Conditions"
      title="Terms & Conditions"
      intro="The terms that govern your use of this website and any assistance engagement with us."
      sections={SECTIONS}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Disclaimer", href: "/disclaimer" },
      ]}
    />
  );
}
