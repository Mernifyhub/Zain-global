"use client";

import { CtaBand, HowItWorks, IndustriesSection, StatsSection, TrustSection } from "../components/sections";
import { CoverageSection, EmployerSection } from "../components/audience";
import { Button, PageHero, Reveal, Section, SectionHeading } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { company, services } from "../data/site";

export default function Employers() {
  const { t, pick } = useI18n();

  const supplyModels = [
    {
      icon: "clock",
      title: { en: "Daily / Short-term Supply", ar: "توريد يومي أو قصير الأجل" },
      text: {
        en: "Cover absences, peak days and short tasks without long commitments.",
        ar: "تغطية الغياب وأيام الذروة والمهام القصيرة دون التزامات طويلة.",
      },
    },
    {
      icon: "calendar",
      title: { en: "Monthly Contracts", ar: "عقود شهرية" },
      text: {
        en: "A stable team on site every month with a fixed monthly cost per worker.",
        ar: "فريق ثابت في الموقع كل شهر بتكلفة شهرية محددة لكل عامل.",
      },
    },
    {
      icon: "layers",
      title: { en: "Project-Based Supply", ar: "توريد حسب المشروع" },
      text: {
        en: "Full crews supplied for the duration of a project or a specific phase.",
        ar: "فرق كاملة طوال مدة المشروع أو مرحلة محددة منه.",
      },
    },
    {
      icon: "refresh",
      title: { en: "Annual Manpower Contracts", ar: "عقود عمالة سنوية" },
      text: {
        en: "Long-term outsourcing with planned replacements and continuous support.",
        ar: "استعانة خارجية طويلة الأجل مع استبدال مخطط ودعم مستمر.",
      },
    },
  ];

  return (
    <>
      <PageHero
        badge={t("emp.badge")}
        title={t("ph.employers.title")}
        sub={t("ph.employers.sub")}
        image="https://images.pexels.com/photos/7433869/pexels-photo-7433869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "Employers", ar: "الشركات" }}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/request-manpower" variant="gold" size="lg" icon="arrowRight">
            {t("emp.cta")}
          </Button>
          <Button href={`tel:${company.phoneRaw}`} variant="white" size="lg" iconLeft="phone">
            {t("ct.callNow")}
          </Button>
        </div>
      </PageHero>

      <StatsSection />

      {/* ---------- supply models ---------- */}
      <Section tone="light">
        <div className="container-x">
          <SectionHeading
            eyebrow={pick({ en: "Contract Models", ar: "نماذج التعاقد" })}
            title={pick({ en: "Flexible Ways to Hire Workforce", ar: "طرق مرنة لتوظيف القوى العاملة" })}
            sub={t("trust.sub")}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supplyModels.map((m, i) => (
              <Reveal key={m.title.en} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-[16px] leading-snug font-extrabold text-navy-950">{pick(m.title)}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-navy-500">{pick(m.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- employer section with form ---------- */}
      <EmployerSection tone="muted" />

      {/* ---------- what we can supply ---------- */}
      <Section tone="light">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("services.badge")}
            title={t("services.title")}
            sub={t("services.sub")}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-300">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-extrabold text-navy-950">{pick(s.name)}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-500">{pick(s.summary)}</p>
                    <p className="mt-3 text-[12px] font-bold text-gold-600">
                      {s.roles.length} {t("services.roles")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <HowItWorks tone="muted" />
      <IndustriesSection />
      <CoverageSection />
      <TrustSection tone="light" />
      <CtaBand />
    </>
  );
}
