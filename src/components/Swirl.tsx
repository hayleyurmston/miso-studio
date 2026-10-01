/**
 * Soft sage ribbon that fills the whole section it sits in.
 * Decorative only. Swap for the original brand shapes by replacing the
 * path with an image once the final shape file is available.
 */
const PATHS = {
  a: "M-40 640 C120 380 420 760 560 430 C700 100 900 80 1020 330 C1140 580 1300 560 1480 120",
  b: "M-40 120 C220 20 380 360 640 320 C900 280 940 -20 1140 120 C1340 260 1280 560 1480 640",
  c: "M-40 380 C200 80 420 120 560 340 C700 560 900 640 1060 400 C1220 160 1360 200 1480 480",
} as const;

export function Swirl({ variant = "a" }: { variant?: keyof typeof PATHS; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 760"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    >
      <path
        d={PATHS[variant]}
        fill="none"
        stroke="var(--color-sage)"
        strokeOpacity="1"
        strokeWidth="84"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{ strokeWidth: "84px" }}
      />
    </svg>
  );
}
