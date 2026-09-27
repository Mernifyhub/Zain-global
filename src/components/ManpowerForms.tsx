import { useMemo, useState } from "react";
import { useI18n } from "../lib/i18n";
import { Icon } from "./Icons";
import { Button, ChoiceRow, Field, Label } from "./ui";
import { cities, company, services } from "../data/site";
import { cn } from "../utils/cn";

/* ==================================================================
 *  SHARED OPTION LISTS  (extend freely — the UI adapts)
 * ================================================================== */
const experienceOptions = [
  { en: "No experience required", ar: "بدون خبرة" },
  { en: "Less than 1 year", ar: "أقل من سنة" },
  { en: "1 – 3 years", ar: "من سنة إلى ٣ سنوات" },
  { en: "3 – 5 years", ar: "من ٣ إلى ٥ سنوات" },
  { en: "5 – 10 years", ar: "من ٥ إلى ١٠ سنوات" },
  { en: "10+ years", ar: "أكثر من ١٠ سنوات" },
];

const durationOptions = [
  { en: "Daily", ar: "يومي" },
  { en: "Monthly", ar: "شهري" },
  { en: "3 – 6 months", ar: "٣ – ٦ أشهر" },
  { en: "1 year", ar: "سنة" },
  { en: "Project based", ar: "حسب المشروع" },
  { en: "Long term", ar: "طويل الأجل" },
];

const nationalityOptions = [
  { en: "Saudi", ar: "سعودي" },
  { en: "Indian", ar: "هندي" },
  { en: "Pakistani", ar: "باكستاني" },
  { en: "Bangladeshi", ar: "بنغلاديشي" },
  { en: "Filipino", ar: "فلبيني" },
  { en: "Nepalese", ar: "نيبالي" },
  { en: "Sri Lankan", ar: "سريلانكي" },
  { en: "Egyptian", ar: "مصري" },
  { en: "Sudanese", ar: "سوداني" },
  { en: "Yemeni", ar: "يمني" },
  { en: "Kenyan", ar: "كيني" },
  { en: "Ugandan", ar: "أوغندي" },
  { en: "Indonesian", ar: "إندونيسي" },
  { en: "Other", ar: "أخرى" },
];

const iqamaOptions = [
  { en: "Valid & transferable", ar: "إقامة سارية قابلة للنقل" },
  { en: "Valid & non-transferable", ar: "إقامة سارية غير قابلة للنقل" },
  { en: "Expired", ar: "إقامة منتهية" },
  { en: "New / outside KSA", ar: "جديد / خارج المملكة" },
];

const availabilityOptions = [
  { en: "Immediately", ar: "فوري" },
  { en: "Within 1 week", ar: "خلال أسبوع" },
  { en: "Within 2 weeks", ar: "خلال أسبوعين" },
  { en: "Within 1 month", ar: "خلال شهر" },
  { en: "Notice period", ar: "فترة إشعار" },
];

/* ==================================================================
 *  HOOKS
 * ================================================================== */
