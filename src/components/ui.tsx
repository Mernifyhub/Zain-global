import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { Link } from "../lib/router";
import { useI18n } from "../lib/i18n";
import { Icon } from "./Icons";
import { company, type L } from "../data/site";

/* ==================================================================
 *  SCROLL REVEAL
 * ================================================================== */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={cn("reveal", shown && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ==================================================================
 *  ANIMATED COUNTER
 * ================================================================== */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ==================================================================
 *  BUTTON
 * ================================================================== */
type Variant = "gold" | "navy" | "outline" | "ghost" | "white" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 hover:from-gold-300 hover:to-gold-400 shadow-[0_10px_30px_-10px_rgba(227,173,45,0.7)]",
  navy: "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_10px_30px_-12px_rgba(12,30,53,0.6)]",
  outline: "border border-navy-200 bg-white text-navy-800 hover:border-navy-900 hover:bg-navy-50",
  ghost: "text-navy-800 hover:bg-navy-50",
  white: "bg-white text-navy-900 hover:bg-navy-50 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
  whatsapp: "bg-[#1FA855] text-white hover:bg-[#189248]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

type BtnProps = {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  icon?: string;
  iconLeft?: string;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "gold",
  size = "md",
  to,
  href,
  icon,
  iconLeft,
  className,
  children,
  ...rest
}: BtnProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.98] whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} className="h-[18px] w-[18px]" />}
      <span>{children}</span>
      {icon && <Icon name={icon} className="h-[18px] w-[18px]" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}

/* ==================================================================
 *  SECTION WRAPPER + HEADING
 * ================================================================== */
export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "muted" | "dark" | "navy";
}) {
  const tones = {
    light: "bg-white",
    muted: "bg-navy-50/70",
    dark: "bg-navy-950 text-white",
    navy: "bg-gradient-to-b from-navy-900 to-navy-950 text-white",
  };
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 sm:py-20 lg:py-24", tones[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  icon,
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  icon?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]",
        tone === "dark"
          ? "border-navy-200/80 bg-white text-navy-700"
          : "border-white/15 bg-white/5 text-gold-200 backdrop-blur",
        className,
      )}
    >
      {icon ? <Icon name={icon} className="h-3.5 w-3.5" /> : <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />}
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  tone = "dark",
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  tone?: "dark" | "light";
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2
          className={cn(
            "max-w-3xl text-[27px] leading-[1.15] font-extrabold sm:text-4xl lg:text-[42px]",
            tone === "dark" ? "text-navy-950" : "text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={120}>
          <p
            className={cn(
              "max-w-2xl text-[15px] leading-relaxed sm:text-base",
              tone === "dark" ? "text-navy-600" : "text-navy-100/80",
              align === "center" && "mx-auto",
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ==================================================================
 *  LOGO
 * ================================================================== */
export function Logo({ tone = "dark", compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  const { t, pick } = useI18n();
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-[0_8px_20px_-8px_rgba(12,30,53,0.7)] ring-1 ring-white/10">
        <span className="absolute inset-0 grid-pattern opacity-30" />
        <span className="relative font-extrabold text-gold-300 text-[17px] leading-none">Z</span>
        <span className="absolute bottom-0 h-[3px] w-full gold-line" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[17px] font-extrabold tracking-tight",
            tone === "dark" ? "text-navy-950" : "text-white",
          )}
        >
          {pick(company.name)}
          <span className="text-gold-500">.</span>
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
              tone === "dark" ? "text-navy-500" : "text-navy-200/70",
            )}
          >
            {t("brand.sub")}
          </span>
        )}
      </span>
    </Link>
  );
}

/* ==================================================================
 *  PAGE HERO (inner pages)
 * ================================================================== */
export function PageHero({
  badge,
  title,
  sub,
  image,
  crumb,
  children,
}: {
  badge: string;
  title: string;
  sub: string;
  image: string;
  crumb?: L;
  children?: ReactNode;
}) {
  const { t, pick } = useI18n();
  return (
    <header className="relative isolate overflow-hidden bg-navy-950 pt-14 pb-16 sm:pt-20 sm:pb-20">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-900/70" />
      <div className="absolute inset-0 grid-pattern opacity-[0.18]" />
      <div className="container-x relative">
        <nav className="mb-5 flex items-center gap-2 text-[12px] font-medium text-navy-200/70">
          <Link to="/" className="transition hover:text-gold-300">
            {t("misc.home")}
          </Link>
          <Icon name="arrowRight" className="h-3.5 w-3.5 rtl:-scale-x-100" />
          <span className="text-gold-200">{pick(crumb)}</span>
        </nav>
        <Reveal>
          <Eyebrow tone="light">{badge}</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-5 max-w-4xl text-[32px] leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[54px]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-navy-100/80 sm:text-lg">{sub}</p>
        </Reveal>
        {children && <Reveal delay={180}>{children}</Reveal>}
      </div>
    </header>
  );
}

/* ==================================================================
 *  FORM FIELDS
 * ================================================================== */
const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-navy-900 outline-none transition placeholder:text-navy-300 focus:border-gold-400 focus:ring-4 focus:ring-gold-400/15";

export function Label({
  children,
  required,
  hint,
}: {
  children: ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <span className="mb-1.5 flex items-baseline justify-between gap-2">
      <span className="text-[13px] font-semibold text-navy-800">
        {children}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {hint && <span className="text-[11px] font-medium text-navy-400">{hint}</span>}
    </span>
  );
}

export function Field({ label, required, hint, error, children }: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: (cls: string) => ReactNode;
}) {
  return (
    <label className="block">
      <Label required={required} hint={hint}>
        {label}
      </Label>
      {children(cn(fieldBase, error ? "border-red-400" : "border-navy-200"))}
    </label>
  );
}

export function ChoiceRow({
  label,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "flex-1 rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition",
              value === opt
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-200 bg-white text-navy-600 hover:border-navy-400",
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==================================================================
 *  SMALL PIECES
 * ================================================================== */
export function StatPill({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-2 text-[13px] font-medium text-navy-100 backdrop-blur">
      <Icon name={icon} className="h-4 w-4 text-gold-300" />
      {label}
    </span>
  );
}

export function CheckList({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug">
          <span
            className={cn(
              "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
              tone === "dark" ? "bg-jade-100 text-jade-700" : "bg-white/10 text-jade-300",
            )}
          >
            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span className={tone === "dark" ? "text-navy-700" : "text-navy-100/85"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask relative flex overflow-hidden py-1">
      <div className="marquee-track flex w-max shrink-0 items-center gap-10 pe-10">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3 text-[13px] font-semibold tracking-wide text-navy-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
