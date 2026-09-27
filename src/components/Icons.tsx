import type { ReactNode } from "react";

/* ------------------------------------------------------------------
 *  Single inline-SVG icon set (stroke based, 24x24 grid).
 *  To add an icon: add a key below and use <Icon name="key" />.
 * ------------------------------------------------------------------ */

const FILLED = new Set(["whatsapp", "linkedin", "facebook", "instagram", "x", "starFill", "quoteFill"]);

const icons: Record<string, ReactNode> = {
  /* ---------- manpower categories ---------- */
  helmet: (
    <>
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
    </>
  ),
  concierge: (
    <>
      <path d="M3 19h18" />
      <path d="M20 19a8 8 0 1 0-16 0" />
      <path d="M12 6V4" />
      <path d="M9 4h6" />
    </>
  ),
  desk: (
    <>
      <rect x="3" y="4" width="18" height="11" rx="2" />
      <path d="M2 20h20" />
      <path d="M12 15v5" />
      <path d="M8 8h4" />
    </>
  ),
  spray: (
    <>
      <path d="M9 9h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" />
      <path d="M10 9V6h3v3" />
      <path d="M18 4h3" />
      <path d="M19 8h2" />
      <path d="M19 12h2" />
    </>
  ),
  forklift: (
    <>
      <rect x="2" y="8" width="8" height="6" rx="1" />
      <path d="M10 14V5h3l2 5" />
      <circle cx="5" cy="17.5" r="1.8" />
      <circle cx="11" cy="17.5" r="1.8" />
      <path d="M16 20V6h5" />
      <path d="M16 20h5" />
    </>
  ),
  hand: (
    <>
      <path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M11 11V4.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M14 11V6.5a1.5 1.5 0 0 1 3 0V13" />
      <path d="M8 12l-2-1.6a1.6 1.6 0 0 0-2.2 2.2L8 18.5A5 5 0 0 0 12.4 21h1.6a4 4 0 0 0 4-4v-4" />
    </>
  ),

  /* ---------- industries ---------- */
  crane: (
    <>
      <path d="M4 21V4" />
      <path d="M2 4h15" />
      <path d="M17 4v5" />
      <path d="M17 9h4v5h-4z" />
      <path d="M4 8h9" />
    </>
  ),
  hotel: (
    <>
      <path d="M2 20V5" />
      <path d="M2 9h16a3 3 0 0 1 3 3v8" />
      <path d="M2 16h19" />
      <path d="M7 16v-3h4v3" />
      <circle cx="5.5" cy="12" r="1" />
    </>
  ),
  restaurant: (
    <>
      <path d="M4 2v7a2.5 2.5 0 0 0 5 0V2" />
      <path d="M6.5 9v13" />
      <path d="M17 2v20" />
      <path d="M17 2c2.2 0 4 1.8 4 4s-1.8 3-4 3" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M2 21h20" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2 21V9l10-5 10 5v12" />
      <path d="M7 21v-7h10v7" />
      <path d="M7 17h10" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20V10l5 3.2V10l5 3.2V10l5 3.2V5h5v15z" />
      <path d="M6 16h2M11 16h2M16 16h2" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h3l2.6 11.2a1.6 1.6 0 0 0 1.6 1.3h7.9a1.6 1.6 0 0 0 1.6-1.2L21 7H6" />
    </>
  ),
  hospital: (
    <>
      <path d="M4 21V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15" />
      <path d="M16 10h3a1 1 0 0 1 1 1v10" />
      <path d="M2 21h20" />
      <path d="M10 7v6M7 10h6" />
    </>
  ),
  tower: (
    <>
      <path d="M8 21V6l4-3 4 3v15" />
      <path d="M11 9h2M11 13h2M11 17h2" />
      <path d="M5 21h14" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v11H2z" />
      <path d="M13 10h4l3 3v4h-7" />
      <circle cx="6.5" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),

  /* ---------- process / trust ---------- */
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1" />
      <path d="M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6.1" />
      <path d="M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 20 6v6c0 5-3.4 8.3-8 9.5-4.6-1.2-8-4.5-8-9.5V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 3.5c3 1 5.5 3.5 6.5 6.5-3 4-7 6.5-11 7l-2.5-2.5c.5-4 3-8 7-11Z" />
      <circle cx="14.5" cy="9.5" r="1.6" />
      <path d="M7 17c-1.5 1-2 3-2 4 1 0 3-.5 4-2" />
    </>
  ),
  badge: (
    <>
      <path d="m12 2.5 2.2 2 3-.3 1 2.8 2.6 1.5-1 2.8 1 2.8-2.6 1.5-1 2.8-3-.3-2.2 2-2.2-2-3 .3-1-2.8L3.2 14l1-2.8-1-2.8L5.8 7l1-2.8 3 .3z" />
      <path d="m9.3 12.2 1.9 1.9 3.6-3.8" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />,
  sliders: (
    <>
      <path d="M3 7h12M18 7h3M3 17h6M12 17h9" />
      <circle cx="16.5" cy="7" r="2" />
      <circle cx="10.5" cy="17" r="2" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M20 19v1a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  process: (
    <>
      <path d="M3 5h4v4H3zM17 15h4v4h-4z" />
      <path d="M7 7h6a4 4 0 0 1 4 4v4" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14.3-4.2L3 9.5" />
      <path d="M3 4.5v5h5" />
      <path d="M4 13a8 8 0 0 0 14.3 4.2L21 14.5" />
      <path d="M21 19.5v-5h-5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17.5 9 5 9-5" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 2.5h14V21l-2.3-1.6-2.4 1.6-2.3-1.6L9.7 21l-2.4-1.6L5 21z" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </>
  ),
  bus: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2.5" />
      <path d="M3 11h18" />
      <circle cx="7.5" cy="19.5" r="1.5" />
      <circle cx="16.5" cy="19.5" r="1.5" />
      <path d="M7 14h2M15 14h2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
      <path d="M2.5 12.5h19" />
    </>
  ),

  /* ---------- ui ---------- */
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.28L2 22l5.02-1.64a9.86 9.86 0 0 0 5.02 1.36c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm5.7 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-2.9-.6-2.27-1-3.7-3.35-3.82-3.5-.11-.16-.9-1.24-.9-2.37 0-1.13.6-1.68.8-1.9.22-.24.47-.3.63-.3h.45c.14 0 .34-.05.53.4.2.47.66 1.62.72 1.74.05.11.09.24.01.39-.08.16-.35.5-.5.66-.11.13-.23.27-.1.5.13.24.58.96 1.25 1.55.86.77 1.58 1 1.82 1.12.24.11.38.09.52-.05.14-.15.6-.7.76-.94.16-.24.31-.2.53-.12.21.08 1.35.64 1.58.76.24.11.4.17.45.27.06.1.06.6-.18 1.28Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c3 0 4.4 1.9 4.4 5.2V21h-4v-6c0-1.5-.5-2.5-1.9-2.5-1.1 0-1.8.8-2.1 1.5-.1.3-.1.6-.1 1V21H9z" />
  ),
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.5-.13-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.7v8z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  x: (
    <path d="M17.5 3h3.2l-7 8 7.3 10h-5.3l-4.2-5.7L6.5 21H3.3l7.3-8.3L3.6 3H9l3.9 5.3z" />
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4" />
      <path d="m7.5 8.5 4.5-4.5 4.5 4.5" />
      <path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.5 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.7 6.5-10.4A6.5 6.5 0 1 0 5.5 10.6C5.5 15.3 12 21 12 21Z" />
      <circle cx="12" cy="10.2" r="2.4" />
    </>
  ),
  star: (
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.8L12 16.9l-5.3 2.7 1.1-5.8L3.5 9.7l5.9-.8z" />
  ),
  starFill: (
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.8L12 16.9l-5.3 2.7 1.1-5.8L3.5 9.7l5.9-.8z" />
  ),
  quote: (
    <>
      <path d="M9 6.5C6 7.5 4.5 9.8 4.5 13v4.5h5.2V13H7c0-2 .8-3.4 2.6-4z" />
      <path d="M19 6.5c-3 1-4.5 3.3-4.5 6.5v4.5h5.2V13H17c0-2 .8-3.4 2.6-4z" />
    </>
  ),
  quoteFill: (
    <>
      <path d="M9.5 5.5C5.8 6.7 3.5 9.6 3.5 13.4v5.1h6.6V12H6.9c.1-2 1-3.4 2.9-4.2z" />
      <path d="M19.6 5.5c-3.7 1.2-6 4.1-6 7.9v5.1h6.6V12h-3.2c.1-2 1-3.4 2.9-4.2z" />
    </>
  ),
  send: (
    <>
      <path d="M21 3 3 10.5l7 2.5 2.5 7z" />
      <path d="M21 3 10 13" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M5 12H3M21 12h-2" />
      <path d="m7.5 7.5 2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  file: (
    <>
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
      <path d="M13 3v6h6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  list: <path d="M4 6h16M4 12h16M4 18h16" />,
  building2: (
    <>
      <path d="M3 21V8l7-4v17" />
      <path d="M10 21h11V11l-11-3" />
      <path d="M13 11h2M13 15h2M17 11h1M17 15h1" />
    </>
  ),
  dot: <circle cx="12" cy="12" r="4" />,
};

export type IconName = keyof typeof icons | string;

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const filled = FILLED.has(String(name));
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[String(name)] ?? icons.dot}
    </svg>
  );
}
