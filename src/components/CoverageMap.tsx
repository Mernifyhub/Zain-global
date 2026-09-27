import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { cities } from "../data/site";
import { Icon } from "./Icons";

/**
 * Stylised Kingdom of Saudi Arabia coverage map.
 * City positions are mapped from real longitude / latitude coordinates,
 * so adding a city is as simple as appending a new entry in site.ts.
 */
const KSA_PATH =
  "M100 40 L250 20 L330 45 L395 70 L430 95 L455 150 L470 200 L455 250 L470 300 L450 340 L420 380 L390 420 L330 455 L250 460 L170 430 L120 400 L90 350 L70 300 L85 250 L95 200 L80 150 L95 95 Z";

export default function CoverageMap() {
  const { pick, t, isAr } = useI18n();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 p-5 shadow-lift ring-1 ring-inset ring-gold-400/10 sm:p-8">
      <span className="absolute inset-x-0 top-0 h-[3px] gold-line" />
      <div className="absolute inset-0 grid-pattern opacity-[0.14]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-jade-500/10 blur-[90px]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold-400/10 blur-[90px]" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
        {/* ---------- map ---------- */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <svg viewBox="0 0 540 510" className="w-full" role="img" aria-label={t("cov.title")}>
            <defs>
              <linearGradient id="ksaFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.20" />
                <stop offset="55%" stopColor="#0f9d6e" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#cf9020" stopOpacity="0.10" />
              </linearGradient>
              <linearGradient id="ksaStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#e3ad2d" />
              </linearGradient>
              <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="10" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* soft shadow of the landmass */}
            <path d={KSA_PATH} fill="#071425" opacity="0.55" transform="translate(6,10)" />
            <path
              d={KSA_PATH}
              fill="url(#ksaFill)"
              stroke="url(#ksaStroke)"
              strokeWidth="2.2"
              strokeLinejoin="round"
              filter="url(#softGlow)"
            />

            {/* graticule lines */}
            <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
              {[60, 120, 180, 240, 300, 360, 420].map((y) => (
                <line key={y} x1="40" y1={y} x2="500" y2={y} />
              ))}
              {[100, 180, 260, 340, 420].map((x) => (
                <line key={x} x1={x} y1="20" x2={x} y2="480" />
              ))}
            </g>

            {/* city markers */}
            {cities.map((c) => {
              const isActive = active === c.name.en;
              const anchorRight = c.x > 300;
              return (
                <g
                  key={c.name.en}
                  onMouseEnter={() => setActive(c.name.en)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-pointer"
                >
                  {c.major && (
                    <circle cx={c.x} cy={c.y} r="7" fill="#e3ad2d" opacity="0.5" className="animate-ping-soft" />
                  )}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isActive ? 7 : c.major ? 5.2 : 3.6}
                    fill={c.major ? "#e3ad2d" : "#6ee7b7"}
                    stroke="#071425"
                    strokeWidth="1.5"
                    className="transition-all duration-200"
                  />
                  {isActive && <circle cx={c.x} cy={c.y} r="13" fill="none" stroke="#e3ad2d" strokeWidth="1.4" opacity="0.75" />}
                  <text
                    x={anchorRight ? c.x - 12 : c.x + 12}
                    y={c.y + 4}
                    textAnchor={anchorRight ? "end" : "start"}
                    className="select-none"
                    fontSize={c.major ? "13" : "11.5"}
                    fontWeight={c.major ? 700 : 500}
                    fill={isActive ? "#f4de94" : c.major ? "#ffffff" : "#c6d6ea"}
                    style={{ opacity: c.major || isActive ? 1 : 0.62, transition: "opacity .2s" }}
                  >
                    {pick(c.name)}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* legend */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[11.5px] text-navy-200/70">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
              {isAr ? "مدينة رئيسية" : "Major city"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-jade-300" />
              {isAr ? "مدينة خدمة" : "Service city"}
            </span>
          </div>
        </div>

        {/* ---------- city list ---------- */}
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300">
            <Icon name="map" className="h-4 w-4" />
            {t("cov.badge")}
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">{t("cov.title")}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-navy-200/70">{t("cov.sub")}</p>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2">
            {cities.map((c) => (
              <div
                key={c.name.en}
                onMouseEnter={() => setActive(c.name.en)}
                onMouseLeave={() => setActive(null)}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-[13px] transition ${
                  active === c.name.en
                    ? "border-gold-400/60 bg-gold-400/10 text-gold-100"
                    : "border-white/10 bg-white/[0.04] text-navy-100"
                }`}
              >
                <Icon
                  name="pin"
                  className={`h-4 w-4 shrink-0 ${c.major ? "text-gold-300" : "text-jade-300"}`}
                />
                <span className="truncate font-semibold">{pick(c.name)}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-navy-300/70">{t("cov.note")}</p>
        </div>
      </div>
    </div>
  );
}
