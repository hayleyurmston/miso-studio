import Link from "next/link";

const PILLARS = [
  {
    name: "GEO and AEO",
    full: "Generative and answer engine optimisation",
    body: "Structure, content and schema so ChatGPT, Google AI Overviews and Perplexity can understand your business and recommend it.",
  },
  {
    name: "CRO",
    full: "Conversion rate optimisation",
    body: "Clear page hierarchy, calls to action and enquiry paths, shaped by how people actually use your site.",
  },
  {
    name: "UX",
    full: "User experience",
    body: "Site structure, navigation and mobile flow that make the next step obvious for first-time visitors and returning customers.",
  },
  {
    name: "UI",
    full: "Interface design",
    body: "Typography, layout and imagery that look considered and hold together across every page and screen size.",
  },
];

export function Expertise() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">How I work</p>
        <h2 className="mt-4 max-w-3xl">Strategy, UX and search, handled together.</h2>
        <p className="mt-5 max-w-2xl text-[#2b2b29]">
          Most websites let people down in the gaps between design, copy and search. I work hands on across all of it, so nothing
          gets lost in a handover.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <li key={p.name} className="flex flex-col rounded-3xl border border-charcoal bg-cream p-7">
              <h3>{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{p.full}</p>
              <p className="mt-4 text-[#2b2b29]">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/order-ai-audit" className="text-sm underline underline-offset-4 hover:text-clay">
            See how the AI Readiness Audit puts this to work
          </Link>
        </p>
      </div>
    </section>
  );
}
