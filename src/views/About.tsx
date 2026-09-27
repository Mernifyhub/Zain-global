"use client";

import { CtaBand, HowItWorks, TrustSection } from "../components/sections";
import { Button, CheckList, PageHero, Reveal, Section, SectionHeading } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { company, services } from "../data/site";

export default function About() {
  const { t, pick } = useI18n();

  const values = [
    { icon: "shield", title: "ab.v1t", text: "ab.v1d" },
    { icon: "eye", title: "ab.v2t", text: "ab.v2d" },
    { icon: "users", title: "ab.v3t", text: "ab.v3d" },
    { icon: "layers", title: "ab.v4t", text: "ab.v4d" },
  ];

  return (
    <>
      <PageHero
        badge={t("ab.badge")}
        title={t("ab.title")}
        sub={t("ab.lead")}
        image="https://images.pexels.com/photos/38096888/pexels-photo-38096888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "About Us", ar: "من نحن" }}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/request-manpower" variant="gold" size="lg" icon="arrowRight">
            {t("emp.cta")}
          </Button>
          <Button to="/manpower-categories" variant="white" size="lg" iconLeft="grid">
            {t("cat.badge")}
          </Button>
        </div>
      </PageHero>

      {/* ---------- who we are ---------- */}
      <Section tone="light">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8961552/pexels-photo-8961552.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt=""
                className="h-[380px] w-full rounded-3xl object-cover shadow-lift"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -end-4 hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-lift sm:block">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gold-600">{t("cov.badge")}</p>
                <p className="mt-1 text-2xl font-extrabold text-navy-950">30+ {pick({ en: "Cities", ar: "مدينة" })}</p>
              </div>
              <div className="absolute -start-5 top-8 hidden rounded-2xl bg-navy-950 px-5 py-4 text-white shadow-lift lg:block">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gold-300">{t("stats.badge")}</p>
                <p className="mt-1 text-2xl font-extrabold">950+ {pick({ en: "Placements", ar: "توفير ناجح" })}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="start" eyebrow={t("ab.badge")} title={t("ab.storyTitle")} />
            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-navy-600">
              <p>{t("ab.story1")}</p>
              <p>{t("ab.story2")}</p>
              <p>{t("ab.story3")}</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-navy-100 bg-navy-50/60 p-5">
                <p className="flex items-center gap-2 text-[13px] font-extrabold text-navy-950">
                  <Icon name="target" className="h-4 w-4 text-gold-600" />
                  {t("ab.missionTitle")}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-600">{t("ab.mission")}</p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-navy-50/60 p-5">
                <p className="flex items-center gap-2 text-[13px] font-extrabold text-navy-950">
                  <Icon name="eye" className="h-4 w-4 text-gold-600" />
                  {t("ab.visionTitle")}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-600">{t("ab.vision")}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- values ---------- */}
      <Section tone="muted">
        <div className="container-x">
          <SectionHeading eyebrow={pick({ en: "Our Foundation", ar: "أساسنا" })} title={t("ab.valuesTitle")} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-extrabold text-navy-950">{t(v.title)}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-500">{t(v.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- approach + sectors ---------- */}
      <Section tone="light">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading align="start" eyebrow={pick({ en: "Method", ar: "الطريقة" })} title={t("ab.approachTitle")} />
            <p className="mt-6 text-[14.5px] leading-relaxed text-navy-600">{t("ab.approach")}</p>
            <div className="mt-7 rounded-2xl border border-navy-100 bg-white p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-600">{t("ab.regTitle")}</p>
              <div className="mt-4 space-y-3">
                {company.registrations.map((r) => (
                  <div key={r.label.en} className="flex items-center justify-between gap-4 border-b border-dashed border-navy-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-[13px] text-navy-500">{pick(r.label)}</span>
                    <span className="text-[13px] font-bold text-navy-900">{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11.5px] leading-relaxed text-navy-400">{t("ab.regNote")}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-navy-100 bg-navy-950 p-7">
            <h3 className="text-[17px] font-extrabold text-white">{t("ab.sectorsTitle")}</h3>
            <div className="mt-5 space-y-4">
              {services.map((s) => (
                <div key={s.slug} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-gold-300">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold text-white">{pick(s.short)}</span>
                    <span className="mt-1 block text-[12px] leading-relaxed text-navy-300">{pick(s.summary)}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <CheckList
                tone="light"
                items={[
                  pick({ en: "Daily, monthly & annual supply", ar: "توريد يومي وشهري وسنوي" }),
                  pick({ en: "Single or bulk headcount", ar: "عامل واحد أو أعداد كبيرة" }),
                  pick({ en: "KSA-wide mobilisation", ar: "تجهيز في أنحاء المملكة" }),
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <HowItWorks tone="muted" />
      <TrustSection tone="light" />
      <CtaBand />
    </>
  );
}
