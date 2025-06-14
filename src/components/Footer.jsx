"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const bgClass = isHomePage ? "hidden" : "";

  return (
    <footer
      className={`bottom-0 w-full text-center py-4 ${bgClass} bg-[#0a0a0a] text-gray-400 text-sm`}
    >
      © {new Date().getFullYear()} The White Walls Company. All rights reserved.
    </footer>
  );
}
