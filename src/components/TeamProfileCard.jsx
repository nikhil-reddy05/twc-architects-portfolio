import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function TeamProfileCard({
  name,
  role,
  secondaryRole,
  imageSrc,
  imageAlt,
  backgroundText = name,
  ctaLabel,
  ctaHref,
  className,
  cardHeight = "min-h-[35rem] sm:min-h-[39rem] lg:min-h-[44rem]",
  cardBackground = "#e9e9e7",
  cardRadius = "rounded-[1.75rem] sm:rounded-[2.25rem]",
  cardShadow = "shadow-[0_24px_70px_rgba(24,27,31,0.12)]",
  backgroundTextOpacity = "opacity-[0.09]",
  imageClassName = "h-[34rem] w-[104%] sm:h-[37rem] sm:w-[78%] lg:h-[35rem] lg:w-[58%]",
}) {
  const displayBackgroundText = backgroundText.replace(/^Ar\.\s*/i, "");

  return (
    <article
      className={cn(
        "group relative mx-auto w-full max-w-[68rem] overflow-hidden",
        cardHeight,
        cardRadius,
        cardShadow,
        className,
      )}
      style={{ backgroundColor: cardBackground }}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-[18%] z-0 select-none text-center text-[4.7rem] font-semibold leading-[0.9] tracking-[-0.03em] text-[#727272] sm:top-[15%] sm:text-[7.5rem] lg:top-[17%] lg:text-[9rem] xl:text-[10rem]",
          backgroundTextOpacity,
        )}
      >
        {displayBackgroundText.split(" ").map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/5 bg-gradient-to-t from-[#171510]/0 via-[#171510]/0 to-transparent transition duration-500 group-hover:from-[#171510]/75 group-hover:via-[#171510]/24" />

      <div
        className={cn(
          "absolute left-1/2 bottom-0 z-10 -translate-x-1/2 transition duration-700 group-hover:scale-[1.015]",
          imageClassName,
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 680px, (min-width: 640px) 72vw, 86vw"
          className="object-contain object-center drop-shadow-[0_26px_38px_rgba(24,27,31,0.18)]"
          priority
        />
      </div>

      <div className="absolute bottom-[19%] left-7 z-30 max-w-[25rem] text-white drop-shadow-[0_3px_9px_rgba(0,0,0,0.55)] transition duration-500 sm:bottom-[16%] sm:left-10 lg:bottom-[14%] lg:left-12">
        <h3 className="text-2xl font-semibold leading-tight tracking-normal sm:text-3xl lg:text-[2rem]">
          {name}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-white/90 sm:text-base lg:text-lg">
          {role}
        </p>
        {secondaryRole ? (
          <p className="mt-1 text-xs font-medium text-white/72 sm:text-sm">
            {secondaryRole}
          </p>
        ) : null}

        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            className="mt-7 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-current underline underline-offset-8"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
