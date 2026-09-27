"use client";

import { PageHero, Reveal, Section } from "../components/ui";
import { CtaBand } from "../components/sections";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { legalUpdated, privacyBlocks, termsBlocks, type LegalBlock } from "../data/legal";

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const { t, pick } = useI18n();
  const blocks: LegalBlock[] = kind === "privacy" ? privacyBlocks : termsBlocks;
  const isPrivacy = kind === "privacy";

  return (
    <>
      <PageHero
        badge={isPrivacy ? t("ft.privacy") : t("ft.terms")}
        title={isPrivacy ? t("ph.privacy.title") : t("ph.terms.title")}
        sub={isPrivacy ? t("ph.privacy.sub") : t("ph.terms.sub")}
        image="https://images.pexels.com/photos/7433919/pexels-photo-7433919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={isPrivacy ? { en: "Privacy Policy", ar: "سياسة الخصوصية" } : { en: "Terms & Conditions", ar: "الشروط والأحكام" }}
      >
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12.5px] text-navy-100">
          <Icon name="clock" className="h-4 w-4 text-gold-300" />
          {t("ph.updated")}: {pick(legalUpdated)}
        </p>
      </PageHero>

      <Section tone="light">
        <div className="container-x max-w-4xl">
          <div className="space-y-6">
            {blocks.map((b, i) => (
              <Reveal key={b.heading.en} delay={i * 50}>
                <article className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-7">
                  <h2 className="text-[17px] font-extrabold text-navy-950">{pick(b.heading)}</h2>
                  <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-navy-600">
                    {b.body.map((p, k) => (
                      <p key={k}>{pick(p)}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-navy-200 bg-navy-50/60 p-6">
            <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-navy-600">
              <Icon name="eye" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-600" />
              {pick({
                en: "This template content is provided as a starting point. Replace it with the company's approved legal wording before publishing.",
                ar: "هذا المحتوى نموذجي ويُستخدم كنقطة بداية. يرجى استبداله بصياغة قانونية معتمدة من الشركة قبل النشر.",
              })}
            </p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

export function NotFound() {
  const { t, pick } = useI18n();
  return (
    <Section tone="light" className="pt-40 pb-28">
      <div className="container-x text-center">
        <p className="text-[64px] leading-none font-extrabold text-navy-100">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-navy-950">
          {pick({ en: "Page not found", ar: "الصفحة غير موجودة" })}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-[14.5px] text-navy-500">
          {pick({
            en: "The page you are looking for may have moved. Browse our manpower categories or contact our team.",
            ar: "قد تكون الصفحة المطلوبة قد نُقلت. استعرض فئات العمالة أو تواصل مع فريقنا.",
          })}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 text-[15px] font-bold text-navy-950"
          >
            {t("misc.home")}
          </a>
          <a
            href="#/manpower-categories"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-navy-200 px-6 text-[15px] font-bold text-navy-800"
          >
            {t("cat.badge")}
          </a>
        </div>
      </div>
    </Section>
  );
}
