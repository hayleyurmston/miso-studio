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
      <section className="bg-cream">
        <div className="wrap section">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 max-w-3xl">A curated selection of websites and brand identities.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">Crafted with clarity, intention and a little MISO magic.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {/* Replace each card's placeholder block with the project image once the images are in /public/images. */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((p) => (
              <li key={p.name}>
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-cream to-[#cfd3c8]" role="img" aria-label={`${p.name}, ${p.place}`} />
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
