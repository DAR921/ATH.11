const ranks = [
  "جندي",
  "جندي اول",
  "عريف + وكيل رقيب",
  "رقيب + رقيب اول",
  "رئيس رقباء",
  "ملازم",
  "ملازم اول",
  "نقيب",
  "رائد",
  "مقدم ركن",
  "عقيد ركن",
  "عميد ركن"
];

const penalties = {
  "الدرجة الأولى": [
    "شفهي أول + 150 الف",
    "شفهي أول + 200 الف",
    "شفهي أول + 250 الف",
    "شفهي أول + 300 الف",
    "شفهي اول + 300 الف",
    "شفهي اول + 350 الف",
    "شفهي اول + 350 الف",
    "شفهي اول + 400 الف",
    "شفهي ثاني + 500 الف",
    "شفهي اخير + 600 الف",
    "شفهي اخير + 700 الف",
    "انذار وظيفي اول + مليون"
  ],
  "الدرجة الثانية": [
    "شفهي أول + 250 الف",
    "شفهي ثاني + 200 الف",
    "شفهي ثاني + 300 الف",
    "شفهي ثاني + 350 الف",
    "شفهي ثاني + 400 الف",
    "شفهي ثاني + 450 الف",
    "شفهي ثاني + 450 الف",
    "شفهي اثاني + 500 الف",
    "شفهي اخير + مليون",
    "وظيفي اول + غرامة مليون",
    "وظيفي اول + غرامة مليون و 500 الف",
    "وظيفي ثاني + غرامة 2 مليون"
  ],
  "الدرجة الثالثة": [
    "شفهي اول + 300 الف",
    "شفهي اخير + 350 الف",
    "شفهي اخير + 350 الف",
    "شفهي اخير + 400 الف",
    "شفهي اخير + 450 الف",
    "شفهي اخير + 500 الف",
    "شفهي اخير + 600 الف",
    "شفهي اخير + 600 الف",
    "وظيفي اول + مليون",
    "وظيفي اثاني + غرامة 2 مليون",
    "وظيفي ثاني + غرامة 2 مليون",
    "وظيفي ثالث + غرامة 2 مليون"
  ],
  "الدرجة الرابعة": [
    "شفهي ثاني + 350 الف",
    "شفهي اخير + 450 الف",
    "انذار وظيفي اول + 450 الف",
    "وظيفي اول + 500 الف",
    "وظيفي اول + 500 الف",
    "انذار وظيفي ثاني + مليون",
    "انذار وظيفي ثاني + مليون",
    "انذار وظيفي ثاني + مليون",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام"
  ],
  "الدرجة الخامسة": [
    "غير محدد في ملف الأحكام",
    "فصل من الخدمة",
    "انذار وظيفي ثاني + 500 الف",
    "انذار وظيفي ثاني + 500 الف",
    "انذار وظيفي ثاني + 500 الف",
    "كسر رتبة بعد مراجعة المسؤولين",
    "كسر رتبة بعد مراجعة المسؤولين",
    "كسر رتبة بعد مراجعة المسؤولين",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام"
  ],
  "الدرجة السادسة": [
    "فصل من الخدمة",
    "مراجعة المسؤولين",
    "مراجعة المسؤولين",
    "مراجعة المسؤولين",
    "مراجعة المسؤولين",
    "مراجعة المسؤولين",
    "مراجعة المسؤولين",
    "مراجعة المسؤولين",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام"
  ],
  "الدرجة السابعة": [
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "تقديرية تصل الى الفصل من الخدمة",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام",
    "غير محدد في ملف الأحكام"
  ]
};