function useFormState<T extends Record<string, string>>(initial: T) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof T) => (v: string) => {
    setValues((p) => ({ ...p, [key]: v }));
    setErrors((p) => (p[key as string] ? { ...p, [key as string]: false } : p));
  };

  const validate = (required: (keyof T)[]) => {
    const next: Record<string, boolean> = {};
    required.forEach((k) => {
      if (!String(values[k] ?? "").trim()) next[k as string] = true;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus("idle");
  };

  return { values, errors, status, set, validate, setStatus, reset };
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  const { t } = useI18n();
  return (
    <div className="rounded-2xl border border-jade-200 bg-jade-50 p-8 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-jade-600 text-white">
        <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
      </span>
      <h3 className="mt-4 text-xl font-extrabold text-navy-950">{t("form.sent")}</h3>
      <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-navy-600">{t("form.sentNote")}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        <Button href={`https://wa.me/${company.whatsapp}`} variant="whatsapp" size="md" iconLeft="whatsapp">
          {t("top.whatsapp")}
        </Button>
        <Button onClick={onReset} variant="outline" size="md" iconLeft="refresh">
          {t("form.another")}
        </Button>
      </div>
      <p className="mt-6 text-[11.5px] text-navy-400">{t("form.demo")}</p>
    </div>
  );
}

function ErrorNote() {
  const { t } = useI18n();
  return (
    <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-[13px] font-semibold text-red-600">
      <Icon name="close" className="h-4 w-4" strokeWidth={2.2} />
      {t("form.fix")}
    </p>
  );
}

/* ==================================================================
 *  EMPLOYER FORM
 * ================================================================== */
export function EmployerForm({ compact = false }: { compact?: boolean }) {
  const { t, pick } = useI18n();
  const f = useFormState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    city: "",
    position: "",
    workers: "",
    category: "",
    experience: "",
    duration: "",
    accommodation: "",
    transport: "",
    additional: "",
  });

  const cityList = useMemo(() => cities.map((c) => c.name), []);
  const categoryList = useMemo(() => services.map((s) => s.name), []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = f.validate([
      "companyName",
      "contactPerson",
      "phone",
      "email",
      "city",
      "position",
      "workers",
      "category",
    ]);
    if (!ok) return;
    f.setStatus("sending");
    window.setTimeout(() => f.setStatus("sent"), 900);
  };

  if (f.status === "sent") return <SuccessPanel onReset={f.reset} />;

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      {!compact && (
        <div className="mb-1">
          <h3 className="text-xl font-extrabold text-navy-950">{t("emp.formTitle")}</h3>
          <p className="mt-1 text-[13.5px] text-navy-500">{t("emp.formSub")}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("form.companyName")} required error={f.errors.companyName ? "x" : undefined}>
          {(cls) => (
            <input className={cls} value={f.values.companyName} onChange={(e) => f.set("companyName")(e.target.value)} placeholder="Al Noor Contracting Co." />
          )}
        </Field>
        <Field label={t("form.contactPerson")} required error={f.errors.contactPerson ? "x" : undefined}>
          {(cls) => (
            <input className={cls} value={f.values.contactPerson} onChange={(e) => f.set("contactPerson")(e.target.value)} placeholder="Mohammed Al Ali" />
          )}
        </Field>
        <Field label={t("form.phone")} required error={f.errors.phone ? "x" : undefined}>
          {(cls) => (
            <input dir="ltr" className={cls} value={f.values.phone} onChange={(e) => f.set("phone")(e.target.value)} placeholder="+966 5X XXX XXXX" />
          )}
        </Field>
        <Field label={t("form.email")} required error={f.errors.email ? "x" : undefined}>
          {(cls) => (
            <input dir="ltr" type="email" className={cls} value={f.values.email} onChange={(e) => f.set("email")(e.target.value)} placeholder="hr@company.sa" />
          )}
        </Field>
        <Field label={t("form.city")} required error={f.errors.city ? "x" : undefined}>
          {(cls) => (
            <select className={cls} value={f.values.city} onChange={(e) => f.set("city")(e.target.value)}>
              <option value="">{t("form.selectCity")}</option>
              {cityList.map((c) => (
                <option key={c.en} value={c.en}>
                  {pick(c)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.category")} required error={f.errors.category ? "x" : undefined}>
          {(cls) => (
            <select className={cls} value={f.values.category} onChange={(e) => f.set("category")(e.target.value)}>
              <option value="">{t("form.selectCategory")}</option>
              {categoryList.map((c) => (
                <option key={c.en} value={c.en}>
                  {pick(c)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.position")} required error={f.errors.position ? "x" : undefined}>
          {(cls) => (
            <input className={cls} value={f.values.position} onChange={(e) => f.set("position")(e.target.value)} placeholder={t("form.positionPh")} />
          )}
        </Field>
        <Field label={t("form.workers")} required error={f.errors.workers ? "x" : undefined}>
          {(cls) => (
            <input dir="ltr" type="number" min={1} className={cls} value={f.values.workers} onChange={(e) => f.set("workers")(e.target.value)} placeholder="25" />
          )}
        </Field>
        <Field label={t("form.experience")}>
          {(cls) => (
            <select className={cls} value={f.values.experience} onChange={(e) => f.set("experience")(e.target.value)}>
              <option value="">{t("form.selectExperience")}</option>
              {experienceOptions.map((o) => (
                <option key={o.en} value={o.en}>
                  {pick(o)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.duration")}>
          {(cls) => (
            <select className={cls} value={f.values.duration} onChange={(e) => f.set("duration")(e.target.value)}>
              <option value="">{t("form.selectDuration")}</option>
              {durationOptions.map((o) => (
                <option key={o.en} value={o.en}>
                  {pick(o)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <ChoiceRow label={t("form.accommodation")} options={[t("form.yes"), t("form.no")]} value={f.values.accommodation} onChange={f.set("accommodation")} />
        <ChoiceRow label={t("form.transport")} options={[t("form.yes"), t("form.no")]} value={f.values.transport} onChange={f.set("transport")} />
      </div>

      <Field label={t("form.additional")}>
        {(cls) => (
          <textarea rows={4} className={cls} value={f.values.additional} onChange={(e) => f.set("additional")(e.target.value)} placeholder={t("form.additionalPh")} />
        )}
      </Field>

      {Object.values(f.errors).some(Boolean) && <ErrorNote />}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="gold" size="lg" icon="arrowRight">
          {f.status === "sending" ? t("form.sending") : t("form.submit")}
        </Button>
        <Button href={`tel:${company.phoneRaw}`} variant="outline" size="lg" iconLeft="phone">
          {t("ct.callNow")}
        </Button>
      </div>
    </form>
  );
}

/* ==================================================================
 *  JOB SEEKER FORM
 * ================================================================== */
export function JobSeekerForm({ compact = false }: { compact?: boolean }) {
  const { t, pick } = useI18n();
  const f = useFormState({
    fullName: "",
    mobile: "",
    email: "",
    nationality: "",
    location: "",
    profession: "",
    experience: "",
    iqama: "",
    availability: "",
    cvName: "",
    message: "",
  });

  const cityList = useMemo(() => cities.map((c) => c.name), []);
  const professionList = useMemo(() => services.flatMap((s) => s.roles).slice(0, 80), []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = f.validate(["fullName", "mobile", "nationality", "location", "profession"]);
    if (!ok) return;
    f.setStatus("sending");
    window.setTimeout(() => f.setStatus("sent"), 900);
  };

  if (f.status === "sent") return <SuccessPanel onReset={f.reset} />;

  const fileName = f.values.cvName;

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      {!compact && (
        <div className="mb-1">
          <h3 className="text-xl font-extrabold text-navy-950">{t("js.formTitle")}</h3>
          <p className="mt-1 text-[13.5px] text-navy-500">{t("js.formSub")}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("form.fullName")} required error={f.errors.fullName ? "x" : undefined}>
          {(cls) => <input className={cls} value={f.values.fullName} onChange={(e) => f.set("fullName")(e.target.value)} placeholder="Rahul Kumar" />}
        </Field>
        <Field label={t("form.phone")} required error={f.errors.mobile ? "x" : undefined}>
          {(cls) => <input dir="ltr" className={cls} value={f.values.mobile} onChange={(e) => f.set("mobile")(e.target.value)} placeholder="+966 5X XXX XXXX" />}
        </Field>
        <Field label={t("form.email")}>
          {(cls) => <input dir="ltr" type="email" className={cls} value={f.values.email} onChange={(e) => f.set("email")(e.target.value)} placeholder="name@email.com" />}
        </Field>
        <Field label={t("form.nationality")} required error={f.errors.nationality ? "x" : undefined}>
          {(cls) => (
            <select className={cls} value={f.values.nationality} onChange={(e) => f.set("nationality")(e.target.value)}>
              <option value="">{t("form.selectNationality")}</option>
              {nationalityOptions.map((o) => (
                <option key={o.en} value={o.en}>
                  {pick(o)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.location")} required error={f.errors.location ? "x" : undefined}>
          {(cls) => (
            <select className={cls} value={f.values.location} onChange={(e) => f.set("location")(e.target.value)}>
              <option value="">{t("form.selectCity")}</option>
              {cityList.map((c) => (
                <option key={c.en} value={c.en}>
                  {pick(c)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.profession")} required error={f.errors.profession ? "x" : undefined}>
          {(cls) => (
            <select className={cls} value={f.values.profession} onChange={(e) => f.set("profession")(e.target.value)}>
              <option value="">{t("form.selectProfession")}</option>
              {professionList.map((r) => (
                <option key={r.en} value={r.en}>
                  {pick(r)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.experienceYears")}>
          {(cls) => (
            <select className={cls} value={f.values.experience} onChange={(e) => f.set("experience")(e.target.value)}>
              <option value="">{t("form.selectExperience")}</option>
              {experienceOptions.map((o) => (
                <option key={o.en} value={o.en}>
                  {pick(o)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.iqama")}>
          {(cls) => (
            <select className={cls} value={f.values.iqama} onChange={(e) => f.set("iqama")(e.target.value)}>
              <option value="">{t("form.selectIqama")}</option>
              {iqamaOptions.map((o) => (
                <option key={o.en} value={o.en}>
                  {pick(o)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={t("form.availability")}>
          {(cls) => (
            <select className={cls} value={f.values.availability} onChange={(e) => f.set("availability")(e.target.value)}>
              <option value="">{t("form.selectAvailability")}</option>
              {availabilityOptions.map((o) => (
                <option key={o.en} value={o.en}>
                  {pick(o)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <div>
          <Label hint={t("form.cvNote")}>{t("form.cv")}</Label>
          <label
            className={cn(
              "flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-navy-300 bg-navy-50/60 px-4 py-3 transition hover:border-gold-400 hover:bg-gold-50",
            )}
          >
            <span className="flex items-center gap-2 text-[13px] font-semibold text-navy-700">
              <Icon name="upload" className="h-4 w-4 text-gold-600" />
              {fileName || t("form.chooseFile")}
            </span>
            <Icon name="arrowUpRight" className="h-4 w-4 text-navy-400" />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => f.set("cvName")(e.target.files?.[0]?.name ?? "")}
            />
          </label>
        </div>
      </div>

      <Field label={t("form.message")}>
        {(cls) => <textarea rows={4} className={cls} value={f.values.message} onChange={(e) => f.set("message")(e.target.value)} placeholder={t("form.additionalPh")} />}
      </Field>

      <label className="flex items-start gap-2.5 text-[13px] text-navy-600">
        <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-navy-300 accent-[#0f9d6e]" />
        {t("form.consent")}
      </label>

      {Object.values(f.errors).some(Boolean) && <ErrorNote />}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="navy" size="lg" icon="arrowRight">
          {f.status === "sending" ? t("form.sending") : t("form.submitProfile")}
        </Button>
      </div>
      <p className="text-[11.5px] text-navy-400">{t("js.note")}</p>
    </form>
  );
}
