import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Consolvia Prime collects, uses, stores and protects the information you share when requesting loan repayment assistance.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    heading: "Scope of This Policy",
    paragraphs: [
      `This policy explains how ${SITE.legalName} handles information collected through ${SITE.domain} and through direct communication with our team.`,
      "[Insert the legal entity name, registration details and jurisdiction that this policy applies to.]",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: ["We may collect the following categories of information:"],
    list: [
      "Identity and contact details such as your name, mobile number and email address",
      "Loan and repayment details you voluntarily share, including lender name, outstanding amount and EMI",
      "Documents you choose to upload or send to us for review",
      "Records of communication between you and our team",
      "[Insert details of any analytics, cookies or tracking technologies used on the website.]",
    ],
  },
  {
    heading: "How We Use Your Information",
    list: [
      "To review your request and assess the type of assistance that may be relevant",
      "To communicate with you regarding your request and its progress",
      "To prepare representations or correspondence on the basis of information you provide",
      "To maintain internal records of the assistance provided",
      "To comply with applicable legal or regulatory obligations",
    ],
  },
  {
    heading: "Disclosure to Third Parties",
    paragraphs: [
      "Information is shared only where necessary to provide the assistance you have requested, or where disclosure is required under applicable law.",
      "[Insert the categories of third parties with whom information may be shared — for example service providers, legal advisors or technology vendors.]",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "[Insert the retention period for enquiry data, case files and supporting documents, and the criteria used to determine that period.]",
    ],
  },
  {
    heading: "Security Measures",
    paragraphs: [
      "We apply reasonable technical and organisational measures to protect the information in our possession. No method of transmission or storage is completely secure, and we do not represent otherwise.",
      "[Insert a description of the specific security controls implemented.]",
    ],
  },
  {
    heading: "Your Rights",
    list: [
      "Request access to the information we hold about you",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of your information, subject to legal and record-keeping requirements",
      "Withdraw consent to further communication at any time",
      "[Insert the process, timelines and verification requirements for handling such requests.]",
    ],
  },
  {
    heading: "Cookies and Website Analytics",
    paragraphs: [
      "[Insert details of cookies used, their purpose, and how visitors can manage or disable them.]",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "This policy may be updated from time to time. The revised version will be published on this page with an updated revision date.",
    ],
  },
  {
    heading: "Contact for Privacy Matters",
    paragraphs: [
      `Privacy queries may be sent to ${SITE.email}. Registered office: ${SITE.address}.`,
      "[Insert the name and designation of the person responsible for privacy matters, if required by applicable law.]",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      breadcrumb="Privacy Policy"
      title="Privacy Policy"
      intro="How we collect, use and protect the information you share with us when requesting assistance."
      sections={SECTIONS}
      relatedLinks={[
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Grievance Redressal", href: "/grievance-redressal" },
      ]}
    />
  );
}
