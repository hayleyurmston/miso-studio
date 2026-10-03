import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Expertise } from "@/components/Expertise";
import { Photo } from "@/components/Photo";
import { Testimonials } from "@/components/Testimonials";
import { IMG } from "@/lib/images";
import { SITE, TESTIMONIALS } from "@/lib/site";

const title = "About MISO Studio | Hayley Urmston, Web Designer in Millthorpe NSW";
const description =
  "Meet Hayley Urmston, founder of MISO Studio - a boutique web design and brand studio in Millthorpe, near Orange, working with regional businesses across Australia.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about-us" },
  openGraph: { title, description, url: "/about-us" },
};

export default function About() {
  return (
    <>
      <PageHero img={IMG.bannerHills}>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-3xl">Rooted in story. Designed with substance.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2b2b29]">
            A creative studio crafting thoughtful brand and web experiences for businesses ready to grow with clarity, presence and purpose.
          </p>
        </PageHero>

      <section className="section">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-charcoal">
            <Photo img={IMG.hayley} priority />
          </div>
          <div>
            <h2>About Hayley, founder of MISO Studio</h2>
            <div className="prose-miso">
              <p>
                Originally from Manchester, I spent several years living and working in Melbourne, where I led teams in luxury retail
                management and deepened my love of aesthetics, storytelling and customer experience.
              </p>
              <p>
                Now based in the historic village of Millthorpe, I work with clients across Australia through MISO Studio - a boutique
                creative studio crafting thoughtful, strategic websites and brand identities for small businesses with soul.
              </p>
              <p>
                I've been working in the digital space for over 10 years, with a foundation in fashion and textile design, business
                accounting, marketing and communications. That blend of creative instinct and strategic thinking shapes the way I work:
                with curiosity, care and a focus on clarity.
              </p>
              <p>
                My work sits across GEO and AEO (getting found in AI search), CRO, UX and UI. I'm hands on with all four, from
                strategy through to the build, which is why the sites I make look considered and perform.
              </p>
              <p>
                MISO was born from a desire to do things differently - to build digital homes that feel intentional, not rushed. Every
                design is a collaboration, every project a process grounded in trust, refinement and meaning.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact">Book a complimentary call</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2>MISO x Hamlet &amp; Fields</h2>
            <div className="prose-miso">
              <p>
                I'm proud to collaborate with Fee May of Hamlet &amp; Fields - a creative force in rural and regional storytelling with
                years of experience in agritourism, photography and visual storytelling.
              </p>
              <p>
                Together we offer a joined-up creative experience: strategic web and brand design with thoughtful, grounded content
                creation, so your story is told clearly across every touchpoint.
              </p>
            </div>
            <div className="mt-8">
              <Button href={SITE.hamletFields} variant="ghost">Visit Hamlet &amp; Fields</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sage">
            <Photo img={IMG.fee} />
          </div>
        </div>
      </section>

      <Expertise />

      <section className="section">
        <div className="wrap">
          <Testimonials items={TESTIMONIALS} heading="What clients say" />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap-narrow">
          <p className="eyebrow">For agencies and studios</p>
          <h2 className="mt-4">Working with agencies.</h2>
          <div className="prose-miso">
            <p>
              I partner with agencies and studios that want senior design, build and search expertise without growing the team.
              That might be a website for one of your clients, a UX or conversion review, or GEO and AEO support.
            </p>
            <p>
              I can work quietly behind your brand, and I offer a white-label AI and SEO audit, so you can give your clients AI
              readiness reports under your own name.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact">Talk about a partnership</Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
