import { useI18n } from "../lib/i18n";
import { Link } from "../lib/router";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";
import { Button, Counter, Eyebrow, Marquee, Reveal, Section, SectionHeading, StatPill } from "./ui";
import {
  company,
  hero,
  industries,
  services,
  stats,
  steps,
  testimonials,
  trustPoints,
} from "../data/site";

/* ==================================================================
 *  HERO
 * ================================================================== */
export function Hero() {
  const { t, pick } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
      <img src={hero.image} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/95 to-navy-900/80" />
      <div className="absolute inset-0 grid-pattern opacity-[0.16]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-jade-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------- copy ---------- */}
        <div>
          <Reveal>
            <Eyebrow tone="light" icon="sparkles">
              {t("hero.badge")}
            </Eyebrow>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-6 text-[34px] leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-[58px]">
              {t("hero.title1")}
              <br />
              <span className="text-gradient-gold animate-shine">{t("hero.title2")}</span>
            </h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-navy-100/85 sm:text-lg">
              {t("hero.sub")}
            </p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/request-manpower" variant="gold" size="lg" icon="arrowRight">
                {t("hero.cta1")}
              </Button>
              <Button to="/contact" variant="white" size="lg" iconLeft="headset">
                {t("hero.cta2")}
              </Button>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-[52px] items-center gap-2 rounded-full border border-white/15 px-5 text-[15px] font-semibold text-white transition hover:border-[#25D366] hover:bg-white/5"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-[#25D366]" />
                {t("top.whatsapp")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                { icon: "badge", text: t("hero.point1") },
                { icon: "bolt", text: t("hero.point2") },
                { icon: "layers", text: t("hero.point3") },
                { icon: "map", text: t("hero.trustNote") },
              ].map((p) => (
                <li key={p.text} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-navy-100/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-gold-300">
                    <Icon name={p.icon} className="h-3 w-3" strokeWidth={2} />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---------- visual collage ---------- */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <div className="relative overflow-hidden rounded-[26px] border border-white/12 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
              <img src={hero.images[0]} alt="" className="h-[300px] w-full object-cover sm:h-[360px]" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 start-4 end-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">{t("hero.tag")}</p>
                <p className="mt-1 text-2xl font-extrabold text-white">
                  <Counter value={2800} suffix="+" /> <span className="text-[13px] font-semibold text-navy-200">workers</span>
                </p>
              </div>
            </div>

            {/* floating small cards */}
            <div className="animate-floaty absolute -bottom-10 -start-4 hidden w-[190px] overflow-hidden rounded-2xl border border-white/12 shadow-2xl sm:block lg:-start-10">
              <img src={hero.images[1]} alt="" className="h-24 w-full object-cover" loading="lazy" />
              <div className="bg-navy-900/95 px-3.5 py-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                  {pick(services[1].short)}
                </p>
                <p className="text-[11px] text-navy-300">Hotels · Restaurants · Events</p>
              </div>
            </div>

            <div className="animate-floaty absolute -top-8 -end-2 hidden w-[180px] overflow-hidden rounded-2xl border border-white/12 shadow-2xl sm:block lg:-end-8" style={{ animationDelay: "1.2s" }}>
              <img src={hero.images[3]} alt="" className="h-24 w-full object-cover" loading="lazy" />
              <div className="bg-navy-900/95 px-3.5 py-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gold-300">
                  {pick(services[2].short)}
                </p>
                <p className="text-[11px] text-navy-300">Offices · Administration</p>
              </div>
            </div>

            <div className="absolute -start-6 top-1/3 hidden rounded-2xl border border-white/12 bg-white/95 px-4 py-3 shadow-2xl xl:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-500">Deployment</p>
              <p className="text-sm font-extrabold text-navy-950">KSA-wide</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------- roles marquee ---------- */}
      <div className="container-x relative mt-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
          <Marquee
            items={[
              ...services[0].roles.slice(0, 8),
              ...services[1].roles.slice(0, 5),
              ...services[3].roles.slice(0, 4),
              ...services[4].roles.slice(0, 3),
            ].map((r) => pick(r))}
          />
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
 *  STATS
 * ================================================================== */
export function StatsSection() {
  const { t, pick } = useI18n();
  return (
    <Section tone="muted" className="py-14 sm:py-16">
      <div className="container-x">
        <SectionHeading eyebrow={t("stats.badge")} title={t("stats.title")} sub={t("stats.sub")} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label.en} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift">
                <span className="absolute inset-x-0 top-0 h-[3px] gold-line scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                <p className="text-[34px] leading-none font-extrabold text-navy-950">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[13px] font-semibold text-navy-500">{pick(s.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  SERVICES / MANPOWER CATEGORIES
 * ================================================================== */
export function ServicesSection({
  heading = true,
  limit,
  tone = "light",
}: {
  heading?: boolean;
  limit?: number;
  tone?: "light" | "muted";
}) {
  const { t, pick } = useI18n();
  const list = limit ? services.slice(0, limit) : services;

  return (
    <Section tone={tone} id="services">
      <div className="container-x">
        {heading && <SectionHeading eyebrow={t("services.badge")} title={t("services.title")} sub={t("services.sub")} />}
        <div className={cn("grid gap-5 md:grid-cols-2 lg:grid-cols-3", heading && "mt-12")}>
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-lift">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-t opacity-80", s.accent)} />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <span className="absolute bottom-4 start-4 grid h-12 w-12 place-items-center rounded-xl bg-white/95 text-navy-900 shadow-lg transition group-hover:bg-gold-400">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="absolute end-4 top-4 rounded-full border border-white/25 bg-navy-950/50 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                    {s.roles.length} {t("services.roles")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug font-extrabold text-navy-950">{pick(s.name)}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-500">{pick(s.summary)}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.roles.slice(0, 4).map((r) => (
                      <li key={r.en} className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy-600">
                        {pick(r)}
                      </li>
                    ))}
                    {s.roles.length > 4 && (
                      <li className="rounded-full bg-navy-900 px-2.5 py-1 text-[11.5px] font-bold text-gold-300">
                        +{s.roles.length - 4}
                      </li>
                    )}
                  </ul>

                  <div className="mt-6 flex items-center gap-2 border-t border-navy-100 pt-5">
                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-navy-900 transition hover:text-gold-600"
                    >
                      {t("services.view")}
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                    </Link>
                    <Link
                      to={`/request-manpower?category=${s.slug}`}
                      className="ms-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-jade-700 transition hover:text-jade-600"
                    >
                      {t("cat.request")}
                      <Icon name="arrowUpRight" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  INDUSTRIES
 * ================================================================== */
export function IndustriesSection() {
  const { t, pick } = useI18n();
  return (
    <Section tone="dark">
      <div className="absolute inset-0 grid-pattern opacity-[0.1]" />
      <div className="container-x relative">
        <SectionHeading eyebrow={t("ind.badge")} title={t("ind.title")} sub={t("ind.sub")} tone="light" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.key} delay={i * 40}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-gold-400/[0.07]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="text-[12.5px] leading-tight font-semibold text-navy-100">{pick(ind.name)}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={13 * 40}>
            <Link
              to="/request-manpower"
              className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold-400/40 bg-gold-400/[0.06] p-5 text-center transition hover:bg-gold-400/[0.12]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400 text-navy-950">
                <Icon name="plus" className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-[12.5px] leading-tight font-semibold text-gold-200">{t("misc.needOther")}</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  HOW IT WORKS
 * ================================================================== */
export function HowItWorks({ tone = "light" }: { tone?: "light" | "muted" | "dark" }) {
  const { t, pick } = useI18n();
  return (
    <Section tone={tone}>
      <div className="container-x">
        <SectionHeading eyebrow={t("how.badge")} title={t("how.title")} sub={t("how.sub")} tone={tone === "dark" ? "light" : "dark"} />

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* connector */}
          <div className="pointer-events-none absolute inset-x-12 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title.en} delay={i * 90}>
              <div className="group relative h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-[42px] leading-none font-extrabold text-navy-100 transition group-hover:text-gold-200">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-600">
                  {t("how.step")} {i + 1}
                </p>
                <h3 className="mt-1.5 text-[17px] leading-snug font-extrabold text-navy-950">{pick(s.title)}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-500">{pick(s.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  TRUST & COMPLIANCE
 * ================================================================== */
export function TrustSection({ tone = "muted" }: { tone?: "light" | "muted" | "dark" }) {
  const { t, pick } = useI18n();
  return (
    <Section tone={tone}>
      <div className="container-x">
        <SectionHeading eyebrow={t("trust.badge")} title={t("trust.title")} sub={t("trust.sub")} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 55}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-jade-300 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-jade-50 text-jade-700 transition group-hover:bg-jade-600 group-hover:text-white">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[15px] leading-snug font-extrabold text-navy-950">{pick(p.title)}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-500">{pick(p.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* registrations / compliance placeholders */}
        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-200 bg-white">
            <div className="flex flex-col gap-1 border-b border-navy-100 bg-navy-50/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <Icon name="shield" className="h-5 w-5 text-navy-700" />
                <h3 className="text-[15px] font-extrabold text-navy-950">{t("trust.regTitle")}</h3>
              </div>
              <span className="text-[11.5px] font-semibold uppercase tracking-wider text-gold-600">
                {t("misc.legal")}
              </span>
            </div>
            <div className="grid gap-5 px-6 py-5 sm:grid-cols-2 lg:grid-cols-4">
              {company.registrations.map((r) => (
                <div key={r.label.en} className="rounded-xl border border-dashed border-navy-200 bg-navy-50/50 p-4">
                  <p className="text-[11.5px] font-semibold text-navy-500">{pick(r.label)}</p>
                  <p className="mt-1 text-[14px] font-bold text-navy-900">{r.value}</p>
                </div>
              ))}
            </div>
            <p className="flex items-start gap-2 border-t border-navy-100 px-6 py-4 text-[12px] leading-relaxed text-navy-500">
              <Icon name="eye" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {t("trust.regNote")}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  TESTIMONIALS
 * ================================================================== */
export function Testimonials() {
  const { t, pick } = useI18n();
  return (
    <Section tone="light">
      <div className="container-x">
        <SectionHeading eyebrow={t("ts.badge")} title={t("ts.title")} />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((ts, i) => (
            <Reveal key={ts.quote.en} delay={i * 80}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-navy-100 bg-navy-50/50 p-7">
                <Icon name="quoteFill" className="h-8 w-8 text-gold-300" />
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-navy-700">
                  “{pick(ts.quote)}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 text-[13px] font-bold text-gold-300">
                    {pick(ts.name).charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-bold text-navy-950">{pick(ts.name)}</span>
                    <span className="block text-[12px] text-navy-500">{pick(ts.role)}</span>
                  </span>
                  <span className="ms-auto flex gap-0.5 text-gold-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Icon key={k} name="starFill" className="h-3.5 w-3.5" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[12px] text-navy-400">{t("ts.note")}</p>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  BIG CTA BAND
 * ================================================================== */
export function CtaBand() {
  const { t, pick } = useI18n();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <img
        src="https://images.pexels.com/photos/38096888/pexels-photo-38096888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
      <div className="container-x relative">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="light" icon="bolt">
                {t("cov.badge")}
              </Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-[28px] leading-tight font-extrabold text-white sm:text-4xl">{t("cta.title")}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-100/80">{t("cta.sub")}</p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/request-manpower" variant="gold" size="lg" icon="arrowRight">
                {t("cta.btn")}
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="white" size="lg" iconLeft="phone">
                {t("cta.btn2")}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {[
            { icon: "clock", text: pick(company.hours) },
            { icon: "phone", text: company.phone },
            { icon: "mail", text: company.email },
          ].map((c) => (
            <StatPill key={c.icon} icon={c.icon} label={c.text} />
          ))}
        </div>
      </div>
    </section>
  );
}


