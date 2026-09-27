"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "../lib/i18n";
import { NavProvider } from "../lib/router";
import { useRouter, usePathname } from "next/navigation";

/**
 * Next.js App Router providers.
 *
 * This is the ONLY Next-aware file in the component layer: it feeds the shared
 * /src components a `path` and a `navigate()` implementation, so Header, cards,
 * buttons and CTAs work unchanged on both Next.js and the static preview.
 */
export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <I18nProvider>
      <NavProvider
        path={pathname}
        navigate={(to) => {
          router.push(to);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {children}
      </NavProvider>
    </I18nProvider>
  );
}
