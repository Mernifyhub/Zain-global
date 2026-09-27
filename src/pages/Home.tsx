"use client";

import { Hero, StatsSection, ServicesSection, IndustriesSection, HowItWorks, TrustSection, Testimonials, CtaBand } from "../components/sections";
import { EmployerSection, JobSeekerSection, CoverageSection } from "../components/audience";
import { useI18n } from "../lib/i18n";
import { Button, Reveal, Section, SectionHeading } from "../components/ui";
import { Icon } from "../components/Icons";
import { company } from "../data/site";

export default function Home() {
  const { t, pick } = useI18n();

  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />

      {/* ---------- employer pathway ---------- */}
      <EmployerSection tone="muted" />

      {/* ---------- job seeker pathway ---------- */}
      <JobSeekerSection tone="light" />

      <IndustriesSection />
      <HowItWorks tone="light" />
      <TrustSection tone="muted" />
      <CoverageSection />
      <Testimonials />

      {/* ---------- two-audience split ---------- */}
      <Section tone="muted">
        <div className="container-x">
          <SectionHeading eyebrow={t("misc.sitemap")} title={pick({ en: "Choose Your Path", ar: "اختر مسارك" })} />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                icon: "building",
                title: pick({ en: "For Employers & Companies", ar: "للشركات والمنشآت" }),
                text: pick({
                  en: "Submit your manpower requirement and receive shortlisted workers with a clear quotation.",
                  ar: "أرسل احتياجك من العمالة واستلم قائمة مرشحين مع عرض سعر واضح.",
                }),
                bullets: [
                  { en: "Skilled, semi-skilled & general workers", ar: "عمالة ماهرة وشبه ماهرة وعامة" },
                  { en: "Accommodation & transport options", ar: "خيارات السكن والنقل" },
                  { en: "Replacement support", ar: "دعم الاستبدال" },
                ],
                cta: t("emp.cta"),
                to: "/employers",
                dark: true,
              },
              {
                icon: "users",
                title: pick({ en: "For Workers & Job Seekers", ar: "للعمال والباحثين عن عمل" }),
                text: pick({
                  en: "Register your profession and experience — we share your profile with hiring companies.",
                  ar: "سجّل مهنتك وخبرتك — نشارك ملفك مع الشركات التي توظف.",
                }),
                bullets: [
                  { en: "Opportunities across Saudi cities", ar: "فرص في مدن المملكة" },
                  { en: "Free profile registration", ar: "تسجيل الملف مجاناً" },
                  { en: "Guidance until joining", ar: "إرشاد حتى المباشرة" },
                ],
                cta: t("js.cta"),
                to: "/job-seekers",
                dark: false,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div
                  className={`flex h-full flex-col rounded-3xl p-8 ${
                    c.dark
                      ? "bg-navy-950 text-white shadow-lift"
                      : "border border-navy-100 bg-white shadow-card"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${
                      c.dark ? "bg-white/10 text-gold-300" : "bg-navy-900 text-gold-300"
                    }`}
                  >
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className={`mt-5 text-[21px] font-extrabold ${c.dark ? "text-white" : "text-navy-950"}`}>
                    {c.title}
                  </h3>
                  <p className={`mt-2.5 text-[14px] leading-relaxed ${c.dark ? "text-navy-200/80" : "text-navy-500"}`}>
                    {c.text}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li
                        key={b.en}
                        className={`flex items-start gap-2.5 text-[13.5px] ${c.dark ? "text-navy-100/85" : "text-navy-700"}`}
                      >
                        <Icon
                          name="check"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${c.dark ? "text-gold-300" : "text-jade-600"}`}
                          strokeWidth={2.4}
                        />
                        {pick(b)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2.5 pt-2">
                    <Button to={c.to} variant={c.dark ? "gold" : "navy"} size="lg" icon="arrowRight">
                      {c.cta}
                    </Button>
                    <Button
                      href={`https://wa.me/${company.whatsapp}`}
                      variant={c.dark ? "white" : "outline"}
                      size="lg"
                      iconLeft="whatsapp"
                    >
                      {t("top.whatsapp")}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
