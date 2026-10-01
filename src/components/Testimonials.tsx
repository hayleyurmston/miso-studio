import type { Testimonial } from "@/lib/site";

export function Testimonials({ items, heading = "What clients say" }: { items: Testimonial[]; heading?: string }) {
  return (
    <>
      <h2>{heading}</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <li key={t.name + t.project} className="flex flex-col rounded-3xl border border-charcoal bg-cream p-7">
            <p className="eyebrow">{t.project}</p>
            <blockquote className="mt-4 flex-1 text-[#2b2b29]">{t.quote}</blockquote>
            <p className="mt-5 text-sm">
              <span className="font-medium">{t.name}</span>
              <span className="block text-muted">{t.role}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
