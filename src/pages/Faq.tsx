"use client";

import { useMemo, useState } from "react";
import { CtaBand } from "../components/sections";
import { Button, PageHero, Reveal, Section } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { company, faqs } from "../data/site";
import { cn } from "../utils/cn";

export default function Faq() {
  const { t, pick } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  const [group, setGroup] = useState<string>("all");

  const groups = useMemo(() => {
    const set = new Map<string, { en: string; ar: string }>();
    faqs.forEach((f) => set.set(f.group.en, f.group));
    return Array.from(set.values());
  }, []);

  const list = faqs
    .map((f, i) => ({ ...f, index: i }))
    .filter((f) => group === "all" || f.group.en === group);

  return (
    <>
      <PageHero
        badge={t("faq.badge")}
        title={t("ph.faq.title")}
        sub={t("ph.faq.sub")}
        image="https://images.pexels.com/photos/4487445/pexels-photo-4487445.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "FAQ", ar: "الأسئلة الشائعة" }}
      />

      <Section tone="light">
        <div className="container-x grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* group filter */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-600">{t("misc.filter")}</p>
            <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
              <button
                type="button"
                onClick={() => setGroup("all")}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-start text-[13px] font-bold transition",
                  group === "all"
                    ? "border-navy-900 bg-navy-950 text-white"
                    : "border-navy-200 bg-white text-navy-600 hover:border-navy-400",
                )}
              >
                {t("cat.all")}
              </button>
              {groups.map((g) => (
                <button
                  key={g.en}
                  type="button"
                  onClick={() => setGroup(g.en)}
                  className={cn(
                    "rounded-xl border px-4 py-2.5 text-start text-[13px] font-bold transition",
                    group === g.en
                      ? "border-navy-900 bg-navy-950 text-white"
                      : "border-navy-200 bg-white text-navy-600 hover:border-navy-400",
                  )}
                >
                  {pick(g)}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-navy-950 p-5 text-white">
              <h3 className="text-[15px] font-extrabold">{t("faq.stillTitle")}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-navy-200/80">{t("faq.stillSub")}</p>
              <div className="mt-4 flex flex-col gap-2.5">
                <Button href={`https://wa.me/${company.whatsapp}`} variant="whatsapp" size="sm" iconLeft="whatsapp">
                  {t("top.whatsapp")}
                </Button>
                <Button href={`tel:${company.phoneRaw}`} variant="gold" size="sm" iconLeft="phone">
                  {t("ct.callNow")}
                </Button>
              </div>
            </div>
          </aside>

          {/* accordion */}
          <div className="space-y-3">
            {list.map((f, i) => {
              const isOpen = open === f.index;
              return (
                <Reveal key={f.q.en} delay={Math.min(i * 40, 200)}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                      isOpen ? "border-gold-300 shadow-card" : "border-navy-100 hover:border-navy-200",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : f.index)}
                      className="flex w-full items-center gap-4 px-5 py-4 text-start sm:px-6 sm:py-5"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[13px] font-extrabold transition",
                          isOpen ? "bg-gold-400 text-navy-950" : "bg-navy-50 text-navy-600",
                        )}
                      >
                        {String(f.index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[14.5px] font-bold text-navy-950 sm:text-[15.5px]">{pick(f.q)}</span>
                      <Icon
                        name="chevronDown"
                        className={cn("h-5 w-5 shrink-0 text-navy-400 transition-transform", isOpen && "rotate-180 text-gold-600")}
                      />
                    </button>
                    {isOpen && (
                      <div className="animate-fade-in px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="ps-0 text-[14px] leading-relaxed text-navy-600 sm:ps-[52px]">{pick(f.a)}</p>
                        <span className="mt-4 inline-flex rounded-full bg-navy-50 px-3 py-1 text-[11.5px] font-bold text-navy-500">
                          {pick(f.group)}
                        </span>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
