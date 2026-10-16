// DR HOME – storefront behaviour: shared header/footer, product cards, cart, filters, gallery, forms.
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const PAGE = document.body.getAttribute('data-page') || 'home';
  const CUR = 'د.ع';
  let uid = 0;
  const I = (k, cls) => '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + DH.icons[k] + '</svg>';
  const A = (key, fin, cls) => DH.art(key, fin, 'u' + (++uid) + '_').replace('<svg ', '<svg class="' + (cls || 'art') + '" aria-hidden="true" focusable="false" ');
  const M = n => DH.fmt(n) + ' <small>' + CUR + '</small>';
  const cat = k => DH.categories.find(c => c.k === k) || DH.categories[0];
  const sizeLabel = p => (typeof p.size === 'number' ? p.size + ' لتر' : p.size);

  // ---------- storage (per-viewer convenience only) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked: cart lives for this page view only */ } }
  };
  let memCart = null;
  function getCart() {
    const c = memCart || store.get('dh-cart', null);
    return Array.isArray(c) ? c.filter(x => DH.byId(x[0])) : DH.lists.cart.map(x => x.slice());
  }
  function setCart(c) { memCart = c; store.set('dh-cart', c); updateCount(); }
  function updateCount() {
    const n = getCart().reduce((s, x) => s + x[1], 0);
    $$('.cart-count').forEach(el => { el.textContent = n; el.hidden = !n; });
  }
  function addToCart(id, q) {
    const c = getCart(), it = c.find(x => x[0] === id);
    if (it) it[1] += q || 1; else c.push([id, q || 1]);
    setCart(c);
    toast(I('check') + '<span>أُضيف «' + DH.byId(id).n + '» إلى السلة</span><a href="cart.html">عرض السلة</a>');
  }
  function toast(html) {
    const old = $('.toast'); if (old) old.remove();
    const t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.innerHTML = html;
    document.body.appendChild(t);
    clearTimeout(toast.t); toast.t = setTimeout(() => t.remove(), 3600);
  }

  // ---------- product card ----------
  function card(p) {
    const off = DH.off(p);
    const badges = (p.badge ? '<span class="badge ' + (p.badge === 'best' ? 'badge-dark' : 'badge-line') + '">' + DH.badges[p.badge] + '</span>' : '') +
      (off ? '<span class="badge badge-sale">-' + off + '%</span>' : '');
    const sw = (p.colors || []).map(c => '<span class="sw" style="background:' + DH.finishes[c].sw + '" title="' + DH.finishes[c].name + '"></span>').join('');
    return '<article class="pcard" data-id="' + p.id + '">' +
      '<a class="pcard-media" href="product.html#' + p.id + '" aria-label="' + p.n + '">' + A(p.art, p.fin) + '<span class="pcard-badges">' + badges + '</span></a>' +
      '<button class="pcard-fav" type="button" aria-label="أضف إلى المفضلة" aria-pressed="false">' + I('heart') + '</button>' +
      '<div class="pcard-body"><div class="swatches"' + (sw ? '' : ' aria-hidden="true"') + '>' + sw + '</div>' +
      '<h3 class="pcard-title"><a href="product.html#' + p.id + '">' + p.n + '</a></h3>' +
      '<p class="pcard-model">' + p.model + '</p>' +
      '<p class="price-row"><span class="price">' + M(p.price) + '</span>' + (p.old ? '<s class="old">' + DH.fmt(p.old) + '</s>' : '') + '</p>' +
      '<p class="inst">أو ' + DH.fmt(DH.monthly(p)) + ' ' + CUR + ' شهرياً لمدة 12 شهراً</p>' +
      '<button class="btn btn-primary btn-sm" type="button" data-add="' + p.id + '">' + I('bag') + 'أضف إلى السلة</button></div></article>';
  }
  const cards = ids => ids.map(id => card(DH.byId(id))).join('');
  const featItem = (f, cls) => '<div class="' + (cls || 'feat') + '"><span class="feat-ic">' + I(f.i) + '</span><h3 class="h4">' + f.t + '</h3>' + (f.d ? '<p>' + f.d + '</p>' : '') + '</div>';

  // ---------- header, drawer, search, footer ----------
  function shell() {
    const top = $('#dh-top');
    if (top) {
      const navKey = PAGE === 'product' ? 'products' : PAGE;
      const nav = DH.nav.map(n => {
        const on = n.k === navKey ? ' class="on" aria-current="page"' : '';
        if (n.k !== 'products') return '<div class="nav-item"><a href="' + n.href + '"' + on + '>' + n.t + '</a></div>';
        return '<div class="nav-item"><a href="' + n.href + '"' + on + '>' + n.t + I('chevD') + '</a><div class="mega"><div class="wrap"><div class="mega-cats">' +
          DH.categories.map(c => '<a class="mega-cat" href="products.html"><span>' + A(c.art, c.fin, 'mini') + '</span>' + c.t + '</a>').join('') +
          '</div><a class="mega-promo on-night" href="offers.html"><span class="eyebrow">End of season</span><b class="h3">خصم حتى 30%</b><span>على أكثر من 120 جهازاً حتى 31 أكتوبر</span><span class="link">تسوّق العروض' + I('arrowL') + '</span></a></div></div></div>';
      }).join('');
      const logo = '<a class="logo" href="index.html" aria-label="دكتور هوم، الصفحة الرئيسية">' + DH.logo(false) + '<span><span class="logo-en">DR HOME</span><span class="logo-ar">دكتور هوم</span></span></a>';
      top.outerHTML =
        '<div class="topbar"><div class="wrap"><p class="topbar-msg">' + I('truck') + 'توصيل وتركيب مجاني داخل بغداد · ضمان رسمي حتى 10 سنوات</p>' +
        '<nav class="topbar-links" aria-label="روابط سريعة"><a href="support.html">تتبّع طلبك</a><a href="contact.html#branches">فروعنا</a><a href="support.html">خدمة العملاء 6600</a></nav></div></div>' +
        '<header class="site-header"><div class="wrap">' +
        '<button class="icon-btn menu-btn" type="button" id="menuBtn" aria-label="فتح القائمة" aria-controls="drawer" aria-expanded="false">' + I('menu') + '</button>' + logo +
        '<nav class="nav" aria-label="القائمة الرئيسية">' + nav + '</nav>' +
        '<div class="hdr-actions"><button class="icon-btn" type="button" id="searchBtn" aria-label="بحث" aria-expanded="false">' + I('search') + '</button>' +
        '<a class="icon-btn hide-sm" href="products.html" aria-label="المفضلة">' + I('heart') + '</a>' +
        '<a class="icon-btn hide-sm" href="support.html" aria-label="حسابي">' + I('user') + '</a>' +
        '<a class="icon-btn" href="cart.html" aria-label="السلة">' + I('bag') + '<span class="cart-count" hidden>0</span></a></div></div>' +
        '<div class="search-panel" id="searchPanel" hidden><div class="wrap"><form class="search-form" role="search" id="searchForm">' + I('search') +
        '<label class="sr-only" for="q">ابحث في المتجر</label><input id="q" type="search" placeholder="ابحث عن ثلاجة، غسالة، شاشة…" autocomplete="off">' +
        '<button type="button" class="icon-btn" id="searchClose" aria-label="إغلاق البحث">' + I('x') + '</button></form><div class="search-results" id="searchResults"></div></div></div></header>' +
        '<div class="drawer" id="drawer" hidden><div class="drawer-panel" role="dialog" aria-label="القائمة"><div class="drawer-top">' + logo +
        '<button class="icon-btn" type="button" id="drawerClose" aria-label="إغلاق القائمة">' + I('x') + '</button></div>' +
        DH.nav.map(n => '<a href="' + n.href + '">' + n.t + '</a>').join('') + '<a href="cart.html">السلة</a></div></div>';

      const drawer = $('#drawer'), menuBtn = $('#menuBtn');
      const setDrawer = open => { drawer.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); };
      menuBtn.addEventListener('click', () => setDrawer(true));
      $('#drawerClose').addEventListener('click', () => setDrawer(false));
      drawer.addEventListener('click', e => { if (e.target === drawer) setDrawer(false); });

      const panel = $('#searchPanel'), q = $('#q'), res = $('#searchResults'), sb = $('#searchBtn');
      const setSearch = open => { panel.hidden = !open; sb.setAttribute('aria-expanded', String(open)); if (open) q.focus(); };
      sb.addEventListener('click', () => setSearch(panel.hidden));
      $('#searchClose').addEventListener('click', () => setSearch(false));
      $('#searchForm').addEventListener('submit', e => { e.preventDefault(); const a = $('a', res); if (a) location.href = a.getAttribute('href'); });
      q.addEventListener('input', () => {
        const v = q.value.trim();
        const hits = v ? DH.products.filter(p => p.n.indexOf(v) > -1 || p.model.toLowerCase().indexOf(v.toLowerCase()) > -1).slice(0, 5) : [];
        res.innerHTML = v && !hits.length ? '<p class="muted">لا توجد نتائج لـ «' + v.replace(/[<>&"]/g, '') + '». جرّب «ثلاجة» أو «شاشة».</p>' :
          hits.map(p => '<a class="sr" href="product.html#' + p.id + '"><span>' + A(p.art, p.fin, 'mini') + '</span><b>' + p.n + '</b><em>' + DH.fmt(p.price) + ' ' + CUR + '</em></a>').join('');
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') { setSearch(false); setDrawer(false); } });
    }

    const ft = $('#dh-footer');
    if (ft) {
      const links = { 'المنتجات': 'products.html', 'خدمة العملاء': 'support.html', 'دكتور هوم': 'contact.html' };
      ft.outerHTML = '<footer class="site-footer on-night"><div class="wrap">' +
        '<div class="ft-news"><div><p class="eyebrow">Newsletter</p><h2>اشترك ليصلك جديد الأجهزة والعروض أولاً</h2></div>' +
        '<form class="news-form" data-demo="تم تسجيل بريدك في النشرة."><label class="sr-only" for="newsEmail">البريد الإلكتروني</label><input id="newsEmail" type="email" required placeholder="بريدك الإلكتروني"><button class="btn btn-light" type="submit">اشترك</button></form></div>' +
        '<div class="ft-main"><div class="ft-brand"><a class="logo" href="index.html" aria-label="دكتور هوم">' + DH.logo(true) + '<span><span class="logo-en">DR HOME</span><span class="logo-ar">دكتور هوم</span></span></a><p>' + DH.brand.about + '</p>' +
        '<div class="social">' + DH.footer.social.map(s => '<a href="#" aria-label="' + ({ ig: 'إنستغرام', fb: 'فيسبوك', yt: 'يوتيوب', tt: 'تيك توك' })[s] + '">' + I(s) + '</a>').join('') + '</div></div>' +
        DH.footer.cols.map(c => '<div class="ft-col"><h3>' + c.t + '</h3><ul>' + c.l.map(l => '<li><a href="' + links[c.t] + '">' + l + '</a></li>').join('') + '</ul></div>').join('') +
        '<div class="ft-col"><h3>تواصل معنا</h3><ul class="ft-contact"><li>' + I('phone') + 'الخط الساخن <b>' + DH.brand.hotline + '</b></li><li>' + I('wa') + '<b dir="ltr">' + DH.brand.whatsapp + '</b></li><li>' + I('mail') + DH.brand.email + '</li><li>' + I('pin') + DH.brand.address + '</li></ul></div></div>' +
        '<div class="ft-bottom"><p>' + DH.footer.copy + '</p><div class="ft-legal">' + DH.footer.legal.map(l => '<a href="support.html">' + l + '</a>').join('') + '</div><div class="pay">' + DH.footer.pay.map(p => '<span>' + p + '</span>').join('') + '</div></div></div></footer>';
    }
    updateCount();
  }

  // ---------- global interactions ----------
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) { addToCart(add.getAttribute('data-add'), 1); return; }
    const fav = e.target.closest('.pcard-fav, .fav-btn');
    if (fav) {
      const on = fav.getAttribute('aria-pressed') !== 'true';
      fav.setAttribute('aria-pressed', String(on));
      toast(I('heart') + (on ? 'أُضيف إلى المفضلة' : 'أُزيل من المفضلة'));
    }
  });
  document.addEventListener('submit', e => {
    const f = e.target;
    if (!f.hasAttribute('data-demo')) return;
    e.preventDefault();
    if (!f.checkValidity()) { f.reportValidity(); return; }
    toast(I('check') + f.getAttribute('data-demo') + ' <span class="note">(نسخة تجريبية: لم يُرسل شيء)</span>');
    f.reset();
  });
  function copyText(text, el) {
    const ok = () => toast(I('check') + 'تم النسخ: <b dir="ltr">' + text + '</b>');
    const fallback = () => {
      if (el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      toast('تم تحديد النص، انسخه بالضغط على Ctrl+C');
    };
    try { navigator.clipboard.writeText(text).then(ok, fallback); } catch (err) { fallback(); }
  }

  function countdowns() {
    const els = $$('[data-countdown]'); if (!els.length) return;
    const end = new Date(DH.offerEnds).getTime();
    const tick = () => {
      let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
      const v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
      els.forEach(el => $$('[data-u]', el).forEach(b => { b.textContent = String(v[b.getAttribute('data-u')]).padStart(2, '0'); }));
    };
    tick(); setInterval(tick, 1000);
  }
  const countdownHtml = cls => '<div class="countdown ' + (cls || '') + '" data-countdown role="timer" aria-label="الوقت المتبقي على انتهاء العرض">' +
    [['d', 'يوم'], ['h', 'ساعة'], ['m', 'دقيقة'], ['s', 'ثانية']].map(x => '<div class="cd"><b data-u="' + x[0] + '">00</b><span>' + x[1] + '</span></div>').join('') + '</div>';

  // ---------- home ----------
  function home() {
    const hero = $('#hero');
    if (hero) {
      const S = DH.heroSlides; let i = 0, timer = null;
      const render = () => {
        const s = S[i];
        hero.innerHTML = '<div class="wrap"><div class="hero-slide"><div class="hero-copy"><p class="eyebrow">' + s.eb + '</p>' +
          (i === 0 ? '<h1 class="display">' : '<h2 class="display">') + s.t1 + '<b>' + s.t2 + '</b>' + (i === 0 ? '</h1>' : '</h2>') +
          '<p>' + s.p + '</p><div class="hero-ctas"><a class="btn btn-light" href="product.html#' + s.id + '">تسوّق الآن' + I('arrowL') + '</a><a class="btn btn-ghost" href="products.html">اكتشف المجموعة</a></div></div>' +
          '<div class="hero-art">' + A(s.art, s.fin) + '</div></div>' +
          '<div class="hero-ctrl"><div class="hero-dots">' + S.map((x, k) => '<button type="button" aria-label="الشريحة ' + (k + 1) + '"' + (k === i ? ' class="on" aria-current="true"' : '') + ' data-k="' + k + '"></button>').join('') + '</div>' +
          '<span class="hero-count num" dir="ltr">0' + (i + 1) + ' / 0' + S.length + '</span>' +
          '<button class="icon-btn" type="button" data-step="-1" aria-label="السابق">' + I('chevR') + '</button><button class="icon-btn" type="button" data-step="1" aria-label="التالي">' + I('chevL') + '</button></div></div>';
      };
      const go = k => { i = (k + S.length) % S.length; render(); };
      hero.addEventListener('click', e => {
        const d = e.target.closest('[data-k]'), st = e.target.closest('[data-step]');
        if (d) go(+d.getAttribute('data-k')); else if (st) go(i + +st.getAttribute('data-step'));
      });
      const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      const start = () => { if (!reduce) { clearInterval(timer); timer = setInterval(() => go(i + 1), 7000); } };
      hero.addEventListener('mouseenter', () => clearInterval(timer));
      hero.addEventListener('mouseleave', start);
      hero.addEventListener('focusin', () => clearInterval(timer));
      render(); start();
    }
    const cats = $('#cats');
    if (cats) cats.innerHTML = DH.categories.map(c => '<a class="cat" href="products.html"><span class="cat-media">' + A(c.art, c.fin) + '</span>' + c.t + '</a>').join('');
    const tabs = $('[data-tabs]'), grid = $('#homeGrid');
    if (tabs && grid) {
      grid.innerHTML = cards(DH.lists.best);
      tabs.addEventListener('click', e => {
        const b = e.target.closest('[data-list]'); if (!b) return;
        $$('.tab', tabs).forEach(t => { t.classList.toggle('on', t === b); t.setAttribute('aria-pressed', String(t === b)); });
        grid.innerHTML = cards(DH.lists[b.getAttribute('data-list')]);
      });
    }
    const rooms = $('#rooms');
    if (rooms) rooms.innerHTML = DH.rooms.map(r => '<a class="room' + (r.dark ? ' dark' : '') + '" href="products.html" style="background:linear-gradient(180deg,' + r.bg[0] + ' 0 70%,' + r.bg[1] + ' 70% 100%)">' +
      '<div class="room-cap"><h3 class="h3">' + r.t + '</h3><p>' + r.d + '</p><span class="link">تسوّق ' + r.t + I('arrowL') + '</span></div><div class="room-art">' +
      r.items.map(it => A(it[0], it[1]).replace('class="art"', 'class="art" style="width:' + it[3] * 100 + '%;left:' + (it[2] - it[3] / 2) * 100 + '%;bottom:' + (1 - it[4]) * 100 + '%"')).join('') + '</div></a>').join('');
    const band = $('#bandArt');
    if (band) band.innerHTML = A('WM', 'black') + A('FR2', 'silver') + A('MW', 'black');
    const sr = $('#showroomArt');
    if (sr) sr.innerHTML = A('FR4', 'black') + A('TV') + A('WT', 'silver');
  }

  // ---------- product listing (fridges) ----------
  function plp() {
    const grid = $('#plp'); if (!grid) return;
    const all = DH.products.filter(p => p.cat === 'fridge');
    const caps = [{ k: 's', t: 'أقل من 500 لتر', f: c => c < 500 }, { k: 'm', t: '500 – 650 لتر', f: c => c >= 500 && c <= 650 }, { k: 'l', t: 'أكثر من 650 لتر', f: c => c > 650 }];
    const fins = ['black', 'silver', 'beige'];
    const st = { types: new Set(), caps: new Set(), fins: new Set(), max: 4000000, sort: 'best' };
    $('#chips').innerHTML = '<button class="tab on" type="button" data-type="">الكل <em>' + all.length + '</em></button>' +
      DH.fridgeTypes.map(t => '<button class="tab" type="button" data-type="' + t.k + '">' + t.t + ' <em>' + all.filter(p => p.type === t.k).length + '</em></button>').join('');
    $('#filters').innerHTML = '<div class="filters-head"><h2 class="h4">تصفية النتائج</h2><button type="button" id="clearF">مسح الكل</button></div>' +
      '<fieldset class="fgroup" style="border-inline:0;border-top:0;margin:0;padding-inline:0"><legend class="sr-only">النوع</legend><h3>النوع</h3>' + DH.fridgeTypes.map(t => '<label class="check"><input type="checkbox" data-f="types" value="' + t.k + '">' + t.t + '<em>' + all.filter(p => p.type === t.k).length + '</em></label>').join('') + '</fieldset>' +
      '<div class="fgroup"><h3>السعة</h3>' + caps.map(c => '<label class="check"><input type="checkbox" data-f="caps" value="' + c.k + '">' + c.t + '<em>' + all.filter(p => c.f(p.size)).length + '</em></label>').join('') + '</div>' +
      '<div class="fgroup"><h3>اللون</h3><div class="swf">' + fins.map(f => '<button type="button" data-fin="' + f + '" aria-pressed="false" aria-label="' + DH.finishes[f].name + '" title="' + DH.finishes[f].name + '" style="background:' + DH.finishes[f].sw + '"></button>').join('') + '</div></div>' +
      '<div class="fgroup" style="border:0"><h3><label for="maxPrice">السعر الأعلى</label></h3><div class="range"><input type="range" id="maxPrice" min="1000000" max="4000000" step="100000" value="4000000"><div class="range-v"><span>1,000,000</span><b id="maxV">4,000,000 ' + CUR + '</b></div></div></div>';
    const apply = () => {
      let list = all.filter(p => (!st.types.size || st.types.has(p.type)) && (!st.caps.size || caps.some(c => st.caps.has(c.k) && c.f(p.size))) &&
        (!st.fins.size || st.fins.has(p.fin)) && p.price <= st.max);
      if (st.sort === 'low') list = list.slice().sort((a, b) => a.price - b.price);
      if (st.sort === 'high') list = list.slice().sort((a, b) => b.price - a.price);
      if (st.sort === 'new') list = list.slice().sort((a, b) => (b.badge === 'new') - (a.badge === 'new'));
      grid.innerHTML = list.length ? list.map(card).join('') :
        '<div class="empty">' + I('search') + '<h3 class="h4">لا توجد ثلاجات تطابق اختيارك</h3><p class="muted">جرّب إزالة بعض عوامل التصفية أو رفع حد السعر.</p><button class="btn btn-outline btn-sm" type="button" data-clear>مسح عوامل التصفية</button></div>';
      $('#plpCount').innerHTML = 'عرض <b>' + list.length + '</b> من ' + all.length + ' منتجات';
      $('#moreBar').style.width = (list.length / all.length * 100) + '%';
      const one = st.types.size === 1 ? Array.from(st.types)[0] : (st.types.size ? null : '');
      $$('#chips .tab').forEach(b => b.classList.toggle('on', b.getAttribute('data-type') === one));
    };
    const clear = () => {
      st.types.clear(); st.caps.clear(); st.fins.clear(); st.max = 4000000;
      $$('#filters input[type=checkbox]').forEach(i => { i.checked = false; });
      $$('#filters [data-fin]').forEach(b => b.setAttribute('aria-pressed', 'false'));
      $('#maxPrice').value = 4000000; $('#maxV').textContent = DH.fmt(4000000) + ' ' + CUR; apply();
    };
    $('#filters').addEventListener('change', e => {
      const i = e.target;
      if (i.getAttribute('data-f')) { const s = st[i.getAttribute('data-f')]; if (i.checked) s.add(i.value); else s.delete(i.value); apply(); }
    });
    $('#filters').addEventListener('click', e => {
      const b = e.target.closest('[data-fin]');
      if (b) { const f = b.getAttribute('data-fin'), on = !st.fins.has(f); if (on) st.fins.add(f); else st.fins.delete(f); b.setAttribute('aria-pressed', String(on)); apply(); }
      if (e.target.id === 'clearF') clear();
    });
    $('#maxPrice').addEventListener('input', e => { st.max = +e.target.value; $('#maxV').textContent = DH.fmt(st.max) + ' ' + CUR; apply(); });
    $('#chips').addEventListener('click', e => {
      const b = e.target.closest('[data-type]'); if (!b) return;
      const t = b.getAttribute('data-type'); st.types.clear(); if (t) st.types.add(t);
      $$('#filters [data-f=types]').forEach(i => { i.checked = st.types.has(i.value); }); apply();
    });
    $('#sort').addEventListener('change', e => { st.sort = e.target.value; apply(); });
    grid.addEventListener('click', e => { if (e.target.closest('[data-clear]')) clear(); });
    $('#filterToggle').addEventListener('click', e => { const f = $('#filters'); f.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(f.classList.contains('open'))); });
    apply();
  }

  // ---------- product detail ----------
  function pdp() {
    const root = $('#pd'); if (!root) return;
    const views = [{ k: 'soft', t: 'المنظر الأمامي' }, { k: 'dark', t: 'في الإضاءة الخافتة' }, { k: 'zoom', t: 'تفاصيل التصميم' }, { k: 'room', t: 'داخل البيت' }];
    function render() {
      const p = DH.byId((location.hash || '').slice(1)) || DH.byId('sr650');
      const c = cat(p.cat), off = DH.off(p);
      let fin = p.fin, view = 0, qty = 1;
      $('#pdCrumbs').innerHTML = '<a href="index.html">الرئيسية</a>' + I('chevL') + '<a href="products.html">المنتجات</a>' + I('chevL') + '<a href="products.html">' + c.t + '</a>' + I('chevL') + '<b>' + p.n + '</b>';
      const sibs = p.type ? DH.products.filter(x => x.cat === p.cat && x.type === p.type).sort((a, b) => a.size - b.size) : [];
      root.innerHTML = '<div class="gallery"><div class="thumbs" id="thumbs"></div><div class="stage" id="stage"></div></div>' +
        '<div class="pinfo"><div class="badges">' + (p.badge ? '<span class="badge ' + (p.badge === 'best' ? 'badge-dark' : 'badge-line') + '">' + DH.badges[p.badge] + '</span>' : '') + (off ? '<span class="badge badge-sale">خصم ' + off + '%</span>' : '') + '</div>' +
        '<h1 class="pd-title">' + p.n + '</h1><div class="pd-meta"><span>الموديل: ' + p.model + '</span><span class="stock">متوفر في المخزن</span></div>' +
        '<div class="pd-price"><p class="price-row"><span class="price">' + M(p.price) + '</span>' + (p.old ? '<s class="old">' + DH.fmt(p.old) + ' ' + CUR + '</s>' : '') + '</p>' +
        (p.old ? '<span class="save">وفّرت ' + DH.fmt(p.old - p.price) + ' ' + CUR + '</span>' : '') +
        '<p class="pd-inst">' + I('card') + 'أو ' + DH.fmt(DH.monthly(p)) + ' ' + CUR + ' شهرياً لمدة 12 شهراً بدون فوائد</p></div>' +
        (p.colors.length > 1 ? '<div><p class="opt-label">اللون: <b id="finName">' + DH.finishes[fin].name + '</b></p><div class="colors" id="colors">' + p.colors.map(f => '<button type="button" data-fin="' + f + '" aria-pressed="' + (f === fin) + '" aria-label="' + DH.finishes[f].name + '" style="background:' + DH.finishes[f].sw + '"></button>').join('') + '</div></div>' : '') +
        (sibs.length > 1 ? '<div><p class="opt-label">السعة: <b>' + sizeLabel(p) + '</b></p><div class="sizes">' + sibs.map(x => '<a class="tab' + (x.id === p.id ? ' on' : '') + '" href="product.html#' + x.id + '">' + sizeLabel(x) + '</a>').join('') + '</div></div>' : '') +
        '<div class="buy"><div class="qty"><button type="button" data-q="1" aria-label="زيادة الكمية">' + I('plus') + '</button><output id="qty">1</output><button type="button" data-q="-1" aria-label="إنقاص الكمية">' + I('minus') + '</button></div>' +
        '<button class="btn btn-primary" type="button" id="addBtn">' + I('bag') + 'أضف إلى السلة</button><button class="fav-btn" type="button" aria-pressed="false" aria-label="أضف إلى المفضلة">' + I('heart') + '</button></div>' +
        '<a class="btn btn-outline btn-block" href="cart.html" id="buyNow">اشترِ الآن</a>' +
        '<ul class="perks">' + DH.delivery.map(d => '<li>' + I(d.i) + d.t + '</li>').join('') + '</ul></div>';
      const drawGallery = () => {
        $('#thumbs').innerHTML = views.map((v, k) => '<button type="button" class="thumb v-' + v.k + (k === view ? ' on' : '') + '" data-v="' + k + '" aria-label="' + v.t + '">' + A(p.art, fin, 'mini') + '</button>').join('');
        const stg = $('#stage'); stg.className = 'stage v-' + views[view].k;
        stg.innerHTML = A(p.art, fin) + '<span class="stage-tag">' + views[view].t + '</span>';
      };
      drawGallery();
      root.onclick = e => {
        const t = e.target.closest('[data-v]'), f = e.target.closest('[data-fin]'), q = e.target.closest('[data-q]');
        if (t) { view = +t.getAttribute('data-v'); drawGallery(); }
        if (f) { fin = f.getAttribute('data-fin'); $$('#colors button').forEach(b => b.setAttribute('aria-pressed', String(b === f))); $('#finName').textContent = DH.finishes[fin].name; drawGallery(); }
        if (q) { qty = Math.max(1, Math.min(9, qty + +q.getAttribute('data-q'))); $('#qty').textContent = qty; }
        if (e.target.closest('#addBtn')) addToCart(p.id, qty);
        if (e.target.closest('#buyNow')) { const cc = getCart(); if (!cc.find(x => x[0] === p.id)) { cc.push([p.id, qty]); setCart(cc); } }
      };
      const four = p.type === '4door';
      const feats = four ? DH.productFeatures : p.sp.map((t, k) => ({ i: ['bolt', 'leaf', 'wifi'][k], t: t })).concat([{ i: 'shield', t: 'ضمان رسمي', d: 'ضمان مكتوب من دكتور هوم مع صيانة منزلية خلال 24 ساعة.' }]);
      $('#pdFeat').innerHTML = '<div class="pfeat-top"><div><p class="eyebrow">Key features</p><h2 class="h1">' + (four ? 'انظر إلى الداخل<br>دون أن تفتح الباب' : 'صُمّم ليجعل يومك أسهل') + '</h2>' +
        '<p class="lead">' + (four ? 'طرقتان على الزجاج الداكن تضيئان الداخل، فتعرف ما ينقصك قبل أن تفتح الباب وتحافظ على البرودة والطاقة.' : p.n + ' بمواصفات مختارة لبيوت العراق وصيفه الحار، مع توصيل وتركيب مجاني.') + '</p></div>' +
        '<div class="pfeat-art">' + A(p.art, fin) + '</div></div><div class="fgrid">' + feats.map(f => featItem(f, 'fcard')).join('') + '</div>';
      const rows = p.id === 'sr650' ? DH.specs : [['الموديل', p.model], ['السعة / الحجم', sizeLabel(p)], ['اللون', DH.finishes[p.fin] ? DH.finishes[p.fin].name : 'أسود'], ['الفئة', c.t],
        ['المزايا الرئيسية', p.sp.join('، ')], ['الجهد الكهربائي', '220–240 فولت / 50 هرتز'], ['التوصيل والتركيب', 'مجاني'], ['الضمان', 'سنتان على الجهاز']];
      $('#pdSpecs').innerHTML = rows.map(r => '<div class="spec"><dt>' + r[0] + '</dt><dd><bdi>' + r[1] + '</bdi></dd></div>').join('');
      $('#pdName').textContent = p.model;
    }
    render();
    window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
  }

  // ---------- offers ----------
  function offers() {
    const hero = $('#oheroArt'); if (!hero) return;
    hero.innerHTML = A('WM', 'black') + A('FR4', 'silver') + A('MW', 'black');
    const grid = $('#dealGrid');
    const groups = { 'كل العروض': null, 'التبريد': ['fridge'], 'الغسيل': ['washer', 'dish'], 'الشاشات': ['tv'], 'المطبخ': ['oven', 'dish'], 'التكييف': ['ac'] };
    const deals = DH.products.filter(p => p.old);
    const show = g => {
      const list = groups[g] ? deals.filter(p => groups[g].indexOf(p.cat) > -1) : DH.lists.offers.map(DH.byId);
      grid.innerHTML = list.length ? list.map(card).join('') : '<div class="empty"><h3 class="h4">لا توجد عروض في هذه الفئة حالياً</h3><p class="muted">تابعنا، تتجدد العروض كل أسبوع.</p></div>';
    };
    $('#offerTabs').innerHTML = DH.offerTabs.map((t, k) => '<button class="tab' + (k ? '' : ' on') + '" type="button" aria-pressed="' + !k + '">' + t + '</button>').join('');
    $('#offerTabs').addEventListener('click', e => {
      const b = e.target.closest('.tab'); if (!b) return;
      $$('#offerTabs .tab').forEach(t => { t.classList.toggle('on', t === b); t.setAttribute('aria-pressed', String(t === b)); }); show(b.textContent);
    });
    show('كل العروض');
    $('#bundles').innerHTML = DH.bundles.map(b => {
      const ps = b.ids.map(DH.byId), sum = ps.reduce((s, p) => s + p.price, 0);
      return '<article class="bundle"><div class="bundle-stage">' + ps.map(p => A(p.art, p.fin)).join('<span class="plus">' + I('plus') + '</span>') + '</div>' +
        '<div><h3 class="h3">' + b.t + '</h3><p class="muted">' + b.d + '</p></div><ul class="bundle-items">' + ps.map(p => '<li>' + I('check') + p.n + '</li>').join('') + '</ul>' +
        '<div class="bundle-foot"><div><p class="price-row"><span class="price">' + M(b.price) + '</span><s class="old">' + DH.fmt(sum) + '</s></p><span class="save">وفّر ' + DH.fmt(sum - b.price) + ' ' + CUR + '</span></div>' +
        '<button class="btn btn-primary" type="button" data-bundle="' + b.ids.join(',') + '">' + I('bag') + 'أضف الباقة إلى السلة</button></div></article>';
    }).join('');
    $('#bundles').addEventListener('click', e => {
      const b = e.target.closest('[data-bundle]'); if (!b) return;
      const c = getCart(); b.getAttribute('data-bundle').split(',').forEach(id => { const it = c.find(x => x[0] === id); if (it) it[1]++; else c.push([id, 1]); });
      setCart(c); toast(I('check') + 'أُضيفت الباقة إلى السلة <a href="cart.html">عرض السلة</a>');
    });
    const cb = $('#copyCode'); if (cb) cb.addEventListener('click', () => copyText('DRHOME10', $('#code')));
  }

  // ---------- cart & checkout ----------
  function checkout() {
    const list = $('#cartList'); if (!list) return;
    let express = false, promo = false;
    $('#ckSteps').innerHTML = DH.checkoutSteps.map((s, k) => (k ? '<span class="ck-line"></span>' : '') + '<div class="ck-step' + (k ? '' : ' on') + '"' + (k ? '' : ' aria-current="step"') + '><i>' + (k + 1) + '</i><span>' + s + '</span></div>').join('');
    $('#gov').innerHTML = DH.governorates.map(g => '<option>' + g + '</option>').join('');
    $('#payOpts').innerHTML = DH.payments.map((p, k) => '<label class="opt"><input type="radio" name="pay" value="' + p.k + '"' + (k ? '' : ' checked') + '>' + I(p.i) + '<div><b>' + p.t + '</b><span>' + p.d + '</span></div></label>').join('');
    const render = () => {
      const c = getCart();
      const n = c.reduce((s, x) => s + x[1], 0);
      $('#cartN').textContent = n + ' منتجات';
      list.innerHTML = c.length ? c.map(x => {
        const p = DH.byId(x[0]);
        return '<div class="ci"><a class="ci-media" href="product.html#' + p.id + '">' + A(p.art, p.fin) + '</a><div class="ci-info"><h3>' + p.n + '</h3><p>' + p.model + (DH.finishes[p.fin] ? ' · ' + DH.finishes[p.fin].name : '') + '</p><p>' + I('truck') + ' توصيل وتركيب مجاني</p>' +
          '<div class="ci-acts"><button type="button" data-act="rm" data-id="' + p.id + '">' + I('trash') + 'حذف</button><button type="button" class="fav-btn-text" data-act="fav" data-id="' + p.id + '">' + I('heart') + 'نقل إلى المفضلة</button></div></div>' +
          '<div class="ci-side"><span class="price">' + M(p.price * x[1]) + '</span><div class="qty sm"><button type="button" data-act="inc" data-id="' + p.id + '" aria-label="زيادة">' + I('plus') + '</button><output>' + x[1] + '</output><button type="button" data-act="dec" data-id="' + p.id + '" aria-label="إنقاص">' + I('minus') + '</button></div></div></div>';
      }).join('') : '<div class="empty"><h3 class="h4">سلتك فارغة</h3><p class="muted">أضف أجهزتك المفضلة لتظهر هنا.</p><a class="btn btn-primary btn-sm" href="products.html">تسوّق المنتجات</a></div>';
      const sub = c.reduce((s, x) => s + DH.byId(x[0]).price * x[1], 0);
      const saved = c.reduce((s, x) => { const p = DH.byId(x[0]); return s + (p.old ? (p.old - p.price) * x[1] : 0); }, 0);
      const disc = promo ? Math.min(Math.round(sub * 0.1), 250000) : 0;
      const ship = express && c.length ? 25000 : 0;
      $('#sum').innerHTML = '<div class="sum-row"><span>المجموع الفرعي (' + n + ')</span><b>' + DH.fmt(sub) + ' ' + CUR + '</b></div>' +
        (saved ? '<div class="sum-row"><span>وفّرت من العروض</span><b class="free">' + DH.fmt(saved) + ' ' + CUR + '</b></div>' : '') +
        (disc ? '<div class="sum-row"><span>كود DRHOME10</span><b class="free">-' + DH.fmt(disc) + ' ' + CUR + '</b></div>' : '') +
        '<div class="sum-row"><span>التوصيل</span><b' + (ship ? '' : ' class="free"') + '>' + (ship ? DH.fmt(ship) + ' ' + CUR : 'مجاني') + '</b></div>' +
        '<div class="sum-row"><span>التركيب</span><b class="free">مجاني</b></div>' +
        '<div class="sum-total"><span>الإجمالي</span><span class="price">' + M(sub - disc + ship) + '</span></div>' +
        '<p class="inst">أو ' + DH.fmt(Math.round((sub - disc + ship) / 12 / 500) * 500) + ' ' + CUR + ' شهرياً لمدة 12 شهراً</p>';
      $('#placeOrder').disabled = !c.length;
    };
    list.addEventListener('click', e => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const id = b.getAttribute('data-id'), act = b.getAttribute('data-act');
      let c = getCart(); const it = c.find(x => x[0] === id);
      if (act === 'inc') it[1] = Math.min(9, it[1] + 1);
      if (act === 'dec') it[1] = Math.max(1, it[1] - 1);
      if (act === 'rm' || act === 'fav') { c = c.filter(x => x[0] !== id); toast(act === 'fav' ? I('heart') + 'نُقل المنتج إلى المفضلة' : I('trash') + 'حُذف المنتج من السلة'); }
      setCart(c); render();
    });
    $('#ckForm').addEventListener('change', e => { if (e.target.name === 'ship') { express = e.target.value === 'express'; render(); } });
    $('#promoBtn').addEventListener('click', () => {
      const v = $('#promo').value.trim().toUpperCase(), m = $('#promoMsg');
      promo = v === 'DRHOME10';
      m.hidden = false; m.className = 'promo-msg' + (promo ? '' : ' err');
      m.textContent = promo ? 'تم تطبيق خصم 10% (حتى 250,000 ' + CUR + ').' : (v ? 'الكود «' + v.replace(/[<>&"]/g, '') + '» غير صالح. جرّب DRHOME10.' : 'اكتب كود الخصم أولاً.');
      render();
    });
    $('#ckForm').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.currentTarget;
      if (!f.checkValidity()) { f.reportValidity(); return; }
      const c = getCart(); if (!c.length) return;
      $('#ckSteps').innerHTML = DH.checkoutSteps.map((s, k) => (k ? '<span class="ck-line"></span>' : '') + '<div class="ck-step on"><i>' + (k + 1) + '</i><span>' + s + '</span></div>').join('');
      $('#ckWrap').innerHTML = '<div class="done"><span class="feat-ic">' + I('check') + '</span><h2 class="h2">شكراً لك، تم تأكيد طلبك</h2><p class="lead">رقم الطلب <b class="num">DH-2026-104582</b>. سيتصل بك فريق التوصيل لتحديد موعد التسليم والتركيب.</p>' +
        '<p class="note">نسخة تجريبية من الموقع: لم يُرسل أي طلب ولم يُخصم أي مبلغ.</p><div class="btn-row"><a class="btn btn-primary" href="index.html">العودة إلى الرئيسية</a><a class="btn btn-outline" href="support.html">تتبّع الطلب</a></div></div>';
      setCart([]); window.scrollTo(0, 0);
    });
    render();
  }

  // ---------- support ----------
  function support() {
    const svc = $('#svc'); if (!svc) return;
    svc.innerHTML = DH.services.map(s => '<a class="svc" href="#request"><span class="feat-ic">' + I(s.i) + '</span><h3 class="h4">' + s.t + '</h3><p>' + s.d + '</p><span class="link">ابدأ الآن' + I('arrowL') + '</span></a>').join('');
    $('#plans').innerHTML = DH.plans.map(p => '<article class="plan' + (p.hot ? ' hot' : '') + '"><div class="plan-top"><h3 class="h4">' + p.t + '</h3>' + (p.hot ? '<span class="badge">' + p.hot + '</span>' : '') + '</div>' +
      '<p class="plan-price">' + p.price + '<small>' + p.per + '</small></p><ul>' + p.f.map(f => '<li>' + I('check') + f + '</li>').join('') + '</ul>' +
      '<a class="btn ' + (p.hot ? 'btn-light' : 'btn-outline') + ' btn-block" href="#request">' + p.cta + '</a></article>').join('');
    $('#vsteps').innerHTML = DH.serviceSteps.map(s => '<li><b>' + s.t + '</b><span>' + s.d + '</span></li>').join('');
    $('#device').innerHTML = DH.categories.map(c => '<option>' + c.t + '</option>').join('');
    $('#faq').innerHTML = DH.faqs.map((f, k) => '<details class="faq"' + (k ? '' : ' open') + '><summary>' + f.q + I('plus') + '</summary><p>' + f.a + '</p></details>').join('');
    $('#helpRow').innerHTML = DH.channels.slice(0, 3).map(c => '<div class="help"><span class="feat-ic">' + I(c.i) + '</span><div><b>' + c.t + ' · <span dir="ltr">' + c.v + '</span></b><span>' + c.d + '</span></div></div>').join('');
    const q = $('#helpQ');
    q.addEventListener('input', () => {
      const v = q.value.trim();
      $$('#faq .faq').forEach(d => { const hit = !v || d.textContent.indexOf(v) > -1; d.hidden = !hit; if (v && hit) d.open = true; });
    });
    $('#helpSearch').addEventListener('submit', e => { e.preventDefault(); $('#faqSec').scrollIntoView({ behavior: 'smooth' }); });
    $$('[data-q]').forEach(b => b.addEventListener('click', () => { q.value = b.getAttribute('data-q'); q.dispatchEvent(new Event('input')); $('#faqSec').scrollIntoView({ behavior: 'smooth' }); }));
  }

  // ---------- contact ----------
  function contact() {
    const ch = $('#chan'); if (!ch) return;
    ch.innerHTML = DH.channels.map((c, k) => '<div class="chan"><span class="feat-ic">' + I(c.i) + '</span><span>' + c.t + '</span><b id="ch' + k + '">' + c.v + '</b><span>' + c.d + '</span>' +
      (k < 3 ? '<button class="copy-btn" type="button" data-copy="' + k + '">' + I('copy') + 'نسخ</button>' : '<a class="copy-btn" href="support.html">' + I('chat') + 'ابدأ الآن</a>') + '</div>').join('');
    ch.addEventListener('click', e => { const b = e.target.closest('[data-copy]'); if (b) { const k = b.getAttribute('data-copy'); copyText(DH.channels[k].v, $('#ch' + k)); } });
    $('#subject').innerHTML = DH.contactSubjects.map(s => '<option>' + s + '</option>').join('');
    const map = $('#map');
    map.innerHTML = DH.mapSvg + '<span class="map-label">بغداد</span>' +
      DH.branches.map((b, k) => b.x ? '<button type="button" class="pin" data-b="' + k + '" style="left:' + b.x * 100 + '%;top:' + b.y * 100 + '%" aria-label="' + b.t + '"></button>' : '').join('') + '<div class="map-card" id="mapCard"></div>';
    const pick = k => {
      const b = DH.branches[k];
      $$('.pin', map).forEach(p => p.classList.toggle('on', +p.getAttribute('data-b') === k));
      $('#mapCard').innerHTML = '<div><b>' + b.t + '</b><span>' + b.a + ' · ' + b.h + '</span></div><a class="btn btn-primary btn-sm" href="https://maps.google.com/?q=' + encodeURIComponent(b.t + ' ' + b.c) + '" target="_blank" rel="noopener">' + I('pin') + 'الاتجاهات</a>';
    };
    map.addEventListener('click', e => { const p = e.target.closest('.pin'); if (p) pick(+p.getAttribute('data-b')); });
    pick(0);
    let city = 'الكل';
    const draw = () => {
      $('#cityChips').innerHTML = DH.cities.map(c => '<button class="tab' + (c === city ? ' on' : '') + '" type="button" aria-pressed="' + (c === city) + '">' + c + '</button>').join('');
      $('#branchGrid').innerHTML = DH.branches.map((b, k) => (city === 'الكل' || b.c === city) ? '<article class="branch"><div class="branch-top"><span class="badge badge-line">' + b.c + '</span>' + (b.main ? '<span class="badge badge-dark">صالة العرض الرئيسية</span>' : '') + '</div>' +
        '<h3>' + b.t + '</h3><ul class="info-list"><li>' + I('pin') + b.a + '</li><li>' + I('clock') + b.h + '</li><li>' + I('phone') + '<span dir="ltr">' + b.p + '</span></li></ul>' +
        '<div class="btn-row">' + (b.x ? '<button class="btn btn-outline btn-sm" type="button" data-show="' + k + '">' + I('pin') + 'على الخريطة</button>' : '') +
        '<a class="btn btn-primary btn-sm" href="https://maps.google.com/?q=' + encodeURIComponent(b.t + ' ' + b.c) + '" target="_blank" rel="noopener">الاتجاهات' + I('arrowL') + '</a></div></article>' : '').join('');
    };
    $('#cityChips').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) { city = b.textContent; draw(); } });
    $('#branchGrid').addEventListener('click', e => { const b = e.target.closest('[data-show]'); if (b) { pick(+b.getAttribute('data-show')); map.scrollIntoView({ behavior: 'smooth', block: 'center' }); } });
    draw();
  }

  // ---------- boot ----------
  shell();
  $$('i[data-i]').forEach(el => { el.outerHTML = I(el.getAttribute('data-i')); });
  const tv = $('#tileTv'); if (tv) tv.innerHTML = A('TV');
  const wt = $('#tileWt'); if (wt) wt.innerHTML = A('WT', 'silver');
  $$('[data-jump]').forEach(b => b.addEventListener('click', () => {
    $$('[data-jump]').forEach(x => x.classList.toggle('on', x === b));
    const t = document.getElementById(b.getAttribute('data-jump'));
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 140, behavior: 'smooth' });
  }));
  const promoIn = $('#promo');
  if (promoIn) promoIn.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#promoBtn').click(); } });
  $$('[data-list]').forEach(el => { if (el.tagName !== 'BUTTON') el.innerHTML = cards(DH.lists[el.getAttribute('data-list')]); });
  $$('[data-feats]').forEach(el => { el.innerHTML = DH.features.map(f => featItem(f)).join(''); });
  $$('[data-cd]').forEach(el => { el.outerHTML = countdownHtml(el.getAttribute('data-cd')); });
  home(); plp(); pdp(); offers(); checkout(); support(); contact();
  countdowns();
  window.addEventListener('pageshow', updateCount);
})();
