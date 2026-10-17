/**
 * DR HOME — Flagship Home Appliance Store Engine
 * Supports: RTL/LTR Bilingual (AR/EN), Pages CMS JSON decoupling,
 * SPA Routing (11 Views), Product Comparison, Cart & Direct WhatsApp Ordering,
 * and Dynamic Schema.org JSON-LD.
 */

const UI_TRANSLATIONS = {
  ar: {
    navHome: "الرئيسية",
    navCategories: "الفئات والمنتجات",
    navOffers: "العروض والخصومات",
    navCompare: "المقارنة",
    navSupport: "الدعم والضمان",
    navFaq: "الأسئلة الشائعة",
    navAbout: "من نحن",
    navContact: "الفروع وتواصل معنا",
    navPrivacy: "سياسة الخصوصية",
    navWarranty: "ضمان رسمي 10 سنوات",
    compareBarText: "منتجات محددة للمقارنة:",
    compareNowBtn: "قارن الآن",
    clearBtn: "مسح",
    cartTitle: "سلة المشتريات والطلب السريع",
    cartTotal: "المجموع الكلي:",
    cartCheckoutWhatsApp: "إرسال الطلب عبر واتساب",
    cartEmpty: "سلة المشتريات فارغة حالياً.",
    footerCategoriesTitle: "فئات الأجهزة",
    footerLinksTitle: "روابط مهمة",
    footerContactTitle: "خدمة الزبائن",
    footerBranchesBtn: "عناوين الفروع وصالات العرض",
    footerRights: "جميع الحقوق محفوظة.",
    sectionCategoriesTitle: "فئات مصممة لكل ركن في منزلك",
    sectionCategoriesSub: "تكنولوجيا كورية فائقة تجمع بين الأناقة المعمارية والأداء الذكي",
    sectionFeaturedTitle: "الأجهزة المختارة الأكثر طلباً",
    sectionFeaturedSub: "أحدث الموديلات المتوفرة في صالات عرض DR HOME مع ضمان رسمي شامل",
    viewAllBtn: "عرض الكل",
    addToCart: "أضف للسلة",
    orderWhatsApp: "اطلب عبر واتساب",
    detailsBtn: "التفاصيل والمواصفات",
    compareToggle: "مقارنة",
    inStockBadge: "متوفر في صالة العرض",
    outOfStockBadge: "نفذت الكمية مؤقتاً",
    youSave: "توفر",
    warrantyLabel: "ضمان رسمي لمدة",
    yearsUnit: "سنوات",
    searchPlaceholder: "ابحث عن شاشة، ثلاجة، سبلت، غسالة...",
    allCategories: "جميع الفئات",
    sortDefault: "الترتيب الافتراضي",
    sortPriceAsc: "السعر: من الأقل إلى الأعلى",
    sortPriceDesc: "السعر: من الأعلى إلى الأقل",
    specsTitle: "المواصفات التقنية الكاملة",
    specDimensions: "الأبعاد / السعة",
    specEnergy: "كفاءة الطاقة والمحرك",
    specSmart: "التقنيات الذكية",
    specOrigin: "بلد المنشأ والمواصفات",
    compareEmpty: "لم تقم بإضافة أي أجهزة للمقارنة بعد. يمكنك اختيار حتى 3 أجهزة من صفحة المنتجات.",
    browseProducts: "تصفح المنتجات الآن",
    offersHeaderTitle: "العروض والخصومات الحصرية",
    offersHeaderSub: "وفّر أكثر عند تجهيز منزلك بأحدث أجهزة DR HOME بالدينار العراقي",
    supportHeaderTitle: "مركز الدعم الفني والضمان الرسمي",
    supportFormTitle: "طلب صيانة أو تسجيل ضمان عبر واتساب",
    supportNamePlaceholder: "الاسم الكامل",
    supportPhonePlaceholder: "رقم الهاتف",
    supportModelPlaceholder: "نوع الجهاز أو رقم الموديل (مثال: OLED C5 65)",
    supportIssuePlaceholder: "اشرح طلبك (تنصيب جديد / فحص صيانة / استفسار ضمان)",
    supportSubmitBtn: "إرسال لفريق الدعم عبر واتساب",
    faqHeaderTitle: "الأسئلة الشائعة",
    faqHeaderSub: "إجابات واضحة حول الضمان، التوصيل، التنصيب، وطرق الدفع",
    aboutHeaderTitle: "من نحن — قصة DR HOME",
    visionTitle: "رؤيتنا ومعاييرنا",
    contactHeaderTitle: "صالات العرض وتواصل معنا",
    contactHeaderSub: "تفضل بزيارة فروعنا في بغداد لمعاينة الأجهزة عن قرب أو تواصل معنا مباشرة",
    openMapBtn: "عرض الموقع على خرائط Google",
    notFoundTitle: "404 — الصفحة غير موجودة",
    notFoundSub: "عذراً، الرابط الذي تبحث عنه غير متوفر. يمكنك العودة للصفحة الرئيسية أو تصفح المنتجات.",
    backHomeBtn: "العودة للرئيسية"
  },
  en: {
    navHome: "Home",
    navCategories: "Categories & Products",
    navOffers: "Special Offers",
    navCompare: "Compare",
    navSupport: "Support & Warranty",
    navFaq: "FAQ",
    navAbout: "About Us",
    navContact: "Showrooms & Contact",
    navPrivacy: "Privacy Policy",
    navWarranty: "10-Year Official Warranty",
    compareBarText: "Selected for comparison:",
    compareNowBtn: "Compare Now",
    clearBtn: "Clear",
    cartTitle: "Shopping Bag & Instant Order",
    cartTotal: "Total Amount:",
    cartCheckoutWhatsApp: "Send Order via WhatsApp",
    cartEmpty: "Your shopping bag is currently empty.",
    footerCategoriesTitle: "Appliance Categories",
    footerLinksTitle: "Quick Links",
    footerContactTitle: "Customer Care",
    footerBranchesBtn: "Showroom Locations",
    footerRights: "All rights reserved.",
    sectionCategoriesTitle: "Engineered for Every Living Space",
    sectionCategoriesSub: "Korean-inspired minimalist luxury meets AI-driven home performance",
    sectionFeaturedTitle: "Flagship Featured Appliances",
    sectionFeaturedSub: "Available now at DR HOME showrooms with official warranty in IQD",
    viewAllBtn: "View All",
    addToCart: "Add to Bag",
    orderWhatsApp: "Order via WhatsApp",
    detailsBtn: "View Specs & Details",
    compareToggle: "Compare",
    inStockBadge: "In Stock at Showroom",
    outOfStockBadge: "Temporarily Out of Stock",
    youSave: "Save",
    warrantyLabel: "Official Warranty:",
    yearsUnit: "Years",
    searchPlaceholder: "Search OLED TV, InstaView fridge, Inverter AC...",
    allCategories: "All Categories",
    sortDefault: "Featured Order",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    specsTitle: "Technical Specifications",
    specDimensions: "Dimensions / Capacity",
    specEnergy: "Energy & Motor Class",
    specSmart: "Smart & AI Technology",
    specOrigin: "Origin & Specification",
    compareEmpty: "No appliances selected for comparison yet. Select up to 3 models from our catalog.",
    browseProducts: "Browse Catalog",
    offersHeaderTitle: "Exclusive Seasonal Offers",
    offersHeaderSub: "Exceptional IQD savings on flagship home appliances and bundles",
    supportHeaderTitle: "Official Warranty & Technical Support",
    supportFormTitle: "Request Installation or Warranty Service via WhatsApp",
    supportNamePlaceholder: "Full Name",
    supportPhonePlaceholder: "Phone Number",
    supportModelPlaceholder: "Appliance Model (e.g., OLED C5 65)",
    supportIssuePlaceholder: "Describe your request (New Installation / Maintenance / Warranty Check)",
    supportSubmitBtn: "Send to Support via WhatsApp",
    faqHeaderTitle: "Frequently Asked Questions",
    faqHeaderSub: "Everything you need to know about warranty, delivery, installation, and payment",
    aboutHeaderTitle: "About DR HOME",
    visionTitle: "Our Vision & Standards",
    contactHeaderTitle: "Showrooms & Direct Contact",
    contactHeaderSub: "Visit our Baghdad flagship showrooms or connect with our specialists on WhatsApp",
    openMapBtn: "Open in Google Maps",
    notFoundTitle: "404 — Page Not Found",
    notFoundSub: "The page you are looking for does not exist. Return to the homepage to explore our collection.",
    backHomeBtn: "Back to Home"
  }
};

