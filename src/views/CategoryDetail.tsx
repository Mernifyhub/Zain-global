"use client";

import { CtaBand, IndustriesSection, Testimonials } from "../components/sections";
import { Button, PageHero, Reveal, Section, SectionHeading } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { Link } from "../lib/router";
import { industries, services } from "../data/site";

export default function CategoryDetail({ slug }: { slug: string }) {
  const { t, pick } = useI18n();
  const service = services.find((s) => s.slug === slug);
  const others = services.filter((s) => s.slug !== slug);

  if (!service) {
    return (
      <Section tone="light" className="pt-40">
        <div className="container-x text-center">
          <h1 className="text-3xl font-extrabold text-navy-950">404</h1>
          <p className="mt-3 text-navy-500">{t("cat.none")}</p>
          <Button to="/manpower-categories" variant="gold" size="lg" icon="arrowRight" className="mt-6">
            {t("cat.badge")}
          </Button>
        </div>
      </Section>
    );
  }

  const relatedIndustries = industries.filter((i) => service.industries.includes(i.key));

  return (
    <>
      <PageHero
        badge={pick(service.short)}
        title={pick(service.name)}
        sub={pick(service.summaryLong)}
        image={service.image}
        crumb={service.short}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to={`/request-manpower?category=${service.slug}`} variant="gold" size="lg" icon="arrowRight">
            {t("services.request")}
          </Button>
          <Button to="/contact" variant="white" size="lg" iconLeft="phone">
            {t("hero.cta2")}
          </Button>
        </div>
      </PageHero>

      {/* ---------- roles ---------- */}
      <Section tone="light">
        <div className="container-x">
          <SectionHeading
            align="start"
            eyebrow={t("cat.jobs")}
            title={pick({
              en: `Worker roles we supply for ${service.short.en}`,
              ar: `الوظائف التي نوفرها في ${service.short.ar}`,
            })}
            sub={pick(service.summary)}
          />

          <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.roles.map((r, i) => (
              <Reveal key={r.en} delay={Math.min(i * 30, 300)}>
                <div className="group flex h-full items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon name={service.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-[13.5px] font-semibold text-navy-800">{pick(r)}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-gold-300 bg-gold-50/60 px-6 py-5">
            <Icon name="sparkles" className="h-5 w-5 text-gold-600" />
            <p className="text-[13.5px] font-semibold text-navy-800">{t("misc.needOther")}</p>
            <Button to="/request-manpower" variant="navy" size="sm" icon="arrowRight" className="ms-auto">
              {t("nav.request")}
            </Button>
          </div>
        </div>
      </Section>

      {/* ---------- highlights ---------- */}
      <Section tone="muted">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={service.image}
              alt=""
              className="h-[340px] w-full rounded-3xl object-cover shadow-lift"
              loading="lazy"
            />
          </Reveal>
          <div>
            <SectionHeading align="start" eyebrow={t("trust.badge")} title={t("trust.title")} />
            <div className="mt-8 space-y-4">
              {service.highlights.map((h, i) => (
                <Reveal key={h.title.en} delay={i * 70}>
                  <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-300">
                      <Icon name="check" className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <span>
                      <span className="block text-[15px] font-extrabold text-navy-950">{pick(h.title)}</span>
                      <span className="mt-1.5 block text-[13.5px] leading-relaxed text-navy-500">{pick(h.text)}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- related industries ---------- */}
      <Section tone="light" className="py-14">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-[22px] font-extrabold text-navy-950">{t("ind.title")}</h3>
            <Button to="/manpower-categories" variant="outline" size="sm" icon="grid">
              {t("cat.badge")}
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {relatedIndustries.map((ind) => (
              <span
                key={ind.key}
                className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50/60 px-4 py-2 text-[13px] font-semibold text-navy-700"
              >
                <Icon name={ind.icon} className="h-4 w-4 text-gold-600" />
                {pick(ind.name)}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- other categories ---------- */}
      <Section tone="muted" className="py-14">
        <div className="container-x">
          <SectionHeading eyebrow={t("services.badge")} title={pick({ en: "Other Manpower Categories", ar: "فئات عمالة أخرى" })} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-extrabold text-navy-950">{pick(s.short)}</span>
                    <span className="mt-1.5 block text-[12.5px] leading-relaxed text-navy-500">{pick(s.summary)}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-gold-600">
                      {s.roles.length} {t("cat.roles")}
                      <Icon name="arrowRight" className="h-3.5 w-3.5 rtl:-scale-x-100" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <IndustriesSection />
      <Testimonials />
      <CtaBand />
    </>
  );
}
