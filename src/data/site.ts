/**
 * ============================================================
 *  ZAIN GLOBAL — CENTRAL CONTENT / DATA LAYER
 * ------------------------------------------------------------
 *  Everything the website renders (services, worker roles,
 *  cities, industries, statistics, steps, FAQs, contact info)
 *  lives here so new categories / cities / vacancies can be
 *  added later by appending an object — no layout changes.
 *
 *  Every text value is bilingual: { en, ar }
 * ============================================================
 */

export type L = { en: string; ar: string };

export const company = {
  name: { en: "Zain Global", ar: "زين جلوبال" },
  shortName: { en: "Zain", ar: "زين" },
  legalName: {
    en: "Zain Global Manpower & Workforce Services",
    ar: "زين جلوبال لتوريد القوى العاملة والخدمات",
  },
  tagline: {
    en: "Right People. Right Skills. Right Workforce.",
    ar: "الكفاءات المناسبة. المهارات المناسبة. القوى العاملة المناسبة.",
  },
  phone: "+966 55 526 7734",
  phoneRaw: "+966555267734",
  /** Optional secondary landline — leave empty to hide it everywhere. */
  phone2: "",
  whatsapp: "966555267734",
  email: "info@zainglobal.sa",
  hrEmail: "careers@zainglobal.sa",
  domain: "https://www.zainglobal.sa",
  address: {
    en: "King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia",
    ar: "طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية",
  },
  hours: {
    en: "Sun – Thu: 8:00 AM – 6:00 PM  •  24/7 manpower desk",
    ar: "الأحد – الخميس: ٨:٠٠ ص – ٦:٠٠ م  •  مكتب القوى العاملة يعمل ٢٤/٧",
  },
  socials: {
    linkedin: "#",
    x: "#",
    instagram: "#",
    facebook: "#",
  },
  /**
   * PLACEHOLDERS — replace with the company's actual registration
   * and licence details before going live. No claims are made here
   * about government approvals or certifications.
   */
  registrations: [
    { label: { en: "Commercial Registration (CR) No.", ar: "رقم السجل التجاري" }, value: "[Insert CR Number]" },
    { label: { en: "Recruitment / Manpower Licence No.", ar: "رقم ترخيص الاستقدام وتوريد العمالة" }, value: "[Insert Licence Number]" },
    { label: { en: "VAT Registration No.", ar: "رقم التسجيل الضريبي" }, value: "[Insert VAT Number]" },
    { label: { en: "Chamber of Commerce Membership", ar: "عضوية الغرفة التجارية" }, value: "[Insert Membership No.]" },
  ],
};

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
export const hero = {
  image:
    "https://images.pexels.com/photos/18111488/pexels-photo-18111488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1920",
  images: [
    "https://images.pexels.com/photos/7461108/pexels-photo-7461108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    "https://images.pexels.com/photos/9462628/pexels-photo-9462628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    "https://images.pexels.com/photos/4483556/pexels-photo-4483556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    "https://images.pexels.com/photos/8297442/pexels-photo-8297442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  ],
};

/* ------------------------------------------------------------------ */
/*  STATISTICS (animated counters)                                     */
/* ------------------------------------------------------------------ */
export type Stat = { value: number; suffix?: string; prefix?: string; label: L };

export const stats: Stat[] = [
  { value: 4500, suffix: "+", label: { en: "Skilled Workers", ar: "عامل ماهر" } },
  { value: 2800, suffix: "+", label: { en: "Workforce Available Now", ar: "قوى عاملة متاحة الآن" } },
  { value: 14, suffix: "+", label: { en: "Industries Served", ar: "قطاع نخدمه" } },
  { value: 30, suffix: "+", label: { en: "Cities Covered", ar: "مدينة نغطيها" } },
  { value: 950, suffix: "+", label: { en: "Successful Placements", ar: "عملية توفير ناجحة" } },
];

/* ------------------------------------------------------------------ */
/*  MANPOWER CATEGORIES / SERVICES                                     */
/* ------------------------------------------------------------------ */
export type Role = L;
export type Service = {
  slug: string;
  name: L;
  short: L;
  summary: L;
  summaryLong: L;
  icon: string;
  image: string;
  accent: string;
  roles: Role[];
  highlights: { title: L; text: L }[];
  industries: string[];
};

export const services: Service[] = [
  {
    slug: "construction-manpower",
    name: { en: "Construction & Industrial Workers", ar: "عمال البناء والصناعة" },
    short: { en: "Construction Workforce", ar: "قوى عاملة البناء" },
    summary: {
      en: "Skilled and general workers for construction projects and industrial sites.",
      ar: "عمال مهرة وعمالة عامة لمشاريع البناء والمواقع الصناعية.",
    },
    summaryLong: {
      en: "Masons, carpenters, steel fixers, electricians, plumbers, welders and equipment operators — mobilised in teams that match your project schedule.",
      ar: "بنائون، نجارون، حدادون، كهربائيون، سباكون، لحامون ومشغلون لمعدات — يتم توفيرهم بفرق تناسب جدول مشروعك.",
    },
    icon: "helmet",
    image:
      "https://images.pexels.com/photos/7461108/pexels-photo-7461108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "from-navy-800 to-navy-950",
    roles: [
      { en: "Construction Workers", ar: "عمال البناء" },
      { en: "Mason", ar: "بنّاء" },
      { en: "Carpenter", ar: "نجّار" },
      { en: "Steel Fixer", ar: "حدّاد حديد التسليح" },
      { en: "Electrician", ar: "كهربائي" },
      { en: "Plumber", ar: "سبّاك" },
      { en: "Welder", ar: "لحّام" },
      { en: "Painter", ar: "صبّاغ" },
      { en: "Gypsum Worker", ar: "فني جبس" },
      { en: "Tile Worker", ar: "فني بلاط وسيراميك" },
      { en: "HVAC Technician", ar: "فني تكييف وتهوية" },
      { en: "AC Technician", ar: "فني تكييف" },
      { en: "Mechanical Technician", ar: "فني ميكانيكي" },
      { en: "General Helper", ar: "مساعد عام" },
      { en: "Loading & Unloading Workers", ar: "عمال التحميل والتنزيل" },
      { en: "Warehouse Workers", ar: "عمال المستودعات" },
      { en: "Scaffolder", ar: "فني سقالات" },
      { en: "Heavy Equipment Operator", ar: "مشغل معدات ثقيلة" },
      { en: "Machine Operator", ar: "مشغل ماكينات" },
      { en: "Skilled & Semi-Skilled Labor", ar: "عمالة ماهرة وشبه ماهرة" },
    ],
    highlights: [
      {
        title: { en: "Project-based teams", ar: "فرق حسب المشروع" },
        text: {
          en: "Full crews for foundation, finishing, MEP and infrastructure phases.",
          ar: "فرق كاملة لمراحل الأساسات والتشطيبات والأعمال الكهروميكانيكية والبنية التحتية.",
        },
      },
      {
        title: { en: "Safety-first mobilisation", ar: "تجهيز بأعلى معايير السلامة" },
        text: {
          en: "Workers briefed on site rules, PPE requirements and task allocation.",
          ar: "يتم إحاطة العمال بقواعد الموقع ومتطلبات معدات الوقاية وتوزيع المهام.",
        },
      },
      {
        title: { en: "Short & long term contracts", ar: "عقود قصيرة وطويلة الأجل" },
        text: {
          en: "Daily, monthly or yearly supply depending on project timelines.",
          ar: "توريد يومي أو شهري أو سنوي حسب الجدول الزمني للمشروع.",
        },
      },
    ],
    industries: ["construction", "industrial", "commercial", "residential", "infrastructure"],
  },
  {
    slug: "hotel-hospitality-staff",
    name: { en: "Hotel & Hospitality Staff", ar: "كوادر الفنادق والضيافة" },
    short: { en: "Hospitality Workforce", ar: "قوى عاملة الضيافة" },
    summary: {
      en: "Reliable hotel, restaurant, housekeeping and hospitality staff.",
      ar: "كوادر موثوقة للفنادق والمطاعم والإيواء والضيافة.",
    },
    summaryLong: {
      en: "Groomed, service-trained front office, housekeeping, kitchen and restaurant teams for hotels, resorts, catering companies and restaurants.",
      ar: "فرق مدربة على خدمة العملاء للاستقبال والإيواء والمطبخ والمطاعم، للفنادق والمنتجعات وشركات التغذية والمطاعم.",
    },
    icon: "concierge",
    image:
      "https://images.pexels.com/photos/9462628/pexels-photo-9462628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "from-navy-800 to-jade-900",
    roles: [
      { en: "Hotel Receptionist", ar: "موظف استقبال فندق" },
      { en: "Housekeeping Staff", ar: "كوادر الإيواء" },
      { en: "Room Attendant", ar: "عامل غرف" },
      { en: "Cleaner", ar: "عامل نظافة" },
      { en: "Kitchen Helper", ar: "مساعد مطبخ" },
      { en: "Steward", ar: "ستيورد / عامل أدوات" },
      { en: "Waiter", ar: "نادل" },
      { en: "Restaurant Staff", ar: "كوادر مطعم" },
      { en: "Chef", ar: "شيف" },
      { en: "Cook", ar: "طبّاخ" },
      { en: "Dishwasher", ar: "غسّال أواني" },
      { en: "Laundry Staff", ar: "كوادر المغسلة" },
      { en: "Bell Boy", ar: "حامل حقائب" },
      { en: "Room Service Staff", ar: "كوادر خدمة الغرف" },
      { en: "Hotel Maintenance Staff", ar: "كوادر صيانة الفندق" },
      { en: "Security Staff", ar: "كوادر أمن" },
    ],
    highlights: [
      {
        title: { en: "Guest-ready appearance", ar: "مظهر مهني مناسب للضيوف" },
        text: {
          en: "Grooming and hospitality conduct screening before deployment.",
          ar: "التحقق من المظهر والسلوك المهني قبل التجهيز.",
        },
      },
      {
        title: { en: "Peak-season cover", ar: "تغطية مواسم الذروة" },
        text: {
          en: "Extra staff for Ramadan, Hajj, Umrah seasons and events.",
          ar: "كوادر إضافية لمواسم رمضان والحج والعمرة والفعاليات.",
        },
      },
      {
        title: { en: "Shift flexibility", ar: "مرونة الورديات" },
        text: {
          en: "Morning, evening and night shifts including weekends.",
          ar: "ورديات صباحية ومسائية وليلية بما في ذلك نهاية الأسبوع.",
        },
      },
    ],
    industries: ["hotels", "restaurants", "facilities", "retail", "hospitals"],
  },
  {
    slug: "office-staff",
    name: { en: "Office & Administrative Staff", ar: "الكوادر المكتبية والإدارية" },
    short: { en: "Office Support", ar: "الدعم المكتبي" },
    summary: {
      en: "Professional office assistants, receptionists, messengers and administrative support.",
      ar: "مساعدون مكتبيون محترفون، موظفو استقبال، موصلون ودعم إداري.",
    },
    summaryLong: {
      en: "Dependable back-office manpower that keeps your daily administration, documentation and front-desk operations running smoothly.",
      ar: "قوى عاملة مكتبية موثوقة تحافظ على سير الأعمال الإدارية والتوثيقية والاستقبال اليومية بسلاسة.",
    },
    icon: "desk",
    image:
      "https://images.pexels.com/photos/8297442/pexels-photo-8297442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "from-navy-800 to-navy-900",
    roles: [
      { en: "Office Assistant", ar: "مساعد مكتب" },
      { en: "Office Boy", ar: "عامل مكتب" },
      { en: "Tea Boy", ar: "عامل شاي وضيافة" },
      { en: "Data Entry Operator", ar: "مدخل بيانات" },
      { en: "Document Controller", ar: "مراقب مستندات" },
      { en: "Receptionist", ar: "موظف استقبال" },
      { en: "Secretary", ar: "سكرتير" },
      { en: "Administrative Assistant", ar: "مساعد إداري" },
      { en: "Messenger", ar: "موزع برقيات" },
      { en: "Office Support Staff", ar: "كوادر دعم مكتب" },
    ],
    highlights: [
      {
        title: { en: "Corporate presentation", ar: "حضور مؤسسي" },
        text: {
          en: "Candidates screened for communication and office etiquette.",
          ar: "نختار المرشحين حسب مهارات التواصل وآداب العمل المكتبية.",
        },
      },
      {
        title: { en: "Basic systems training", ar: "تدريب على الأنظمة الأساسية" },
        text: {
          en: "Data entry and documentation staff familiar with office software.",
          ar: "كوادر إدخال البيانات والتوثيق ملمّة ببرامج المكاتب.",
        },
      },
      {
        title: { en: "Multi-national options", ar: "جنسيات متعددة" },
        text: {
          en: "Arabic and English speaking candidates on request.",
          ar: "مرشحون يتحدثون العربية والإنجليزية حسب الطلب.",
        },
      },
    ],
    industries: ["offices", "commercial", "corporate", "government-contractors", "logistics"],
  },
  {
    slug: "cleaning-facility-management",
    name: { en: "Cleaning & Facility Management", ar: "النظافة وإدارة المرافق" },
    short: { en: "Cleaning Workforce", ar: "قوى عاملة النظافة" },
    summary: {
      en: "Trained cleaners and facility support staff for commercial and residential facilities.",
      ar: "عمال نظافة مدربون وكوادر دعم مرافق للمنشآت التجارية والسكنية.",
    },
    summaryLong: {
      en: "Daily cleaning crews, deep-cleaning teams, janitors and facility support workers supplied to buildings, compounds, malls, hospitals and offices.",
      ar: "فرق نظافة يومية، فرق تنظيف عميق، عمال صيانة وخدمات مرافق للمنشآت والمجمعات والمولات والمستشفيات والمكاتب.",
    },
    icon: "spray",
    image:
      "https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "from-jade-800 to-navy-950",
    roles: [
      { en: "Office Cleaner", ar: "عامل نظافة مكاتب" },
      { en: "Hotel Cleaner", ar: "عامل نظافة فنادق" },
      { en: "Building Cleaner", ar: "عامل نظافة مبانٍ" },
      { en: "House Cleaner", ar: "عامل نظافة منازل" },
      { en: "Deep Cleaning Worker", ar: "عامل تنظيف عميق" },
      { en: "Janitor", ar: "حارس / عامل نظافة" },
      { en: "Facility Support Worker", ar: "عامل دعم مرافق" },
      { en: "Waste Management Worker", ar: "عامل إدارة النفايات" },
      { en: "General Cleaner", ar: "عامل نظافة عام" },
    ],
    highlights: [
      {
        title: { en: "Supervised teams", ar: "فرق تحت إشراف" },
        text: {
          en: "Team leaders and supervisors available for large sites.",
          ar: "توفر قادة فرق ومشرفين للمواقع الكبيرة.",
        },
      },
      {
        title: { en: "Equipment handling", ar: "التعامل مع المعدات" },
        text: {
          en: "Workers trained on scrubbers, polishers and chemical safety.",
          ar: "عمال مدربون على آلات التنظيف والتلميع والسلامة الكيميائية.",
        },
      },
      {
        title: { en: "Day & night cleaning", ar: "تنظيف نهاري وليلي" },
        text: {
          en: "Schedules arranged around your business operating hours.",
          ar: "جداول مرنة تناسب ساعات عمل منشأتك.",
        },
      },
    ],
    industries: ["facilities", "commercial", "hospitals", "residential", "retail"],
  },
  {
    slug: "warehouse-logistics",
    name: { en: "Warehouse & Logistics", ar: "المستودعات والخدمات اللوجستية" },
    short: { en: "Logistics Workforce", ar: "قوى عاملة اللوجستيات" },
    summary: {
      en: "Warehouse crews, pickers, packers, storekeepers and forklift operators.",
      ar: "فرق مستودعات، عمال فرز وتغليف، أمين مستودع ومشغلو رافعات شوكية.",
    },
    summaryLong: {
      en: "Manpower for distribution centres, e-commerce fulfilment, cold storage and transport companies — with licensed operators where required.",
      ar: "قوى عاملة لمراكز التوزيع والتجارة الإلكترونية والتخزين المبرد وشركات النقل — مع مشغلين مرخصين عند الحاجة.",
    },
    icon: "forklift",
    image:
      "https://images.pexels.com/photos/4483556/pexels-photo-4483556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "from-navy-800 to-jade-900",
    roles: [
      { en: "Warehouse Worker", ar: "عامل مستودع" },
      { en: "Picker & Packer", ar: "عامل فرز وتغليف" },
      { en: "Loading & Unloading Worker", ar: "عامل تحميل وتنزيل" },
      { en: "Storekeeper", ar: "أمين مستودع" },
      { en: "Inventory Assistant", ar: "مساعد جرد" },
      { en: "Delivery Helper", ar: "مساعد توصيل" },
      { en: "Forklift Operator", ar: "مشغل رافعة شوكية" },
      { en: "Logistics Helper", ar: "مساعد لوجستي" },
    ],
    highlights: [
      {
        title: { en: "Volume-ready staffing", ar: "جاهزية لأحمال العمل" },
        text: {
          en: "Scale teams up quickly for seasonal and campaign peaks.",
          ar: "زيادة سريعة لعدد الفرق في المواسم والحملات.",
        },
      },
      {
        title: { en: "Inventory accuracy", ar: "دقة الجرد" },
        text: {
          en: "Storekeepers and inventory staff with scanning experience.",
          ar: "أمناء مستودعات وكوادر جرد لديهم خبرة في المسح الضوئي.",
        },
      },
      {
        title: { en: "Multiple-shift coverage", ar: "تغطية ورديات متعددة" },
        text: {
          en: "Rotational manpower for 24/7 warehouse operations.",
          ar: "عمال بنظام تناوب لعمليات المستودعات على مدار الساعة.",
        },
      },
    ],
    industries: ["logistics", "warehouses", "factories", "retail", "industrial"],
  },
  {
    slug: "general-labor",
    name: { en: "General Labor Supply", ar: "توريد العمالة العامة" },
    short: { en: "General Labor", ar: "العمالة العامة" },
    summary: {
      en: "General labor, helpers, packing and factory workers for every kind of operation.",
      ar: "عمالة عامة، مساعدون، عمال تغليف ومصانع لكل نوع من الأنشطة.",
    },
    summaryLong: {
      en: " dependable general-purpose manpower for factories, farms, events, packing units, maintenance works and any other workforce requirement.",
      ar: "عمالة عامة موثوقة للمصانع والمزارع والفعاليات ووحدات التغليف وأعمال الصيانة وأي احتياج آخر للقوى العاملة.",
    },
    icon: "hand",
    image:
      "https://images.pexels.com/photos/8961552/pexels-photo-8961552.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "from-navy-800 to-navy-950",
    roles: [
      { en: "General Labor", ar: "عمالة عامة" },
      { en: "Helpers", ar: "مساعدون" },
      { en: "Packing Workers", ar: "عمال تغليف" },
      { en: "Factory Workers", ar: "عمال مصانع" },
      { en: "Agricultural Workers", ar: "عمال زراعة" },
      { en: "Loading Workers", ar: "عمال تحميل" },
      { en: "Unloading Workers", ar: "عمال تنزيل" },
      { en: "Maintenance Helpers", ar: "مساعدو صيانة" },
      { en: "Site Helpers", ar: "مساعدو موقع" },
      { en: "Cleaning Workers", ar: "عمال نظافة" },
      { en: "Kitchen Helpers", ar: "مساعدو مطبخ" },
      { en: "Delivery Helpers", ar: "مساعدو توصيل" },
      { en: "Other Workforce Requirements", ar: "احتياجات أخرى للقوى العاملة" },
    ],
    highlights: [
      {
        title: { en: "Any volume", ar: "أي عدد" },
        text: {
          en: "From a single helper to hundreds of workers for large sites.",
          ar: "من مساعد واحد إلى مئات العمال للمواقع الكبيرة.",
        },
      },
      {
        title: { en: "Fast mobilisation", ar: "تجهيز سريع" },
        text: {
          en: "Available workforce pool ready for urgent requirements.",
          ar: "مجموعة قوى عاملة متاحة للاحتياجات العاجلة.",
        },
      },
      {
        title: { en: "Custom roles", ar: "وظائف حسب الطلب" },
        text: {
          en: "Tell us the job — we source workers to match the task.",
          ar: "أخبرنا بالمهمة — ونوفر العمال المناسبين لها.",
        },
      },
    ],
    industries: ["factories", "agriculture", "events", "logistics", "residential"],
  },
];

/* ------------------------------------------------------------------ */
/*  INDUSTRIES                                                         */
/* ------------------------------------------------------------------ */
export type Industry = { key: string; name: L; icon: string };

export const industries: Industry[] = [
  { key: "construction", name: { en: "Construction", ar: "البناء والتشييد" }, icon: "crane" },
  { key: "hotels", name: { en: "Hotels", ar: "الفنادق" }, icon: "hotel" },
  { key: "restaurants", name: { en: "Restaurants", ar: "المطاعم" }, icon: "restaurant" },
  { key: "facilities", name: { en: "Facilities Management", ar: "إدارة المرافق" }, icon: "building" },
  { key: "offices", name: { en: "Offices", ar: "المكاتب" }, icon: "desk" },
  { key: "warehouses", name: { en: "Warehouses", ar: "المستودعات" }, icon: "warehouse" },
  { key: "factories", name: { en: "Factories", ar: "المصانع" }, icon: "factory" },
  { key: "retail", name: { en: "Retail", ar: "التجزئة" }, icon: "cart" },
  { key: "hospitals", name: { en: "Hospitals", ar: "المستشفيات" }, icon: "hospital" },
  { key: "commercial", name: { en: "Commercial Buildings", ar: "المباني التجارية" }, icon: "tower" },
  { key: "residential", name: { en: "Residential Projects", ar: "المشاريع السكنية" }, icon: "home" },
  { key: "logistics", name: { en: "Logistics", ar: "الخدمات اللوجستية" }, icon: "truck" },
  { key: "industrial", name: { en: "Industrial Projects", ar: "المشاريع الصناعية" }, icon: "gear" },
];

/* ------------------------------------------------------------------ */
/*  SAUDI ARABIA COVERAGE — city dots mapped from real coordinates     */
/* ------------------------------------------------------------------ */
export type City = { name: L; x: number; y: number; major?: boolean };

export const cities: City[] = [
  { name: { en: "Riyadh", ar: "الرياض" }, x: 300, y: 227, major: true },
  { name: { en: "Jeddah", ar: "جدة" }, x: 158, y: 315, major: true },
  { name: { en: "Dammam", ar: "الدمام" }, x: 364, y: 176, major: true },
  { name: { en: "Khobar", ar: "الخبر" }, x: 368, y: 183 },
  { name: { en: "Makkah", ar: "مكة المكرمة" }, x: 170, y: 317 },
  { name: { en: "Madinah", ar: "المدينة المنورة" }, x: 165, y: 232 },
  { name: { en: "Jubail", ar: "الجبيل" }, x: 356, y: 160 },
  { name: { en: "Yanbu", ar: "ينبع" }, x: 127, y: 242 },
  { name: { en: "Taif", ar: "الطائف" }, x: 181, y: 321 },
  { name: { en: "Tabuk", ar: "تبوك" }, x: 94, y: 122 },
  { name: { en: "Abha", ar: "أبها" }, x: 205, y: 418 },
  { name: { en: "Jazan", ar: "جازان" }, x: 206, y: 455 },
  { name: { en: "Al Ahsa", ar: "الأحساء" }, x: 355, y: 206 },
  { name: { en: "Other Saudi Cities", ar: "مدن سعودية أخرى" }, x: 265, y: 350 },
];

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                       */
/* ------------------------------------------------------------------ */
export const steps: { title: L; text: L; icon: string }[] = [
  {
    title: { en: "Submit Manpower Requirement", ar: "إرسال احتياج القوى العاملة" },
    text: {
      en: "Share the positions, headcount, location, experience level and any accommodation or transport needs.",
      ar: "أرسل الوظائف المطلوبة وعدد العمال والموقع ومستوى الخبرة واحتياجات الإيواء أو النقل.",
    },
    icon: "clipboard",
  },
  {
    title: { en: "Candidate / Worker Selection", ar: "اختيار المرشحين والعمال" },
    text: {
      en: "We shortlist matching workers from our pool, then you screen CVs, interview or request trade tests.",
      ar: "نختار العمال المناسبين من مجموعتنا، ثم تراجع السير الذاتية أو تجري المقابلات أو تطلب اختبار المهارة.",
    },
    icon: "users",
  },
  {
    title: { en: "Documentation & Verification", ar: "المستندات والتحقق" },
    text: {
      en: "Identity, iqama status, experience and trade skill checks are completed before final confirmation.",
      ar: "يتم التحقق من الهوية وحالة الإقامة والخبرة والمهارة قبل التأكيد النهائي.",
    },
    icon: "shield",
  },
  {
    title: { en: "Workforce Deployment", ar: "تجهيز القوى العاملة" },
    text: {
      en: "Workers report to your site on the agreed date, with ongoing support and replacement assistance.",
      ar: "يبدأ العمال العمل في موقعك في التاريخ المتفق عليه، مع دعم مستمر ومساعدة في الاستبدال.",
    },
    icon: "rocket",
  },
];

/* ------------------------------------------------------------------ */
/*  TRUST & COMPLIANCE                                                 */
/* ------------------------------------------------------------------ */
export const trustPoints: { title: L; text: L; icon: string }[] = [
  {
    title: { en: "Verified Workforce", ar: "قوى عاملة موثقة" },
    text: { en: "Identity and background details checked before deployment.", ar: "التحقق من الهوية وبيانات الخلفية قبل التجهيز." },
    icon: "shield",
  },
  {
    title: { en: "Skilled & Experienced Workers", ar: "عمال مهرة وذوو خبرة" },
    text: { en: "Trade-tested candidates for technical positions.", ar: "مرشحون مختبَرون في المهارة للوظائف الفنية." },
    icon: "badge",
  },
  {
    title: { en: "Fast Manpower Deployment", ar: "تجهيز سريع للعمالة" },
    text: { en: "Ready pool of workers for urgent requirements.", ar: "مجموعة عمال جاهزة للاحتياجات العاجلة." },
    icon: "bolt",
  },
  {
    title: { en: "Flexible Workforce Solutions", ar: "حلول قوى عاملة مرنة" },
    text: { en: "Daily, monthly, yearly or project-based supply.", ar: "توريد يومي أو شهري أو سنوي أو حسب المشروع." },
    icon: "sliders",
  },
  {
    title: { en: "Client-Focused Service", ar: "خدمة تركز على العميل" },
    text: { en: "A dedicated coordinator for every client account.", ar: "منسق مخصص لكل حساب عميل." },
    icon: "headset",
  },
  {
    title: { en: "Saudi Arabia Wide Coverage", ar: "تغطية تشمل المملكة" },
    text: { en: "Supply capability across major Saudi cities.", ar: "قدرة التوريد في مدن المملكة الرئيسية." },
    icon: "map",
  },
  {
    title: { en: "Professional Recruitment Process", ar: "عملية استقطاب احترافية" },
    text: { en: "Structured screening, shortlisting and confirmation steps.", ar: "خطوات منهجية للفرز والاختيار والتأكيد." },
    icon: "process",
  },
  {
    title: { en: "Workforce Replacement Support", ar: "دعم استبدال العمالة" },
    text: { en: "Replacement assistance if a worker does not fit the role.", ar: "مساعدة في الاستبدال إذا لم يناسب العامل الوظيفة." },
    icon: "refresh",
  },
];

/* ------------------------------------------------------------------ */
/*  EMPLOYER BENEFITS / JOB SEEKER BENEFITS                            */
/* ------------------------------------------------------------------ */
export const employerBenefits: { title: L; text: L; icon: string }[] = [
  {
    title: { en: "One supplier, many trades", ar: "مورد واحد، مهن متعددة" },
    text: { en: "Construction, hospitality, office, cleaning, logistics and general labor from a single point of contact.", ar: "بناء وضيافة ومكاتب ونظافة ولوجستيات وعمالة عامة من جهة اتصال واحدة." },
    icon: "layers",
  },
  {
    title: { en: "Transparent manpower costing", ar: "تكلفة واضحة للعمالة" },
    text: { en: "Clear quotations per worker or per team before you commit.", ar: "عروض أسعار واضحة لكل عامل أو فريق قبل الالتزام." },
    icon: "receipt",
  },
  {
    title: { en: "Accommodation & transport options", ar: "خيارات الإيواء والنقل" },
    text: { en: "Arrange housing and daily transport with the manpower supply.", ar: "ترتيب السكن والنقل اليومي مع توريد العمالة." },
    icon: "bus",
  },
  {
    title: { en: "Scale up or down anytime", ar: "زيادة أو تقليل العدد في أي وقت" },
    text: { en: "Add workers for peak periods and reduce when work slows down.", ar: "أضف عمالاً في أوقات الذروة وقلّل العدد عند انخفاض العمل." },
    icon: "sliders",
  },
  {
    title: { en: "Replacement assistance", ar: "مساعدة في الاستبدال" },
    text: { en: "Worker replacement support within the agreed terms.", ar: "دعم استبدال العامل وفقاً للشروط المتفق عليها." },
    icon: "refresh",
  },
  {
    title: { en: "Dedicated account coordinator", ar: "منسق حساب مخصص" },
    text: { en: "One point of contact for attendance, issues and reporting.", ar: "جهة اتصال واحدة للحضور والمشكلات والتقارير." },
    icon: "headset",
  },
];

export const jobSeekerBenefits: { title: L; text: L; icon: string }[] = [
  {
    title: { en: "Access to many employers", ar: "وصول إلى جهات عمل متعددة" },
    text: { en: "Your profile is shared with companies hiring in your trade.", ar: "يتم مشاركة ملفك مع الشركات التي تبحث عن تخصصك." },
    icon: "briefcase",
  },
  {
    title: { en: "Jobs across Saudi Arabia", ar: "وظائف في أنحاء المملكة" },
    text: { en: "Opportunities in Riyadh, Jeddah, Dammam and other cities.", ar: "فرص في الرياض وجدة والدمام ومدن أخرى." },
    icon: "map",
  },
  {
    title: { en: "Skilled & general roles", ar: "وظائف مهرة وعامة" },
    text: { en: "From helpers and cleaners to technicians and chefs.", ar: "من المساعدين والنظافة إلى الفنيين والطهاة." },
    icon: "badge",
  },
  {
    title: { en: "Guidance & follow-up", ar: "إرشاد ومتابعة" },
    text: { en: "Our team guides you through documents and joining formalities.", ar: "فريقنا يرشدك في المستندات وإجراءات المباشرة." },
    icon: "headset",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export const faqs: { q: L; a: L; group: L }[] = [
  {
    group: { en: "Getting Started", ar: "البداية" },
    q: { en: "How quickly can you supply workers?", ar: "ما مدى سرعة توفير العمالة؟" },
    a: {
      en: "For common categories such as general labor, cleaners and helpers, deployment can often be arranged within a few working days depending on availability and location. Larger or highly specialised teams may take longer. Submit your requirement and we will confirm the earliest mobilisation date.",
      ar: "للفئات الشائعة مثل العمالة العامة والنظافة والمساعدين، يمكن غالباً التجهيز خلال أيام عمل قليلة حسب التوفر والموقع. أما الفرق الأكبر أو المتخصصة فقد تستغرق وقتاً أطول. أرسل احتياجك وسنؤكد أقرب تاريخ للتجهيز.",
    },
  },
  {
    group: { en: "Getting Started", ar: "البداية" },
    q: { en: "What is the minimum number of workers I can request?", ar: "ما الحد الأدنى لعدد العمال المطلوب؟" },
    a: {
      en: "There is no fixed minimum for most categories — we supply from a single worker to full site crews. Larger teams are quoted at more competitive rates.",
      ar: "لا يوجد حد أدنى ثابت لمعظم الفئات — نوفر من عامل واحد إلى فرق كاملة للمواقع. وتُقدَّم الفرق الكبيرة بأسعار أكثر تنافسية.",
    },
  },
  {
    group: { en: "Contracts", ar: "العقود" },
    q: { en: "What types of supply contracts do you offer?", ar: "ما أنواع عقود التوريد المتوفرة؟" },
    a: {
      en: "Daily and monthly manpower supply, long-term annual contracts, project-based supply for the duration of a project, and one-time deployments for events or seasonal peaks.",
      ar: "توريد يومي وشهري، عقود سنوية طويلة الأجل، توريد حسب المشروع لمدة تنفيذه، وتجهيز لمرة واحدة للفعاليات أو المواسم.",
    },
  },
  {
    group: { en: "Contracts", ar: "العقود" },
    q: { en: "Do you provide accommodation and transportation?", ar: "هل توفر السكن والنقل؟" },
    a: {
      en: "Yes. Accommodation and transportation can be included in the manpower package. Please mention your requirement in the request form so it is reflected in the quotation.",
      ar: "نعم. يمكن تضمين السكن والنقل في باقة العمالة. يرجى ذكر ذلك في نموذج الطلب ليُحتسب في عرض السعر.",
    },
  },
  {
    group: { en: "Workers", ar: "العمال" },
    q: { en: "Are the workers' documents verified?", ar: "هل يتم التحقق من مستندات العمال؟" },
    a: {
      en: "Identity documents, iqama status and work experience are checked as part of our internal verification process before a worker is confirmed to a client.",
      ar: "يتم التحقق من مستندات الهوية وحالة الإقامة والخبرة كجزء من عملية التحقق الداخلية قبل تأكيد العامل للعميل.",
    },
  },
  {
    group: { en: "Workers", ar: "العمال" },
    q: { en: "Can we interview workers before selecting them?", ar: "هل يمكننا مقابلة العمال قبل الاختيار؟" },
    a: {
      en: "Yes. You may review CVs, conduct interviews, or ask for a trade test / practical demonstration for skilled positions.",
      ar: "نعم. يمكنك مراجعة السير الذاتية أو إجراء المقابلات أو طلب اختبار عملي للمهارة في الوظائف الفنية.",
    },
  },
  {
    group: { en: "Workers", ar: "العمال" },
    q: { en: "What happens if a worker is not suitable?", ar: "ماذا لو لم يكن العامل مناسباً؟" },
    a: {
      en: "We provide workforce replacement support within the terms of the agreement. Inform your account coordinator and a replacement will be arranged.",
      ar: "نوفر دعم استبدال العمالة وفقاً لشروط الاتفاقية. أبلغ منسق الحساب وسيتم ترتيب بديل.",
    },
  },
  {
    group: { en: "Coverage", ar: "التغطية" },
    q: { en: "Which cities in Saudi Arabia do you cover?", ar: "أي مدن في المملكة تغطونها؟" },
    a: {
      en: "We cover Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, Jubail, Yanbu, Taif, Tabuk, Abha, Jazan, Al Ahsa and other Saudi cities.",
      ar: "نغطي الرياض وجدة والدمام والخبر ومكة المكرمة والمدينة المنورة والجبيل وينبع والطائف وتبوك وأبها وجازان والأحساء ومدن سعودية أخرى.",
    },
  },
  {
    group: { en: "Pricing", ar: "الأسعار" },
    q: { en: "How is manpower pricing calculated?", ar: "كيف تُحتسب تكلفة العمالة؟" },
    a: {
      en: "Pricing depends on the trade, skill level, number of workers, contract duration and whether accommodation and transport are required. Request a quotation and we will send a detailed breakdown.",
      ar: "تعتمد التكلفة على المهنة ومستوى المهارة وعدد العمال ومدة العقد وما إذا كان السكن والنقل مطلوبين. اطلب عرض سعر وسنرسل تفصيلاً واضحاً.",
    },
  },
  {
    group: { en: "Job Seekers", ar: "الباحثون عن عمل" },
    q: { en: "I am a worker looking for a job. How do I register?", ar: "أنا باحث عن عمل، كيف أسجل؟" },
    a: {
      en: "Use the Job Seekers page and submit your details, profession, experience and iqama status. Our team will contact you when a matching requirement is available.",
      ar: "استخدم صفحة الباحثين عن عمل وأرسل بياناتك ومهنتك وخبرتك وحالة الإقامة. سيتواصل معك فريقنا عند توفر طلب مناسب.",
    },
  },
  {
    group: { en: "Job Seekers", ar: "الباحثون عن عمل" },
    q: { en: "Is there any charge for workers to register?", ar: "هل توجد رسوم لتسجيل العمال؟" },
    a: {
      en: "Registration of your profile with us is free of charge. Please contact us directly if you ever receive a request for payment in our name.",
      ar: "تسجيل ملفك لدينا مجاني. يرجى التواصل معنا مباشرة إذا تلقيت أي طلب دفع مالي باسمنا.",
    },
  },
  {
    group: { en: "Getting Started", ar: "البداية" },
    q: { en: "Can you supply a workforce outside the listed categories?", ar: "هل يمكنكم توفير عمالة خارج الفئات المذكورة؟" },
    a: {
      en: "Yes. If the trade you need is not listed, mention it under 'Other Workforce Requirements' and our team will confirm sourcing availability.",
      ar: "نعم. إذا لم تكن المهنة المطلوبة مدرجة، اذكرها في خانة «احتياجات أخرى للقوى العاملة» وسيفيدك فريقنا بإمكانية التوفير.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS (representative client feedback placeholders)         */
/* ------------------------------------------------------------------ */
export const testimonials: { quote: L; name: L; role: L }[] = [
  {
    quote: {
      en: "They supplied a full finishing crew for our Riyadh project on short notice and kept the headcount stable throughout the phase.",
      ar: "وفروا فريق تشطيبات كامل لمشروعنا في الرياض بوقت قصير وحافظوا على عدد العمال طوال المرحلة.",
    },
    name: { en: "Project Manager", ar: "مدير مشروع" },
    role: { en: "Construction Contracting Company", ar: "شركة مقاولات إنشائية" },
  },
  {
    quote: {
      en: "Housekeeping and stewarding staff arrived trained and presentable — the seasonal handover was smooth.",
      ar: "وصلت كوادر الإيواء والستيورد مدربة وذات مظهر مهني — وكان تسليم الموسم سلساً.",
    },
    name: { en: "Rooms Division Head", ar: "رئيس قسم الغرف" },
    role: { en: "Hotel Group, Makkah", ar: "مجموعة فنادق، مكة المكرمة" },
  },
  {
    quote: {
      en: "We scaled our packing team from 20 to 85 workers during the season without delays in reporting.",
      ar: "زادنا فريق التغليف من ٢٠ إلى ٨٥ عاملاً في الموسم دون تأخير في الحضور.",
    },
    name: { en: "Operations Supervisor", ar: "مشرف عمليات" },
    role: { en: "Logistics & Distribution, Dammam", ar: "لوجستيات وتوزيع، الدمام" },
  },
];

/* ------------------------------------------------------------------ */
/*  NAVIGATION MODEL (drives header, footer, sitemap)                  */
/* ------------------------------------------------------------------ */
export type NavItem = { path: string; label: L };

export const navMain: NavItem[] = [
  { path: "/", label: { en: "Home", ar: "الرئيسية" } },
  { path: "/about", label: { en: "About", ar: "من نحن" } },
  { path: "/services", label: { en: "Services", ar: "خدماتنا" } },
  { path: "/manpower-categories", label: { en: "Manpower Categories", ar: "فئات العمالة" } },
  { path: "/employers", label: { en: "Employers", ar: "الشركات" } },
  { path: "/job-seekers", label: { en: "Job Seekers", ar: "الباحثون عن عمل" } },
  { path: "/contact", label: { en: "Contact", ar: "اتصل بنا" } },
];

export const navMore: NavItem[] = [
  { path: "/request-manpower", label: { en: "Request Manpower", ar: "طلب عمالة" } },
  { path: "/faq", label: { en: "FAQ", ar: "الأسئلة الشائعة" } },
];

export const footerLinks = {
  quick: [
    { path: "/", label: { en: "Home", ar: "الرئيسية" } },
    { path: "/about", label: { en: "About Us", ar: "من نحن" } },
    { path: "/services", label: { en: "Our Services", ar: "خدماتنا" } },
    { path: "/manpower-categories", label: { en: "Manpower Categories", ar: "فئات العمالة" } },
    { path: "/employers", label: { en: "Employers / Companies", ar: "الشركات والمنشآت" } },
    { path: "/job-seekers", label: { en: "Job Seekers", ar: "الباحثون عن عمل" } },
    { path: "/request-manpower", label: { en: "Request Manpower", ar: "طلب عمالة" } },
    { path: "/contact", label: { en: "Contact Us", ar: "اتصل بنا" } },
    { path: "/faq", label: { en: "FAQ", ar: "الأسئلة الشائعة" } },
  ],
  industries: industries.map((i) => ({ key: i.key, label: i.name })),
  locations: [
    { name: { en: "Riyadh", ar: "الرياض" } },
    { name: { en: "Jeddah", ar: "جدة" } },
    { name: { en: "Dammam", ar: "الدمام" } },
    { name: { en: "Khobar", ar: "الخبر" } },
    { name: { en: "Makkah", ar: "مكة المكرمة" } },
    { name: { en: "Madinah", ar: "المدينة المنورة" } },
    { name: { en: "Jubail", ar: "الجبيل" } },
    { name: { en: "Yanbu", ar: "ينبع" } },
    { name: { en: "Taif", ar: "الطائف" } },
    { name: { en: "Tabuk", ar: "تبوك" } },
    { name: { en: "Abha", ar: "أبها" } },
    { name: { en: "Jazan", ar: "جازان" } },
    { name: { en: "Al Ahsa", ar: "الأحساء" } },
    { name: { en: "Other Saudi Cities", ar: "مدن سعودية أخرى" } },
  ],
};