const AppState = {
  lang: localStorage.getItem("drhome_lang") || "ar",
  data: null,
  cart: JSON.parse(localStorage.getItem("drhome_cart") || "[]"),
  compare: JSON.parse(localStorage.getItem("drhome_compare") || "[]"),
  activeCategoryFilter: "all",
  searchQuery: "",
  sortBy: "default"
};

/* Utility: Format Iraqi Dinar Price */
function formatIQD(amount) {
  if (!amount || isNaN(amount)) return "";
  const formatted = Number(amount).toLocaleString("en-US");
  const currency = AppState.lang === "ar"
    ? (AppState.data?.storeInfo?.currencyAr || "د.ع")
    : (AppState.data?.storeInfo?.currencyEn || "IQD");
  return AppState.lang === "ar" ? `${formatted} ${currency}` : `${formatted} ${currency}`;
}

/* Utility: Translate UI Key */
function t(key) {
  return UI_TRANSLATIONS[AppState.lang][key] || key;
}

/* Utility: Get Localized Product/Category Fields */
function loc(item, fieldPrefix) {
  if (!item) return "";
  const suffix = AppState.lang === "ar" ? "Ar" : "En";
  return item[`${fieldPrefix}${suffix}`] || item[`${fieldPrefix}Ar`] || "";
}

/* Initialize Application */
async function initApp() {
  try {
    const response = await fetch("./content.json", { cache: "no-store" });
    AppState.data = await response.json();
    applyLanguageSettings();
    setupEventListeners();
    updateCartUI();
    updateCompareUI();
    handleRouteChange();
  } catch (err) {
    console.error("Failed to load content.json:", err);
  }
}

/* Apply RTL/LTR and Static Translations */
function applyLanguageSettings() {
  const htmlEl = document.documentElement;
  htmlEl.lang = AppState.lang;
  htmlEl.dir = AppState.lang === "ar" ? "rtl" : "ltr";

  document.getElementById("lang-toggle-label").textContent = AppState.lang === "ar" ? "EN" : "عربي";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI_TRANSLATIONS[AppState.lang][key]) {
      el.textContent = UI_TRANSLATIONS[AppState.lang][key];
    }
  });

  if (AppState.data?.storeInfo) {
    const info = AppState.data.storeInfo;
    const langObj = info[AppState.lang] || info.ar;
    document.getElementById("top-bar-tagline").textContent = langObj.tagline;
    document.getElementById("top-bar-phone").textContent = info.phone;
    document.getElementById("footer-phone").textContent = info.phone;
    document.getElementById("footer-email").textContent = info.email;
    document.getElementById("footer-about-snippet").textContent = langObj.aboutStory;
    document.getElementById("footer-instagram").href = info.instagram || "#";
    document.getElementById("footer-facebook").href = info.facebook || "#";
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Custom Logo Check
    const logoImg = document.getElementById("brand-logo-img");
    const logoText = document.getElementById("brand-logo-text");
    if (info.logo && info.logo.trim() !== "") {
      logoImg.src = info.logo;
      logoImg.classList.remove("hidden");
      logoText.classList.add("hidden");
    } else {
      logoImg.classList.add("hidden");
      logoText.classList.remove("hidden");
    }

    // Populate Footer Categories
    const footerCats = document.getElementById("footer-categories-list");
    footerCats.innerHTML = (AppState.data.categories || [])
      .map(
        (cat) =>
          `<li><a href="#categories/${cat.id}" class="hover:text-white transition">${loc(cat, "name")}</a></li>`
      )
      .join("");
  }
}

