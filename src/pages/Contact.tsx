"use client";

import { useState } from "react";
import { CtaBand } from "../components/sections";
import { Button, Field, Label, PageHero, Reveal, Section } from "../components/ui";
import { Icon } from "../components/Icons";
import { useI18n } from "../lib/i18n";
import { company } from "../data/site";
import { cn } from "../utils/cn";

const MAP_SRC =
  "https://www.google.com/maps?q=King%20Fahd%20Road%2C%20Al%20Olaya%2C%20Riyadh%2C%20Saudi%20Arabia&z=13&output=embed";

export default function Contact() {
  const { t, pick } = useI18n();
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const subjects = [
    { en: "Manpower requirement", ar: "طلب قوى عاملة" },
    { en: "Quotation request", ar: "طلب عرض سعر" },
    { en: "Job seeker enquiry", ar: "استفسار باحث عن عمل" },
    { en: "Partnership / suppliers", ar: "شراكة / موردين" },
    { en: "Other", ar: "أخرى" },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    (["name", "phone", "email", "message"] as const).forEach((k) => {
      if (!values[k].trim()) next[k] = true;
    });
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  const set = (k: keyof typeof values) => (v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: false }));
  };

  const cards = [
    {
      icon: "phone",
      label: t("ct.callNow"),
      value: company.phone,
      href: `tel:${company.phoneRaw}`,
      note: pick({ en: "Manpower desk", ar: "مكتب القوى العاملة" }),
      cls: "bg-navy-950 text-white",
    },
    {
      icon: "whatsapp",
      label: t("top.whatsapp"),
      value: company.phone,
      href: `https://wa.me/${company.whatsapp}`,
      note: pick({ en: "Fastest response", ar: "أسرع رد" }),
      cls: "bg-[#1FA855] text-white",
    },
    {
      icon: "mail",
      label: t("ct.emailNow"),
      value: company.email,
      href: `mailto:${company.email}`,
      note: company.hrEmail,
      cls: "bg-gold-500 text-navy-950",
    },
  ];

  return (
    <>
      <PageHero
        badge={t("ct.badge")}
        title={t("ph.contact.title")}
        sub={t("ph.contact.sub")}
        image="https://images.pexels.com/photos/20752572/pexels-photo-20752572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        crumb={{ en: "Contact Us", ar: "اتصل بنا" }}
      />

      {/* ---------- quick contact ---------- */}
      <Section tone="light" className="py-12 sm:py-14">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.icon === "whatsapp" ? "_blank" : undefined}
                rel="noreferrer noopener"
                className={cn(
                  "group flex h-full items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
                  c.cls,
                )}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-bold uppercase tracking-[0.16em] opacity-75">{c.label}</span>
                  <span className="block truncate text-[16px] font-extrabold" dir="ltr">
                    {c.value}
                  </span>
                  <span className="mt-0.5 block truncate text-[12px] opacity-70" dir="ltr">
                    {c.note}
                  </span>
                </span>
                <Icon name="arrowUpRight" className="ms-auto h-5 w-5 opacity-60 transition group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- form + office info ---------- */}
      <Section tone="muted">
        <div className="container-x grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-[22px] font-extrabold text-navy-950">{t("ct.formTitle")}</h2>
              <p className="mt-1.5 text-[13.5px] text-navy-500">{t("ct.formSub")}</p>

              {status === "sent" ? (
                <div className="mt-8 rounded-2xl border border-jade-200 bg-jade-50 p-8 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-jade-600 text-white">
                    <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-navy-950">{t("form.sent")}</h3>
                  <p className="mx-auto mt-2 max-w-md text-[14px] text-navy-600">{t("form.sentNote")}</p>
                  <Button
                    onClick={() => {
                      setValues({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
                      setStatus("idle");
                    }}
                    variant="outline"
                    size="md"
                    iconLeft="refresh"
                    className="mt-6"
                  >
                    {t("form.another")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("form.fullName")} required error={errors.name ? "x" : undefined}>
                      {(cls) => <input className={cls} value={values.name} onChange={(e) => set("name")(e.target.value)} />}
                    </Field>
                    <Field label={t("form.companyName")}>
                      {(cls) => <input className={cls} value={values.company} onChange={(e) => set("company")(e.target.value)} />}
                    </Field>
                    <Field label={t("form.phone")} required error={errors.phone ? "x" : undefined}>
                      {(cls) => (
                        <input dir="ltr" className={cls} value={values.phone} onChange={(e) => set("phone")(e.target.value)} />
                      )}
                    </Field>
                    <Field label={t("form.email")} required error={errors.email ? "x" : undefined}>
                      {(cls) => (
                        <input dir="ltr" type="email" className={cls} value={values.email} onChange={(e) => set("email")(e.target.value)} />
                      )}
                    </Field>
                  </div>

                  <div>
                    <Label>{t("form.subject")}</Label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((s) => (
                        <button
                          key={s.en}
                          type="button"
                          onClick={() => set("subject")(s.en)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-[12.5px] font-semibold transition",
                            values.subject === s.en
                              ? "border-navy-900 bg-navy-900 text-white"
                              : "border-navy-200 bg-white text-navy-600 hover:border-navy-400",
                          )}
                        >
                          {pick(s)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Field label={t("form.message")} required error={errors.message ? "x" : undefined}>
                    {(cls) => (
                      <textarea rows={5} className={cls} value={values.message} onChange={(e) => set("message")(e.target.value)} />
                    )}
                  </Field>

                  <label className="flex items-start gap-2.5 text-[13px] text-navy-600">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-navy-300 accent-[#0f9d6e]" />
                    {t("form.consent")}
                  </label>

                  <div>
                    <Button type="submit" variant="gold" size="lg" icon="send">
                      {status === "sending" ? t("form.sending") : t("ct.emailNow")}
                    </Button>
                  </div>
                  <p className="text-[11.5px] text-navy-400">{t("form.demo")}</p>
                </form>
              )}
            </div>
          </Reveal>

          {/* office info */}
          <div className="flex flex-col gap-5">
            <Reveal delay={80}>
              <div className="rounded-3xl bg-navy-950 p-6 text-white">
                <h3 className="text-[16px] font-extrabold">{t("ct.office")}</h3>
                <ul className="mt-5 space-y-4 text-[13.5px]">
                  <li className="flex gap-3">
                    <Icon name="pin" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" />
                    <span className="text-navy-200">{pick(company.address)}</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="clock" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400" />
                    <span className="text-navy-200">{pick(company.hours)}</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="phone" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400" />
                    <span className="flex flex-col text-navy-200">
                      <a href={`tel:${company.phoneRaw}`} dir="ltr" className="hover:text-gold-300">
                        {company.phone}
                      </a>
                      {company.phone2 && (
                        <a
                          href={`tel:${company.phone2.replace(/\s/g, "")}`}
                          dir="ltr"
                          className="hover:text-gold-300"
                        >
                          {company.phone2}
                        </a>
                      )}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="mail" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" />
                    <span className="flex flex-col text-navy-200">
                      <a href={`mailto:${company.email}`} className="hover:text-gold-300">
                        {company.email}
                      </a>
                      <a href={`mailto:${company.hrEmail}`} className="hover:text-gold-300">
                        {company.hrEmail}
                      </a>
                    </span>
                  </li>
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <Button href={`tel:${company.phoneRaw}`} variant="gold" size="md" iconLeft="phone">
                    {t("ct.callNow")}
                  </Button>
                  <Button
                    href={`https://wa.me/${company.whatsapp}`}
                    variant="whatsapp"
                    size="md"
                    iconLeft="whatsapp"
                  >
                    {t("top.whatsapp")}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-3xl border border-navy-100 bg-white p-6">
                <h3 className="text-[15px] font-extrabold text-navy-950">{t("rq.infoTitle")}</h3>
                <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-navy-600">
                  <li className="flex gap-2.5">
                    <Icon name="building" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {pick({ en: "Site visits for bulk manpower requirements.", ar: "زيارات الموقع لاحتياجات العمالة الكبيرة." })}
                  </li>
                  <li className="flex gap-2.5">
                    <Icon name="file" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {pick({ en: "Written quotations with full scope and inclusions.", ar: "عروض أسعار مكتوبة تشمل النطاق والبنود." })}
                  </li>
                  <li className="flex gap-2.5">
                    <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {pick({ en: "Worker documents verified before deployment.", ar: "التحقق من مستندات العمال قبل التجهيز." })}
                  </li>
                </ul>
                <div className="mt-5">
                  <Button to="/request-manpower" variant="navy" size="md" icon="arrowRight" className="w-full">
                    {t("nav.request")}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---------- google map ---------- */}
      <Section tone="light" className="py-12 sm:py-14">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-navy-950 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-gold-300">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[14.5px] font-extrabold text-white">{t("ct.mapTitle")}</p>
                  <p className="text-[12px] text-navy-300">{t("ct.mapSub")}</p>
                </div>
              </div>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=King+Fahd+Road+Al+Olaya+Riyadh+Saudi+Arabia"
                variant="gold"
                size="sm"
                icon="arrowUpRight"
              >
                {t("ct.mapBtn")}
              </Button>
            </div>
            <iframe
              title="Zain Global Manpower location — Riyadh, Saudi Arabia"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
