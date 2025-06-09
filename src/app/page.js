// app/page.js
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // disable scrolling
    document.body.style.overflow = "hidden";
    return () => {
      // re-enable scrolling if you ever unmount
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="fixed inset-0">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          Crafting Spaces with Meaning
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 drop-shadow">
          Welcome to TWC Architects—where architecture and interiors come
          together to shape elegant, functional spaces.
        </p>
        <Link
          href="/quote"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