/* Update Schema.org Structured Data for SEO */
function updateSchemaOrg(product = null) {
  const schemaEl = document.getElementById("schema-org-script");
  const info = AppState.data.storeInfo;

  if (product) {
    const productSchema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: loc(product, "name"),
      image: [product.image],
      description: loc(product, "shortDesc"),
      brand: {
        "@type": "Brand",
        name: "LG / DR HOME"
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "IQD",
        price: product.price,
        availability: product.inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        seller: {
          "@type": "ElectronicsStore",
          name: info.name
        }
      }
    };
    schemaEl.textContent = JSON.stringify(productSchema);
  } else {
    const storeSchema = {
      "@context": "https://schema.org",
      "@type": "ElectronicsStore",
      name: info.name,
      description: info[AppState.lang].heroSubtitle,
      telephone: info.phone,
      email: info.email,
      priceRange: "IQD",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Baghdad",
        addressCountry: "IQ"
      }
    };
    schemaEl.textContent = JSON.stringify(storeSchema);
  }
}

/* Reusable Product Card Component */
function renderProductCard(product) {
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const savings = hasDiscount ? product.oldPrice - product.price : 0;
  const isCompared = AppState.compare.includes(product.id);
  const badgeText = loc(product, "badge");

  return `
    <article class="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group">
      <div>
        <!-- Image Header -->
        <div class="relative h-64 bg-charcoal overflow-hidden">
          <a href="#product/${product.id}" class="block w-full h-full">
            <img src="${product.image}" alt="${loc(product, "name")}" loading="lazy" class="product-img w-full h-full object-cover" />
          </a>
          ${
            badgeText
              ? `<span class="absolute top-4 start-4 px-3 py-1 rounded-full bg-crimson text-white text-xs font-bold shadow-lg">${badgeText}</span>`
              : ""
          }
          <button
            type="button"
            onclick="toggleCompare('${product.id}')"
            class="absolute top-4 end-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md transition ${
              isCompared
                ? "bg-white text-obsidian"
                : "bg-black/60 text-white hover:bg-black/80 border border-white/15"
            }"
          >
            ${isCompared ? "✓ " : "+ "}${t("compareToggle")}
          </button>
        </div>

        <!-- Product Info -->
        <div class="p-6 space-y-3">
          <div class="flex items-center justify-between text-xs text-neutral-400">
            <span>${t("warrantyLabel")} ${product.warrantyYears} ${t("yearsUnit")}</span>
            <span class="${product.inStock ? "text-emerald-400" : "text-amber-400"}">
              ● ${product.inStock ? t("inStockBadge") : t("outOfStockBadge")}
            </span>
          </div>

          <a href="#product/${product.id}" class="block">
            <h3 class="text-lg font-bold text-white group-hover:text-crimsonLight transition line-clamp-2">
              ${loc(product, "name")}
            </h3>
          </a>

          <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            ${loc(product, "shortDesc")}
          </p>
        </div>
      </div>

      <!-- Price & Actions -->
      <div class="p-6 pt-0 space-y-4">
        <div class="pt-4 border-t border-white/10 flex items-baseline justify-between gap-2">
          <div>
            <div class="text-xl font-black text-white">${formatIQD(product.price)}</div>
            ${
              hasDiscount
                ? `<div class="text-xs text-neutral-500 line-through">${formatIQD(product.oldPrice)}</div>`
                : ""
            }
          </div>
          ${
            hasDiscount
              ? `<span class="px-2.5 py-1 rounded-lg bg-crimson/20 border border-crimson/40 text-crimsonLight text-[11px] font-bold">
                  ${t("youSave")} ${formatIQD(savings)}
                </span>`
              : ""
          }
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onclick="addToCart('${product.id}')"
            class="py-2.5 px-3 rounded-xl bg-white text-obsidian font-bold text-xs hover:bg-neutral-200 transition"
          >
            ${t("addToCart")}
          </button>
          <button
            type="button"
            onclick="orderSingleProductWhatsApp('${product.id}')"
            class="py-2.5 px-3 rounded-xl bg-crimson hover:bg-crimsonLight text-white font-bold text-xs transition"
          >
            ${t("orderWhatsApp")}
          </button>
        </div>

        <a
          href="#product/${product.id}"
          class="block text-center text-xs text-neutral-400 hover:text-white transition pt-1"
        >
          ${t("detailsBtn")} →
        </a>
      </div>
    </article>
  `;
}

/* ==========================================================================
   SPA Views (All 11 Pages)
   ========================================================================== */

