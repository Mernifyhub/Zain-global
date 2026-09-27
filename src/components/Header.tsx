import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Link, useRouter } from "../lib/router";
import { useI18n } from "../lib/i18n";
import { Icon } from "./Icons";
import { Button, Logo } from "./ui";
import { company, navMain, services } from "../data/site";

export default function Header() {
  const { t, pick, isAr, toggleLang } = useI18n();
  const { path } = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [path]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (p: string) =>
    p === "/" ? path === "/" : path.startsWith(p);

  return (
    <>
      {/* =========================================================
          TOP UTILITY BAR
          NOT STICKY
      ========================================================= */}
      <div className="hidden bg-navy-950 text-navy-100/80 lg:block">
        <div className="container-x flex h-10 items-center justify-between text-[12px]">
          {/* Left */}
          <p className="flex items-center gap-2">
            <Icon
              name="pin"
              className="h-3.5 w-3.5 text-gold-400"
            />

            {t("top.tagline")}
          </p>

          {/* Right */}
          <div className="flex items-center gap-5">
            {/* Phone */}
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-1.5 transition hover:text-gold-300"
            >
              <Icon
                name="phone"
                className="h-3.5 w-3.5 text-gold-400"
              />

              <span dir="ltr">
                {company.phone}
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 transition hover:text-gold-300"
            >
              <Icon
                name="mail"
                className="h-3.5 w-3.5 text-gold-400"
              />

              {company.email}
            </a>

            <div className="h-4 w-px bg-white/15" />

            {/* Language */}
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-0.5 font-semibold transition hover:border-gold-400 hover:text-gold-300"
              aria-label={t("nav.langLabel")}
            >
              <Icon
                name="globe"
                className="h-3.5 w-3.5"
              />

              {t("nav.lang")}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION
          ONLY THIS PART IS STICKY
      ========================================================= */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",

          scrolled
            ? "border-navy-100 bg-white/95 shadow-[0_10px_40px_-24px_rgba(12,30,53,0.4)] backdrop-blur-xl"
            : "border-transparent bg-white",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          {/* =====================================================
              LOGO
          ===================================================== */}
          <Logo />

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center gap-0.5 xl:flex">
            {navMain.map((item) =>
              item.path === "/services" ? (
                /* ---------------- SERVICES ---------------- */
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition",

                      isActive(item.path)
                        ? "text-navy-950"
                        : "text-navy-600 hover:text-navy-950",
                    )}
                  >
                    {pick(item.label)}

                    <Icon
                      name="chevronDown"
                      className={cn(
                        "h-3.5 w-3.5 transition",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </Link>

                  {/* Services dropdown */}
                  {servicesOpen && (
                    <div className="animate-slide-down absolute start-0 top-full w-[560px] pt-3">
                      <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-2.5 shadow-[0_30px_70px_-30px_rgba(12,30,53,0.45)]">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-navy-50"
                            >
                              {/* Icon */}
                              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-300">
                                <Icon
                                  name={s.icon}
                                  className="h-[18px] w-[18px]"
                                />
                              </span>

                              {/* Text */}
                              <span>
                                <span className="block text-[13.5px] font-bold text-navy-950">
                                  {pick(s.short)}
                                </span>

                                <span className="mt-0.5 block text-[11.5px] leading-snug text-navy-500">
                                  {s.roles.length}{" "}
                                  {t("cat.roles")}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* All categories */}
                        <Link
                          to="/manpower-categories"
                          className="mt-1.5 flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3 text-[13px] font-bold text-navy-900 transition hover:bg-navy-100"
                        >
                          {t("nav.servicesMenu")}

                          <Icon
                            name="arrowRight"
                            className="h-4 w-4 rtl:-scale-x-100"
                          />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* ---------------- NORMAL NAV ITEM ---------------- */
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition",

                    isActive(item.path)
                      ? "text-navy-950 after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gold-400"
                      : "text-navy-600 hover:text-navy-950",
                  )}
                >
                  {pick(item.label)}
                </Link>
              ),
            )}
          </nav>

          {/* =====================================================
              RIGHT SIDE ACTIONS
          ===================================================== */}
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden h-11 w-11 place-items-center rounded-full border border-navy-200 text-[#1FA855] transition hover:border-[#1FA855] hover:bg-[#1FA855]/8 sm:grid"
              aria-label={t("top.whatsapp")}
            >
              <Icon
                name="whatsapp"
                className="h-5 w-5"
              />
            </a>

            {/* Mobile language */}
            <button
              type="button"
              onClick={toggleLang}
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-200 text-navy-700 transition hover:border-navy-900 xl:hidden"
              aria-label={t("nav.langLabel")}
            >
              <span className="text-[11px] font-extrabold tracking-wide">
                {isAr ? "EN" : "ع"}
              </span>
            </button>

            {/* Request manpower */}
            <Button
              to="/request-manpower"
              variant="gold"
              size="md"
              icon="arrowRight"
              className="hidden sm:inline-flex"
            >
              {t("nav.request")}
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-200 text-navy-900 xl:hidden"
              aria-label={
                mobileOpen
                  ? t("nav.close")
                  : t("nav.menu")
              }
            >
              <Icon
                name={mobileOpen ? "close" : "menu"}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE DRAWER
      ========================================================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="animate-slide-down absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-3xl bg-white p-5 shadow-2xl">
            {/* Drawer Header */}
            <div className="mb-4 flex items-center justify-between">
              <Logo />

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 text-navy-900"
                aria-label={t("nav.close")}
              >
                <Icon
                  name="close"
                  className="h-5 w-5"
                />
              </button>
            </div>

            {/* Mobile navigation */}
            <nav className="flex flex-col divide-y divide-navy-100 border-y border-navy-100">
              {navMain.map((item) => (
                <div key={item.path}>
                  <div className="flex items-center justify-between">
                    {/* Main link */}
                    <Link
                      to={item.path}
                      onClick={() => {
                        if (item.path !== "/services") {
                          setMobileOpen(false);
                        }
                      }}
                      className={cn(
                        "flex-1 py-3.5 text-[15px] font-bold",

                        isActive(item.path)
                          ? "text-navy-950"
                          : "text-navy-600",
                      )}
                    >
                      {pick(item.label)}
                    </Link>

                    {/* Services toggle */}
                    {item.path === "/services" && (
                      <button
                        type="button"
                        onClick={() =>
                          setServicesOpen((v) => !v)
                        }
                        className="grid h-9 w-9 place-items-center rounded-full text-navy-500"
                        aria-label={t("nav.servicesMenu")}
                      >
                        <Icon
                          name="chevronDown"
                          className={cn(
                            "h-4 w-4 transition",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile services */}
                  {item.path === "/services" &&
                    servicesOpen && (
                      <div className="animate-fade-in pb-3">
                        <div className="space-y-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={() =>
                                setMobileOpen(false)
                              }
                              className="flex items-center gap-3 rounded-xl bg-navy-50/70 px-3 py-2.5 text-[13.5px] font-semibold text-navy-700"
                            >
                              <Icon
                                name={s.icon}
                                className="h-4 w-4 text-gold-600"
                              />

                              {pick(s.short)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ))}

              {/* Request */}
              <Link
                to="/request-manpower"
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-[15px] font-bold text-navy-600"
              >
                {t("nav.request")}
              </Link>

              {/* FAQ */}
              <Link
                to="/faq"
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-[15px] font-bold text-navy-600"
              >
                {t("nav.more")} · {t("faq.badge")}
              </Link>
            </nav>

            {/* =====================================================
                MOBILE CONTACT BUTTONS
            ===================================================== */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {/* Call */}
              <Button
                href={`tel:${company.phoneRaw}`}
                variant="outline"
                size="md"
                iconLeft="phone"
              >
                {t("ct.callNow")}
              </Button>

              {/* WhatsApp */}
              <Button
                href={`https://wa.me/${company.whatsapp}`}
                variant="whatsapp"
                size="md"
                iconLeft="whatsapp"
              >
                {t("top.whatsapp")}
              </Button>
            </div>

            {/* Mobile request */}
            <Button
              to="/request-manpower"
              variant="gold"
              size="lg"
              icon="arrowRight"
              className="mt-2.5 w-full"
            >
              {t("nav.request")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}