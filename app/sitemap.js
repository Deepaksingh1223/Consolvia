import { SITE } from "@/lib/constants";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/get-assistance", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-and-conditions", priority: 0.3 },
  { path: "/disclaimer", priority: 0.3 },
  { path: "/refund-policy", priority: 0.3 },
  { path: "/grievance-redressal", priority: 0.4 },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}

export const dynamic = "force-static";