/* 1. Home View */
function renderHomeView() {
  const info = AppState.data.storeInfo;
  const langContent = info[AppState.lang] || info.ar;
  const featuredProducts = AppState.data.products.filter((p) => p.featured);

  updateSchemaOrg();

  return `
    <!-- Fullscreen Cinematic Video Hero -->
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-obsidian">
      <video
        class="absolute inset-0 w-full h-full object-cover opacity-55 scale-105"
        autoplay
        muted
        loop
        playsinline
        poster="${info.heroPosterImage}"
      >
        <source src="${info.heroVideoUrl}" type="video/mp4" />
      </video>
      <div class="hero-video-overlay absolute inset-0"></div>

      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 py-20 animate-fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase text-white">
          ${langContent.heroBadge}
        </span>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          ${langContent.heroTitle}
        </h1>
        <p class="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed">
          ${langContent.heroSubtitle}
        </p>
        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#categories" class="px-8 py-4 rounded-full bg-crimson hover:bg-crimsonLight text-white font-bold text-sm shadow-xl shadow-crimson/30 transition">
            ${langContent.heroPrimaryBtn}
          </a>
          <a href="#offers" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white font-bold text-sm transition">
            ${langContent.heroSecondaryBtn}
          </a>
        </div>
      </div>
    </section>

    <!-- Category Showcase Grid -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <h2 class="text-2xl sm:text-4xl font-black text-white">${t("sectionCategoriesTitle")}</h2>
          <p class="text-neutral-400 text-sm mt-2">${t("sectionCategoriesSub")}</p>
        </div>
        <a href="#categories" class="text-sm font-bold text-crimsonLight hover:underline">${t("viewAllBtn")} →</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${AppState.data.categories
          .map(
            (cat) => `
          <a href="#categories/${cat.id}" class="group relative h-80 rounded-3xl overflow-hidden border border-white/10 block">
            <img src="${cat.image}" alt="${loc(cat, "name")}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 inset-x-0 p-6 space-y-1.5">
              <h3 class="text-xl font-black text-white group-hover:text-crimsonLight transition">${loc(cat, "name")}</h3>
              <p class="text-xs text-neutral-300 line-clamp-2">${loc(cat, "desc")}</p>
            </div>
          </a>
        `
          )
          .join("")}
      </div>
    </section>

    <!-- Flagship Featured Products -->
    <section class="py-16 bg-charcoal/50 border-y border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 class="text-2xl sm:text-4xl font-black text-white">${t("sectionFeaturedTitle")}</h2>
            <p class="text-neutral-400 text-sm mt-2">${t("sectionFeaturedSub")}</p>
          </div>
          <a href="#categories" class="text-sm font-bold text-white hover:text-crimsonLight transition">${t("viewAllBtn")} →</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuredProducts.map(renderProductCard).join("")}
        </div>
      </div>
    </section>

    <!-- Luxury Promotional Banner -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-charcoal via-obsidian to-crimson/30 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl space-y-4">
          <span class="text-xs font-bold uppercase tracking-widest text-crimsonLight">DR HOME VIP PACKAGES</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white leading-tight">${langContent.promoBannerTitle}</h2>
          <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">${langContent.promoBannerText}</p>
        </div>
        <div class="flex-shrink-0">
          <a href="#offers" class="inline-block px-8 py-4 rounded-full bg-white text-obsidian font-black text-sm hover:bg-neutral-200 transition">
            ${t("navOffers")}
          </a>
        </div>
      </div>
    </section>
  `;
}

/* 2. Categories & Catalog View */
function renderCategoriesView(selectedCategoryId = null) {
  if (selectedCategoryId) {
    AppState.activeCategoryFilter = selectedCategoryId;
  }

  let filtered = [...AppState.data.products];
  if (AppState.activeCategoryFilter !== "all") {
    filtered = filtered.filter((p) => p.category === AppState.activeCategoryFilter);
  }
  if (AppState.searchQuery.trim() !== "") {
    const q = AppState.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.nameAr.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.shortDescAr.toLowerCase().includes(q) ||
        p.shortDescEn.toLowerCase().includes(q)
    );
  }
  if (AppState.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return `
    <section class="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fade-up">
      <div class="space-y-3">
        <h1 class="text-3xl sm:text-5xl font-black text-white">${t("navCategories")}</h1>
        <p class="text-neutral-400 text-sm sm:text-base">${t("sectionCategoriesSub")}</p>
      </div>

      <!-- Filter & Search Controls -->
      <div class="bg-charcoal border border-white/10 rounded-3xl p-5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <!-- Category Pills -->
        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onclick="setCategoryFilter('all')"
            class="px-4 py-2 rounded-full text-xs font-bold transition ${
              AppState.activeCategoryFilter === "all"
                ? "bg-crimson text-white"
                : "bg-white/5 text-neutral-300 hover:bg-white/10"
            }"
          >
            ${t("allCategories")}
          </button>
          ${AppState.data.categories
            .map(
              (cat) => `
            <button
              type="button"
              onclick="setCategoryFilter('${cat.id}')"
              class="px-4 py-2 rounded-full text-xs font-bold transition ${
                AppState.activeCategoryFilter === cat.id
                  ? "bg-crimson text-white"
                  : "bg-white/5 text-neutral-300 hover:bg-white/10"
              }"
            >
              ${loc(cat, "name")}
            </button>
          `
            )
            .join("")}
        </div>

        <!-- Search & Price Sort -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="search"
            value="${AppState.searchQuery}"
            oninput="setSearchQuery(this.value)"
            placeholder="${t("searchPlaceholder")}"
            class="px-4 py-2.5 rounded-xl bg-obsidian border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-crimson min-w-[240px]"
          />
          <select
            onchange="setSortOrder(this.value)"
            class="px-4 py-2.5 rounded-xl bg-obsidian border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-crimson"
          >
            <option value="default" ${AppState.sortBy === "default" ? "selected" : ""}>${t("sortDefault")}</option>
            <option value="price-asc" ${AppState.sortBy === "price-asc" ? "selected" : ""}>${t("sortPriceAsc")}</option>
            <option value="price-desc" ${AppState.sortBy === "price-desc" ? "selected" : ""}>${t("sortPriceDesc")}</option>
          </select>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${filtered.map(renderProductCard).join("")}
      </div>
    </section>
  `;
}