const charges = {
  "الدرجة الأولى": [
    "استيقاف مروري او التصدي للمجرمين بشكل خاطئ",
    "مخالفة قوانين نقاط التفتيش",
    "إبقاء المجرم في الدورية والتوجه لحالات أخرى",
    "مخالفة قوانين الميدان بشكل عام",
    "عدم تسليم الممنوعات",
    "عدم تغيير المسمى الميداني",
    "مخالفة قوانين الغفوة",
    "دخول الميناء بالمركبة الشخصية",
    "عدم",
    "مخالفة قوانين المشتركه",
    "تكرار التنويهات بالموجة لاكثر من 3 مرات خلال 5 دقائق",
    "الوقوف بمواقف ليست مخصصة لرتبه",
    "عدم ربط الفايف ام بالدسكورد",
    "عدم رفع نداء استغاثة"
  ],
  "الدرجة الثانية": [
    "تخطي المراجع",
    "دخول موجات غير معتمدة",
    "عدم التجاوب , إهمال التوجيهات في الراديو",
    "عدم الإلتزام بالعهدة العسكرية",
    "سجن شخص ( 20 شهر ) بدون اذن ضابط",
    "عدم الاتزام بالمظهر العسكري حلاقة الشعر-الوشوم -الخ.",
    "عدم الالتزام بالأنظمة المرورية",
    "وضع حواجز او كشك بدون اذن",
    "تكرير طلب رتبة عالية بلا مبرر مقنع",
    "مخالفة قوانين تسجيل الدخول والخروج والبقاء في المركز",
    "استخدام المنشن بشكل خاطئ",
    "التأخر عن الاصطفاف",
    "مخالفه قوانين السجلات الجنائيه",
    "عدم الإلتزام ببرتوكولات الراديو",
    "مخالفات غير مستحقه",
    "مخالفة قوانين رسائل امن المنشأت",
    "ارسال نموذج خاطئ",
    "مخالفه قوانين الفصل اثناء السيناريو",
    "مخالفة قوانين الإعتقال أو التعامل مع المتهمين",
    "الانسحاب قبل انتهاء الحاله",
    "ادخال حمولة مخالفة",
    "ادخال حموله غير واقعيه",
    "مخالفه قوانين السجن ( سجن غير صحيح )",
    "عدم الاتزام بالزي العسكري المحدد لرتبتك",
    "التوجهه للمركز دون اذن",
    "كشف هويه البحث الجنائي",
    "التوجه دون اذن العمليات",
    "عدم الالتزام بالاصطفاف العسكري"
  ],
  "الدرجة الثالثة": [
    "عدم التقيد بقواعد المطارادات",
    "سوء التعامل مع الحالات",
    "مخالفة قوانين التوجه إلى الحالات",
    "مخالفة تعاميم أو قوانين امن المننشات المحدثة",
    "دخول موجه الرقابة دون اذن",
    "التهرب من إستلام مركز العمليات او احد البوابات",
    "مخالفه قوانين العمليات",
    "التدخل في مهام أو صلاحيات الغير بأي شكل من الأشكال",
    "تسجيل دخول لمباشرة حالة ثم تسجيل خروجه",
    "إضافة شروط الهروب الأمن غيرر المحددة ضمن التعميمات",
    "اطلاق النار بطريقه غير نظاميه",
    "تحرير الرهائن بدون اذن او الفشل في تحريرها",
    "مخالفه قوانين المركبات",
    "الانسحاب من موقع التوجيه بدون اذن",
    "عدم الإلتزام بضوابط التفاوض",
    "مخالفة قوانين الاجازات",
    "التقصير في العمل الأداري أو الميداني",
    "استخدام سلاح الثقيل بشكل خاطئ",
    "التقصير بمهام ضابط خفر",
    "التهاون مع المجرم",
    "مخالفة قوانين المصادرات بشكل كامل",
    "تخريب سيناريو",
    "اعطاء امر مخالف",
    "مخالفة قوانين الدورات",
    "استخدام المركبة كسلاح"
  ],
  "الدرجة الرابعة": [
    "العبث بالعهدة العسكرية",
    "عدم الجدية اثناء الدوام كعسكري",
    "استخدام السلطة بغير حق",
    "إهمال الرتب العليا للميدان",
    "الاساءه لـ الشرطة العسكريه باي شكل من الاشكال",
    "عدم احترام المواطنين",
    "المناقشة أمام الأفراد",
    "عدم احترام الافراد فيما بينهم",
    "التأخر في فتح التوسعات",
    "مجادلة ضابط"
  ],
  "الدرجة الخامسة": [
    "الكذب على المسؤولين",
    "مخالفة أمر مباشر او عدم انصياع لـ الأوامر",
    "التلفظ على مواطن او الاساءه له باي شكل من الاشكال",
    "مخالفة قوانين المصادرة سواء بالأخذ او بالتخزين",
    "عدم تمثيل العسكرية بصورة صحيحة بأي شكل من الأشكال",
    "استخدام السلطة او الوظيفه للمصلحه الشخصيه",
    "الاساءه لقطاعات اخرى باي شكل من الاشكال",
    "التلاعب بالساعات والتأفيك",
    "استخدام السنايبر بشكل خاطئ",
    "استخدام السلطة بطريقة مخالفة"
  ],
  "الدرجة السادسة": [
    "الترصد لزملائك بغاية الحقد سواء بسبب او بغير سبب",
    "عدم احترام الرتب العليا",
    "تخريب برتبة عسكرية",
    "الإساءة لامن المنشأت سواء خارج او داخل الرول بلاي أو بأي شكل من الأشكال",
    "تسريب معلومات او نسخ جداول امن المنشأت و نقلها الى سيرفرات اخرى",
    "عدم تنفيذ الجزاء الذي عليك",
    "فساد عسكري"
  ],
  "الدرجة السابعة": [
    "عدم تواجد لفترة طويلة",
    "عدم الانصياع لاوامر القادة",
    "التهرب الوظيفي",
    "عدم تسديد الغرامات لاكثر من اسبوعين",
    "التستر على امر مخالف باي شكل من الاشكال"
  ]
};

