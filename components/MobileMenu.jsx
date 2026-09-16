"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cx } from "@/lib/utils";

export default function MobileMenu({ open, pathname, onNavigate }) {
  const [hash, setHash] = useState("");
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div
      id="mobile-menu"
      className={cx(
        "lg:hidden overflow-y-auto border-t border-hair bg-elev transition-all duration-300 ease-out",
        open
          ? "max-h-[calc(100dvh-72px)] opacity-100"
          : "pointer-events-none max-h-0 overflow-hidden opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile navigation" className="container-x py-5">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => {
            const [linkPath, linkHash] = link.href.split("#");
            const routeMatch =
              linkPath === "/"
                ? pathname === "/" && !hash
                : pathname === linkPath || pathname.startsWith(`${linkPath}/`);
            const active = linkHash
              ? pathname === linkPath && hash === `#${linkHash}`
              : routeMatch;
            const hasChildren = link.children?.length;
            return (
              <li key={`${link.href}-${link.label}`}>
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setAboutOpen((value) => !value)}
                      aria-expanded={aboutOpen}
                      className={cx(
                        "flex w-full items-center justify-between border-b border-hair py-3.5 text-left text-[15px] font-semibold transition-colors duration-200",
                        active ? "text-brand" : "text-head hover:text-brand",
                      )}
                    >
                      {link.label}
                      <ChevronDown size={17} className={cx("text-dim transition-transform", aboutOpen && "rotate-180")} />
                    </button>
                    {aboutOpen && (
                      <ul className="border-b border-hair py-1 pl-4">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onNavigate}
                              tabIndex={open ? 0 : -1}
                              className="flex items-center justify-between py-3 text-sm font-medium text-dim transition-colors hover:text-brand"
                            >
                              {child.label}
                              <ArrowRight size={15} aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "flex items-center justify-between border-b border-hair py-3.5 text-[15px] font-semibold tracking-[0.01em] transition-colors duration-200",
                      active ? "text-brand" : "text-head hover:text-brand",
                    )}
                  >
                    {link.label}
                    <ArrowRight size={16} aria-hidden="true" className="text-dim" />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex flex-col gap-3">
          <Link
            href="/get-assistance"
            onClick={onNavigate}
            tabIndex={open ? 0 : -1}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-brand-light hover:text-black"
          >
            Get Assistance
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={SITE.phoneHref}
            tabIndex={open ? 0 : -1}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-hair px-5 py-3 text-sm font-semibold text-head transition-colors duration-300 hover:border-white/35"
          >
            <Phone size={15} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </nav>
    </div>
  );
}
