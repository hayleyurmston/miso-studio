import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";
import { FOOTER_NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-sage bg-cream">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image src={IMG.logo.src!} alt={IMG.logo.alt} width={446} height={206} className="h-16 w-auto" />
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
          <ul className="mt-4 flex items-center gap-4" aria-label="Social links">
            <li>
              <a href={SITE.instagram} aria-label="MISO Studio on Instagram" rel="noopener" className="block rounded-full border border-charcoal p-2.5 transition-colors hover:bg-white hover:text-clay">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} aria-label="MISO Studio on LinkedIn" rel="noopener" className="block rounded-full border border-charcoal p-2.5 transition-colors hover:bg-white hover:text-clay">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M4.5 9h3.7v11H4.5zM6.35 3.5a2.15 2.15 0 1 1 0 4.3 2.15 2.15 0 0 1 0-4.3zM10.4 9h3.55v1.5h.05c.5-.95 1.7-1.85 3.5-1.85 3.75 0 4.45 2.45 4.45 5.65V20h-3.7v-5.2c0-1.25 0-2.85-1.75-2.85s-2 1.35-2 2.75V20H10.4z" /></svg>
              </a>
            </li>
            <li>
              <a href={SITE.reviewUrl} aria-label="Leave MISO Studio a Google review" rel="noopener" className="block rounded-full border border-charcoal p-2.5 transition-colors hover:bg-white hover:text-clay">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sage py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} MISO Studio. Proudly designing websites for businesses across regional NSW, Sydney, Melbourne and Australia.
      </div>
    </footer>
  );
}
