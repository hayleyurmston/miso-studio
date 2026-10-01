import { IMG } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

const title = "Digital Guide | Website, SEO & AI Search Tips for Regional Business | MISO Studio";
const description =
  "Practical website, SEO and AI search advice for regional and rural businesses in Orange, Bathurst and the Central West, from MISO Studio.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/digital-guide" },
  openGraph: { title, description, url: "/digital-guide" },
};

export default function DigitalGuide() {
  return (
    <>
      <PageHero img={IMG.rockpool}>
          <p className="eyebrow">Digital Guide</p>
          <h1 className="mt-4 max-w-3xl">Website, SEO and AI search, in plain English.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">
            Fresh guides for regional business owners are on their way. In the meantime, start here.
          </p>
        </PageHero>
      <section className="section">
        <div className="wrap-narrow">
          <ul className="space-y-4 text-lg">
            <li><Link className="underline underline-offset-4" href="/free-ai-seo-audit">Take the free AI and SEO readiness check</Link></li>
            <li><Link className="underline underline-offset-4" href="/order-ai-audit">Get the full AI Readiness Audit</Link></li>
            <li><Link className="underline underline-offset-4" href="/web-design-orange">Web design for Orange businesses</Link></li>
            <li><Link className="underline underline-offset-4" href="/web-design-bathurst">Web design for Bathurst businesses</Link></li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
