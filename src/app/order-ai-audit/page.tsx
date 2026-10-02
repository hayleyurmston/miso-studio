import { IMG } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const title = "AI Readiness & SEO Audit | $350 | MISO Studio";
const description =
  "Is AI sending customers to your competitors instead of you? The MISO AI Readiness Audit shows exactly where you stand in ChatGPT and Google AI Overviews - and what to fix first.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/order-ai-audit" },
  openGraph: { title, description, url: "/order-ai-audit" },
};

export default function OrderAudit() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Readiness & SEO Audit",
          provider: { "@id": `${SITE.url}/#business` },
          areaServed: "Australia",
          offers: { "@type": "Offer", price: "350", priceCurrency: "AUD", url: `${SITE.url}/order-ai-audit` },
        }}
      />
      <PageHero img={IMG.farm}>
          <p className="eyebrow">AI Readiness &amp; SEO Audit</p>
          <h1 className="mt-4 max-w-3xl">Is AI sending customers to your competitors instead of you?</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">
            Find out exactly where you stand in ChatGPT, Google AI Overviews and Perplexity - and what to fix first.
          </p>
          <p className="mt-6 text-3xl font-bold tracking-[-0.03em]">$350</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={SITE.auditPaymentLink}>Get AI ready</Button>
            <a href={SITE.freeAuditUrl} className="text-sm underline underline-offset-4 hover:text-clay">
              Start with the free check instead
            </a>
          </div>
        </PageHero>
      <section className="section">
        <div className="wrap-narrow prose-miso">
          <h2>Why it matters</h2>
          <p>
            Most small business websites aren't showing up as strongly as they could in Google or in AI tools like ChatGPT,
            Perplexity and Google's AI Overviews - and it's rarely the thing a busy business owner has time to check.
          </p>
          <h2>What the audit covers</h2>
          <p>
            The MISO AI Readiness &amp; SEO Audit reviews your website across 6 key categories, including SEO foundations, content,
            technical performance and AI search visibility.
          </p>
          <h2>What's included</h2>
          <ul>
            <li>A personalised scored report with clear, plain-English recommendations you can act on straight away</li>
            <li>A 30-minute Google Meet session to walk through your results together</li>
            <li>Done for you, delivered to your inbox within 1 business day</li>
          </ul>
          <p>
            You'll know exactly what to prioritise for better search visibility, now and into the future.
          </p>
        </div>
      </section>
      <CtaBand heading="Questions before you order?" body="Send me a message or book a call and I'll help you decide if the audit is the right first step." />
    </>
  );
}
