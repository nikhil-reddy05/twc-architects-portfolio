"use client";
import { usePathname } from "next/navigation";
import DotPageBackground from "@/components/DotPageBackground";
import { architecturePageTheme } from "@/config/projectPageThemes";

export default function Footer() {
  const pathname = usePathname();
  const { background } = architecturePageTheme;

  const isHomePage = pathname === "/";
  const bgClass = isHomePage ? "hidden" : "";

  return (
    <DotPageBackground
      backgroundColor={background.color}
      dotColor={background.dotColor}
      dotOpacity={background.dotOpacity}
      dotSize={background.dotSize}
      dotSpacing={background.dotSpacing}
      className={`-mt-px md:-mt-px ${bgClass}`}
    >
      <footer className="relative bottom-0 w-full px-2 py-5 text-center text-[10px] leading-none tracking-normal text-[#6f6a62] sm:px-6 sm:py-6 sm:text-sm sm:leading-6">
        <p className="whitespace-nowrap">
          © {new Date().getFullYear()} The White Walls Company. All rights reserved.
        </p>
      </footer>
    </DotPageBackground>
  );
}
