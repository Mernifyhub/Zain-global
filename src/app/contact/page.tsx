import Contact from "../../views/Contact";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Contact Us", ar: "اتصل بنا" },
  {
    en: "Contact our manpower desk in Riyadh — phone, WhatsApp, email and contact form. We reply to business enquiries on priority.",
    ar: "تواصل مع مكتب العمالة في الرياض — هاتف، واتساب، بريد إلكتروني ونموذج تواصل.",
  },
  "/contact",
);

export default function Page() {
  return <Contact />;
}

