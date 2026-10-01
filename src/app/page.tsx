import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Swirl } from "@/components/Swirl";
import { Photo } from "@/components/Photo";
import { Faq } from "@/components/Faq";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { IMG } from "@/lib/images";
import { HOME_FAQS, PACKAGES, SITE, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Website Design in Central West NSW | MISO Studio" },
  description:
    "MISO Studio designs strategic Custom, Squarespace, WordPress and Shopify websites for regional businesses across Orange, the Central West and Australia. Book a call.",
  alternates: { canonical: "/" },
};

const FEATURED = [PACKAGES[0], PACKAGES[3]];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo img={IMG.hero} priority sizes="100vw" />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="wrap section">
          <p className="eyebrow">Web design studio | Millthorpe, near Orange NSW</p>
          <h1 className="mt-4 max-w-3xl">Strategy-led website design for regional and rural businesses.</h1>
          <p className="mt-6 max-w-xl text-lg text-[#2b2b29]">
            Custom, Squarespace, WordPress and Shopify websites with the copy, SEO and AI search groundwork built in - so the
            right people find you and get in touch.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/contact">Book a complimentary call</Button>
            <Link href="/free-ai-seo-audit" className="text-sm underline underline-offset-4 hover:text-sage-dark">
              Not ready to chat? Take the free AI and SEO check
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="wrap grid gap-8 py-10 text-center md:grid-cols-3">
          <div>
            <p className="text-4xl font-bold tracking-[-0.04em]">+57%</p>
            <p className="mt-1 text-sm text-muted">new visitors after on-page SEO for DPI in Schools</p>
          </div>
          <div>
            <p className="text-4xl font-bold tracking-[-0.04em]">+109%</p>
            <p className="mt-1 text-sm text-muted">overall sessions for the same project</p>
          </div>
          <div>
            <p className="text-4xl font-bold tracking-[-0.04em]">10+ years</p>
            <p className="mt-1 text-sm text-muted">designing websites for regional businesses</p>
          </div>
        </div>
      </section>

      <section className="section shape-section">
        <Swirl variant="a" className="right-[-12rem] top-[-6rem] w-[52rem] opacity-90" />
        <div className="wrap">
          <h2 className="max-w-2xl">Websites built to be found, and to bring in enquiries.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FEATURED.map((p) => (
              <article key={p.name} className="flex flex-col rounded-3xl bg-cream p-8">
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
              </article>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/studio-services" className="underline underline-offset-4 hover:text-sage-dark">
              See every package, from $1,500 to $8,500
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Photo img={IMG.rockpool} />
          </div>
          <div>
            <p className="eyebrow">AI Readiness Audit</p>
            <h2 className="mt-3">Is AI sending customers to your competitors instead of you?</h2>
            <p className="mt-4 text-[#2b2b29]">
              Tools like ChatGPT and Google AI Overviews are changing how customers find businesses. The MISO AI Readiness Audit
              shows exactly where you stand and what to fix first.
            </p>
            <p className="mt-5 text-2xl font-bold tracking-[-0.03em]">$350</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/order-ai-audit">Get AI ready</Button>
              <a href={SITE.freeAuditUrl} className="text-sm underline underline-offset-4 hover:text-sage-dark">
                Or start with the free check
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section shape-section">
        <Swirl variant="b" className="left-[-14rem] top-[-8rem] w-[50rem] opacity-90" />
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <h2>Local to Orange and Bathurst. Working across Australia.</h2>
            <p className="mt-4 max-w-md text-[#2b2b29]">
              Based in Millthorpe, between the two. I know how people in the Central West search and what drives local trade, and
              I'm happy to meet in person. I also work remotely with businesses in Sydney, Melbourne and right across Australia.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas I work in">
              {["Central West", "Sydney", "Melbourne", "Australia-wide"].map((place) => (
                <li key={place} className="rounded-full border border-sage px-4 py-1.5 text-sm">
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li>
              <Link href="/web-design-orange" className="block rounded-3xl border border-ink/15 p-7 transition-colors hover:bg-cream">
                <h3>Web design Orange</h3>
                <p className="mt-2 text-sm text-muted">Websites for Orange businesses</p>
              </Link>
            </li>
            <li>
              <Link href="/web-design-bathurst" className="block rounded-3xl border border-ink/15 p-7 transition-colors hover:bg-cream">
                <h3>Web design Bathurst</h3>
                <p className="mt-2 text-sm text-muted">Websites for trades, farms and producers</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Photo img={IMG.hayley} />
          </div>
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3">Hello, I'm Hayley - founder of MISO.</h2>
            <div className="prose-miso">
              <p>
                I collaborate with thoughtful founders, creatives and purpose-led brands to design digital spaces that feel
                intentional, not templated. Originally from Manchester, I spent years leading luxury retail teams in Melbourne
                before settling in Millthorpe.
              </p>
              <p>
                For brand photography and social content I work with Fee May of Hamlet &amp; Fields, so website, marketing and
                visuals come together.
              </p>
            </div>
            <div className="mt-7">
              <Button href="/about-us" variant="ghost">More about MISO</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section shape-section">
        <Swirl variant="c" className="right-[-10rem] top-[-4rem] w-[56rem] opacity-90" />
        <div className="wrap">
          <Testimonials items={TESTIMONIALS.slice(0, 6)} heading="Kind words from clients" />
          <p className="mt-8">
            <a href={SITE.reviewUrl} className="underline underline-offset-4 hover:text-sage-dark" rel="noopener">
              Read or leave a Google review
            </a>
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap-narrow">
          <Faq items={HOME_FAQS} heading="A few things you might be wondering" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
