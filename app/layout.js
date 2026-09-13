import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Consolvia Prime | Loan Repayment Assistance",
    template: "%s | Consolvia Prime",
  },
  description:
    "Professional assistance and guidance for loan repayment challenges, lender communication, documentation and debt resolution.",
  applicationName: SITE.name,
  keywords: [
    "loan repayment assistance",
    "debt resolution guidance",
    "settlement assistance",
    "lender communication support",
    "loan documentation support",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Consolvia Prime | Loan Repayment Assistance",
    description:
      "Professional assistance and guidance for loan repayment challenges, lender communication, documentation and debt resolution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consolvia Prime | Loan Repayment Assistance",
    description:
      "Professional assistance and guidance for loan repayment challenges, lender communication, documentation and debt resolution.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-elev">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
