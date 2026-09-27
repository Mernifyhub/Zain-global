import RequestManpower from "../../pages/RequestManpower";
import { pageMeta } from "../../lib/seo";

export const metadata = pageMeta(
  { en: "Request Manpower", ar: "طلب عمالة" },
  {
    en: "Request manpower for your company or register as a job seeker. One form for employers, one for workers — choose the path that applies to you.",
    ar: "اطلب عمالة لشركتك أو سجّل كباحث عن عمل. نموذج للشركات وآخر للعمال — اختر المسار المناسب لك.",
  },
  "/request-manpower",
);

export default function Page() {
  return <RequestManpower />;
}
