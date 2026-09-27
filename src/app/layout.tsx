import type { Metadata } from "next";
import "../index.css";
import Providers from "./providers";
import SiteShell from "../components/SiteShell";
import { company } from "../data/site";
import { SITE_URL, defaultDescription, siteViewport } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name.en} | Manpower Supply & Workforce Provider in Saudi Arabia`,
    template: `%s | ${company.name.en} Saudi Arabia`,
  },
  description: defaultDescription.en,
  applicationName: company.name.en,
  authors: [{ name: company.legalName.en }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: company.name.en,
    locale: "en_SA",
  },
};

export const viewport = siteViewport;

/** JSON-LD: helps Google understand this is a manpower / staffing business. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: company.legalName.en,
  alternateName: company.name.en,
  description: defaultDescription.en,
  url: SITE_URL,
  telephone: company.phone,
  email: company.email,
  areaServed: "Saudi Arabia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "King Fahd Road, Al Olaya District",
    addressLocality: "Riyadh",
    postalCode: "12211",
    addressCountry: "SA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "sales",
      areaServed: "SA",
      availableLanguage: ["English", "Arabic"],
    },
  ],
  knowsLanguage: ["en", "ar"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {/* React 19 hoists these into <head> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
        />

        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
