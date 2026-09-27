import { useEffect, useState } from "react";
import { useI18n } from "../lib/i18n";
import { Icon } from "./Icons";
import { company } from "../data/site";
import { cn } from "../utils/cn";

/** Floating WhatsApp / call / email actions — bottom-right (or left in RTL). */
export default function FloatingActions() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      icon: "whatsapp",
      label: t("top.whatsapp"),
      href: `https://wa.me/${company.whatsapp}`,
      cls: "bg-[#1FA855] hover:bg-[#189248]",
    },
    { icon: "phone", label: t("ct.callNow"), href: `tel:${company.phoneRaw}`, cls: "bg-navy-900 hover:bg-navy-800" },
    { icon: "mail", label: t("ct.emailNow"), href: `mailto:${company.email}`, cls: "bg-gold-500 hover:bg-gold-400" },
  ];

  return (
    <div className="fixed bottom-5 z-40 flex flex-col items-end gap-3 ltr:right-5 rtl:left-5">
      {actions.map((a, i) => (
        <a
          key={a.icon}
          href={a.href}
          target={a.icon === "whatsapp" ? "_blank" : undefined}
          rel="noreferrer noopener"
          aria-label={a.label}
          className={cn(
            "group flex items-center gap-2 overflow-hidden rounded-full text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,0.55)] transition-all duration-300",
            a.cls,
            visible ? "h-12 w-12 sm:group-hover:w-auto sm:group-hover:px-4" : "pointer-events-none h-0 w-0 opacity-0",
            !open && "hidden",
          )}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <Icon name={a.icon} className="h-5 w-5 shrink-0" />
          <span className="hidden whitespace-nowrap text-[13px] font-bold group-hover:inline">{a.label}</span>
        </a>
      ))}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("ct.quick")}
        className={cn(
          "relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950 shadow-[0_18px_40px_-14px_rgba(227,173,45,0.85)] transition-all duration-300",
          visible ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0",
        )}
      >
        <span className="absolute inset-0 animate-ping-soft rounded-full bg-gold-400/50" />
        <Icon name={open ? "close" : "whatsapp"} className="relative h-6 w-6" strokeWidth={open ? 2 : undefined} />
      </button>
    </div>
  );
}
