import { JsonLd } from "./JsonLd";

export function Faq({ items, heading = "Questions" }: { items: { q: string; a: string }[]; heading?: string }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a.replace(/\n\n/g, " ") },
          })),
        }}
      />
      <h2>{heading}</h2>
      <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
        {items.map((i) => (
          <details key={i.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium">
              {i.q}
              <span aria-hidden className="mt-1 text-clay transition-transform group-open:rotate-45">+</span>
            </summary>
            {i.a.split("\n\n").map((para) => (
              <p key={para} className="mt-3 max-w-2xl text-[#2b2b29]">
                {para}
              </p>
            ))}
          </details>
        ))}
      </div>
    </>
  );
}
