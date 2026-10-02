import Image from "next/image";

/** Original MISO background artwork, sat behind a section. */
export function Backdrop({ n, className = "" }: { n: 9 | 11; className?: string }) {
  return (
    <Image
      src={`/images/backgrounds/bg-${n}.webp`}
      alt=""
      fill
      sizes="100vw"
      aria-hidden
      className={`pointer-events-none -z-10 object-cover ${className}`}
    />
  );
}
