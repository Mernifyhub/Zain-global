import { LegalPage } from "../../pages/Legal";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  {
    en: "How Zain Global collects, uses and protects the information shared by employers and job seekers.",
    ar: "كيف تجمع زين جلوبال وتستخدم وتحمي المعلومات المشاركة من الشركات والباحثين عن عمل.",
  },
  "/privacy",
);

export default function Page() {
  return <LegalPage kind="privacy" />;
}