/* 3. Single Product Detail View (Flagship Showroom Layout) */
function renderProductDetailView(productId) {
  const product = AppState.data.products.find((p) => p.id === productId);
  if (!product) return renderNotFoundView();

  updateSchemaOrg(product);

  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const related = AppState.data.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return `
    <section class="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-up">
      <!-- Breadcrumb -->
      <nav class="text-xs text-neutral-400 flex items-center gap-2">
        <a href="#home" class="hover:text-white">${t("navHome")}</a>
        <span>/</span>
        <a href="#categories/${product.category}" class="hover:text-white">${t("navCategories")}</a>
        <span>/</span>
        <span class="text-white font-bold">${loc(product, "name")}</span>
      </nav>

      <!-- Main Product Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Product Image Showcase -->
        <div class="lg:col-span-7 bg-charcoal border border-white/10 rounded-3xl overflow-hidden p-4 sm:p-8">
          <img src="${product.image}" alt="${loc(product, "name")}" class="w-full h-[380px] sm:h-[480px] object-cover rounded-2xl" />
        </div>

        <!-- Product Details & Purchase Box -->
        <div class="lg:col-span-5 bg-charcoal border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 sticky top-28">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full bg-crimson text-white text-xs font-bold">
              ${loc(product, "badge") || "DR HOME"}
            </span>
            <span class="text-xs font-bold ${product.inStock ? "text-emerald-400" : "text-amber-400"}">
              ● ${product.inStock ? t("inStockBadge") : t("outOfStockBadge")}
            </span>
          </div>

          <h1 class="text-2xl sm:text-3xl font-black text-white leading-snug">
            ${loc(product, "name")}
          </h1>

          <p class="text-neutral-300 text-sm leading-relaxed">
            ${loc(product, "shortDesc")}
          </p>

          <!-- Pricing Box -->
          <div class="p-5 rounded-2xl bg-obsidian border border-white/10 space-y-1">
            <div class="text-3xl font-black text-white">${formatIQD(product.price)}</div>
            ${
              hasDiscount
                ? `<div class="flex items-center gap-3 text-xs">
                    <span class="text-neutral-500 line-through">${formatIQD(product.oldPrice)}</span>
                    <span class="text-crimsonLight font-bold">${t("youSave")} ${formatIQD(product.oldPrice - product.price)}</span>
                  </div>`
                : ""
            }
          </div>

          <!-- Key Specs Table -->
          <div class="space-y-3 pt-2">
            <h2 class="text-sm font-bold uppercase tracking-wider text-neutral-400">${t("specsTitle")}</h2>
            <div class="divide-y divide-white/10 text-xs sm:text-sm border-y border-white/10">
              <div class="py-2.5 flex justify-between gap-4">
                <span class="text-neutral-400">${t("specDimensions")}</span>
                <span class="text-white font-medium text-end">${product.specs?.dimensions || "-"}</span>
              </div>
              <div class="py-2.5 flex justify-between gap-4">
                <span class="text-neutral-400">${t("specEnergy")}</span>
                <span class="text-white font-medium text-end">${product.specs?.energyClass || "-"}</span>
              </div>
              <div class="py-2.5 flex justify-between gap-4">
                <span class="text-neutral-400">${t("specSmart")}</span>
                <span class="text-white font-medium text-end">${product.specs?.smartTech || "-"}</span>
              </div>
              <div class="py-2.5 flex justify-between gap-4">
                <span class="text-neutral-400">${t("specOrigin")}</span>
                <span class="text-white font-medium text-end">${product.specs?.countryOfOrigin || "-"}</span>
              </div>
            </div>
          </div>

          <!-- Purchase Buttons -->
          <div class="space-y-3 pt-2">
            <button
              type="button"
              onclick="orderSingleProductWhatsApp('${product.id}')"
              class="w-full py-4 px-6 rounded-2xl bg-crimson hover:bg-crimsonLight text-white font-bold text-sm shadow-lg shadow-crimson/30 transition"
            >
              ${t("orderWhatsApp")}
            </button>
            <div class="grid grid-cols-2 gap-3">
              <button
                type="button"
                onclick="addToCart('${product.id}')"
                class="py-3 px-4 rounded-xl bg-white text-obsidian font-bold text-xs hover:bg-neutral-200 transition"
              >
                ${t("addToCart")}
              </button>
              <button
                type="button"
                onclick="toggleCompare('${product.id}')"
                class="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition"
              >
                + ${t("compareToggle")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${
        related.length > 0
          ? `
        <div class="pt-12 border-t border-white/10 space-y-8">
          <h2 class="text-2xl font-black text-white">${t("sectionFeaturedTitle")}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${related.map(renderProductCard).join("")}
          </div>
        </div>
      `
          : ""
      }
    </section>
  `;
}

