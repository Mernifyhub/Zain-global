import About from "../../pages/About";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "About Us", ar: "من نحن" },
  {
    en: "Learn about Zain Global — a Saudi Arabia based manpower supply and workforce outsourcing company serving contractors, hotels, offices, facilities and warehouses.",
    ar: "تعرف على زين جلوبال — شركة سعودية لتوريد العمالة والاستعانة بمصادر خارجية.",
  },
  "/about",
);

export default function Page() {
  return <About />;
}
