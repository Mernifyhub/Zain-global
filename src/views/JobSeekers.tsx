"use client";

import { CtaBand, HowItWorks, Testimonials } from "../components/sections";
import { CoverageSection, JobSeekerSection } from "../components/audience";
import { Button, PageHero, Reveal, Section, SectionHeading } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { services } from "../data/site";

export default function JobSeekers() {
  const { t, pick } = useI18n();

  const faqHints = [
    {
      icon: "file",
      title: { en: "Keep your documents ready", ar: "جهّز مستنداتك" },
      text: {
        en: "Iqama / passport copy, recent photo and any experience or trade certificates.",
        ar: "صورة الإقامة أو الجواز، صورة شخصية حديثة، وشهادات الخبرة أو المهارة.",
      },
    },
    {
      icon: "target",
      title: { en: "Know your trade level", ar: "حدد مستوى مهارتك" },
      text: {
        en: "Mention years of experience and whether you can work shifts or on remote sites.",
        ar: "اذكر سنوات الخبرة وما إذا كنت تستطيع العمل بنظام الورديات أو في مواقع بعيدة.",
      },
    },
    {
      icon: "headset",
      title: { en: "Respond quickly", ar: "رد سريع" },
      text: {
        en: "Client requirements move fast — answer calls and WhatsApp messages promptly.",
        ar: "احتياجات العملاء سريعة — يرجى الرد السريع على المكالمات ورسائل واتساب.",
      },
    },
  ];

  return (
    <>
      <PageHero
        badge={t("js.badge")}
        title={t("ph.jobseekers.title")}
        sub={t("ph.jobseekers.sub")}
        image="https://images.pexels.com/photos/7964413/pexels-photo-7964413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "Job Seekers", ar: "الباحثون عن عمل" }}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#/request-manpower?type=seeker" variant="gold" size="lg" icon="arrowRight">
            {t("js.cta")}
          </Button>
          <Button to="/manpower-categories" variant="white" size="lg" iconLeft="grid">
            {t("cat.badge")}
          </Button>
        </div>
      </PageHero>

      <JobSeekerSection tone="light" />

      {/* ---------- roles available ---------- */}
      <Section tone="muted">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("cat.badge")}
            title={t("cat.title")}
            sub={t("cat.sub")}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-300">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-[15.5px] font-extrabold text-navy-950">{pick(s.short)}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.roles.slice(0, 6).map((r) => (
                      <li key={r.en} className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy-600">
                        {pick(r)}
                      </li>
                    ))}
                    {s.roles.length > 6 && (
                      <li className="rounded-full bg-navy-900 px-2.5 py-1 text-[11.5px] font-bold text-gold-300">
                        +{s.roles.length - 6}
                      </li>
                    )}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- application tips ---------- */}
      <Section tone="light">
        <div className="container-x">
          <SectionHeading
            eyebrow={pick({ en: "Before You Apply", ar: "قبل التقديم" })}
            title={pick({ en: "How to Improve Your Chances", ar: "كيف تزيد فرصك في العمل" })}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {faqHints.map((h, i) => (
              <Reveal key={h.title.en} delay={i * 80}>
                <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-jade-700 shadow-sm">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-extrabold text-navy-950">{pick(h.title)}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-600">{pick(h.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <HowItWorks tone="muted" />
      <CoverageSection />
      <Testimonials />
      <CtaBand />
    </>
  );
}
