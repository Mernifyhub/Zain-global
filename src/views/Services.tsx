"use client";

import { CtaBand, HowItWorks, IndustriesSection, ServicesSection, Testimonials } from "../components/sections";
import { CoverageSection } from "../components/audience";
import { Button, PageHero, Reveal, Section, SectionHeading } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { services } from "../data/site";

export default function Services() {
  const { t, pick } = useI18n();

  return (
    <>
      <PageHero
        badge={t("services.badge")}
        title={t("ph.services.title")}
        sub={t("ph.services.sub")}
        image="https://images.pexels.com/photos/35300835/pexels-photo-35300835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "Our Services", ar: "خدماتنا" }}
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

      <ServicesSection tone="light" />

      {/* ---------- division detail rows ---------- */}
      <Section tone="muted">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("services.badge")}
            title={pick({ en: "What Each Division Delivers", ar: "ما يقدمه كل قسم" })}
            sub={t("services.sub")}
          />
          <div className="mt-12 space-y-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <article className="grid gap-6 rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition hover:shadow-lift lg:grid-cols-[240px_1fr_auto] lg:items-center lg:p-7">
                  <div className="relative h-36 overflow-hidden rounded-2xl lg:h-40">
                    <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-75 ${s.accent}`} />
                    <span className="absolute bottom-3 start-3 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-navy-900">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[20px] font-extrabold text-navy-950">{pick(s.name)}</h3>
                      <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-bold text-navy-600">
                        {s.roles.length} {t("services.roles")}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-navy-600">{pick(s.summaryLong)}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.roles.slice(0, 6).map((r) => (
                        <span key={r.en} className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy-600">
                          {pick(r)}
                        </span>
                      ))}
                      {s.roles.length > 6 && (
                        <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[11.5px] font-bold text-gold-300">
                          +{s.roles.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 lg:w-44">
                    <Button to={`/services/${s.slug}`} variant="navy" size="md" icon="arrowRight">
                      {t("services.view")}
                    </Button>
                    <Button to={`/request-manpower?category=${s.slug}`} variant="outline" size="md" iconLeft="clipboard">
                      {t("cat.request")}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <IndustriesSection />
      <HowItWorks tone="light" />
      <CoverageSection />
      <Testimonials />
      <CtaBand />
    </>
  );
}
