# MISO Studio website

Next.js 16 site for miso-studio.au, hosted on Vercel.

## Environment variables (Vercel > Settings > Environment Variables)

| Name | What it does |
| --- | --- |
| `RESEND_API_KEY` | Sends contact form enquiries to hello@miso-studio.au (resend.com) |
| `CONTACT_FROM` | Sender, e.g. `MISO Studio <hello@miso-studio.au>` (domain must be verified in Resend) |
| `CONTACT_TO` | Optional. Defaults to hello@miso-studio.au |
| `NEXT_PUBLIC_AUDIT_PAYMENT_LINK` | Stripe Payment Link for the $350 AI Readiness Audit |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID, e.g. `G-XXXXXXX` |
| `NEXT_PUBLIC_BOOKING_URL` | Optional booking page (Acuity/Calendly) for the free 30-minute call |

## Where things live

- `src/lib/site.ts` - contact details, packages, prices, testimonials, FAQs, location page copy
- `src/lib/images.ts` - image slots and alt text (set `src` once files are in `public/images`)
- `src/app/*` - pages. `web-design-orange` and `web-design-bathurst` share `components/LocationPage.tsx`
- `next.config.ts` - 301 redirects from old Squarespace URLs
- `src/app/sitemap.ts`, `robots.ts` - AI crawlers are deliberately allowed

## Go-live checklist

1. Add the env vars above, redeploy, send a test enquiry.
2. Click through the Vercel preview on phone and desktop.
3. Add `miso-studio.au` and `www.miso-studio.au` to the Vercel project.
4. In Squarespace Domains > DNS: delete the "Squarespace Defaults" preset, add Vercel's A and CNAME records. Leave the Google Workspace email (MX) records alone.
5. Check both addresses load with the padlock, then cancel the Squarespace website plan.
6. In Google Search Console, submit `https://miso-studio.au/sitemap.xml`.
