import Home from "../pages/Home";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta(
  {
    en: "Manpower Supply & Workforce Provider in Saudi Arabia",
    ar: "توريد القوى العاملة في المملكة العربية السعودية",
  },
  {
    en: "Reliable manpower solutions for your business. Skilled, semi-skilled and general workforce supplied across Saudi Arabia — construction, hotels, offices, cleaning, warehousing and general labour.",
    ar: "حلول موثوقة للقوى العاملة لأعمالك. نوفر قوى عاملة ماهرة وشبه ماهرة وعامة في جميع أنحاء المملكة العربية السعودية.",
  },
  "/",
);

export default function Page() {
  return <Home />;
}
