"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to prevent body scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Architecture", href: "/architecture" },
    { label: "Interiors", href: "/interiors" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isHomePage = pathname === "/";
  const navBgClass = isHomePage ? "bg-transparent text-white" : "text-[#2f2d29]";
  const logoFilterClass = isHomePage ? "" : "invert";
  const navFrameClass = isHomePage
    ? "top-0 left-0 w-screen px-4 py-4 sm:px-6 lg:px-8 lg:py-5"
    : "twc-nav-frame-pill";

  return (
    <>
      <nav
        className={`twc-nav-shell fixed z-[70] flex items-center justify-between gap-4 overflow-hidden ${!isHomePage ? "twc-nav-pill" : ""} ${isMenuOpen ? "twc-nav-menu-open" : ""} ${navFrameClass} ${navBgClass}`}
      >
        {!isHomePage ? (
          <>
            <div className="twc-nav-pill-bg absolute inset-0 bg-[#f7f5ef]" />
            <div
              aria-hidden="true"
              className="twc-nav-pill-bg pointer-events-none absolute inset-0 opacity-[0.28] [background-image:radial-gradient(#b9b5ad_1px,transparent_1px)] [background-size:22px_22px]"
            />
          </>
        ) : null}
        {/* Logo */}
        <Link
          href="/"
          className="twc-nav-brand relative z-10 flex min-w-0 shrink-0 items-center whitespace-nowrap font-bold uppercase"
        >
          <Image
            src="/favicon.ico"
            alt=""
            width={28}
            height={28}
            className={`twc-nav-logo shrink-0 ${logoFilterClass}`}
          />
          <span>TWC ARCHITECTS</span>
        </Link>

        {/* Desktop Links */}
        <div className="twc-nav-links relative z-10 hidden items-center uppercase lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? isHomePage
                      ? "font-semibold text-white"
                      : "font-semibold text-[#1f1d1a]"
                    : isHomePage
                      ? "text-gray-300 hover:text-white"
                      : "text-[#4f4a43] hover:text-[#1f1d1a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          className="twc-nav-menu-button z-50 flex shrink-0 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          {isMenuOpen ? (
            <X className="twc-nav-menu-icon" />
          ) : (
            <Menu className="twc-nav-menu-icon" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay with Animation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu when clicking the overlay
      >
        <div className="absolute inset-0 bg-[#181612]/35 backdrop-blur-sm"></div>

        {/* Sliding Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm overflow-hidden bg-[#f7f5ef] text-[#2f2d29] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.62] [background-image:radial-gradient(#b9b5ad_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-start px-8 pt-[24vh] uppercase">
            <Image
              src="/favicon.ico"
              alt=""
              width={72}
              height={72}
              className="mb-24 h-16 w-16 invert sm:h-[4.5rem] sm:w-[4.5rem]"
            />

            <div className="flex flex-col items-center gap-8 text-xl">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition ${
                      isActive
                        ? "opacity-100 font-bold"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {link.label}
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
