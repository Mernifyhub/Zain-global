import { Link } from "../lib/router";
import { useI18n } from "../lib/i18n";
import { Icon } from "./Icons";
import { Logo } from "./ui";
import { company, footerLinks, services } from "../data/site";

export default function Footer() {
  const { t, pick } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
      <div className="pointer-events-none absolute -top-40 start-1/3 h-80 w-80 rounded-full bg-gold-500/10 blur-[100px]" />

      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* brand column */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-navy-300">{t("ft.desc")}</p>
            <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-300">
              {pick(company.tagline)}
            </p>

            <div className="mt-6">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-white">{t("ft.follow")}</p>
              <div className="flex gap-2">
                {[
                  { name: "linkedin", href: company.socials.linkedin, label: "LinkedIn" },
                  { name: "x", href: company.socials.x, label: "X" },
                  { name: "instagram", href: company.socials.instagram, label: "Instagram" },
                  { name: "facebook", href: company.socials.facebook, label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/5 text-navy-200 transition hover:border-gold-400/60 hover:bg-gold-400/10 hover:text-gold-300"
                  >
                    <Icon name={s.name} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* quick links */}
          <nav>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">{t("ft.quick")}</h3>
            <ul className="mt-5 space-y-2.5 text-[13.5px]">
              {footerLinks.quick.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="inline-flex items-center gap-2 text-navy-300 transition hover:text-gold-300">
                    <span className="h-1 w-1 rounded-full bg-gold-400/70" />
                    {pick(l.label)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="inline-flex items-center gap-2 text-navy-300 transition hover:text-gold-300">
                  <span className="h-1 w-1 rounded-full bg-gold-400/70" />
                  {t("ft.privacy")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* services + industries */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">{t("ft.services")}</h3>
            <ul className="mt-5 space-y-2.5 text-[13.5px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-start gap-2 text-navy-300 transition hover:text-gold-300"
                  >
                    <span className="h-1 w-1 translate-y-2 rounded-full bg-gold-400/70" />
                    {pick(s.short)}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[13px] font-bold uppercase tracking-[0.16em] text-white">{t("ft.industries")}</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px] text-navy-400">
              {footerLinks.industries.map((i) => (
                <li key={i.key}>{pick(i.label)}</li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">{t("ft.contact")}</h3>
            <ul className="mt-5 space-y-4 text-[13.5px]">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-navy-300">{pick(company.address)}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="flex flex-col">
                  <a href={`tel:${company.phoneRaw}`} dir="ltr" className="text-navy-200 transition hover:text-gold-300">
                    {company.phone}
                  </a>
                  {company.phone2 && (
                    <a
                      href={`tel:${company.phone2.replace(/\s/g, "")}`}
                      dir="ltr"
                      className="text-navy-300 transition hover:text-gold-300"
                    >
                      {company.phone2}
                    </a>
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  dir="ltr"
                  className="text-navy-200 transition hover:text-gold-300"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="flex flex-col">
                  <a href={`mailto:${company.email}`} className="text-navy-200 transition hover:text-gold-300">
                    {company.email}
                  </a>
                  <a href={`mailto:${company.hrEmail}`} className="text-navy-300 transition hover:text-gold-300">
                    {company.hrEmail}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-navy-300">{pick(company.hours)}</span>
              </li>
            </ul>

            <h3 className="mt-8 text-[13px] font-bold uppercase tracking-[0.16em] text-white">{t("ft.locations")}</h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {footerLinks.locations.map((c) => (
                <li
                  key={c.name.en}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11.5px] text-navy-300"
                >
                  {pick(c.name)}
                </li>
              ))}
            </ul>
          </div>
        </div>
{/* 
        registrations placeholder strip
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300">
            {t("trust.regTitle")}
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {company.registrations.map((r) => (
              <div key={r.label.en}>
                <p className="text-[11.5px] text-navy-400">{pick(r.label)}</p>
                <p className="text-[13px] font-semibold text-navy-200">{r.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11.5px] text-navy-500">{t("ft.note")}</p>
        </div> */}
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-[12.5px] text-navy-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {pick(company.legalName)}. {t("ft.rights")}
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition hover:text-gold-300">
              {t("ft.privacy")}
            </Link>
            <Link to="/terms" className="transition hover:text-gold-300">
              {t("ft.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
