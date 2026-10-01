import { Button } from "./Button";
import { SITE } from "@/lib/site";

export function CtaBand({
  heading = "Thinking about what's next for your website?",
  body = "Tell me what you're working on and I'll recommend the right approach - no pressure, no jargon.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="cta-band section bg-sage text-white">
      <div className="wrap-narrow text-center">
        <h2 className="!text-white">{heading}</h2>
        <p className="mt-4 text-white/90">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="light">Book a complimentary call</Button>
        </div>
        <p className="mt-6 text-sm text-white/90">
          <a className="font-medium text-charcoal underline underline-offset-4" href={`mailto:${SITE.email}`} target="_blank" rel="noopener">{SITE.email}</a>
          {"  |  "}
          <a className="font-medium text-charcoal underline underline-offset-4" href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
      </div>
    </section>
  );
}
