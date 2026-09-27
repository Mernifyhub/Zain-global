import { useI18n } from "../lib/i18n";
import { Icon } from "./Icons";
import { Button, CheckList, Reveal, Section, SectionHeading } from "./ui";
import CoverageMap from "./CoverageMap";
import { EmployerForm, JobSeekerForm } from "./ManpowerForms";
import { employerBenefits, jobSeekerBenefits } from "../data/site";
import { cn } from "../utils/cn";

/* ==================================================================
 *  EMPLOYERS  —  "Need Manpower for Your Business?"
 * ================================================================== */
export function EmployerSection({ showForm = true, tone = "muted" }: { showForm?: boolean; tone?: "light" | "muted" | "dark" }) {
  const { t, pick } = useI18n();

  return (
    <Section tone={tone} id="employers">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* copy */}
          <div>
            <SectionHeading
              align="start"
              eyebrow={t("emp.badge")}
              title={t("emp.title")}
              sub={t("emp.sub")}
            />

            <div className="mt-8">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-gold-600">{t("emp.why")}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {employerBenefits.map((b, i) => (
                  <Reveal key={b.title.en} delay={i * 50}>
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 transition hover:border-gold-300">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-300">
                        <Icon name={b.icon} className="h-[18px] w-[18px]" />
                      </span>
                      <span>
                        <span className="block text-[13.5px] font-extrabold text-navy-950">{pick(b.title)}</span>
                        <span className="mt-1 block text-[12.5px] leading-relaxed text-navy-500">{pick(b.text)}</span>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-950 p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-gold-300">{t("emp.docs")}</p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {[
                  { en: "Requirement received", ar: "استلام الطلب" },
                  { en: "Shortlist shared", ar: "إرسال القائمة المختصرة" },
                  { en: "Interview / trade test", ar: "مقابلة أو اختبار مهارة" },
                  { en: "Quotation & contract", ar: "عرض السعر والعقد" },
                ].map((s, i) => (
                  <li key={s.en} className="flex items-center gap-2.5 text-[13px] text-navy-100">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px] font-bold text-gold-300">
                      {i + 1}
                    </span>
                    <span>{pick(s)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Button to="/request-manpower" variant="gold" size="lg" icon="arrowRight">
                  {t("emp.cta")}
                </Button>
                <Button to="/manpower-categories" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  {t("cat.title")}
                </Button>
              </div>
            </div>
          </div>

          {/* form */}
          {showForm && (
            <Reveal delay={100}>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-lift sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950">
                    <Icon name="clipboard" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[18px] leading-tight font-extrabold text-navy-950">{t("emp.formTitle")}</h3>
                    <p className="text-[12.5px] text-navy-500">{t("emp.formSub")}</p>
                  </div>
                </div>
                <EmployerForm compact />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  JOB SEEKERS
 * ================================================================== */
export function JobSeekerSection({ showForm = true, tone = "light" }: { showForm?: boolean; tone?: "light" | "muted" | "dark" }) {
  const { t, pick } = useI18n();

  return (
    <Section tone={tone} id="job-seekers">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {showForm && (
            <Reveal>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8 lg:order-2">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-300">
                    <Icon name="users" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[18px] leading-tight font-extrabold text-navy-950">{t("js.formTitle")}</h3>
                    <p className="text-[12.5px] text-navy-500">{t("js.formSub")}</p>
                  </div>
                </div>
                <JobSeekerForm compact />
              </div>
            </Reveal>
          )}

          <div className={cn(showForm && "lg:order-1")}>
            <SectionHeading align="start" eyebrow={t("js.badge")} title={t("js.title")} sub={t("js.sub")} />

            <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-gold-600">{t("js.why")}</p>
              <div className="grid gap-4">
                {jobSeekerBenefits.map((b) => (
                  <div key={b.title.en} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-jade-700 shadow-sm">
                      <Icon name={b.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-extrabold text-navy-950">{pick(b.title)}</span>
                      <span className="mt-0.5 block text-[12.5px] leading-relaxed text-navy-500">{pick(b.text)}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-jade-200 bg-jade-50 p-5">
              <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-jade-900">
                <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-jade-700" />
                {t("js.note")}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-gold-600">{t("ind.badge")}</p>
              <CheckList
                items={[
                  "Construction & industrial trades",
                  "Hotel, restaurant & housekeeping roles",
                  "Office, data entry & document control",
                  "Cleaning & facility support",
                  "Warehouse, store & delivery helpers",
                  "General labor, packing & factory work",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ==================================================================
 *  SAUDI ARABIA COVERAGE
 * ================================================================== */
export function CoverageSection() {
  const { t } = useI18n();
  return (
    <Section tone="navy">
      <div className="container-x">
        <CoverageMap />
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-[14px] leading-relaxed text-navy-200/75">{t("cov.sub")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/request-manpower" variant="gold" size="lg" icon="arrowRight">
              {t("cta.btn")}
            </Button>
            <Button to="/contact" variant="white" size="lg" iconLeft="pin">
              {t("ct.mapBtn")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
