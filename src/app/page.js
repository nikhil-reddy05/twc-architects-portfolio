"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/images/hero-bg.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
  "/images/hero-bg-4.jpg",
  "/images/hero-bg-5.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Respect reduced-motion: don't autoplay for users who ask for less motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  const goToPrev = useCallback(
    () => setIndex((prev) => (prev - 1 + images.length) % images.length),
    []
  );
  const goToNext = useCallback(
    () => setIndex((prev) => (prev + 1) % images.length),
    []
  );

  // Autoplay, unless paused.
  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(goToNext, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused, goToNext]);

  return (
    <section className="fixed inset-0 select-none bg-[#050505]" aria-roledescription="carousel" aria-label="Featured project images">
      {images.map((src, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-20" />

      {/* Accessible navigation controls */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous image"
        className="absolute inset-y-0 left-0 w-1/2 z-30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      />
      <button
        type="button"
        onClick={goToNext}
        aria-label="Next image"
        className="absolute inset-y-0 right-0 w-1/2 z-30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      />

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        className="absolute bottom-6 right-6 z-40 rounded-full bg-black/60 text-white px-4 py-2 text-sm font-medium hover:bg-black/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        {paused ? "Play" : "Pause"}
      </button>

      <div className="relative z-30 flex items-center justify-center h-full pointer-events-none">
        {/* Crawlable, screen-reader-only heading + intro (design stays logo-only). */}
        <div className="sr-only">
          <h1>TWC Architects — Architecture &amp; Interior Design Studio in Hyderabad</h1>
          <p>
            The White Walls Company (TWC Architects) is an architecture and
            interior design studio based in Hyderabad, Telangana. We design
            timeless homes, villas, and commercial interiors with a focus on
            minimalism, natural light, and craftsmanship. Explore our
            architecture and interiors portfolio, or get in touch for a quote.
          </p>
        </div>
        <div className="w-[70vw] max-w-[320px] h-auto rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/home-page-logo.png"
            alt="TWC Architects logo"
            width={320}
            height={140}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
