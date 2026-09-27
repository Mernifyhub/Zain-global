import Services from "../../views/Services";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Our Services", ar: "خدماتنا" },
  {
    en: "Six manpower supply divisions: construction & industrial workers, hotel & hospitality staff, office & administrative staff, cleaning & facility management, warehouse & logistics, and general labour.",
    ar: "ستة أقسام لتوريد العمالة: البناء والصناعة، الفنادق والضيافة، المكاتب والإدارة، النظافة والمرافق، المستودعات واللوجستيات، والعمالة العامة.",
  },
  "/services",
);

export default function Page() {
  return <Services />;
}

