"use client";

import { useEffect, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

/**
 * Shared application shell
 *
 * Structure:
 *   ScrollProgress
 *   Header       -> sticky main navigation
 *   Main content
 *   Footer
 *   Floating actions
 */
export default function SiteShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <ScrollProgress />

      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}

/**
 * Thin gold reading-progress bar pinned under the browser edge.
 */
function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");

    const onScroll = () => {
      if (!bar) return;

      const el = document.documentElement;

      const max = el.scrollHeight - el.clientHeight;

      const progress =
        max > 0
          ? el.scrollTop / max
          : 0;

      bar.style.transform = `scaleX(${progress})`;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div
        id="scroll-progress"
        className="gold-line h-full origin-left rtl:origin-right"
        style={{
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}