const fields = {
  fileNum: document.getElementById("fileNum"),
  investigator: document.getElementById("investigator"),
  soldier: document.getElementById("soldier"),
  rank: document.getElementById("rank"),
  gradeFilter: document.getElementById("gradeFilter"),
  chargeSelect: document.getElementById("chargeSelect"),
  manualCharge: document.getElementById("manualCharge"),
  manualChargeField: document.getElementById("manualChargeField"),
  manualVerdict: document.getElementById("manualVerdict"),
  manualVerdictField: document.getElementById("manualVerdictField"),
  attended: document.getElementById("attended"),
  guilty: document.getElementById("guilty"),
  warning: document.getElementById("warning"),
  handover: document.getElementById("handover"),
  evidence: document.getElementById("evidence"),
  verdict: document.getElementById("verdict")
};

const copyBtn = document.getElementById("copyBtn");
const formStatus = document.getElementById("formStatus");
const gradeBadge = document.getElementById("gradeBadge");
const reportPreview = document.getElementById("reportPreview");
const toast = document.getElementById("toast");
const form = document.getElementById("investigationForm");

function fillSelects() {
  fields.rank.innerHTML = '<option value="">اختر الرتبة...</option>';
  ranks.forEach((rank, index) => {
    fields.rank.add(new Option(rank, String(index)));
  });

  fields.gradeFilter.innerHTML = '<option value="all">كل الدرجات</option>';
  Object.keys(charges).forEach((grade) => fields.gradeFilter.add(new Option(grade, grade)));
  renderCharges();

  const count = Object.values(charges).reduce((total, list) => total + list.length, 0);
  document.getElementById("chargesCount").textContent = count;
}

function renderCharges() {
  const selectedGrade = fields.gradeFilter.value || "all";
  const currentValue = fields.chargeSelect.value;
  fields.chargeSelect.innerHTML = '<option value="">اختر التهمة...</option>';

  const manualOption = new Option("يدوي", "manual|manual");
  fields.chargeSelect.appendChild(manualOption);

  Object.entries(charges).forEach(([grade, list]) => {
    if (selectedGrade !== "all" && selectedGrade !== grade) return;
    const group = document.createElement("optgroup");
    group.label = grade;
    list.forEach((charge) => {
      const option = new Option(charge, `${grade}|${charge}`);
      group.appendChild(option);
    });
    fields.chargeSelect.appendChild(group);
  });

  if ([...fields.chargeSelect.options].some((option) => option.value === currentValue)) {
    fields.chargeSelect.value = currentValue;
  }
}

