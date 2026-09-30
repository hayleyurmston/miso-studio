import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ADDONS, EXTRAS, PACKAGES, SITE } from "@/lib/site";

const title = "Website Design Packages | Squarespace, Shopify & WordPress | MISO Studio";
const description =
  "Website design packages from $1,500 for Orange and Central West NSW businesses. Squarespace, Shopify, WordPress and custom builds with SEO and AI search built in.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/studio-services" },
  openGraph: { title, description, url: "/studio-services" },
};

export default function StudioServices() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "MISO Studio website packages",
          itemListElement: PACKAGES.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            description: p.tagline,
          })),
        }}
      />
      <section className="bg-cream">
        <div className="wrap section">
          <p className="eyebrow">Studio services</p>
          <h1 className="mt-4 max-w-3xl">Website design with depth, clarity and intention.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">
            Custom website design and development across Squarespace, Shopify and WordPress, plus fully custom-coded sites. Every
            build considers user experience, mobile performance, SEO and conversion from the start.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Website packages</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {PACKAGES.map((p) => (
              <li key={p.name} className="flex flex-col rounded-3xl bg-cream p-8">
                <h3>{p.name}</h3>
                <p className="mt-3 text-[#2b2b29]">{p.tagline}</p>
                <p className="mt-5 font-medium">{p.price}</p>
                {p.priceNote && <p className="text-sm font-bold text-ink">{p.priceNote}</p>}
                <ul className="mt-5 flex-1 space-y-1.5 text-sm">
                  {p.includes.map((i) => (
                    <li key={i}>- {i}</li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href="/contact">{p.cta}</Button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">Additional pages from $650 each. Prices exclude GST unless stated.</p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <h2>Brand, support and marketing</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {EXTRAS.map((e) => (
              <li key={e.name} className="flex flex-col rounded-3xl bg-white p-8">
                <h3>{e.name}</h3>
                <p className="mt-2 font-medium">{e.price}</p>
                <p className="mt-3 flex-1 text-[#2b2b29]">{e.blurb}</p>
                <div className="mt-6">
                  <Button href="/contact" variant="ghost">{e.cta}</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The Studio Menu</h2>
          <p className="mt-3 max-w-xl text-[#2b2b29]">
            Curated add-ons to tailor your site and brand. Not sure what you need? I'll recommend the right ones on your discovery call.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {ADDONS.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {g.items.map((i) => (
                    <li key={i.name} className="py-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-medium">{i.name}</span>
                        <span className="shrink-0 text-sm">{i.price}</span>
                      </div>
                      <p className="text-sm text-muted">{i.blurb}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap-narrow">
          <h2>Brand photography and social content</h2>
          <p className="mt-4 text-[#2b2b29]">
            For professional brand photography and social media packages I collaborate with Fee May of Hamlet &amp; Fields - lifestyle-led,
            editorial-style content for regional and rural businesses across Central West NSW. Booked separately through Hamlet &amp; Fields.
          </p>
          <div className="mt-6">
            <Button href={SITE.hamletFields} variant="ghost">Visit Hamlet &amp; Fields</Button>
          </div>
        </div>
      </section>

      <CtaBand heading="Not sure which fits?" body="Book a free 30-minute call and I'll recommend the right approach for your business and budget." />
    </>
  );
}
