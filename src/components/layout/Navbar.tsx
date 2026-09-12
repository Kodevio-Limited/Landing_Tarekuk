"use client";

import { useEffect, useState } from "react";
import Button from "@/components/shared/Button";

const NAV_LINKS = [
  { label: "Pay Later", href: "#pay-later" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Subtle elevation after leaving the top (does not alter the Figma look at top) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: highlight the section currently in view */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-1/2 top-[21px] z-50 w-[min(1087px,calc(100%-32px))] -translate-x-1/2">
      <nav
        className={`grid h-[72px] grid-cols-[1fr_auto_1fr] items-center rounded-[999px] bg-ink pl-7 pr-2.5 text-background transition-shadow duration-500 max-md:flex max-md:justify-between ${
          scrolled
            ? "shadow-[0_18px_50px_-12px_rgba(0,0,0,0.5)]"
            : "shadow-[0_8px_32px_-12px_rgba(0,0,0,0.35)]"
        }`}
      >
        <a href="#top" className="group flex w-fit shrink-0 items-center" aria-label="Familysent — back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/footer/logo-nav.png"
            alt="Familysent logo"
            className="h-6 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 md:h-7"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`link-sweep relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-yellow-400" : "text-background/70 hover:text-background"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end">
          <Button
            href="#download"
            className="hidden !rounded-[999px] !px-6 !py-2.5 !text-base md:inline-flex"
          >
            Download Now
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          <span
            className={`h-[2px] w-5 rounded bg-background transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded bg-background transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded bg-background transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile menu panel */}
        <div
          className={`absolute left-3 right-3 top-[calc(100%+10px)] origin-top rounded-3xl border border-white/10 bg-ink p-4 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)] transition-all duration-300 md:hidden ${
            menuOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                    menuOpen ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                  } ${
                    active === link.href
                      ? "bg-yellow-400/15 text-yellow-300"
                      : "text-background/75 hover:bg-white/5 hover:text-background"
                  }`}
                >
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 opacity-50" aria-hidden="true">
                    <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-white/10 pt-3">
              <Button
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="w-full justify-center !py-3.5"
              >
                Download Now
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