/* 4. Product Comparison View */
function renderCompareView() {
  const comparedProducts = AppState.compare
    .map((id) => AppState.data.products.find((p) => p.id === id))
    .filter(Boolean);

  if (comparedProducts.length === 0) {
    return `
      <section class="py-24 max-w-3xl mx-auto px-4 text-center space-y-6 animate-fade-up">
        <h1 class="text-3xl sm:text-4xl font-black text-white">${t("navCompare")}</h1>
        <p class="text-neutral-400 text-sm sm:text-base">${t("compareEmpty")}</p>
        <a href="#categories" class="inline-block px-8 py-4 rounded-full bg-crimson text-white font-bold text-sm">
          ${t("browseProducts")}
        </a>
      </section>
    `;
  }

  return `
    <section class="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fade-up">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl sm:text-4xl font-black text-white">${t("navCompare")}</h1>
        <button onclick="clearCompare()" class="text-xs text-crimsonLight hover:underline font-bold">${t("clearBtn")}</button>
      </div>

      <div class="overflow-x-auto bg-charcoal border border-white/10 rounded-3xl p-6">
        <table class="w-full text-sm text-start border-collapse min-w-[640px]">
          <thead>
            <tr class="border-b border-white/10">
              <th class="p-4 text-neutral-400 font-medium w-48">${t("specsTitle")}</th>
              ${comparedProducts
                .map(
                  (p) => `
                <th class="p-4 align-top">
                  <img src="${p.image}" alt="${loc(p, "name")}" class="w-full h-40 object-cover rounded-2xl mb-3" />
                  <a href="#product/${p.id}" class="text-base font-bold text-white hover:text-crimsonLight block">${loc(p, "name")}</a>
                  <div class="text-crimsonLight font-black mt-1">${formatIQD(p.price)}</div>
                </th>
              `
                )
                .join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10">
            <tr>
              <td class="p-4 text-neutral-400">${t("warrantyLabel")}</td>
              ${comparedProducts.map((p) => `<td class="p-4 font-bold">${p.warrantyYears}${t("yearsUnit")}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-4 text-neutral-400">${t("specDimensions")}</td>
              ${comparedProducts.map((p) => `<td class="p-4">${p.specs?.dimensions || "-"}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-4 text-neutral-400">${t("specEnergy")}</td>
              ${comparedProducts.map((p) => `<td class="p-4">${p.specs?.energyClass || "-"}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-4 text-neutral-400">${t("specSmart")}</td>
              ${comparedProducts.map((p) => `<td class="p-4">${p.specs?.smartTech || "-"}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-4 text-neutral-400">${t("specOrigin")}</td>
              ${comparedProducts.map((p) => `<td class="p-4">${p.specs?.countryOfOrigin || "-"}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-4"></td>
              ${comparedProducts
                .map(
                  (p) => `
                <td class="p-4">
                  <button onclick="orderSingleProductWhatsApp('${p.id}')" class="w-full py-2.5 rounded-xl bg-crimson text-white font-bold text-xs">
                    ${t("orderWhatsApp")}
                  </button>
                </td>
              `
                )
                .join("")}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

/* 5. Offers & Discounts View */
function renderOffersView() {
  const offerProducts = AppState.data.products.filter((p) => p.isOffer || (p.oldPrice && p.oldPrice > p.price));
  return `
    <section class="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fade-up">
      <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-crimson/30 via-charcoal to-obsidian border border-white/15 space-y-3">
        <span class="px-3 py-1 rounded-full bg-crimson text-white text-xs font-bold uppercase">VIP OFFERS</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white">${t("offersHeaderTitle")}</h1>
        <p class="text-neutral-300 text-sm sm:text-base max-w-2xl">${t("offersHeaderSub")}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${offerProducts.map(renderProductCard).join("")}
      </div>
    </section>
  `;
}

/* 6. Support & Warranty View */
function renderSupportView() {
  const info = AppState.data.storeInfo;
  const langContent = info[AppState.lang] || info.ar;
  return `
    <section class="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-up">
      <div class="space-y-4">
        <h1 class="text-3xl sm:text-5xl font-black text-white">${t("supportHeaderTitle")}</h1>
        <div class="p-6 sm:p-8 rounded-3xl bg-charcoal border border-white/10 text-neutral-200 leading-relaxed text-sm sm:text-base">
          ${langContent.warrantyText}
        </div>
      </div>

      <!-- Direct WhatsApp Maintenance/Support Form -->
      <div class="bg-charcoal border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
        <h2 class="text-xl sm:text-2xl font-bold text-white">${t("supportFormTitle")}</h2>
        <form onsubmit="submitSupportWhatsApp(event)" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input id="sup-name" type="text" required placeholder="${t("supportNamePlaceholder")}" class="px-4 py-3 rounded-xl bg-obsidian border border-white/15 text-sm text-white" />
          <input id="sup-phone" type="tel" required placeholder="${t("supportPhonePlaceholder")}" class="px-4 py-3 rounded-xl bg-obsidian border border-white/15 text-sm text-white" />
          <input id="sup-model" type="text" required placeholder="${t("supportModelPlaceholder")}" class="sm:col-span-2 px-4 py-3 rounded-xl bg-obsidian border border-white/15 text-sm text-white" />
          <textarea id="sup-issue" rows="4" required placeholder="${t("supportIssuePlaceholder")}" class="sm:col-span-2 px-4 py-3 rounded-xl bg-obsidian border border-white/15 text-sm text-white"></textarea>
          <button type="submit" class="sm:col-span-2 py-4 rounded-xl bg-crimson hover:bg-crimsonLight text-white font-bold text-sm transition">
            ${t("supportSubmitBtn")}
          </button>
        </form>
      </div>
    </section>
  `;
}

/* 7. FAQ View */
function renderFaqView() {
  return `
    <section class="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-fade-up">
      <div class="space-y-2 text-center">
        <h1 class="text-3xl sm:text-5xl font-black text-white">${t("faqHeaderTitle")}</h1>
        <p class="text-neutral-400 text-sm sm:text-base">${t("faqHeaderSub")}</p>
      </div>

      <div class="space-y-4">
        ${(AppState.data.faqs || [])
          .map(
            (faq) => `
          <details class="group bg-charcoal border border-white/10 rounded-2xl p-6">
            <summary class="flex items-center justify-between cursor-pointer font-bold text-base sm:text-lg text-white list-none">
              <span>${loc(faq, "q")}</span>
              <span class="text-crimson group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
            </summary>
            <p class="mt-4 text-neutral-300 text-sm leading-relaxed border-t border-white/10 pt-4">
              ${loc(faq, "a")}
            </p>
          </details>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

/* 8. About Us View */
function renderAboutView() {
  const langContent = AppState.data.storeInfo[AppState.lang] || AppState.data.storeInfo.ar;
  return `
    <section class="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-up">
      <div class="space-y-4">
        <span class="text-xs font-bold tracking-widest uppercase text-crimsonLight">DR HOME FLAGSHIP</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white">${t("aboutHeaderTitle")}</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 rounded-3xl bg-charcoal border border-white/10 space-y-4">
          <h2 class="text-xl font-bold text-white">DR HOME</h2>
          <p class="text-neutral-300 leading-relaxed text-sm sm:text-base">${langContent.aboutStory}</p>
        </div>
        <div class="p-8 rounded-3xl bg-charcoal border border-white/10 space-y-4">
          <h2 class="text-xl font-bold text-white">${t("visionTitle")}</h2>
          <p class="text-neutral-300 leading-relaxed text-sm sm:text-base">${langContent.aboutVision}</p>
        </div>
      </div>
    </section>
  `;
}

/* 9. Branches & Contact View */
function renderContactView() {
  const branches = AppState.data.branches || [];
  return `
    <section class="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-up">
      <div class="space-y-2">
        <h1 class="text-3xl sm:text-5xl font-black text-white">${t("contactHeaderTitle")}</h1>
        <p class="text-neutral-400 text-sm sm:text-base">${t("contactHeaderSub")}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${branches
          .map(
            (b) => `
          <div class="p-8 rounded-3xl bg-charcoal border border-white/10 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="inline-block px-3 py-1 rounded-full bg-crimson/20 text-crimsonLight text-xs font-bold">DR HOME SHOWROOM</span>
              <h2 class="text-xl font-bold text-white">${loc(b, "name")}</h2>
              <p class="text-neutral-300 text-sm">${loc(b, "address")}</p>
              <p class="text-neutral-400 text-xs">${loc(b, "hours")}</p>
              <p class="text-white font-mono text-sm pt-1" dir="ltr">${b.phone}</p>
            </div>
            <div class="pt-4">
              <a href="${b.mapUrl}" target="_blank" rel="noopener" class="inline-block px-5 py-2.5 rounded-xl bg-white text-obsidian font-bold text-xs hover:bg-neutral-200 transition">
                ${t("openMapBtn")}
              </a>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

/* 10. Privacy Policy View */
function renderPrivacyView() {
  const langContent = AppState.data.storeInfo[AppState.lang] || AppState.data.storeInfo.ar;
  return `
    <section class="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fade-up">
      <h1 class="text-3xl sm:text-4xl font-black text-white">${t("navPrivacy")}</h1>
      <div class="p-8 rounded-3xl bg-charcoal border border-white/10 text-neutral-300 leading-relaxed text-sm sm:text-base">
        ${langContent.privacyText}
      </div>
    </section>
  `;
}

/* 11. 404 Not Found View */
function renderNotFoundView() {
  return `
    <section class="py-28 max-w-xl mx-auto px-4 text-center space-y-6 animate-fade-up">
      <div class="text-6xl font-black text-crimson">404</div>
      <h1 class="text-2xl sm:text-3xl font-bold text-white">${t("notFoundTitle")}</h1>
      <p class="text-neutral-400 text-sm">${t("notFoundSub")}</p>
      <a href="#home" class="inline-block px-8 py-3.5 rounded-full bg-white text-obsidian font-bold text-xs">
        ${t("backHomeBtn")}
      </a>
    </section>
  `;
}

/* ==========================================================================
   Router & Interactive Actions
   ========================================================================== */

function handleRouteChange() {
  const hash = window.location.hash.replace("#", "") || "home";
  const [route, param] = hash.split("/");
  const mainEl = document.getElementById("main-view");

  // Highlight Active Nav Link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-route") === route);
  });

  // Close mobile menu on navigate
  document.getElementById("mobile-menu").classList.add("hidden");

  switch (route) {
    case "home":
      mainEl.innerHTML = renderHomeView();
      break;
    case "categories":
      mainEl.innerHTML = renderCategoriesView(param || null);
      break;
    case "product":
      mainEl.innerHTML = renderProductDetailView(param);
      break;
    case "compare":
      mainEl.innerHTML = renderCompareView();
      break;
    case "offers":
      mainEl.innerHTML = renderOffersView();
      break;
    case "support":
      mainEl.innerHTML = renderSupportView();
      break;
    case "faq":
      mainEl.innerHTML = renderFaqView();
      break;
    case "about":
      mainEl.innerHTML = renderAboutView();
      break;
    case "contact":
      mainEl.innerHTML = renderContactView();
      break;
    case "privacy":
      mainEl.innerHTML = renderPrivacyView();
      break;
    default:
      mainEl.innerHTML = renderNotFoundView();
      break;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Filter Handlers */
window.setCategoryFilter = function (catId) {
  AppState.activeCategoryFilter = catId;
  document.getElementById("main-view").innerHTML = renderCategoriesView();
};

window.setSearchQuery = function (val) {
  AppState.searchQuery = val;
  document.getElementById("main-view").innerHTML = renderCategoriesView();
};

window.setSortOrder = function (val) {
  AppState.sortBy = val;
  document.getElementById("main-view").innerHTML = renderCategoriesView();
};

/* Cart Operations */
window.addToCart = function (productId) {
  const existing = AppState.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({ id: productId, qty: 1 });
  }
  localStorage.setItem("drhome_cart", JSON.stringify(AppState.cart));
  updateCartUI();
  document.getElementById("cart-modal").classList.remove("hidden");
};

window.removeFromCart = function (productId) {
  AppState.cart = AppState.cart.filter((item) => item.id !== productId);
  localStorage.setItem("drhome_cart", JSON.stringify(AppState.cart));
  updateCartUI();
};

function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cart-count-badge").textContent = totalCount;

  const container = document.getElementById("cart-items-container");
  if (!AppState.data || AppState.cart.length === 0) {
    container.innerHTML = `<p class="text-sm text-neutral-400 text-center py-12">${t("cartEmpty")}</p>`;
    document.getElementById("cart-total-price").textContent = formatIQD(0);
    return;
  }

  let totalIQD = 0;
  container.innerHTML = AppState.cart
    .map((item) => {
      const product = AppState.data.products.find((p) => p.id === item.id);
      if (!product) return "";
      const lineTotal = product.price * item.qty;
      totalIQD += lineTotal;
      return `
        <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-obsidian border border-white/10">
          <img src="${product.image}" alt="${loc(product, "name")}" class="w-16 h-16 rounded-xl object-cover" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-white truncate">${loc(product, "name")}</h4>
            <p class="text-xs text-crimsonLight font-bold mt-1">${formatIQD(product.price)} × ${item.qty}</p>
          </div>
          <button onclick="removeFromCart('${product.id}')" class="text-neutral-500 hover:text-white p-1">✕</button>
        </div>
      `;
    })
    .join("");

  document.getElementById("cart-total-price").textContent = formatIQD(totalIQD);
}

/* Direct WhatsApp Order (Single Product) */
window.orderSingleProductWhatsApp = function (productId) {
  const product = AppState.data.products.find((p) => p.id === productId);
  if (!product) return;
  const phone = AppState.data.storeInfo.whatsappNumber;
  const msg =
    AppState.lang === "ar"
      ? `مرحباً DR HOME، أود طلب الجهاز التالي:\n• المنتج: ${product.nameAr}\n• السعر: ${formatIQD(product.price)}\nيرجى تزويدي بتفاصيل التوصيل والتنصيب.`
      : `Hello DR HOME, I would like to order:\n• Product: ${product.nameEn}\n• Price: ${formatIQD(product.price)}`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};

/* Compare Operations */
window.toggleCompare = function (productId) {
  const idx = AppState.compare.indexOf(productId);
  if (idx > -1) {
    AppState.compare.splice(idx, 1);
  } else {
    if (AppState.compare.length >= 3) {
      AppState.compare.shift();
    }
    AppState.compare.push(productId);
  }
  localStorage.setItem("drhome_compare", JSON.stringify(AppState.compare));
  updateCompareUI();
  handleRouteChange();
};

window.clearCompare = function () {
  AppState.compare = [];
  localStorage.setItem("drhome_compare", "[]");
  updateCompareUI();
  handleRouteChange();
};

function updateCompareUI() {
  const count = AppState.compare.length;
  const badge = document.getElementById("compare-count-badge");
  const floatingBar = document.getElementById("floating-compare-bar");
  document.getElementById("floating-compare-count").textContent = count;

  badge.textContent = count;
  badge.classList.toggle("hidden", count === 0);
  floatingBar.classList.toggle("hidden", count === 0);
}

/* Support Form via WhatsApp */
window.submitSupportWhatsApp = function (e) {
  e.preventDefault();
  const name = document.getElementById("sup-name").value;
  const userPhone = document.getElementById("sup-phone").value;
  const model = document.getElementById("sup-model").value;
  const issue = document.getElementById("sup-issue").value;
  const waNumber = AppState.data.storeInfo.whatsappNumber;

  const msg = `مرحباً قسم الدعم والضمان في DR HOME:\n• الاسم: ${name}\n• الهاتف: ${userPhone}\n• الجهاز: ${model}\n• التفاصيل: ${issue}`;
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
};

/* Global Event Listeners */
function setupEventListeners() {
  window.addEventListener("hashchange", handleRouteChange);

  // Language Toggle
  document.getElementById("lang-toggle-btn").addEventListener("click", () => {
    AppState.lang = AppState.lang === "ar" ? "en" : "ar";
    localStorage.setItem("drhome_lang", AppState.lang);
    applyLanguageSettings();
    updateCartUI();
    handleRouteChange();
  });

  // Mobile Menu Toggle
  document.getElementById("mobile-menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // Cart Drawer Open/Close
  document.getElementById("cart-open-btn").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.remove("hidden");
  });
  document.getElementById("cart-close-btn").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.add("hidden");
  });
  document.getElementById("cart-backdrop").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.add("hidden");
  });

  // Clear Compare Button
  document.getElementById("clear-compare-btn").addEventListener("click", () => {
    window.clearCompare();
  });

  // Cart WhatsApp Checkout
  document.getElementById("cart-whatsapp-checkout-btn").addEventListener("click", () => {
    if (AppState.cart.length === 0) return;
    const customerName = document.getElementById("checkout-customer-name").value || "زبون DR HOME";
    const customerCity = document.getElementById("checkout-customer-city").value || "غير محدد";
    const waNumber = AppState.data.storeInfo.whatsappNumber;

    let total = 0;
    const lines = AppState.cart.map((item, idx) => {
      const p = AppState.data.products.find((prod) => prod.id === item.id);
      if (!p) return "";
      const sub = p.price * item.qty;
      total += sub;
      return `${idx + 1}. ${loc(p, "name")} (العدد: ${item.qty}) — ${formatIQD(sub)}`;
    });

    const message = `مرحباً DR HOME، طلب شراء جديد:\n• الاسم: ${customerName}\n• العنوان: ${customerCity}\n\nالأجهزة المطلوبة:\n${lines.join("\n")}\n\n• المجموع الكلي: ${formatIQD(total)}`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, "_blank");
  });
}

document.addEventListener("DOMContentLoaded", initApp);