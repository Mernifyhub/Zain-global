"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { L } from "../data/site";

/* ==================================================================
 *  BILINGUAL DICTIONARY  —  key: { en, ar }
 *  Add new keys here when adding new sections or pages.
 * ================================================================== */
const dict: Record<string, L> = {
  /* ---------- brand ---------- */
  "brand.sub": { en: "Manpower · Saudi Arabia", ar: "للقوى العاملة · السعودية" },
  "brand.fullName": { en: "Zain Global Manpower", ar: "زين جلوبال للقوى العاملة" },

  /* ---------- top bar ---------- */
  "top.tagline": { en: "Manpower Supply & Workforce Outsourcing — Saudi Arabia", ar: "توريد القوى العاملة والاستعانة بمصادر خارجية — المملكة العربية السعودية" },
  "top.call": { en: "Call us", ar: "اتصل بنا" },
  "top.email": { en: "Email us", ar: "راسلنا" },
  "top.whatsapp": { en: "WhatsApp", ar: "واتساب" },

  /* ---------- header ---------- */
  "nav.request": { en: "Request Manpower", ar: "طلب عمالة" },
  "nav.menu": { en: "Open menu", ar: "فتح القائمة" },
  "nav.close": { en: "Close menu", ar: "إغلاق القائمة" },
  "nav.more": { en: "More", ar: "المزيد" },
  "nav.lang": { en: "العربية", ar: "English" },
  "nav.langLabel": { en: "Language", ar: "اللغة" },
  "nav.servicesMenu": { en: "Manpower Categories", ar: "فئات العمالة" },

  /* ---------- hero ---------- */
  "hero.badge": { en: "Workforce Supplier for Companies in Saudi Arabia", ar: "مورد قوى عاملة للشركات في المملكة العربية السعودية" },
  "hero.title1": { en: "Reliable Manpower Solutions", ar: "حلول موثوقة للقوى العاملة" },
  "hero.title2": { en: "for Your Business", ar: "لأعمالك التجارية" },
  "hero.sub": {
    en: "Providing Skilled, Semi-Skilled and General Workforce Across Saudi Arabia",
    ar: "نوفر قوى عاملة ماهرة وشبه ماهرة وعامة في جميع أنحاء المملكة العربية السعودية",
  },
  "hero.cta1": { en: "Request Manpower", ar: "طلب عمالة" },
  "hero.cta2": { en: "Contact Us", ar: "اتصل بنا" },
  "hero.point1": { en: "Skilled, semi-skilled & general labor", ar: "عمالة ماهرة وشبه ماهرة وعامة" },
  "hero.point2": { en: "Fast deployment in all major cities", ar: "تجهيز سريع في جميع المدن الرئيسية" },
  "hero.point3": { en: "Flexible daily, monthly & project contracts", ar: "عقود مرنة يومية وشهرية وحسب المشروع" },
  "hero.explore": { en: "Explore Manpower Categories", ar: "استكشف فئات العمالة" },
  "hero.trustNote": { en: "Trusted by contractors, hotels, facility managers & logistics companies", ar: "موثوق من شركات المقاولات والفنادق وإدارات المرافق وشركات اللوجستيات" },
  "hero.tag": { en: "Active workforce pool", ar: "مجموعة قوى عاملة جاهزة" },

  /* ---------- stats ---------- */
  "stats.badge": { en: "By the Numbers", ar: "بالأرقام" },
  "stats.title": { en: "A Workforce Partner Built for Scale", ar: "شريك قوى عاملة جاهز للتوسع" },
  "stats.sub": { en: "Numbers that reflect our daily manpower operations across the Kingdom.", ar: "أرقام تعكس عملياتنا اليومية لتوفير العمالة في أنحاء المملكة." },

  /* ---------- services ---------- */
  "services.badge": { en: "Our Services", ar: "خدماتنا" },
  "services.title": { en: "Manpower Supply for Every Sector", ar: "توريد قوى عاملة لكل قطاع" },
  "services.sub": { en: "Choose a category to see the trades and roles we supply.", ar: "اختر فئة للاطلاع على المهن والوظائف التي نوفرها." },
  "services.roles": { en: "worker roles available", ar: "وظيفة متاحة" },
  "services.view": { en: "View category", ar: "عرض الفئة" },
  "services.request": { en: "Request these workers", ar: "طلب هذه الفئة" },
  "services.all": { en: "All Manpower Services", ar: "جميع خدمات العمالة" },

  /* ---------- categories ---------- */
  "cat.badge": { en: "Manpower Categories", ar: "فئات العمالة" },
  "cat.title": { en: "Browse Every Worker Role We Supply", ar: "استعرض جميع الوظائف التي نوفرها" },
  "cat.sub": { en: "Search by trade or filter by category — our pool covers skilled, semi-skilled and general workers.", ar: "ابحث بالمهنة أو رشّح حسب الفئة — تشمل مجموعتنا العمالة الماهرة وشبه الماهرة والعامة." },
  "cat.search": { en: "Search a trade, e.g. welder, receptionist, cleaner…", ar: "ابحث عن مهنة، مثال: لحّام، استقبال، نظافة…" },
  "cat.all": { en: "All Categories", ar: "جميع الفئات" },
  "cat.roles": { en: "roles", ar: "وظيفة" },
  "cat.results": { en: "results", ar: "نتيجة" },
  "cat.none": { en: "No roles matched your search.", ar: "لا توجد وظائف مطابقة لبحثك." },
  "cat.noneNote": { en: "Tell us what you need — we source workers for custom requirements too.", ar: "أخبرنا بما تحتاجه — نوفر عمالاً للاحتياجات الخاصة أيضاً." },
  "cat.request": { en: "Request Workers", ar: "طلب عمال" },
  "cat.jobs": { en: "Open Roles", ar: "الوظائف المتاحة" },

  /* ---------- industries ---------- */
  "ind.badge": { en: "Industries We Serve", ar: "القطاعات التي نخدمها" },
  "ind.title": { en: "Workforce Across 13+ Industries", ar: "قوى عاملة لأكثر من ١٣ قطاعاً" },
  "ind.sub": { en: "From construction sites and hotels to warehouses, offices and hospitals.", ar: "من مواقع البناء والفنادق إلى المستودعات والمكاتب والمستشفيات." },

  /* ---------- how it works ---------- */
  "how.badge": { en: "How It Works", ar: "كيف نعمل" },
  "how.title": { en: "From Requirement to Deployment in 4 Steps", ar: "من الطلب إلى التجهيز في ٤ خطوات" },
  "how.sub": { en: "A simple, transparent process designed for busy operations teams.", ar: "عملية بسيطة وواضحة مصممة لفرق العمليات المشغولة." },
  "how.step": { en: "Step", ar: "خطوة" },

  /* ---------- trust ---------- */
  "trust.badge": { en: "Why Companies Choose Us", ar: "لماذا تختارنا الشركات" },
  "trust.title": { en: "Trust, Compliance & Reliable Deployment", ar: "الثقة والالتزام وتجهيز موثوق" },
  "trust.sub": { en: "We build long-term manpower partnerships, not one-off transactions.", ar: "نبني شراكات طويلة الأجل في العمالة، لا تعاملات لمرة واحدة." },
  "trust.regTitle": { en: "Company Registrations & Licences", ar: "السجلات والتراخيص" },
  "trust.regNote": {
    en: "The fields below are placeholders. Replace them with the company's actual commercial registration, recruitment licence, VAT and chamber details.",
    ar: "الحقول أدناه عناصر مؤقتة. يرجى استبدالها ببيانات السجل التجاري وترخيص الاستقدام والرقم الضريبي وعضوية الغرفة الخاصة بالشركة.",
  },

  /* ---------- employers ---------- */
  "emp.badge": { en: "For Employers & Companies", ar: "للشركات والمنشآت" },
  "emp.title": { en: "Need Manpower for Your Business?", ar: "تحتاج قوى عاملة لعملك؟" },
  "emp.sub": {
    en: "Submit your manpower requirement and our team will shortlist suitable workers, confirm availability and send a clear quotation — usually within one business day.",
    ar: "أرسل احتياجك من القوى العاملة وسنختار العمال المناسبين ونؤكد التوفر ونرسل عرض سعر واضحاً — عادة خلال يوم عمل واحد.",
  },
  "emp.cta": { en: "Request Manpower", ar: "طلب عمالة" },
  "emp.why": { en: "Why employers work with us", ar: "لماذا يتعاون معنا أصحاب العمل" },
  "emp.formTitle": { en: "Manpower Requirement Form", ar: "نموذج طلب القوى العاملة" },
  "emp.formSub": { en: "Fill in your requirement — fields marked * are required.", ar: "أكمل بيانات الطلب — الحقول المعلّمة بـ * مطلوبة." },
  "emp.docs": { en: "What happens after you submit", ar: "ماذا يحدث بعد إرسال الطلب" },

  /* ---------- job seekers ---------- */
  "js.badge": { en: "For Workers & Job Seekers", ar: "للعمال والباحثين عن عمل" },
  "js.title": { en: "Looking for Work in Saudi Arabia?", ar: "تبحث عن عمل في المملكة العربية السعودية؟" },
  "js.sub": {
    en: "Register your profession, experience and current location. We share suitable profiles with companies hiring across the Kingdom.",
    ar: "سجّل مهنتك وخبرتك وموقعك الحالي. نشارك الملفات المناسبة مع الشركات التي توظف في أنحاء المملكة.",
  },
  "js.cta": { en: "Register Your Profile", ar: "سجّل ملفك" },
  "js.why": { en: "Benefits for workers", ar: "مزايا للعمال" },
  "js.formTitle": { en: "Job Seeker Registration", ar: "تسجيل الباحث عن عمل" },
  "js.formSub": { en: "Your details are used only for recruitment purposes.", ar: "تُستخدم بياناتك لأغراض التوظيف فقط." },
  "js.note": {
    en: "Registration of your profile is free of charge. Never pay anyone who claims to be collecting money on our behalf.",
    ar: "تسجيل ملفك لدينا مجاني. لا تدفع لأي شخص يدّعي تحصيل مبالغ باسمنا.",
  },

  /* ---------- coverage ---------- */
  "cov.badge": { en: "Saudi Arabia Coverage", ar: "التغطية في المملكة" },
  "cov.title": { en: "Supplying Manpower Across the Kingdom", ar: "نوفر العمالة في جميع أنحاء المملكة" },
  "cov.sub": { en: "Mobilisation capability in major industrial, commercial and hospitality cities.", ar: "قدرة تجهيز في المدن الصناعية والتجارية والسياحية الرئيسية." },
  "cov.note": { en: "Coverage in additional cities available on request.", ar: "التغطية في مدن إضافية متاحة عند الطلب." },

  /* ---------- testimonials ---------- */
  "ts.badge": { en: "Client Feedback", ar: "آراء العملاء" },
  "ts.title": { en: "What Our Clients Say", ar: "ماذا يقول عملاؤنا" },
  "ts.note": { en: "Representative client feedback. Replace with your own client references.", ar: "آراء تعبيرية عن العملاء. يمكن استبدالها بمراجع عملائك." },

  /* ---------- big CTA ---------- */
  "cta.title": { en: "Ready to mobilise your workforce?", ar: "جاهز لتجهيز قواك العاملة؟" },
  "cta.sub": { en: "Send your requirement today and receive a manpower proposal with availability and pricing.", ar: "أرسل احتياجك اليوم واستلم مقترح عمالة يشمل التوفر والتسعير." },
  "cta.btn": { en: "Request Manpower", ar: "طلب عمالة" },
  "cta.btn2": { en: "Talk to Our Team", ar: "تحدث مع فريقنا" },

  /* ---------- forms ---------- */
  "form.companyName": { en: "Company Name", ar: "اسم الشركة" },
  "form.contactPerson": { en: "Contact Person", ar: "الشخص المسؤول" },
  "form.designation": { en: "Designation", ar: "المسمى الوظيفي" },
  "form.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "form.email": { en: "Email", ar: "البريد الإلكتروني" },
  "form.city": { en: "City", ar: "المدينة" },
  "form.selectCity": { en: "Select city", ar: "اختر المدينة" },
  "form.position": { en: "Required Position", ar: "الوظيفة المطلوبة" },
  "form.positionPh": { en: "e.g. Mason, Waiter, Office Boy, Forklift Operator", ar: "مثال: بنّاء، نادل، عامل مكتب، مشغل رافعة شوكية" },
  "form.workers": { en: "Number of Workers", ar: "عدد العمال" },
  "form.category": { en: "Worker Category", ar: "فئة العمالة" },
  "form.selectCategory": { en: "Select category", ar: "اختر الفئة" },
  "form.experience": { en: "Required Experience", ar: "الخبرة المطلوبة" },
  "form.selectExperience": { en: "Select experience level", ar: "اختر مستوى الخبرة" },
  "form.duration": { en: "Contract Duration", ar: "مدة العقد" },
  "form.selectDuration": { en: "Select duration", ar: "اختر المدة" },
  "form.accommodation": { en: "Accommodation Required", ar: "الحاجة للسكن" },
  "form.transport": { en: "Transportation Required", ar: "الحاجة للنقل" },
  "form.yes": { en: "Yes", ar: "نعم" },
  "form.no": { en: "No", ar: "لا" },
  "form.additional": { en: "Additional Requirements", ar: "متطلبات إضافية" },
  "form.additionalPh": { en: "Shift timings, site location, start date, language preference, PPE, salary range…", ar: "أوقات الورديات، موقع العمل، تاريخ المباشرة، اللغة، معدات السلامة، نطاق الراتب…" },
  "form.submit": { en: "Submit Requirement", ar: "إرسال الطلب" },
  "form.submitProfile": { en: "Submit Registration", ar: "إرسال التسجيل" },
  "form.required": { en: "Required", ar: "مطلوب" },
  "form.optional": { en: "optional", ar: "اختياري" },
  "form.fullName": { en: "Full Name", ar: "الاسم الكامل" },
  "form.nationality": { en: "Nationality", ar: "الجنسية" },
  "form.selectNationality": { en: "Select nationality", ar: "اختر الجنسية" },
  "form.location": { en: "Current Location", ar: "الموقع الحالي" },
  "form.profession": { en: "Profession / Trade", ar: "المهنة" },
  "form.selectProfession": { en: "Select your profession", ar: "اختر مهنتك" },
  "form.experienceYears": { en: "Experience", ar: "سنوات الخبرة" },
  "form.cv": { en: "CV Upload", ar: "إرفاق السيرة الذاتية" },
  "form.cvNote": { en: "PDF or Word file, max 5 MB", ar: "ملف PDF أو Word، بحد أقصى ٥ ميجابايت" },
  "form.chooseFile": { en: "Choose file", ar: "اختر ملفاً" },
  "form.iqama": { en: "Iqama Status", ar: "حالة الإقامة" },
  "form.selectIqama": { en: "Select iqama status", ar: "اختر حالة الإقامة" },
  "form.availability": { en: "Availability", ar: "الجاهزية للعمل" },
  "form.selectAvailability": { en: "Select availability", ar: "اختر الجاهزية" },
  "form.message": { en: "Message", ar: "الرسالة" },
  "form.subject": { en: "Subject", ar: "الموضوع" },
  "form.selectSubject": { en: "Select subject", ar: "اختر الموضوع" },
  "form.consent": { en: "I agree to be contacted regarding my request.", ar: "أوافق على التواصل معي بخصوص طلبي." },
  "form.sending": { en: "Sending…", ar: "جارٍ الإرسال…" },
  "form.sent": { en: "Request submitted successfully", ar: "تم إرسال الطلب بنجاح" },
  "form.sentNote": {
    en: "Thank you. Our manpower team has received your details and will contact you shortly. For urgent requirements, message us on WhatsApp.",
    ar: "شكراً لك. استلم فريق العمالة بياناتك وسيتواصل معك قريباً. للاحتياجات العاجلة، راسلنا على واتساب.",
  },
  "form.another": { en: "Submit another request", ar: "إرسال طلب آخر" },
  "form.fix": { en: "Please complete the highlighted fields.", ar: "يرجى إكمال الحقول المحددة." },
  "form.demo": {
    en: "This form is a front-end demo — connect it to your email service or CRM endpoint to receive submissions.",
    ar: "هذا النموذج عرض توضيحي للواجهة — اربطه بخدمة البريد أو نظام إدارة العملاء لاستلام الطلبات.",
  },

  /* ---------- contact ---------- */
  "ct.badge": { en: "Contact Us", ar: "اتصل بنا" },
  "ct.title": { en: "Let's Discuss Your Workforce Needs", ar: "لنناقش احتياجك من القوى العاملة" },
  "ct.sub": { en: "Call, WhatsApp or email our manpower desk — we reply to business enquiries on priority.", ar: "اتصل أو راسلنا على واتساب أو البريد — نرد على استفسارات الشركات كأولوية." },
  "ct.office": { en: "Head Office", ar: "المكتب الرئيسي" },
  "ct.hours": { en: "Working Hours", ar: "ساعات العمل" },
  "ct.quick": { en: "Quick Contact", ar: "تواصل سريع" },
  "ct.mapTitle": { en: "Find Us in Riyadh", ar: "موقعنا في الرياض" },
  "ct.mapSub": { en: "King Fahd Road, Al Olaya District", ar: "طريق الملك فهد، حي العليا" },
  "ct.mapBtn": { en: "Open in Google Maps", ar: "افتح في خرائط جوجل" },
  "ct.formTitle": { en: "Send Us a Message", ar: "أرسل لنا رسالة" },
  "ct.formSub": { en: "Tell us about your company and the manpower you need.", ar: "أخبرنا عن شركتك والعمالة التي تحتاجها." },
  "ct.callNow": { en: "Call Now", ar: "اتصل الآن" },
  "ct.emailNow": { en: "Send Email", ar: "أرسل بريداً" },

  /* ---------- faq ---------- */
  "faq.badge": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "faq.title": { en: "Frequently Asked Questions", ar: "الأسئلة المتكررة" },
  "faq.sub": { en: "Everything companies and workers usually ask about our manpower supply service.", ar: "كل ما يسأل عنه الشركات والعمال حول خدمة توريد العمالة." },
  "faq.stillTitle": { en: "Still have a question?", ar: "لديك سؤال آخر؟" },
  "faq.stillSub": { en: "Our manpower desk is available for employers and workers alike.", ar: "مكتب العمالة متاح للشركات والعمال على حد سواء." },

  /* ---------- footer ---------- */
  "ft.desc": {
    en: "Zain Global supplies skilled, semi-skilled and general workers to companies across Saudi Arabia — construction, hospitality, offices, cleaning, warehousing and general labour.",
    ar: "تورّد زين جلوبال عمالة ماهرة وشبه ماهرة وعامة للشركات في أنحاء المملكة العربية السعودية — البناء والضيافة والمكاتب والنظافة والمستودعات والعمل العام.",
  },
  "ft.quick": { en: "Quick Links", ar: "روابط سريعة" },
  "ft.services": { en: "Services", ar: "الخدمات" },
  "ft.industries": { en: "Industries", ar: "القطاعات" },
  "ft.contact": { en: "Contact Information", ar: "معلومات التواصل" },
  "ft.locations": { en: "Saudi Arabia Locations", ar: "مواقعنا في المملكة" },
  "ft.follow": { en: "Follow Us", ar: "تابعنا" },
  "ft.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "ft.terms": { en: "Terms & Conditions", ar: "الشروط والأحكام" },
  "ft.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "ft.note": { en: "Placeholders used for licence and registration details.", ar: "تم استخدام عناصر مؤقتة لبيانات التراخيص والسجلات." },

  /* ---------- about page ---------- */
  "ab.badge": { en: "About Us", ar: "من نحن" },
  "ab.title": { en: "A Manpower Company Built Around Reliability", ar: "شركة قوى عاملة قائمة على الموثوقية" },
  "ab.lead": {
    en: "We help Saudi businesses run their operations with dependable manpower — from construction crews and hospitality teams to office support, cleaning staff and warehouse workers.",
    ar: "نساعد الشركات السعودية على إدارة أعمالها بقوى عاملة موثوقة — من فرق البناء والضيافة إلى الدعم المكتبي والنظافة وعمال المستودعات.",
  },
  "ab.storyTitle": { en: "Who We Are", ar: "من نحن" },
  "ab.story1": {
    en: "Zain Global is a Saudi Arabia–based manpower supply and workforce outsourcing company serving contractors, hotels, restaurants, facility management firms, offices, warehouses and factories.",
    ar: "زين جلوبال شركة سعودية لتوريد العمالة والاستعانة بمصادر خارجية تخدم شركات المقاولات والفنادق والمطاعم وإدارات المرافق والمكاتب والمستودعات والمصانع.",
  },
  "ab.story2": {
    en: "Our model is simple: maintain a ready pool of skilled, semi-skilled and general workers, verify their details properly, match them to the client's requirement and support both sides after deployment.",
    ar: "نموذجنا بسيط: الاحتفاظ بمجموعة جاهزة من العمالة الماهرة وشبه الماهرة والعامة، والتحقق من بياناتهم بدقة، ومطابقتهم لاحتياج العميل، ودعم الطرفين بعد التجهيز.",
  },
  "ab.story3": {
    en: "Every client account is handled by a dedicated coordinator who tracks attendance, replacements and contract renewals — so your operations never stop for lack of manpower.",
    ar: "يدير كل حساب عميل منسق مخصص يتابع الحضور والاستبدال وتجديد العقود — كي لا تتوقف أعمالك بسبب نقص العمالة.",
  },
  "ab.missionTitle": { en: "Our Mission", ar: "رسالتنا" },
  "ab.mission": {
    en: "To deliver the right people with the right skills at the right time, so that companies in Saudi Arabia can focus on their core business while we take care of their workforce.",
    ar: "تقديم الكفاءات المناسبة بالمهارات المناسبة في الوقت المناسب، لتتفرغ الشركات في المملكة لأعمالها الأساسية بينما نتولى نحن مسؤولية القوى العاملة.",
  },
  "ab.visionTitle": { en: "Our Vision", ar: "رؤيتنا" },
  "ab.vision": {
    en: "To become one of the most dependable manpower supply partners in the Kingdom, recognised for disciplined deployment, honest communication and long-term client relationships.",
    ar: "أن نكون من أكثر شركاء توريد العمالة موثوقية في المملكة، معروفين بانضباط التجهيز ووضوح التواصل وعلاقات العميل طويلة الأجل.",
  },
  "ab.valuesTitle": { en: "Our Values", ar: "قيمنا" },
  "ab.approachTitle": { en: "Our Approach", ar: "منهجيتنا" },
  "ab.approach": {
    en: "We keep our recruitment process structured and documented: requirement analysis, sourcing from our active pool, trade screening, client selection, verification and finally mobilisation with follow-up support.",
    ar: "نحافظ على عملية استقطاب منظمة وموثقة: تحليل الاحتياج، والبحث من مجموعتنا الجاهزة، والفرز المهني، واختيار العميل، والتحقق، ثم التجهيز مع دعم المتابعة.",
  },
  "ab.sectorsTitle": { en: "Sectors We Supply", ar: "القطاعات التي نورد لها" },
  "ab.regTitle": { en: "Registrations & Compliance", ar: "السجلات والالتزام" },
  "ab.regNote": {
    en: "Details below are placeholders — replace with the company's actual registration and licence information.",
    ar: "البيانات أدناه مؤقتة — يرجى استبدالها بمعلومات السجلات والتراخيص الفعلية للشركة.",
  },
  "ab.v1t": { en: "Reliability", ar: "الموثوقية" },
  "ab.v1d": { en: "Workers report on the agreed date, in the agreed numbers.", ar: "يحضر العمال في التاريخ والعدد المتفق عليهما." },
  "ab.v2t": { en: "Transparency", ar: "الشفافية" },
  "ab.v2d": { en: "Clear scope, clear pricing, clear timelines.", ar: "نطاق واضح، أسعار واضحة، جداول زمنية واضحة." },
  "ab.v3t": { en: "Respect for Workers", ar: "احترام العمال" },
  "ab.v3d": { en: "Fair treatment and proper documentation for every worker.", ar: "معاملة عادلة ومستندات سليمة لكل عامل." },
  "ab.v4t": { en: "Long-Term Partnership", ar: "شراكة طويلة الأجل" },
  "ab.v4d": { en: "We grow with our clients' projects and operations.", ar: "ننمو مع مشاريع وعمليات عملائنا." },

  /* ---------- page heroes ---------- */
  "ph.services.title": { en: "Our Services", ar: "خدماتنا" },
  "ph.services.sub": {
    en: "Six core manpower supply divisions, each covering a full set of trades and roles for Saudi businesses.",
    ar: "ستة أقسام رئيسية لتوريد العمالة، يغطي كل منها مجموعة كاملة من المهن والوظائف للشركات السعودية.",
  },
  "ph.categories.title": { en: "Manpower Categories", ar: "فئات العمالة" },
  "ph.categories.sub": {
    en: "Skilled, semi-skilled and general worker roles organised by sector — browse, search and request in minutes.",
    ar: "وظائف ماهرة وشبه ماهرة وعامة مصنفة حسب القطاع — استعرض وابحث واطلب في دقائق.",
  },
  "ph.employers.title": { en: "Employers & Companies", ar: "الشركات والمنشآت" },
  "ph.employers.sub": {
    en: "Outsource your manpower to a single reliable supplier with clear pricing and dependable deployment.",
    ar: "استعن بمورد واحد موثوق للقوى العاملة بأسعار واضحة وتجهيز منتظم.",
  },
  "ph.jobseekers.title": { en: "Job Seekers", ar: "الباحثون عن عمل" },
  "ph.jobseekers.sub": {
    en: "Register your trade and experience — we connect workers with companies hiring across Saudi Arabia.",
    ar: "سجّل مهنتك وخبرتك — نربط العمال بالشركات التي توظف في أنحاء المملكة.",
  },
  "ph.request.title": { en: "Request Manpower", ar: "طلب عمالة" },
  "ph.request.sub": {
    en: "One form for employers, one for workers — choose the path that applies to you.",
    ar: "نموذج للشركات وآخر للعمال — اختر المسار المناسب لك.",
  },
  "ph.contact.title": { en: "Contact Us", ar: "اتصل بنا" },
  "ph.contact.sub": {
    en: "Talk to our manpower desk for availability, quotations and deployment timelines.",
    ar: "تحدث مع مكتب العمالة لمعرفة التوفر وعروض الأسعار ومواعيد التجهيز.",
  },
  "ph.faq.title": { en: "Frequently Asked Questions", ar: "الأسئلة المتكررة" },
  "ph.faq.sub": { en: "Answers for employers and workers using our manpower supply service.", ar: "إجابات للشركات والعمال حول خدمة توريد العمالة." },
  "ph.privacy.title": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "ph.privacy.sub": { en: "How we collect, use and protect the information shared with us.", ar: "كيف نجمع ونستخدم ونحمي المعلومات المشاركة معنا." },
  "ph.terms.title": { en: "Terms & Conditions", ar: "الشروط والأحكام" },
  "ph.terms.sub": { en: "The terms that govern the use of this website and our services.", ar: "الشروط التي تنظّم استخدام هذا الموقع وخدماتنا." },
  "ph.updated": { en: "Last updated", ar: "آخر تحديث" },

  /* ---------- request page ---------- */
  "rq.badge": { en: "Request Manpower", ar: "طلب عمالة" },
  "rq.employerTab": { en: "I am an Employer", ar: "أنا صاحب عمل" },
  "rq.seekerTab": { en: "I am a Job Seeker", ar: "أنا باحث عن عمل" },
  "rq.employerHint": { en: "For companies, contractors, hotels, offices and facility managers.", ar: "للشركات والمقاولين والفنادق والمكاتب وإدارات المرافق." },
  "rq.seekerHint": { en: "For workers looking for employment opportunities.", ar: "للعمال الباحثين عن فرص عمل." },
  "rq.helpTitle": { en: "Prefer to talk first?", ar: "تفضل التحدث أولاً؟" },
  "rq.helpSub": { en: "Our manpower coordinators can take your requirement over the phone or WhatsApp.", ar: "يمكن لمنسقي العمالة استلام احتياجك عبر الهاتف أو واتساب." },
  "rq.infoTitle": { en: "Useful Information", ar: "معلومات مفيدة" },
  "rq.info1": { en: "Most common categories can be mobilised within a few working days.", ar: "يمكن تجهيز معظم الفئات الشائعة خلال أيام عمل قليلة." },
  "rq.info2": { en: "Quotations are prepared per worker or per team with full inclusions.", ar: "تُعد عروض الأسعار لكل عامل أو فريق مع بيان كامل للبنود." },
  "rq.info3": { en: "Mention accommodation and transport needs to get accurate pricing.", ar: "اذكر احتياج السكن والنقل للحصول على تسعير دقيق." },
  "rq.info4": { en: "Replacement support is available within the contract terms.", ar: "دعم الاستبدال متاح وفقاً لشروط العقد." },

  /* ---------- misc ---------- */
  "misc.readMore": { en: "Learn more", ar: "اعرف المزيد" },
  "misc.viewAll": { en: "View all", ar: "عرض الكل" },
  "misc.back": { en: "Back", ar: "رجوع" },
  "misc.home": { en: "Home", ar: "الرئيسية" },
  "misc.workers": { en: "Workers", ar: "عامل" },
  "misc.scroll": { en: "Scroll", ar: "اسحب" },
  "misc.needOther": { en: "Need a role not listed here?", ar: "تحتاج وظيفة غير مذكورة هنا؟" },
  "misc.download": { en: "Company Profile", ar: "الملف التعريفي" },
  "misc.filter": { en: "Filter", ar: "تصفية" },
  "misc.results": { en: "Showing", ar: "النتائج" },
  "misc.of": { en: "of", ar: "من" },
  "misc.legal": { en: "Legal", ar: "قانوني" },
  "misc.sitemap": { en: "Sitemap", ar: "خريطة الموقع" },
};

/* ==================================================================
 *  CONTEXT
 * ================================================================== */
type Lang = "en" | "ar";
type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  isAr: boolean;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  pick: (v: L | undefined) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("zainglobal-lang");
    return saved === "ar" || saved === "en" ? saved : "en";
  });

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", dir);
    window.localStorage.setItem("zainglobal-lang", lang);
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(() => setLangState((p) => (p === "en" ? "ar" : "en")), []);

  const t = useCallback(
    (key: string) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang] ?? entry.en;
    },
    [lang],
  );

  const pick = useCallback((v: L | undefined) => (!v ? "" : (v[lang] ?? v.en)), [lang]);

  const value = useMemo(
    () => ({ lang, dir, isAr: lang === "ar", setLang, toggleLang, t, pick }),
    [lang, dir, setLang, toggleLang, t, pick],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
