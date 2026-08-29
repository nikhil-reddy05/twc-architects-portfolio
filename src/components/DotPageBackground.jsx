import { cn } from "@/lib/utils";

const defaultBackground = {
  color: "#f7f5ef",
  dotColor: "#b9b5ad",
  dotOpacity: 0.8,
  dotSize: "5px",
  dotSpacing: "22px",
};

export default function DotPageBackground({
  children,
  backgroundColor = defaultBackground.color,
  dotColor = defaultBackground.dotColor,
  dotOpacity = defaultBackground.dotOpacity,
  dotSize = defaultBackground.dotSize,
  dotSpacing = defaultBackground.dotSpacing,
  className,
}) {
  return (
    <section
      className={cn(
        "relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden text-[#181b1f] md:-mt-20",
        className,
      )}
      style={{
        backgroundColor,
        "--dot-color": dotColor,
        "--dot-opacity": dotOpacity,
        "--dot-size": dotSize,
        "--dot-spacing": dotSpacing,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-attachment:fixed] [background-image:radial-gradient(var(--dot-color)_var(--dot-size),transparent_var(--dot-size))] [background-size:var(--dot-spacing)_var(--dot-spacing)]"
        style={{ opacity: dotOpacity }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
