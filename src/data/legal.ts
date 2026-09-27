import type { L } from "./site";

/**
 * Legal copy — generic, editable placeholders for Privacy Policy and
 * Terms & Conditions. Replace with company-approved legal text.
 */

export type LegalBlock = { heading: L; body: L[] };

export const legalUpdated: L = { en: "1 January 2026", ar: "١ يناير ٢٠٢٦" };

export const privacyBlocks: LegalBlock[] = [
  {
    heading: { en: "1. Information We Collect", ar: "١. المعلومات التي نجمعها" },
    body: [
      {
        en: "We collect the information you provide through our request and registration forms — company name, contact person, phone number, email address, city, manpower requirement, worker counts and any additional details you choose to share.",
        ar: "نجمع المعلومات التي تقدمها عبر نماذج الطلب والتسجيل — اسم الشركة، الشخص المسؤول، رقم الهاتف، البريد الإلكتروني، المدينة، احتياج العمالة، عدد العمال وأي تفاصيل إضافية تختار مشاركتها.",
      },
      {
        en: "For job seekers, we collect name, mobile number, email, nationality, current location, profession, experience, iqama status, availability and any CV file you upload.",
        ar: "وبالنسبة للباحثين عن عمل، نجمع الاسم ورقم الجوال والبريد الإلكتروني والجنسية والموقع الحالي والمهنة والخبرة وحالة الإقامة والجاهزية وأي سيرة ذاتية ترفعها.",
      },
    ],
  },
  {
    heading: { en: "2. How We Use Your Information", ar: "٢. كيف نستخدم معلوماتك" },
    body: [
      {
        en: "Employer information is used to prepare manpower quotations, confirm availability, coordinate deployment and maintain the commercial relationship.",
        ar: "تُستخدم معلومات أصحاب العمل لإعداد عروض أسعار العمالة، وتأكيد التوفر، وتنسيق التجهيز، والحفاظ على العلاقة التجارية.",
      },
      {
        en: "Job seeker information is used to match your profile with client requirements and to contact you about suitable opportunities.",
        ar: "وتُستخدم معلومات الباحثين عن عمل لمطابقة ملفك مع احتياجات العملاء والتواصل معك بشأن الفرص المناسبة.",
      },
    ],
  },
  {
    heading: { en: "3. Sharing of Information", ar: "٣. مشاركة المعلومات" },
    body: [
      {
        en: "We do not sell or rent personal information. Information is shared only with the relevant client companies during a recruitment process, or with service providers who assist our operations, subject to confidentiality.",
        ar: "لا نبيع أو نؤجّر المعلومات الشخصية. تتم المشاركة فقط مع شركات العملاء ذات العلاقة أثناء عملية الاستقطاب، أو مع مزودي خدمات يساعدوننا في أعمالنا، مع الالتزام بالسرية.",
      },
    ],
  },
  {
    heading: { en: "4. Data Retention & Security", ar: "٤. الاحتفاظ بالبيانات وأمنها" },
    body: [
      {
        en: "We retain information only as long as needed for recruitment, contractual or record-keeping purposes, and apply reasonable technical and organisational measures to protect it against unauthorised access.",
        ar: "نحتفظ بالمعلومات فقط للمدة اللازمة لأغراض الاستقطاب أو التعاقد أو حفظ السجلات، ونطبق إجراءات فنية وتنظيمية معقولة لحمايتها من الوصول غير المصرح به.",
      },
    ],
  },
  {
    heading: { en: "5. Your Choices", ar: "٥. خياراتك" },
    body: [
      {
        en: "You may request access to, correction of, or deletion of the information you have shared with us by writing to our contact email address.",
        ar: "يمكنك طلب الوصول إلى معلوماتك التي شاركتها معنا أو تصحيحها أو حذفها بمراسلتنا على بريدنا الإلكتروني الموضح في صفحة التواصل.",
      },
    ],
  },
  {
    heading: { en: "6. Updates to This Policy", ar: "٦. تحديثات هذه السياسة" },
    body: [
      {
        en: "This policy may be updated from time to time. The latest version will always be published on this page.",
        ar: "قد يتم تحديث هذه السياسة من وقت لآخر، وسيتم دائماً نشر أحدث نسخة على هذه الصفحة.",
      },
    ],
  },
];

export const termsBlocks: LegalBlock[] = [
  {
    heading: { en: "1. Use of This Website", ar: "١. استخدام هذا الموقع" },
    body: [
      {
        en: "The content of this website is provided for general information about our manpower supply and workforce outsourcing services. It may be changed or updated without prior notice.",
        ar: "يُقدَّم محتوى هذا الموقع كمعلومات عامة عن خدمات توريد العمالة والاستعانة بمصادر خارجية. وقد يتم تغييره أو تحديثه دون إشعار مسبق.",
      },
    ],
  },
  {
    heading: { en: "2. Service Requests & Quotations", ar: "٢. طلبات الخدمة وعروض الأسعار" },
    body: [
      {
        en: "Submitting a manpower request does not create a contractual obligation. Services are supplied only under an agreed written quotation or contract signed by both parties.",
        ar: "إرسال طلب عمالة لا ينشئ التزاماً تعاقدياً. تُقدَّم الخدمات فقط وفق عرض سعر مكتوب أو عقد متفق عليه وموقّع من الطرفين.",
      },
    ],
  },
  {
    heading: { en: "3. Client Responsibilities", ar: "٣. مسؤوليات العميل" },
    body: [
      {
        en: "Clients are responsible for providing accurate requirements, a safe working environment, task-related instructions, and timely payment as per the agreed terms.",
        ar: "يتحمل العميل مسؤولية تقديم احتياجات دقيقة، وبيئة عمل آمنة، وتعليمات المهام، والسداد في الوقت المحدد وفقاً للشروط المتفق عليها.",
      },
    ],
  },
  {
    heading: { en: "4. Worker Registration", ar: "٤. تسجيل العمال" },
    body: [
      {
        en: "Registering a profile as a job seeker is free of charge and does not guarantee employment. Placement depends on client requirements, skill match and document verification.",
        ar: "تسجيل ملف كباحث عن عمل مجاني ولا يضمن الحصول على وظيفة. يعتمد التعيين على احتياجات العملاء ومطابقة المهارة والتحقق من المستندات.",
      },
    ],
  },
  {
    heading: { en: "5. Intellectual Property", ar: "٥. الملكية الفكرية" },
    body: [
      {
        en: "All branding, text, layout and design elements of this website belong to the company unless otherwise stated, and may not be copied or reused without permission.",
        ar: "جميع عناصر العلامة التجارية والنصوص والتصميم في هذا الموقع مملوكة للشركة ما لم يُذكر خلاف ذلك، ولا يجوز نسخها أو إعادة استخدامها دون إذن.",
      },
    ],
  },
  {
    heading: { en: "6. Governing Law", ar: "٦. القانون المطبق" },
    body: [
      {
        en: "These terms are governed by the laws and regulations applicable in the Kingdom of Saudi Arabia.",
        ar: "تخضع هذه الشروط للأنظمة واللوائح المعمول بها في المملكة العربية السعودية.",
      },
    ],
  },
];
