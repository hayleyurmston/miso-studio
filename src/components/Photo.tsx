import Image from "next/image";
import type { Img } from "@/lib/images";

type Props = {
  img: Img;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Fills its parent (give the parent a height or aspect ratio). */
export function Photo({ img, className = "", priority, sizes = "(min-width: 1024px) 50vw, 100vw" }: Props) {
  if (!img.src) {
    return (
      <div
        role="img"
        aria-label={img.alt}
        className={`absolute inset-0 bg-gradient-to-br from-cream to-[#cfd3c8] ${className}`}
      />
    );
  }
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
