import { cn } from "@/lib/utils";
import Image from "next/image";

const textAlignment = {
  center: "items-center text-center",
  left: "items-start text-left",
  right: "items-end text-right",
};

export default function ProjectHero({
  title,
  subtitle,
  image,
  imageAlt,
  overlayIntensity = 0.34,
  titleColor = "#c9c4bc",
  titleSize = "text-3xl sm:text-5xl lg:text-6xl xl:text-7xl",
  subtitleSize = "text-xs sm:text-base",
  subtitleColor = "rgba(201, 196, 188, 0.82)",
  heroHeight = "min-h-[520px] sm:min-h-[620px] lg:min-h-[700px]",
  textAlign = "center",
  fadeColor = "#f7f5ef",
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#111111]", heroHeight)}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayIntensity})` }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
        }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pt-8",
          heroHeight,
          textAlignment[textAlign],
        )}
      >
        <h1
          className={cn(
            "max-w-6xl font-semibold uppercase leading-tight tracking-[0.08em] sm:tracking-[0.12em]",
            titleSize,
          )}
          style={{ color: titleColor }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "mt-6 max-w-sm font-medium uppercase leading-6 tracking-[0.24em] sm:max-w-none sm:tracking-[0.28em]",
              subtitleSize,
            )}
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
