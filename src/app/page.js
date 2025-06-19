"use client";

import { useEffect, useState } from "react";
// import Link from "next/link";

const images = [
  "/images/hero-bg.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
  "/images/hero-bg-4.jpg",
  "/images/hero-bg-5.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fixed inset-0">
      {/* Slideshow backgrounds */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-20" /> */}

      {/* Optional: Centered content */}
      {/* 
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
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
      */}
    </section>
  );
}
