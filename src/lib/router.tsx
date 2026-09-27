"use client";

import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/**
 * ============================================================================
 *  NAVIGATION ADAPTER  (framework-agnostic, ~50 lines)
 * ----------------------------------------------------------------------------
 *  The whole UI — Header, Footer, buttons, cards, CTAs — imports only
 *  `Link`, `useRouter` and `useSegments` from this file. It never imports
 *  Next.js directly.
 *
 *  The actual router is injected from above:
 *
 *    • app/providers.tsx   →  Next.js App Router   ← the real app
 *
 *  That single indirection is what lets every screen live once in /src and be
 *  rendered by Next.js file-based routes in /app.
 * ============================================================================
 */

type NavCtx = {
  /** Current pathname, e.g. "/services/construction-manpower" */
  path: string;
  /** Client-side navigation to a pathname */
  navigate: (to: string) => void;
};

const NavContext = createContext<NavCtx | null>(null);

/** Provided by app/providers.tsx. */
export function NavProvider({
  path,
  navigate,
  children,
}: {
  path: string;
  navigate: (to: string) => void;
  children: ReactNode;
}) {
  return <NavContext.Provider value={{ path, navigate }}>{children}</NavContext.Provider>;
}

function useNav(): NavCtx {
  const ctx = useContext(NavContext);
  return ctx ?? { path: "/", navigate: () => {} };
}

/** Current pathname. */
export function useRouter(): NavCtx {
  return useNav();
}

/** "/services/construction-manpower" → ["services", "construction-manpower"] */
export function useSegments(): string[] {
  const { path } = useNav();
  return path.split("?")[0].split("/").filter(Boolean);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/**
 * Client-side link. Renders a real, crawlable <a> and hands the navigation to
 * the active router (Next.js).
 */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useNav();
  const href = to.startsWith("/") ? to : `/${to}`;

  return (
    <a
      href={href}
      onClick={(e) => {
        // Let the browser handle modified clicks / middle clicks (new tab, etc.)
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onClick?.(e);
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
