import Faq from "../../pages/Faq";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "FAQ", ar: "الأسئلة الشائعة" },
  {
    en: "Frequently asked questions about our manpower supply service in Saudi Arabia — deployment time, minimum headcount, contracts, accommodation, worker verification and replacement support.",
    ar: "الأسئلة المتكررة حول خدمة توريد العمالة في المملكة — مدة التجهيز، الحد الأدنى، العقود، السكن، التحقق من العمال والاستبدال.",
  },
  "/faq",
);

export default function Page() {
  return <Faq />;
}
