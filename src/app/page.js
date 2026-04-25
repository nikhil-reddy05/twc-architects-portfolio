"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const heroSlides = [
  {
    src: "/images/hero-bg.jpg",
    alt: "Contemporary residence blending into a landscaped setting",
  },
  {
    src: "/images/hero-bg-2.jpg",
    alt: "Modern architectural detail with warm natural light",
  },
  {
    src: "/images/hero-bg-3.jpg",
    alt: "Refined interior with custom finishes and soft textures",
  },
];

const quickLinks = [
  {
    href: "/architecture",
    title: "Architecture Portfolio",
    description: "Discover custom homes and built environments shaped by context and craft.",
  },
  {
    href: "/interiors",
    title: "Interior Design Portfolio",
    description: "Explore interiors designed for comfort, flow, and everyday luxury.",
  },
  {
    href: "/contact",
    title: "Start Your Project",
    description: "Share your vision and connect with our studio for a tailored consultation.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    if (!isPlaying) return;

    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 4500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPlaying]);

  return (
    <main className="bg-black text-white">
      <section
        className="relative isolate min-h-[78svh] md:min-h-[90svh] lg:min-h-screen"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            goToPrev();
          }

          if (event.key === "ArrowRight") {
            goToNext();
          }
        }}
        aria-label="Featured projects hero"
      >
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.src}')` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/75" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] md:min-h-[90svh] lg:min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 md:px-12">
          <div className="max-w-xl space-y-5 md:space-y-6">
            <p className="text-xs tracking-[0.25em] text-white/80 uppercase">The Wright Collective</p>
            <h1 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl md:text-5xl">
              Architecture and interiors crafted around the way you live.
            </h1>
            <p className="text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
              We design refined spaces with timeless materials, intelligent planning, and a cinematic sense
              of atmosphere.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/architecture"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Architecture
              </Link>
              <Link
                href="/interiors"
                className="rounded-full border border-white/80 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Interiors
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3" aria-label="Hero slideshow controls">
            <button
              type="button"
              onClick={goToPrev}
              className="rounded-full border border-white/70 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Show previous slide"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="rounded-full border border-white/70 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="rounded-full border border-white/70 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Show next slide"
            >
              Next
            </button>
            <p className="text-sm text-white/80" aria-live="polite">
              Slide {index + 1} of {heroSlides.length}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] px-5 py-14 sm:px-8 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-7 max-w-2xl space-y-2">
            <p className="text-xs tracking-[0.25em] text-white/70 uppercase">Discover More</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Choose your design journey.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/40 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <h3 className="mb-2 text-lg font-medium text-white group-hover:text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-white/90">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
