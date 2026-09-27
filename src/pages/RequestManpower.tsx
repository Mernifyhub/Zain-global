"use client";

import { useEffect, useState } from "react";
import { CtaBand } from "../components/sections";
import { Button, PageHero, Reveal, Section } from "../components/ui";
import { Icon } from "../components/Icons";
import { EmployerForm, JobSeekerForm } from "../components/ManpowerForms";
import { useI18n } from "../lib/i18n";
import { useRouter } from "../lib/router";
import { company, services } from "../data/site";
import { cn } from "../utils/cn";

/**
 * Reads query params from either style of URL so the page behaves identically
 * under Next.js (`/request-manpower?category=…`) and the static preview
 * (`#/request-manpower?category=…`).
 */
function hashQuery(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  const search = window.location.search.startsWith("?")
    ? window.location.search.slice(1)
    : "";
  const hash = window.location.hash.split("?")[1] ?? "";
  return new URLSearchParams(search || hash);
}

export default function RequestManpower() {
  const { t, pick } = useI18n();
  const { path } = useRouter();
  const [tab, setTab] = useState<"employer" | "seeker">(() =>
    hashQuery().get("type") === "seeker" ? "seeker" : "employer",
  );
  const [presetCategory, setPresetCategory] = useState<string | null>(() => hashQuery().get("category"));

  /* keep tab / pre-selected category in sync when arriving with query params */
  useEffect(() => {
    const q = hashQuery();
    if (q.get("type") === "seeker") setTab("seeker");
    if (q.get("type") === "employer") setTab("employer");
    setPresetCategory(q.get("category"));
  }, [path]);

  return (
    <>
      <PageHero
        badge={t("rq.badge")}
        title={t("ph.request.title")}
        sub={t("ph.request.sub")}
        image="https://images.pexels.com/photos/14614016/pexels-photo-14614016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "Request Manpower", ar: "طلب عمالة" }}
      />

      <Section tone="muted">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* ---------- form column ---------- */}
          <div>
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  key: "employer" as const,
                  icon: "building",
                  title: t("rq.employerTab"),
                  hint: t("rq.employerHint"),
                },
                {
                  key: "seeker" as const,
                  icon: "users",
                  title: t("rq.seekerTab"),
                  hint: t("rq.seekerHint"),
                },
              ].map((o) => (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setTab(o.key)}
                  className={cn(
                    "flex items-start gap-3 rounded-2xl border p-4 text-start transition",
                    tab === o.key
                      ? "border-navy-900 bg-navy-950 text-white shadow-lift"
                      : "border-navy-200 bg-white text-navy-700 hover:border-navy-400",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
                      tab === o.key ? "bg-white/10 text-gold-300" : "bg-navy-50 text-navy-700",
                    )}
                  >
                    <Icon name={o.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-extrabold">{o.title}</span>
                    <span className={cn("mt-0.5 block text-[12px] leading-snug", tab === o.key ? "text-navy-200/80" : "text-navy-500")}>
                      {o.hint}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {presetCategory && (
              <div className="mb-5 flex flex-wrap items-center gap-2 rounded-2xl border border-gold-300 bg-gold-50 px-5 py-4">
                <Icon name="sparkles" className="h-[18px] w-[18px] text-gold-600" />
                <p className="text-[13px] font-semibold text-navy-800">
                  {pick({ en: "Selected category:", ar: "الفئة المختارة:" })}{" "}
                  {pick(services.find((s) => s.slug === presetCategory)?.name ?? { en: presetCategory, ar: presetCategory })}
                </p>
              </div>
            )}

            <Reveal>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
                {tab === "employer" ? <EmployerForm /> : <JobSeekerForm />}
              </div>
            </Reveal>
          </div>

          {/* ---------- info column ---------- */}
          <aside className="flex flex-col gap-5">
            <div className="rounded-3xl bg-navy-950 p-6 text-white">
              <h3 className="flex items-center gap-2 text-[15.5px] font-extrabold">
                <Icon name="headset" className="h-5 w-5 text-gold-300" />
                {t("rq.helpTitle")}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-navy-200/80">{t("rq.helpSub")}</p>
              <div className="mt-5 space-y-2.5">
                <Button href={`tel:${company.phoneRaw}`} variant="gold" size="md" iconLeft="phone" className="w-full">
                  {company.phone}
                </Button>
                <Button
                  href={`https://wa.me/${company.whatsapp}`}
                  variant="whatsapp"
                  size="md"
                  iconLeft="whatsapp"
                  className="w-full"
                >
                  {t("top.whatsapp")}
                </Button>
                <Button href={`mailto:${company.email}`} variant="white" size="md" iconLeft="mail" className="w-full">
                  {company.email}
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6">
              <h3 className="text-[15px] font-extrabold text-navy-950">{t("rq.infoTitle")}</h3>
              <ul className="mt-4 space-y-3">
                {["rq.info1", "rq.info2", "rq.info3", "rq.info4"].map((k) => (
                  <li key={k} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-navy-600">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-jade-600" strokeWidth={2.4} />
                    {t(k)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-white p-6">
              <h3 className="text-[15px] font-extrabold text-navy-950">{t("services.all")}</h3>
              <div className="mt-4 space-y-2">
                {services.map((s) => (
                  <a
                    key={s.slug}
                    href={`#/manpower-categories`}
                    className="flex items-center gap-2.5 rounded-xl bg-navy-50/70 px-3 py-2.5 text-[13px] font-semibold text-navy-700 transition hover:bg-navy-100"
                  >
                    <Icon name={s.icon} className="h-4 w-4 text-gold-600" />
                    {pick(s.short)}
                    <Icon name="arrowRight" className="ms-auto h-3.5 w-3.5 text-navy-300 rtl:-scale-x-100" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
