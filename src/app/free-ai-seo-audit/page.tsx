import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/site";

const title = "Free AI & SEO Readiness Check | MISO Studio";
const description =
  "Take our free 5-minute check to see if your website is visible to AI tools like ChatGPT and Google AI Overviews - plus what to fix first. Free, no credit card.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/free-ai-seo-audit" },
  openGraph: { title, description, url: "/free-ai-seo-audit" },
};

export default function FreeAudit() {
  return (
    <>
      <section className="bg-cream">
        <div className="wrap section">
          <p className="eyebrow">Free check | 5 minutes</p>
          <h1 className="mt-4 max-w-3xl">Free AI and SEO readiness check</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">
            Find out how visible your website is to AI tools like ChatGPT, Perplexity and Google AI Overviews - in 5 minutes, for free.
          </p>
          <div className="mt-9">
            <Button href={SITE.freeAuditUrl}>Start my free check</Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap-narrow prose-miso">
          <h2>Is your website working as hard as you are?</h2>
          <p>
            Take the free check to see how you measure up across six key areas - content, SEO, design, performance and more - with your
            own personalised score and what to fix first.
          </p>
          <p>
            Want the full picture? The <a href="/order-ai-audit">AI Readiness Audit</a> goes deeper, with a detailed review and a clear
            list of priorities.
          </p>
        </div>
      </section>
    </>
  );
}