function isManualCharge() {
  return fields.chargeSelect.value === "manual|manual";
}

function getSelectedCharge() {
  const value = fields.chargeSelect.value;
  if (!value) return { grade: "", charge: "" };
  if (value === "manual|manual") {
    return { grade: "يدوي", charge: fields.manualCharge.value.trim() };
  }
  const [grade, ...chargeParts] = value.split("|");
  return { grade, charge: chargeParts.join("|") };
}

function calculateVerdict() {
  const rankIndex = fields.rank.value;
  const manual = isManualCharge();

  fields.manualChargeField.style.display = manual ? "grid" : "none";
  fields.manualVerdictField.style.display = manual ? "grid" : "none";
  fields.verdict.readOnly = !manual;

  if (manual) {
    fields.verdict.value = fields.manualVerdict.value.trim();
    return;
  }

  fields.manualCharge.value = "";
  fields.manualVerdict.value = "";
  const { grade } = getSelectedCharge();
  fields.verdict.value = rankIndex !== "" && grade ? penalties[grade][Number(rankIndex)] || "غير محدد في ملف الأحكام" : "";
}

function buildReport() {
  const { charge } = getSelectedCharge();
  if (!isReady(false)) return "اختر البيانات لعرض التقرير هنا.";

  return `** الموضوع : فتح ملف تحقيق رقم : ${fields.fileNum.value} **\n\n` +
    `** المحقق : <@${fields.investigator.value}> **\n\n` +
    `** على العسكري المذكور : <@${fields.soldier.value}> **\n\n` +
    `** هل تم حضور الاستدعاء : ${fields.attended.value} **\n\n` +
    `** اثناء التحقيق مع العسكري هل اتضح انه مذنب : ${fields.guilty.value} **\n\n` +
    `** هل سبق وحصل العسكري على إنذار وظيفي : ${fields.warning.value} **\n\n` +
    `** التهمة الموجهة اليه : ${charge} **\n\n` +
    `** الحكم الأنسب : ${fields.verdict.value} - تسلم الى ${fields.handover.value} **\n\n` +
    `** في الختام نرجو من مجلس القضاء العسكري النظر في القضية واعطاء الحكم المناسب **\n\n` +
    `** دليل القضية : ${fields.evidence.value} **`;
}

function isReady(requireVerdict = true) {
  const required = [
    fields.fileNum,
    fields.investigator,
    fields.soldier,
    fields.rank,
    fields.chargeSelect,
    fields.attended,
    fields.guilty,
    fields.warning,
    fields.handover,
    fields.evidence
  ];
  if (isManualCharge()) {
    required.push(fields.manualCharge, fields.manualVerdict);
  }
  const hasRequired = required.every((field) => field.value.trim() !== "");
  return requireVerdict ? hasRequired && fields.verdict.value.trim() !== "" : hasRequired;
}

function updateUi() {
  calculateVerdict();
  const { grade } = getSelectedCharge();
  const ready = isReady();

  copyBtn.disabled = !ready;
  copyBtn.textContent = ready ? "نسخ تقرير التحقيق" : "الرجاء تعبئة البيانات للنسخ";
  formStatus.textContent = ready ? "جاهز للنسخ" : "غير مكتمل";
  formStatus.classList.toggle("ready", ready);
  gradeBadge.textContent = grade || "بدون درجة";
  reportPreview.textContent = buildReport();
}

async function copyContent() {
  const text = buildReport();
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }

  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

fillSelects();
updateUi();

Object.values(fields).forEach((field) => {
  field.addEventListener("input", updateUi);
  field.addEventListener("change", updateUi);
});

fields.manualCharge.addEventListener("input", updateUi);
fields.manualVerdict.addEventListener("input", updateUi);

fields.gradeFilter.addEventListener("change", () => {
  renderCharges();
  updateUi();
});

copyBtn.addEventListener("click", copyContent);
form.addEventListener("reset", () => window.setTimeout(updateUi, 0));
