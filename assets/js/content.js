/* ==========================================================================
   Qahir Altariq Transport & General Contracting — Site Content (EN / AR)
   ========================================================================== */

const CONTENT = {
en: {
  dir: "ltr",
  meta: {
    title: "Qahir Altariq Transport & General Contracting L.L.C — Abu Dhabi, UAE",
    description: "ISO 9001/14001/45001, ICV & CICPA certified transport, environmental, site support and camp services provider in Abu Dhabi, UAE. Trusted by ADNOC, Petrojet and leading contractors."
  },
  nav: {
    home: "Home", about: "About", services: "Services", fleet: "Fleet",
    why: "Why Us", certifications: "Certifications", clients: "Clients",
    gallery: "Gallery", contact: "Contact", cta: "Get a Quote", langSwitch: "العربية"
  },
  hero: {
    eyebrow: "Transport · General Contracting · Abu Dhabi, UAE",
    title: "Reliable Transport &amp; Site Support Solutions",
    subtitle: "Qahir Altariq Transport &amp; General Contracting L.L.C – S.P.C delivers transportation, environmental, site support and camp services engineered for construction, oil &amp; gas, industrial and government projects across the UAE.",
    cta1: "Explore Our Services",
    cta2: "Request a Quote",
    badgeLabel: "Certified &amp; Compliant",
    scroll: "Scroll"
  },
  stats: [
    { value: "14", suffix: "", label: "Specialized Services" },
    { value: "25.30", suffix: "%", label: "ICV Certified Score" },
    { value: "3", suffix: "", label: "ISO Certifications" },
    { value: "8", suffix: "+", label: "Fleet &amp; Equipment Categories" }
  ],
  about: {
    eyebrow: "Who We Are",
    title: "Built on Reliability, Engineered for Scale",
    p1: "<strong>Qahir Altariq Transport LLC</strong> is a leading provider of transportation, environmental, site support, and camp services, dedicated to delivering reliable and efficient solutions across various industrial and commercial sectors.",
    p2: "With years of operational experience, we proudly serve construction companies, oil &amp; gas projects, industrial facilities, government entities, labor camps, and infrastructure developments. Our commitment to safety, quality, and customer satisfaction has positioned us as a trusted partner for businesses seeking dependable logistical and support services.",
    p3: "Our professional workforce, modern fleet, and customer-focused approach enable us to execute projects of all sizes while maintaining the highest standards of operational excellence.",
    visionTitle: "Our Vision",
    vision: "To become one of the most trusted and recognized transportation and site services companies in the region by providing innovative, sustainable, and high-quality solutions that exceed client expectations.",
    missionTitle: "Our Mission",
    mission: "To deliver safe, efficient, and cost-effective transportation and support services while building long-term partnerships with our clients through professionalism, integrity, and operational excellence."
  },
  values: {
    eyebrow: "Our Core Values",
    title: "What Guides Every Operation",
    items: [
      { title: "Safety First", desc: "Safety is our top priority in every operation we perform." },
      { title: "Integrity", desc: "We conduct our business with honesty, transparency and accountability." },
      { title: "Quality", desc: "We are committed to providing services that meet and exceed industry standards." },
      { title: "Customer Satisfaction", desc: "Our clients are at the center of everything we do." },
      { title: "Teamwork", desc: "We believe collaboration and mutual respect are the foundation of success." }
    ]
  },
  services: {
    eyebrow: "What We Do",
    title: "Transport &amp; Site Support Services",
    subtitle: "A complete portfolio of transportation and site-support capabilities, built to serve construction, oil &amp; gas and industrial projects end-to-end.",
    items: [
      { tag: "Water Logistics", title: "Potable Water Transportation", img: "potable_water.jpg",
        desc: "Safe, hygienic delivery of drinking water to labor camps, construction sites, industrial facilities and remote locations.",
        points: ["Camp water supply", "Construction site water delivery", "Emergency water supply", "Bulk potable water transportation"] },
      { tag: "Water Logistics", title: "Non-Potable Water Transportation", img: "nonpotable_water.jpg",
        desc: "Efficient bulk water transport for construction, landscaping, dust suppression and industrial applications.",
        points: ["Dust control", "Soil compaction", "Irrigation support", "Construction activities", "Industrial cleaning operations"] },
      { tag: "Waste Management", title: "Sewage &amp; Wastewater Transportation", img: "sewage.jpg",
        desc: "Professional sewage collection and disposal using specialized vacuum tankers operated by trained personnel.",
        points: ["Septic tank emptying", "Camp sewage removal", "Construction site wastewater disposal", "Emergency sewage services", "Safe transport to approved disposal facilities"] },
      { tag: "Waste Management", title: "Garbage Collection &amp; Waste Bin Services", img: "waste_1.jpg",
        desc: "Complete waste management solutions including collection, transportation and skip bin supply for sites and camps.",
        points: ["Delivery &amp; placement of skip bins", "Collection &amp; transportation of filled bins", "Replacement of full bins with empty ones", "Construction &amp; demolition waste removal", "Industrial &amp; commercial waste transportation", "Scheduled &amp; on-demand service"] },
      { tag: "Site Support", title: "On-Site Equipment Washing Services", img: "washing_1.jpg",
        desc: "Mobile professional cleaning units for heavy equipment, machinery, vehicles and construction assets at project locations.",
        points: ["Maintains equipment performance", "Reduces operational downtime", "Improves workplace safety", "Extends equipment lifespan"] },
      { tag: "Structures &amp; Events", title: "Tent Installation &amp; Premium Event Structures", img: "event_tent_1.jpg",
        desc: "Turnkey supply, installation and MEP fit-out of labor camp, event, exhibition and site office tents engineered for GCC conditions.",
        points: ["High-tensile aluminum 6061-T6 / 6082-T6 framework", "850 GSM flame-retardant, waterproof PVC roofing", "Heavy-duty S275 steel reinforcement", "Flexible ground anchoring for any terrain", "Complete MEP: HVAC, electrical distribution &amp; LED lighting", "Structures from 15×15m up to 30×60m mega structures"] },
      { tag: "Parking Solutions", title: "Car Parking Shade Installation", img: "parking_curved.jpg",
        desc: "Design, fabrication and installation of flat and curved-canopy car parking shades for residential, commercial and government facilities.",
        points: ["Curved canopy &amp; cantilever systems", "Hot-dip galvanized, powder-coated steel", "UV-protected waterproof PVC or polycarbonate roofing", "Withstands wind loads up to 120 km/h", "Custom sizing to any site layout"] },
      { tag: "Parking Solutions", title: "Mechanical Car Parking Systems", img: "mechanical_parking.jpg",
        desc: "Supply and installation of automated multi-level vertical car stacking and lift systems that maximize parking capacity on a compact footprint.",
        points: ["Multi-level vertical stacking (up to 6+ cars per bay)", "Heavy-duty steel structure with hydraulic/mechanical lift", "Ideal for residential towers, offices &amp; tight urban plots", "Reduces land footprint required for parking"] },
      { tag: "Site Support", title: "Chain-Link Fence &amp; Barrier Installation", img: "fencing.jpg", icon: "fence",
        desc: "Professional installation of chain-link fencing and site security barriers for construction sites, camps and warehouses.",
        points: ["Quick installation", "Enhanced site security", "Durable galvanized materials", "Custom dimensions per project"] },
      { tag: "Safety Supply", title: "Safety &amp; PPE Equipment Supply", img: "safety_equipment.jpg", icon: "hardhat",
        desc: "Supply of certified personal protective equipment, safety workwear and fire-safety gear to keep every site, camp and crew fully compliant.",
        points: ["Safety helmets, gloves &amp; protective goggles", "Hi-visibility vests &amp; safety coveralls", "Safety boots &amp; footwear", "Ear defenders, dust masks &amp; respirators", "Fire extinguishers, alarms &amp; fire hydrants", "Site signage, barrier tape &amp; traffic cones"] },
      { tag: "Maintenance", title: "Water Tank Cleaning Services", img: "tank_cleaning.jpg",
        desc: "Professional cleaning, sanitization and preventive maintenance of potable water tanks for residential, commercial, industrial and camp facilities.",
        points: ["Potable water tank cleaning &amp; sanitization", "Underground &amp; overhead tank cleaning", "Labor camp &amp; accommodation tank cleaning", "Sludge &amp; sediment removal", "Scheduled preventive maintenance programs"] },
      { tag: "Camp Solutions", title: "Furniture, Bedding &amp; Camp Equipment Supply", img: "camp_furniture.jpg",
        desc: "Complete camp and site furnishing packages — from beds and mattresses to office furniture and general site support materials.",
        points: ["Beds &amp; bunk beds", "Mattresses &amp; bedding", "Cabinets &amp; wardrobes", "Tables &amp; chairs", "Office furniture", "Camp equipment &amp; accessories"] },
      { tag: "Industrial Systems", title: "Industrial Ice Plant Solutions &amp; Supply", img: "ice_plant.jpg",
        desc: "Sourcing, supply, installation and maintenance of high-capacity, fully automated cube ice production plants for industrial, offshore and hospitality sectors.",
        points: ["Scalable output: 3, 5 &amp; up to 10 tons/day", "SUS 304 food-grade stainless steel construction", "PLC-controlled automated ice harvesting", "ISO 9001 &amp; CE compliant machinery"] },
      { tag: "Industrial Systems", title: "Water Purification &amp; Bottling Plant Solutions", img: "bottling_1.jpg",
        desc: "Turnkey engineering, supply, installation and maintenance of industrial water purification and automated 5-gallon bottling lines.",
        points: ["Fully automated multi-stage production lines", "Automatic washing, sterilization, filling &amp; capping", "Industrial-grade stainless steel construction", "Smart PLC control for precise, hygienic filling"] }
    ]
  },
  why: {
    eyebrow: "Why Choose Us",
    title: "Why Choose Qahir Altariq?",
    items: [
      "Professional and experienced team",
      "Modern and diversified fleet",
      "24/7 operational support",
      "Commitment to safety and quality",
      "Competitive pricing",
      "Flexible and customized solutions",
      "Reliable service delivery",
      "Strong focus on customer satisfaction"
    ],
    closing: "At Qahir Altariq Transport LLC, we are committed to supporting our clients with dependable transportation and site services that contribute to the success of every project."
  },
  fleet: {
    eyebrow: "Our Fleet",
    title: "Modern Fleet &amp; Equipment",
    subtitle: "A well-maintained, diverse fleet designed to meet the demands of every project — from single tankers to full camp mobilizations.",
    items: [
      "Potable Water Tankers", "Non-Potable Water Tankers", "Sewage Vacuum Tankers",
      "Waste Collection Trucks", "Skip Bin Trucks", "Equipment Washing Units",
      "Flatbed Trucks for Material Transportation", "Support Vehicles &amp; Site Service Units"
    ],
    note: "All vehicles undergo regular maintenance and safety inspections to ensure maximum performance and compliance with local regulations."
  },
  certifications: {
    eyebrow: "Certifications &amp; Compliance",
    title: "Certified to International Standards",
    subtitle: "Our quality, environmental, occupational health and security compliance is independently verified and audited on a recurring basis.",
    scopeLabel: "Scope",
    scopeText: "Construction &amp; demolition, concrete waste &amp; land transportation, facilities support for onshore/offshore oil &amp; gas fields, general contracting, materials transport by light &amp; heavy trucks, non-metallic waste &amp; water transportation services.",
    viewCert: "View Certificate",
    items: [
      { name: "ISO 9001:2015", sub: "Quality Management System", no: "Certificate No. 070426019727", valid: "Valid until 06 Apr 2029", img: "iso_9001.jpg" },
      { name: "ISO 14001:2015", sub: "Environmental Management System", no: "Certificate No. 070426029728", valid: "Valid until 06 Apr 2029", img: "iso_14001.jpg" },
      { name: "ISO 45001:2018", sub: "Occupational Health &amp; Safety Management", no: "Certificate No. 070426039729", valid: "Valid until 06 Apr 2029", img: "iso_45001.jpg" },
      { name: "ICV Certified", sub: "In-Country Value — 25.30% Score", no: "Certificate No. 153691 · License CN-6410789", valid: "Valid until 19 Jun 2027", img: "icv_certificate.jpg" },
      { name: "CICPA Approved", sub: "Critical Infrastructure &amp; Coastal Protection Authority", no: "Cleared personnel &amp; fleet for restricted zones", valid: "Strategic logistics partner for ADNOC &amp; subsidiaries", img: "" }
    ]
  },
  clients: {
    eyebrow: "Our Valued Clients",
    title: "Trusted by Industry Leaders",
    intro: "Qahir has built a solid reputation as a reliable strategic partner across the UAE. We take pride in our track record of delivering high-quality transportation, logistics, and contracting solutions to some of the most prominent organizations in the oil, gas, offshore, and construction sectors.",
    items: [
      { name: "Abu Dhabi National Oil Company", sub: "ADNOC", img: "adnoc.jpg" },
      { name: "Petrojet", sub: "The Petroleum Projects &amp; Technical Consultations Co", img: "petrojet.jpg" },
      { name: "Al Fara'a Group", sub: "Construction · Properties · Industries", img: "al_faraa.jpg" },
      { name: "Oilserv", sub: "Oilfield Services", img: "oilserv.jpg" },
      { name: "Al Wazan", sub: "General Contracting &amp; Oil Fields Services", img: "al_wazan.jpg" },
      { name: "Sari Offshore", sub: "Oil Field Services", img: "sari_offshore.jpg" },
      { name: "Obaid Alqubaisi", sub: "Contracting Transport", img: "obaid_alqubaisi.jpg" },
      { name: "Robert Stones Holding", sub: "Civil &amp; Structural Engineers", img: "robert_stones.jpg" }
    ]
  },
  gallery: {
    eyebrow: "Our Work",
    title: "Project Gallery",
    subtitle: "A glimpse into our fleet, structures and completed site works."
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Let's Discuss Your Project",
    subtitle: "Reach out for tenders, quotations or general inquiries — our team responds promptly to support your project timeline.",
    locationLabel: "Location",
    locationValue: "Bida Zayed City, Al Dhafra Region, Abu Dhabi, UAE",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsapp: "Chat on WhatsApp",
    form: {
      name: "Full Name", company: "Company", email: "Email Address", phone: "Phone Number",
      service: "Service Needed", servicePlaceholder: "Select a service",
      message: "Message", messagePlaceholder: "Tell us about your project or requirements…",
      submit: "Send Request via Email",
      note: "Submitting opens your email app with the details pre-filled, addressed directly to our team."
    }
  },
  footer: {
    tagline: "Reliable Transport &amp; Contracting Solutions",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    svc1: "Water Transportation", svc2: "Waste Management", svc3: "Tents &amp; Structures",
    svc4: "Parking Shades", svc5: "Camp Solutions",
    getInTouch: "Get in Touch",
    copyright: "© 2026 Qahir Altariq Transport &amp; General Contracting L.L.C – S.P.C. All rights reserved.",
    credit: ""
  },
  lightbox: { close: "Close" }
},

/* ============================== ARABIC ============================== */
ar: {
  dir: "rtl",
  meta: {
    title: "قاهر الطريق للنقليات والمقاولات العامة ذ.م.م — أبوظبي، الإمارات",
    description: "مزوّد خدمات نقل وبيئة ودعم مواقع ومخيمات معتمد بشهادات ISO 9001/14001/45001 وICV وCICPA في أبوظبي، الإمارات. موثوق من أدنوك وبتروجيت وكبرى شركات المقاولات."
  },
  nav: {
    home: "الرئيسية", about: "من نحن", services: "خدماتنا", fleet: "الأسطول",
    why: "لماذا نحن", certifications: "الشهادات", clients: "عملاؤنا",
    gallery: "معرض الأعمال", contact: "تواصل معنا", cta: "اطلب عرض سعر", langSwitch: "English"
  },
  hero: {
    eyebrow: "نقليات · مقاولات عامة · أبوظبي، الإمارات",
    title: "حلول نقل ودعم مواقع يُعتمد عليها",
    subtitle: "تقدّم قاهر الطريق للنقليات والمقاولات العامة ذ.م.م خدمات النقل والبيئة ودعم المواقع والمخيمات، مصممة لتخدم مشاريع الإنشاءات والنفط والغاز والصناعة والجهات الحكومية في جميع أنحاء دولة الإمارات.",
    cta1: "استعرض خدماتنا",
    cta2: "اطلب عرض سعر",
    badgeLabel: "معتمدون ومطابقون للمواصفات",
    scroll: "مرر للأسفل"
  },
  stats: [
    { value: "14", suffix: "", label: "خدمة متخصصة" },
    { value: "25.30", suffix: "%", label: "نسبة اعتماد القيمة الوطنية" },
    { value: "3", suffix: "", label: "شهادات آيزو دولية" },
    { value: "8", suffix: "+", label: "فئات أسطول ومعدات" }
  ],
  about: {
    eyebrow: "من نحن",
    title: "أساس من الموثوقية، وقدرات مصمَّمة للتوسّع",
    p1: "<strong>قاهر الطريق للنقليات ذ.م.م</strong> شركة رائدة في تقديم خدمات النقل والبيئة ودعم المواقع والمخيمات، ونحرص على تقديم حلول موثوقة وفعّالة عبر مختلف القطاعات الصناعية والتجارية.",
    p2: "بفضل سنوات من الخبرة التشغيلية، نخدم بفخر شركات المقاولات ومشاريع النفط والغاز والمنشآت الصناعية والجهات الحكومية ومخيمات العمالة ومشاريع البنية التحتية. التزامنا بالسلامة والجودة ورضا العملاء جعلنا شريكًا موثوقًا للشركات التي تبحث عن خدمات لوجستية وداعمة يمكن الاعتماد عليها.",
    p3: "يمكّننا فريقنا المحترف وأسطولنا الحديث ونهجنا الذي يركّز على العميل من تنفيذ مشاريع بمختلف الأحجام مع الحفاظ على أعلى معايير التميّز التشغيلي.",
    visionTitle: "رؤيتنا",
    vision: "أن نكون من أكثر شركات النقل وخدمات المواقع ثقةً وتميزًا في المنطقة، من خلال تقديم حلول مبتكرة ومستدامة وعالية الجودة تفوق توقعات عملائنا.",
    missionTitle: "رسالتنا",
    mission: "تقديم خدمات نقل ودعم آمنة وفعّالة واقتصادية، مع بناء شراكات طويلة الأمد مع عملائنا قائمة على الاحترافية والنزاهة والتميّز التشغيلي."
  },
  values: {
    eyebrow: "قيمنا الأساسية",
    title: "ما يوجّه كل عملية نقوم بها",
    items: [
      { title: "السلامة أولاً", desc: "السلامة أولويتنا القصوى في كل عملية نقوم بها." },
      { title: "النزاهة", desc: "نُدير أعمالنا بصدق وشفافية ومسؤولية." },
      { title: "الجودة", desc: "نلتزم بتقديم خدمات تلبي أعلى معايير الصناعة وتتجاوزها." },
      { title: "رضا العملاء", desc: "عملاؤنا هم محور كل ما نقوم به." },
      { title: "العمل الجماعي", desc: "نؤمن بأن التعاون والاحترام المتبادل هما أساس النجاح." }
    ]
  },
  services: {
    eyebrow: "ماذا نقدّم",
    title: "خدمات النقل ودعم المواقع",
    subtitle: "مجموعة متكاملة من قدرات النقل ودعم المواقع، مصمَّمة لخدمة مشاريع الإنشاءات والنفط والغاز والصناعة من الألف إلى الياء.",
    items: [
      { tag: "لوجستيات المياه", title: "نقل المياه الصالحة للشرب", img: "potable_water.jpg",
        desc: "توصيل آمن وصحي لمياه الشرب إلى مخيمات العمالة ومواقع الإنشاءات والمنشآت الصناعية والمواقع النائية.",
        points: ["تزويد المخيمات بالمياه", "توصيل المياه لمواقع الإنشاءات", "إمدادات مياه للطوارئ", "نقل المياه الصالحة للشرب بالجملة"] },
      { tag: "لوجستيات المياه", title: "نقل المياه غير الصالحة للشرب", img: "nonpotable_water.jpg",
        desc: "نقل فعّال للمياه غير الصالحة للشرب لأعمال الإنشاءات وتنسيق المواقع وكبح الغبار والتطبيقات الصناعية.",
        points: ["مكافحة الغبار", "دك التربة", "دعم أعمال الري", "أنشطة الإنشاءات", "عمليات التنظيف الصناعي"] },
      { tag: "إدارة النفايات", title: "نقل الصرف الصحي ومياه الصرف", img: "sewage.jpg",
        desc: "تجميع والتخلص الاحترافي من مياه الصرف الصحي باستخدام شاحنات شفط متخصصة يشغّلها كادر مدرّب.",
        points: ["تفريغ خزانات الصرف الصحي", "إزالة صرف المخيمات", "التخلص من مياه الصرف بمواقع الإنشاء", "خدمات الصرف الصحي الطارئة", "النقل الآمن لمرافق التخلص المعتمدة"] },
      { tag: "إدارة النفايات", title: "جمع القمامة وخدمات حاويات النفايات", img: "waste_1.jpg",
        desc: "حلول متكاملة لإدارة النفايات تشمل الجمع والنقل وتوريد حاويات النفايات للمواقع والمخيمات.",
        points: ["توصيل وتركيب حاويات النفايات", "جمع ونقل الحاويات الممتلئة", "استبدال الحاويات الممتلئة بأخرى فارغة", "إزالة نفايات الهدم والإنشاءات", "نقل النفايات الصناعية والتجارية", "خدمة مجدولة وعند الطلب"] },
      { tag: "دعم المواقع", title: "خدمات غسيل المعدات في الموقع", img: "washing_1.jpg",
        desc: "وحدات متنقّلة احترافية لتنظيف المعدات الثقيلة والآليات والمركبات وأصول الإنشاءات في موقع المشروع مباشرة.",
        points: ["الحفاظ على أداء المعدات", "تقليل التوقف التشغيلي", "تحسين السلامة في مكان العمل", "إطالة العمر الافتراضي للمعدات"] },
      { tag: "الهياكل والفعاليات", title: "تركيب الخيام والهياكل الفاخرة للفعاليات", img: "event_tent_1.jpg",
        desc: "توريد وتركيب وتجهيز كامل (ميكانيكا وكهرباء وسباكة) لخيام مخيمات العمالة والفعاليات والمعارض والمكاتب الميدانية، مصمَّمة لأجواء الخليج.",
        points: ["هيكل ألمنيوم عالي الشدّ 6061-T6 / 6082-T6", "تغطية PVC مقاومة للحريق والماء بكثافة 850 جرام", "تدعيم بالصلب الثقيل S275", "أنظمة تثبيت أرضية مرنة لأي نوع تضاريس", "تجهيزات كهروميكانيكية متكاملة وإضاءة LED", "هياكل من 15×15م وحتى هياكل ضخمة 30×60م"] },
      { tag: "حلول المواقف", title: "تركيب مظلات مواقف السيارات", img: "parking_curved.jpg",
        desc: "تصميم وتصنيع وتركيب مظلات مواقف السيارات المسطحة والمنحنية للمنشآت السكنية والتجارية والحكومية.",
        points: ["أنظمة مظلات منحنية وكابولي", "صلب مجلفن بالغمس الساخن ومطلي بالباودر", "تغطية PVC أو بولي كربونات مقاومة للأشعة فوق البنفسجية والماء", "تتحمّل سرعة رياح تصل حتى 120 كم/س", "مقاسات مخصّصة حسب تصميم الموقع"] },
      { tag: "حلول المواقف", title: "أنظمة مواقف السيارات الميكانيكية", img: "mechanical_parking.jpg",
        desc: "توريد وتركيب أنظمة تكديس ورفع السيارات الآلية متعددة المستويات، لتعظيم الاستيعاب في أصغر مساحة أرض ممكنة.",
        points: ["تكديس عمودي متعدد المستويات (حتى 6+ سيارات لكل وحدة)", "هيكل صلب متين مع نظام رفع هيدروليكي/ميكانيكي", "مثالي للأبراج السكنية والمكاتب والقطع الأرضية الضيقة", "يقلّل مساحة الأرض اللازمة لمواقف السيارات"] },
      { tag: "دعم المواقع", title: "تركيب السياج الشبكي والحواجز", img: "fencing.jpg", icon: "fence",
        desc: "تركيب احترافي للأسيجة الشبكية وحواجز التأمين لمواقع الإنشاءات والمخيمات والمستودعات.",
        points: ["تركيب سريع", "تعزيز أمن الموقع", "مواد مجلفنة عالية المتانة", "أبعاد مخصّصة حسب المشروع"] },
      { tag: "توريد السلامة", title: "توريد معدات السلامة ومستلزمات الوقاية الشخصية", img: "safety_equipment.jpg", icon: "hardhat",
        desc: "توريد معدات الوقاية الشخصية المعتمدة وملابس السلامة وتجهيزات مكافحة الحريق، لضمان التزام كامل في كل موقع ومخيم وفريق عمل.",
        points: ["خوذ السلامة والقفازات والنظارات الواقية", "سترات عاكسة وأفرولات سلامة", "أحذية وجزم السلامة", "واقيات أذن وكمامات وأقنعة تنفس", "طفايات حريق وأجهزة إنذار وحنفيات إطفاء", "لافتات المواقع وشريط التحذير والمخاريط المرورية"] },
      { tag: "الصيانة", title: "خدمات تنظيف خزانات المياه", img: "tank_cleaning.jpg",
        desc: "تنظيف وتعقيم وصيانة وقائية احترافية لخزانات مياه الشرب للمنشآت السكنية والتجارية والصناعية والمخيمات.",
        points: ["تنظيف وتعقيم خزانات مياه الشرب", "تنظيف الخزانات الأرضية والعلوية", "تنظيف خزانات مخيمات العمالة والسكن", "إزالة الرواسب والطمي", "برامج صيانة وقائية مجدولة"] },
      { tag: "حلول المخيمات", title: "توريد الأثاث والمفروشات ومعدات المخيمات", img: "camp_furniture.jpg",
        desc: "باقات تأثيث متكاملة للمواقع والمخيمات، من الأسرّة والمراتب إلى أثاث المكاتب ومستلزمات دعم المواقع العامة.",
        points: ["أسرّة وأسرّة بطابقين", "مراتب ومفروشات", "خزائن ودواليب", "طاولات وكراسي", "أثاث مكتبي", "معدات وإكسسوارات المخيمات"] },
      { tag: "أنظمة صناعية", title: "حلول وتوريد مصانع الثلج الصناعية", img: "ice_plant.jpg",
        desc: "توريد وتركيب وصيانة محطات إنتاج ثلج مكعّب صناعية عالية الطاقة وأوتوماتيكية بالكامل للقطاعات الصناعية والبحرية والفندقية.",
        points: ["إنتاجية مرنة تصل حتى 3 و5 و10 أطنان يوميًا", "تصنيع من الفولاذ المقاوم للصدأ الغذائي SUS 304", "حصاد ثلج آلي بالكامل عبر أنظمة PLC", "معدات مطابقة لمواصفات ISO 9001 وCE"] },
      { tag: "أنظمة صناعية", title: "حلول محطات تنقية وتعبئة المياه", img: "bottling_1.jpg",
        desc: "هندسة وتوريد وتركيب وصيانة متكاملة لمحطات تنقية المياه الصناعية وخطوط تعبئة القوارير سعة 5 جالون الأوتوماتيكية.",
        points: ["خطوط إنتاج أوتوماتيكية متعددة المراحل", "غسيل وتعقيم وتعبئة وتغطية آلي بالكامل", "تصنيع من الفولاذ المقاوم للصدأ عالي الجودة", "تحكم ذكي عبر PLC لتعبئة دقيقة وصحية"] }
    ]
  },
  why: {
    eyebrow: "لماذا نحن",
    title: "لماذا تختار قاهر الطريق؟",
    items: [
      "فريق عمل محترف وذو خبرة",
      "أسطول حديث ومتنوّع",
      "دعم تشغيلي على مدار الساعة",
      "التزام بالسلامة والجودة",
      "أسعار تنافسية",
      "حلول مرنة ومخصّصة",
      "تسليم خدمة يمكن الاعتماد عليه",
      "تركيز قوي على رضا العملاء"
    ],
    closing: "في قاهر الطريق للنقليات ذ.م.م، نلتزم بدعم عملائنا بخدمات نقل ومواقع يمكن الاعتماد عليها تسهم في نجاح كل مشروع."
  },
  fleet: {
    eyebrow: "أسطولنا",
    title: "أسطول ومعدات حديثة",
    subtitle: "أسطول متنوّع وجيد الصيانة، مصمَّم لتلبية متطلبات كل مشروع — من صهريج واحد إلى تعبئة مخيم كامل.",
    items: [
      "صهاريج مياه صالحة للشرب", "صهاريج مياه غير صالحة للشرب", "شاحنات شفط الصرف الصحي",
      "شاحنات جمع النفايات", "شاحنات حاويات النفايات", "وحدات غسيل المعدات",
      "شاحنات مسطحة لنقل المواد", "مركبات الدعم وخدمة المواقع"
    ],
    note: "تخضع جميع المركبات لصيانة دورية وفحوصات سلامة لضمان أعلى أداء والامتثال للوائح المحلية."
  },
  certifications: {
    eyebrow: "الشهادات والاعتماد",
    title: "معتمدون وفق المعايير الدولية",
    subtitle: "يخضع التزامنا بالجودة والبيئة والصحة المهنية والسلامة الأمنية لتدقيق مستقل ودوري.",
    scopeLabel: "نطاق الاعتماد",
    scopeText: "أعمال الهدم ونقل نفايات الخرسانة والأراضي، خدمات دعم المرافق للحقول النفطية البرية والبحرية، أعمال المقاولات العامة، نقل المواد بالشاحنات الخفيفة والثقيلة، ونقل النفايات غير المعدنية والمياه.",
    viewCert: "عرض الشهادة",
    items: [
      { name: "ISO 9001:2015", sub: "نظام إدارة الجودة", no: "رقم الشهادة 070426019727", valid: "صالحة حتى 06 أبريل 2029", img: "iso_9001.jpg" },
      { name: "ISO 14001:2015", sub: "نظام الإدارة البيئية", no: "رقم الشهادة 070426029728", valid: "صالحة حتى 06 أبريل 2029", img: "iso_14001.jpg" },
      { name: "ISO 45001:2018", sub: "نظام إدارة الصحة والسلامة المهنية", no: "رقم الشهادة 070426039729", valid: "صالحة حتى 06 أبريل 2029", img: "iso_45001.jpg" },
      { name: "شهادة ICV", sub: "القيمة المضافة المحلية — نسبة 25.30%", no: "شهادة رقم 153691 · رخصة CN-6410789", valid: "صالحة حتى 19 يونيو 2027", img: "icv_certificate.jpg" },
      { name: "اعتماد CICPA", sub: "هيئة حماية المنشآت الحيوية والسواحل", no: "كادر وأسطول معتمدون للمناطق المقيَّدة", valid: "شريك لوجستي استراتيجي لأدنوك وشركاتها التابعة", img: "" }
    ]
  },
  clients: {
    eyebrow: "عملاؤنا الكرام",
    title: "موثوقون من قادة الصناعة",
    intro: "بنت قاهر الطريق سمعة راسخة كشريك استراتيجي موثوق في جميع أنحاء الإمارات. ونفخر بسجلّنا الحافل في تقديم حلول نقل ولوجستيات ومقاولات عالية الجودة لبعض أبرز المؤسسات في قطاعات النفط والغاز والأعمال البحرية والإنشاءات.",
    items: [
      { name: "شركة بترول أبوظبي الوطنية", sub: "ADNOC", img: "adnoc.jpg" },
      { name: "بتروجيت", sub: "شركة المشروعات البترولية والاستشارات الفنية", img: "petrojet.jpg" },
      { name: "مجموعة الفارع", sub: "إنشاءات · عقارات · صناعات", img: "al_faraa.jpg" },
      { name: "أويل سيرف", sub: "خدمات الحقول النفطية", img: "oilserv.jpg" },
      { name: "الوزان", sub: "المقاولات العامة وخدمات الحقول النفطية", img: "al_wazan.jpg" },
      { name: "ساري أوفشور", sub: "خدمات الحقول النفطية", img: "sari_offshore.jpg" },
      { name: "عبيد القبيسي", sub: "مقاولات النقل", img: "obaid_alqubaisi.jpg" },
      { name: "روبرت ستونز القابضة", sub: "مهندسون مدنيون وإنشائيون", img: "robert_stones.jpg" }
    ]
  },
  gallery: {
    eyebrow: "أعمالنا",
    title: "معرض المشاريع",
    subtitle: "لمحة من أسطولنا وهياكلنا وأعمال مواقعنا المنجزة."
  },
  contact: {
    eyebrow: "تواصل معنا",
    title: "لنتحدث عن مشروعك",
    subtitle: "تواصلوا معنا للمناقصات أو عروض الأسعار أو أي استفسار عام — فريقنا يستجيب بسرعة لدعم الجدول الزمني لمشروعكم.",
    locationLabel: "الموقع",
    locationValue: "مدينة بدع زايد، منطقة الظفرة، أبوظبي، الإمارات العربية المتحدة",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    whatsapp: "تواصل عبر واتساب",
    form: {
      name: "الاسم الكامل", company: "الشركة", email: "البريد الإلكتروني", phone: "رقم الهاتف",
      service: "الخدمة المطلوبة", servicePlaceholder: "اختر خدمة",
      message: "الرسالة", messagePlaceholder: "أخبرنا عن مشروعك أو متطلباتك…",
      submit: "إرسال الطلب عبر البريد الإلكتروني",
      note: "عند الإرسال سيتم فتح تطبيق البريد الإلكتروني لديك مع تعبئة التفاصيل تلقائيًا وتوجيهها مباشرة إلى فريقنا."
    }
  },
  footer: {
    tagline: "حلول نقل ومقاولات يُعتمد عليها",
    quickLinks: "روابط سريعة",
    ourServices: "خدماتنا",
    svc1: "نقل المياه", svc2: "إدارة النفايات", svc3: "الخيام والهياكل",
    svc4: "مظلات المواقف", svc5: "حلول المخيمات",
    getInTouch: "تواصل معنا",
    copyright: "© 2026 قاهر الطريق للنقليات والمقاولات العامة ذ.م.م. جميع الحقوق محفوظة.",
    credit: ""
  },
  lightbox: { close: "إغلاق" }
}
};

if (typeof module !== "undefined") { module.exports = CONTENT; }
