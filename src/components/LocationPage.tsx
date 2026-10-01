import { IMG } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { Button } from "./Button";
import { Swirl } from "./Swirl";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";
import { CtaBand } from "./CtaBand";
import { PACKAGES, SITE, type LocationPageData } from "@/lib/site";

export function LocationPage({ d }: { d: LocationPageData }) {
  const url = `${SITE.url}/${d.slug}`;
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Website design in ${d.town}`,
            serviceType: "Web design",
            url,
            provider: { "@id": `${SITE.url}/#business` },
            areaServed: d.areaServed.map((a) => ({ "@type": "Place", name: a })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              { "@type": "ListItem", position: 2, name: `Web design ${d.town}`, item: url },
            ],
          },
        ]}
      />

      <PageHero img={d.town === "Bathurst" ? IMG.farm : IMG.bannerRidge}>
          <p className="eyebrow">MISO Studio | Web design {d.town}</p>
          <h1 className="mt-4 max-w-3xl">{d.h1}</h1>
          <p className="mt-6 max-w-xl text-lg text-[#2b2b29]">{d.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/contact">Book a free 30-minute call</Button>
            <Link href="/free-ai-seo-audit" className="text-sm underline underline-offset-4 hover:text-sage-dark">
              Not ready to chat? Take the free AI and SEO check
            </Link>
          </div>
        </PageHero>

      <section className="section shape-section">
        <Swirl variant="a" className="right-[-14rem] top-[-8rem] w-[50rem] opacity-90" />
        <div className="wrap-narrow">
          <h2>{d.localHeading}</h2>
          <div className="prose-miso">
            {d.localBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <h2>{d.workHeading}</h2>
            <ul className="mt-6 space-y-3">
              {d.work.map((w) => (
                <li key={w.name}>
                  <span className="font-medium">{w.name}</span> - {w.detail}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/portfolio" className="underline underline-offset-4 hover:text-sage-dark">See the full portfolio</Link>
            </p>
          </div>
          <figure className="self-center rounded-3xl bg-white p-8">
            <blockquote className="text-xl font-medium leading-snug tracking-[-0.02em]">&ldquo;{d.quote.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-muted">{d.quote.by}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section shape-section">
        <Swirl variant="b" className="left-[-14rem] top-[-6rem] w-[50rem] opacity-90" />
        <div className="wrap-narrow">
          <h2>{d.midHeading}</h2>
          <div className="prose-miso">
            {d.midBody && <p>{d.midBody}</p>}
            {d.midList && (
              <ul>
                {d.midList.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <h2>What I can build for you</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {PACKAGES.map((p) => (
              <li key={p.name} className="rounded-3xl bg-white p-7">
                <h3>{p.name}</h3>
                <p className="mt-2 text-sm text-[#2b2b29]">{p.tagline}</p>
                <p className="mt-4 font-medium">{p.price}</p>
                {p.priceNote && <p className="text-sm font-bold text-ink">{p.priceNote}</p>}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Every site includes mobile-first design, on-page SEO and the groundwork for AI search tools like ChatGPT and Google AI Overviews.{" "}
            <Link href="/studio-services" className="underline underline-offset-4">See all packages</Link>
          </p>
        </div>
      </section>

      <section className="section shape-section">
        <Swirl variant="c" className="right-[-12rem] top-[-5rem] w-[52rem] opacity-90" />
        <div className="wrap-narrow">
          <Faq items={d.faqs} heading={`Common questions from ${d.town} businesses`} />
        </div>
      </section>

      <CtaBand heading="Let's talk about your website" />
      <p className="border-t-0 bg-sage pb-10 text-center text-sm text-white/90">{d.alsoWorking}</p>
    </>
  );
}
