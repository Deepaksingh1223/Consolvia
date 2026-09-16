"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { cx } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-out",
        scrolled || menuOpen
          ? "border-hair bg-base/85 backdrop-blur-xl"
          : "border-transparent bg-elev",
      )}
    >
      <div className="container-x flex h-[72px] items-center gap-3 lg:gap-4">
        <Link href="/" aria-label="Consolvia Prime — home" className="shrink-0">
          <Logo variant="light" />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 flex-1 overflow-visible lg:block"
        >
          <ul className="flex w-max min-w-full items-center justify-end gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              const hasChildren = link.children?.length;
              return (
                <li key={`${link.href}-${link.label}`}>
                  {hasChildren ? (
                    <div className="group/about relative">
                      <button
                        type="button"
                        onClick={() => setAboutOpen((value) => !value)}
                        aria-expanded={aboutOpen}
                        className={cx(
                          "group/nav relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-medium tracking-[0.01em] transition-colors duration-300 xl:px-3 xl:text-[13px]",
                          active ? "text-head" : "text-dim hover:text-head",
                        )}
                      >
                        {link.label}
                        <ChevronDown size={13} className={cx("transition-transform", aboutOpen && "rotate-180")} />
                        <span
                          aria-hidden="true"
                          className={cx(
                            "absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full bg-brand transition-transform duration-300 xl:inset-x-3",
                            active ? "scale-x-100" : "origin-left scale-x-0 bg-brand/50 group-hover/nav:scale-x-100",
                          )}
                        />
                      </button>
                      <div
                        className={cx(
                          "absolute left-1/2 top-full z-10 w-52 -translate-x-1/2 pt-3 transition-all duration-200",
                          aboutOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
                        )}
                      >
                        <div className="rounded-xl border border-hair bg-panel p-2 shadow-2xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setAboutOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-dim transition-colors hover:bg-elev-2 hover:text-head"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cx(
                        "group/nav relative whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-medium tracking-[0.01em] transition-colors duration-300 xl:px-3 xl:text-[13px]",
                        active ? "text-head" : "text-dim hover:text-head",
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={cx(
                          "absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full bg-brand transition-transform duration-300 xl:inset-x-3",
                          active
                            ? "scale-x-100"
                            : "origin-left scale-x-0 bg-brand/50 group-hover/nav:scale-x-100",
                        )}
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <Link
            href="/get-assistance"
            className="hidden items-center gap-2 rounded-full bg-deep px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 ease-out hover:bg-charcoal hover:-translate-y-0.5 sm:inline-flex xl:px-5"
          >
            Get Assistance
            <ArrowRight size={15} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hair text-head transition-colors duration-300 hover:border-white/35 lg:hidden"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} pathname={pathname} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
