import JobSeekers from "../../pages/JobSeekers";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Job Seekers", ar: "الباحثون عن عمل" },
  {
    en: "Looking for work in Saudi Arabia? Register your profession, experience and iqama status free of charge — we connect workers with companies hiring across the Kingdom.",
    ar: "تبحث عن عمل في المملكة؟ سجّل مهنتك وخبرتك وحالة الإقامة مجاناً — نربط العمال بالشركات التي توظف في أنحاء المملكة.",
  },
  "/job-seekers",
);

export default function Page() {
  return <JobSeekers />;
}
