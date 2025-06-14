// app/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { href: "/", label: "Home" },
    { href: "/architecture", label: "Architecture" },
    { href: "/interiors", label: "Interiors" },
    { href: "/quote", label: "Quote" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <nav
        className={`${
          isHome ? "absolute" : "fixed"
        } top-0 left-0 w-full px-4 md:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center z-30 ${
          isHome ? "bg-transparent" : "bg-[#0a0a0a]"
        }
        `}
      >
        {/* Logo: scales from text-lg → text-2xl */}
        <Link
          href="/"
          className="
            text-lg 
            md:text-xl 
            lg:text-2xl 
            font-bold 
            tracking-[0.35em] 
            text-white 
            uppercase 
            hover:opacity-90 
            transition
          "
        >
          TWC ARCHITECTS PVT LTD.
        </Link>

        {/* Show inline links only on large (≥lg) screens */}
        <div className="hidden lg:flex space-x-6 uppercase text-sm lg:text-base text-white">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:opacity-80 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger on all screens below lg */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Fullscreen overlay for mobile & tablet (below lg) */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 lg:hidden">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white text-2xl font-medium uppercase hover:opacity-80 transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
