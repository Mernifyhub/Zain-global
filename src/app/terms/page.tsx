import { LegalPage } from "../../views/Legal";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Terms & Conditions", ar: "الشروط والأحكام" },
  {
    en: "The terms that govern the use of this website and the manpower supply services of Zain Global.",
    ar: "الشروط التي تنظّم استخدام هذا الموقع وخدمات توريد العمالة المقدمة من زين جلوبال.",
  },
  "/terms",
);

export default function Page() {
  return <LegalPage kind="terms" />;
}

