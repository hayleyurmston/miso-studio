/**
 * Soft cream ribbon shapes that sit behind white sections.
 * Decorative only. Swap for the original brand shapes by putting
 * `src` on a variant once the images are in /public/images.
 */
const PATHS = {
  a: "M110 720 C60 470 430 520 390 300 C350 90 110 120 210 330 C310 540 710 430 670 150",
  b: "M90 120 C340 60 560 240 380 380 C200 520 120 380 250 300 C420 200 640 420 700 690",
  c: "M60 400 C160 140 420 140 440 360 C460 580 700 600 740 360",
} as const;

export function Swirl({
  variant = "a",
  className = "",
}: {
  variant?: keyof typeof PATHS;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 800 800"
      className={`pointer-events-none absolute -z-10 h-auto ${className}`}
    >
      <path
        d={PATHS[variant]}
        fill="none"
        stroke="var(--color-cream)"
        strokeWidth="96"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
