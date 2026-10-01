import { IMG } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PORTFOLIO } from "@/lib/site";

const title = "Portfolio | Websites & Brands for Orange, Bathurst & Central West NSW | MISO Studio";
const description =
  "Selected websites and brand identities by MISO Studio for businesses in Orange, Bathurst, Millthorpe and across regional NSW.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title, description, url: "/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      <PageHero img={IMG.bannerCliffs}>
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 max-w-3xl">A curated selection of websites and brand identities.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">Crafted with clarity, intention and a little MISO magic.</p>
        </PageHero>
      <section className="section">
        <div className="wrap">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((p) => (
              <li key={p.name}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-charcoal bg-cream">
                  <Image
                    src={`/images/portfolio/${p.img ?? p.name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-")}.webp`}
                    alt={`${p.name}, ${p.kind.toLowerCase()} by MISO Studio for a business in ${p.place}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: p.pos ?? "center" }}
                  />
                </div>
                <h3 className="mt-4">{p.name}</h3>
                <p className="text-sm text-muted">{p.kind} | {p.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
