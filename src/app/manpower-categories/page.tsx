import Categories from "../../pages/Categories";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Manpower Categories", ar: "فئات العمالة" },
  {
    en: "Browse every worker role we supply in Saudi Arabia — masons, carpenters, electricians, welders, housekeeping, chefs, waiters, cleaners, forklift operators, office assistants and general labour.",
    ar: "استعرض جميع الوظائف التي نوفرها في المملكة — بناؤون، نجارون، كهربائيون، لحامون، إيواء، طهاة، نظافة، مشغلو رافعات، مساعدو مكاتب وعمالة عامة.",
  },
  "/manpower-categories",
);

export default function Page() {
  return <Categories />;
}
