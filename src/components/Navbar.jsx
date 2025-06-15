"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Effect to prevent body scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Architecture", href: "/architecture" },
    { label: "Interiors", href: "/interiors" },
    { label: "Quote", href: "/quote" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Determine navbar background based on page and scroll position (optional improvement)
  // For simplicity, we'll stick to the original logic for now.
  const isHomePage = pathname === "/";
  const navBgClass = isHomePage
    ? "bg-transparent"
    : "bg-[#0a0a0a]/90 backdrop-blur-sm";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between transition-colors duration-300 ${navBgClass} text-white`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-lg font-bold tracking-[0.25em] uppercase whitespace-nowrap"
        >
          TWC ARCHITECTS
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white z-50" // z-50 to ensure it's above the overlay's backdrop
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay with Animation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // Close menu when clicking the overlay
      >
        <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>

        {/* Sliding Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-[#0a0a0a] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl uppercase text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
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
    </>
  );
}
