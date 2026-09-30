import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-sage bg-cream">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold tracking-[-0.04em]">
            MISO <span className="font-normal tracking-[0.3em] text-sm">STUDIO</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-[#2b2b29]">
            Strategy-led website design for regional and rural businesses. Based in Millthorpe, near Orange, Central West NSW.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {FOOTER_NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
          </p>
          <p className="mt-1">
            <a href={SITE.phoneHref} className="hover:underline">{SITE.phone}</a>
          </p>
          <p className="mt-4 flex gap-5">
            <a href={SITE.instagram} className="hover:underline" rel="noopener">Instagram</a>
            <a href={SITE.linkedin} className="hover:underline" rel="noopener">LinkedIn</a>
            <a href={SITE.reviewUrl} className="hover:underline" rel="noopener">Google review</a>
          </p>
        </div>
      </div>
      <div className="border-t border-sage py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} MISO Studio. Proudly designing websites for businesses across regional NSW, Sydney, Melbourne and Australia.
      </div>
    </footer>
  );
}
