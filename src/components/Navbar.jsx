"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Architecture", href: "/architecture" },
    { label: "Interiors", href: "/interiors" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Effect to prevent body scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Update navbar styling based on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Focus trap + Escape key handling for the mobile panel
  useEffect(() => {
    if (!isOpen || !panelRef.current) {
      return;
    }

    const panel = panelRef.current;
    const selector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusableElements = Array.from(panel.querySelectorAll(selector));
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navSurfaceClass = isScrolled
    ? "bg-transparent border-b border-[color:var(--color-border)]"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 text-[color:var(--color-text)] transition-[background-color,border-color] duration-300 ease-[var(--ease-standard)] motion-reduce:transition-none ${navSurfaceClass}`}
      >
        <div className="w-full min-h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-base sm:text-lg font-bold tracking-[0.25em] uppercase whitespace-nowrap min-h-11 inline-flex items-center"
          >
            TWC ARCHITECTS
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-sm uppercase">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-3 min-h-11 inline-flex items-center text-[0.82rem] tracking-[0.08em] transition-colors duration-300 ease-[var(--ease-standard)] motion-reduce:transition-none ${
                    isActive
                      ? "text-[color:var(--color-text)]"
                      : "text-muted hover:text-[color:var(--color-text)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full bg-[color:var(--color-accent)] transition-opacity duration-300 ease-[var(--ease-standard)] motion-reduce:transition-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className="lg:hidden text-[color:var(--color-text)] z-50 min-h-11 min-w-11 inline-flex items-center justify-center"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-[var(--ease-standard)] motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />

        <div
          ref={panelRef}
          className={`absolute top-0 right-0 h-full w-[84vw] max-w-sm bg-[color:var(--color-bg)]/96 border-l border-[color:var(--color-border)] shadow-xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="h-full app-container flex flex-col justify-center">
            <div className="flex flex-col items-start gap-2 text-lg uppercase text-[color:var(--color-text)]">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative min-h-12 w-full inline-flex items-center px-1 pr-6 transition-colors duration-300 ease-[var(--ease-standard)] motion-reduce:transition-none ${
                      isActive
                        ? "text-[color:var(--color-text)]"
                        : "text-muted hover:text-[color:var(--color-text)]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-10 rounded-full bg-[color:var(--color-accent)] transition-opacity duration-300 ease-[var(--ease-standard)] motion-reduce:transition-none ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
