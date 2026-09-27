"use client";

import { useMemo, useState } from "react";
import { CtaBand } from "../components/sections";
import { Button, PageHero, Reveal, Section } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { Link } from "../lib/router";
import { services } from "../data/site";
import { cn } from "../utils/cn";

export default function Categories() {
  const { t, pick } = useI18n();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services
      .filter((s) => active === "all" || s.slug === active)
      .map((s) => ({
        ...s,
        roles: s.roles.filter((r) => !q || r.en.toLowerCase().includes(q) || r.ar.includes(query.trim())),
      }))
      .filter((s) => s.roles.length > 0);
  }, [query, active]);

  const total = filtered.reduce((n, s) => n + s.roles.length, 0);

  return (
    <>
      <PageHero
        badge={t("cat.badge")}
        title={t("ph.categories.title")}
        sub={t("ph.categories.sub")}
        image="https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "Manpower Categories", ar: "فئات العمالة" }}
      />

      {/* ---------- search & filter ---------- */}
      <Section tone="light" className="py-10 sm:py-12">
        <div className="container-x">
          <div className="flex flex-col gap-4 rounded-3xl border border-navy-100 bg-white p-5 shadow-card lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Icon name="search" className="pointer-events-none absolute start-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-navy-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("cat.search")}
                className="w-full rounded-full border border-navy-200 bg-navy-50/50 py-3 ps-11 pe-4 text-[14px] outline-none transition placeholder:text-navy-400 focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-400/15"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActive("all")}
                className={cn(
                  "rounded-full border px-4 py-2 text-[12.5px] font-bold transition",
                  active === "all"
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-navy-200 text-navy-600 hover:border-navy-400",
                )}
              >
                {t("cat.all")}
              </button>
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => setActive(s.slug)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[12.5px] font-bold transition",
                    active === s.slug
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-navy-200 text-navy-600 hover:border-navy-400",
                  )}
                >
                  {pick(s.short)}
                </button>
              ))}
            </div>

            <p className="text-[12.5px] font-semibold text-navy-500">
              {total} {t("cat.results")}
            </p>
          </div>

          {/* ---------- results ---------- */}
          <div className="mt-10 space-y-10">
            {filtered.map((s) => (
              <div key={s.slug}>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-300">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-[19px] font-extrabold text-navy-950">{pick(s.name)}</h2>
                      <p className="text-[12.5px] text-navy-500">
                        {s.roles.length} {t("cat.roles")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button to={`/services/${s.slug}`} variant="outline" size="sm" icon="arrowRight">
                      {t("services.view")}
                    </Button>
                    <Button to={`/request-manpower?category=${s.slug}`} variant="gold" size="sm" iconLeft="clipboard">
                      {t("cat.request")}
                    </Button>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {s.roles.map((r, i) => (
                    <Reveal as="li" key={r.en} delay={Math.min(i * 25, 240)}>
                      <Link
                        to={`/request-manpower?category=${s.slug}`}
                        className="group flex h-full items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon name={s.icon} className="h-4 w-4 shrink-0 text-gold-500" />
                          <span className="text-[13.5px] font-semibold text-navy-800">{pick(r)}</span>
                        </span>
                        <Icon
                          name="arrowUpRight"
                          className="h-4 w-4 shrink-0 text-navy-300 transition group-hover:text-gold-600"
                        />
                      </Link>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="rounded-3xl border border-dashed border-navy-200 bg-navy-50/50 p-12 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-navy-400 shadow-sm">
                  <Icon name="search" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-[17px] font-extrabold text-navy-950">{t("cat.none")}</h3>
                <p className="mt-2 text-[13.5px] text-navy-500">{t("cat.noneNote")}</p>
                <Button to="/request-manpower" variant="gold" size="md" icon="arrowRight" className="mt-5">
                  {t("nav.request")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
