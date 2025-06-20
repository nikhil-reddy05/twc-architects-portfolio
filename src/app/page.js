"use client";

import { useEffect, useState, useRef } from "react";
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
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="fixed inset-0 select-none">
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

      {/* Click zones */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 z-30 cursor-pointer"
        onClick={() => {
          goToPrev();
          resetTimer();
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 z-30 cursor-pointer"
        onClick={() => {
          goToNext();
          resetTimer();
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-[70vw] max-w-[320px] h-[30vw] max-h-[140px] rounded-full overflow-hidden shadow-2xl backdrop-blur-md bg-black/70 flex items-center justify-center">
          <Image
            src="/twc-b.png"
            alt="TWC Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
