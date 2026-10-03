import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

// Stand-in for Aktiv Grotesk. To use the real font, add the Adobe Fonts kit
// <link> in this file and point --font-grotesk at "aktiv-grotesk".
const grotesk = localFont({
  src: "../fonts/hanken-grotesk-latin-wght-normal.woff2",
  variable: "--font-grotesk",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Website Design in Central West NSW | MISO Studio",
    template: "%s",
  },
  description:
    "MISO Studio designs strategic Custom, Squarespace, WordPress and Shopify websites for regional businesses across Orange, the Central West and Australia. Book a call.",
  openGraph: {
    type: "website",
    siteName: "MISO Studio",
    locale: "en_AU",
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e6e2db",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={grotesk.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${SITE.url}/#business`,
            name: "MISO Studio",
            url: SITE.url,
            description:
              "Web design studio in Millthorpe, near Orange, Central West NSW, building Custom, Squarespace, WordPress and Shopify websites with SEO and AI search built in.",
            email: SITE.email,
            telephone: "+61403670603",
            founder: { "@type": "Person", name: "Hayley Urmston" },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Millthorpe",
              addressRegion: "NSW",
              postalCode: "2798",
              addressCountry: "AU",
            },
            areaServed: [
              "Orange NSW",
              "Bathurst NSW",
              "Millthorpe NSW",
              "Blayney NSW",
              "Central West NSW",
              "Australia",
            ],
            knowsAbout: ["Web design", "Generative engine optimisation (GEO)", "Answer engine optimisation (AEO)", "Conversion rate optimisation (CRO)", "User experience (UX)", "User interface (UI) design", "SEO"],
            priceRange: "$$",
            sameAs: [SITE.instagram, SITE.linkedin],
          }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
