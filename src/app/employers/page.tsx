import Employers from "../../views/Employers";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Employers & Companies", ar: "الشركات والمنشآت" },
  {
    en: "Need manpower for your business? Submit your requirement and receive shortlisted workers with a clear quotation — daily, monthly, project-based or annual supply across Saudi Arabia.",
    ar: "تحتاج قوى عاملة لعملك؟ أرسل احتياجك واستلم قائمة مرشحين مع عرض سعر واضح — توريد يومي أو شهري أو حسب المشروع أو سنوي.",
  },
  "/employers",
);

export default function Page() {
  return <Employers />;
}

