import { Photo } from "./Photo";
import type { Img } from "@/lib/images";

/** Banner section: full-bleed photo with a light 10% overlay so the imagery stays vivid. */
export function PageHero({ img, children }: { img: Img; children: React.ReactNode }) {
  return (
    <section className="on-photo relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Photo img={img} priority sizes="100vw" />
        <div className="absolute inset-0 bg-ink/10" />
      </div>
      <div className="wrap section">{children}</div>
    </section>
  );
}
