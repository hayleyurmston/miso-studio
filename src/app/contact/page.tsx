import { IMG } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const title = "Contact MISO Studio | Web Designer in Millthorpe, near Orange NSW";
const description =
  "Book a free 30-minute strategy call with MISO Studio. Website design, SEO and AI search for Orange, Bathurst and Central West NSW businesses.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

const BOOKING = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function Contact() {
  return (
    <>
      <PageHero img={IMG.bannerCove}>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl">Let's create something considered.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">
            Start with a complimentary 30-minute strategy call, a voice note or a quick hello - I'll guide you from there.
          </p>
          {BOOKING && (
            <div className="mt-8">
              <Button href={BOOKING}>Book a call</Button>
            </div>
          )}
        </PageHero>
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>Send a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside>
            <h2>Prefer to talk?</h2>
            <p className="mt-4">
              <a className="text-lg font-medium underline underline-offset-4" href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <p className="mt-2">
              <a className="underline underline-offset-4" href={`mailto:${SITE.email}?subject=Brand%2C%20Website%20or%20Digital%20Enquiry`} target="_blank" rel="noopener">
                {SITE.email}
              </a>
            </p>
            <p className="mt-6 text-sm text-muted">
              Based in Millthorpe, near Orange. Happy to meet in Orange and Bathurst, or work by phone and video anywhere in Australia.
            </p>
            <p className="mt-4 text-sm text-muted">
              Need technical support or troubleshooting? Choose "Something else" in the form and I'll point you to the right solution.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
