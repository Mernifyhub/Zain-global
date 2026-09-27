import type { Metadata, Viewport } from "next";
import type { L } from "../data/site";
import { company } from "../data/site";

/** Canonical origin — change here and sitemap/robots follow. */
export const SITE_URL = company.domain;

/**
 * Central SEO helper for the Next.js App Router.
 * Each route calls `pageMeta()` so titles/descriptions stay in one place.
 */
export function pageMeta(title: L, description: L, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const titleText = `${title.en} | ${company.name.en} Saudi Arabia`;

  return {
    // `absolute` prevents the root layout's `%s | …` template from
    // being applied on top of an already-suffixed title.
    title: { absolute: titleText },
    description: description.en,
    alternates: {
      canonical: url,
      languages: {
        "en-SA": url,
        "ar-SA": url,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: company.name.en,
      title: titleText,
      description: description.en,
      locale: "en_SA",
      images: [
        {
          url: "https://images.pexels.com/photos/18111488/pexels-photo-18111488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
          width: 1200,
          height: 630,
          alt: `${company.name.en} — workforce supply in Saudi Arabia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: description.en,
    },
    keywords: [
      "manpower supply Saudi Arabia",
      "workforce provider Riyadh",
      "Zain Global manpower",
      "construction manpower",
      "hotel housekeeping staff Jeddah",
      "cleaning staff Dammam",
      "warehouse workers Saudi Arabia",
      "general labor supply KSA",
      "شركة توريد عمالة السعودية",
    ],
  };
}

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071425",
};

/** Site-wide default description, reused by nested routes. */
export const defaultDescription: L = {
  en: "Zain Global supplies skilled, semi-skilled and general workers to companies across Saudi Arabia — construction, hospitality, offices, cleaning, warehousing and general labour.",
  ar: "تورّد زين جلوبال عمالة ماهرة وشبه ماهرة وعامة للشركات في أنحاء المملكة العربية السعودية — البناء والضيافة والمكاتب والنظافة والمستودعات والعمل العام.",
};
