// DR HOME – shared content, icons and product illustrations.
// Used by the website (assets/app.js) AND the Figma plugin (figma-plugin/code.js is built from this file),
// so editing a product, price or text here changes both.
// NOTE: phone numbers, addresses, prices and policies are placeholders – replace them with the real ones.

const DH = {};

DH.brand = {
  en: 'DR HOME', ar: 'دكتور هوم',
  about: 'متجرك للأجهزة المنزلية الفاخرة في العراق. أجهزة أصلية بضمان رسمي، وتوصيل وتركيب مجاني.',
  hotline: '6600', whatsapp: '0770 000 0000', email: 'care@drhome.iq',
  address: 'بغداد، المنصور، شارع 14 رمضان', currency: 'د.ع'
};

DH.nav = [
  { k: 'home', t: 'الرئيسية', href: 'index.html' },
  { k: 'products', t: 'المنتجات', href: 'products.html' },
  { k: 'offers', t: 'العروض', href: 'offers.html' },
  { k: 'support', t: 'الدعم والضمان', href: 'support.html' },
  { k: 'contact', t: 'الفروع والتواصل', href: 'contact.html' }
];

// 24×24 stroke icons (inner SVG markup)
DH.icons = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  heart: '<path d="M12 20s-7.5-4.6-9.2-9.4C1.6 7.2 3.9 4 7.2 4c2 0 3.6 1.1 4.8 2.8C13.2 5.1 14.8 4 16.8 4c3.3 0 5.6 3.2 4.4 6.6C19.5 15.4 12 20 12 20Z"/>',
  bag: '<path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  chevL: '<path d="m15 18-6-6 6-6"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>',
  arrowL: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  headset: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  wa: '<path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>',
  tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9Z"/><circle cx="8" cy="8" r="1.5"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8"/><path d="M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5"/>',
  sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-14"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5Z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  install: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  copy: '<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  compare: '<path d="M7 4v16M17 4v16M3 8l4-4 4 4M13 16l4 4 4-4"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.2-6"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  quiet: '<path d="M11 5 6 9H2v6h4l5 4Z"/><path d="m22 9-6 6M16 9l6 6"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  snow: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9 4 3 2 3-2M9 20l3-2 3 2"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  play: '<path d="M8 5v14l11-7Z"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"/>',
  ig: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  fb: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  yt: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  tt: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.4 4.6 5 5"/>'
};

DH.logo = function (dark) {
  const bg = dark ? '#FFFFFF' : '#0B0B0C', fg = dark ? '#0B0B0C' : '#FFFFFF';
  return '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="' + bg + '"/>' +
    '<path d="M11 19.5 20 12l9 7.5V28a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 11 28Z" fill="none" stroke="' + fg + '" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M20 18.5v7M16.5 22h7" stroke="' + fg + '" stroke-width="2" stroke-linecap="round"/></svg>';
};

// Product finishes (colour options) – swatch colour + palette used by the illustrations
DH.finishes = {
  black: { name: 'أسود زجاجي', sw: '#1C1C1E', B: '#262628', B2: '#111112', B3: '#3A3A3D', H: '#8C8C90', G: '#0A0A0B', L: '#3A3A3E' },
  silver: { name: 'فضي ستانلس', sw: '#C8CACC', B: '#DCDEE0', B2: '#B2B5B8', B3: '#F2F3F4', H: '#7C7F84', G: '#26272A', L: '#A2A5A9' },
  beige: { name: 'بيج كريمي', sw: '#E3DCCF', B: '#ECE6DB', B2: '#D3CBBC', B3: '#F7F3EC', H: '#A89E8C', G: '#2B2A28', L: '#C9C0AF' },
  white: { name: 'أبيض', sw: '#F4F4F2', B: '#FBFBFA', B2: '#E2E2DF', B3: '#FFFFFF', H: '#A3A3A0', G: '#232325', L: '#D2D2CE' }
};

// Product illustrations, 400×400. {U}=unique id prefix, {B}/{B2}/{B3}/{H}/{G}/{L}=finish colours.
const ART_BODY = '<linearGradient id="{U}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="{B2}"/><stop offset=".5" stop-color="{B}"/><stop offset="1" stop-color="{B2}"/></linearGradient>' +
  '<linearGradient id="{U}s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".22"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient>';
const SHADOW = (cx, cy, rx) => '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="9" fill="#000000" fill-opacity=".16"/>';
const SHEEN = (x, y, w, h, r) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="url(#{U}s)"/>';
const BODY = (x, y, w, h, r) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="url(#{U}b)"/>';
let FAB = '';
for (let y = 128; y <= 360; y += 14) FAB += 'M140 ' + y + 'h120';
let GRILLE = '';
for (let y = 220; y <= 340; y += 12) GRILLE += 'M166 ' + y + 'h68';

DH.arts = {
  FR4: { name: 'Fridge · 4 doors', d: ART_BODY, s: SHADOW(200, 383, 132) + BODY(94, 30, 212, 352, 12) +
    '<rect x="108" y="50" width="80" height="164" rx="6" fill="{G}"/><path d="M116 96h64M116 136h64M116 176h64" stroke="#FFFFFF" stroke-opacity=".08" stroke-width="2"/>' +
    '<rect x="236" y="56" width="44" height="18" rx="4" fill="#000000" fill-opacity=".5"/><rect x="242" y="63" width="18" height="4" rx="2" fill="#FFFFFF" fill-opacity=".85"/>' +
    '<path d="M200 30v202M94 232h212M94 306h212" stroke="{L}" stroke-width="2"/>' +
    '<rect x="191" y="92" width="4" height="96" rx="2" fill="{H}"/><rect x="205" y="92" width="4" height="96" rx="2" fill="{H}"/>' +
    '<rect x="124" y="244" width="152" height="4" rx="2" fill="{H}"/><rect x="124" y="318" width="152" height="4" rx="2" fill="{H}"/>' + SHEEN(94, 30, 212, 352, 12) },
  FR2: { name: 'Fridge · side by side', d: ART_BODY, s: SHADOW(200, 383, 128) + BODY(98, 28, 204, 354, 12) +
    '<path d="M200 28v354" stroke="{L}" stroke-width="2"/>' +
    '<rect x="122" y="104" width="54" height="80" rx="8" fill="{G}"/><rect x="134" y="116" width="28" height="9" rx="2" fill="#FFFFFF" fill-opacity=".55"/><rect x="140" y="146" width="18" height="24" rx="3" fill="#000000" fill-opacity=".4"/>' +
    '<rect x="186" y="84" width="5" height="250" rx="2.5" fill="{H}"/><rect x="209" y="84" width="5" height="250" rx="2.5" fill="{H}"/>' + SHEEN(98, 28, 204, 354, 12) },
  FRB: { name: 'Fridge · 2 doors', d: ART_BODY, s: SHADOW(200, 383, 110) + BODY(116, 26, 168, 356, 12) +
    '<path d="M116 246h168" stroke="{L}" stroke-width="2"/>' +
    '<rect x="262" y="70" width="5" height="120" rx="2.5" fill="{H}"/><rect x="262" y="262" width="5" height="70" rx="2.5" fill="{H}"/>' +
    '<rect x="134" y="44" width="40" height="16" rx="4" fill="#000000" fill-opacity=".45"/><rect x="140" y="50" width="16" height="4" rx="2" fill="#FFFFFF" fill-opacity=".85"/>' + SHEEN(116, 26, 168, 356, 12) },
  WM: { name: 'Washer', d: ART_BODY, s: SHADOW(200, 383, 118) + BODY(104, 92, 192, 290, 12) +
    '<path d="M104 144h192" stroke="{L}" stroke-width="2"/>' +
    '<rect x="120" y="108" width="58" height="22" rx="4" fill="{B3}" stroke="{L}" stroke-width="1.5"/><rect x="196" y="108" width="46" height="22" rx="4" fill="{G}"/><rect x="203" y="116" width="20" height="5" rx="2.5" fill="#FFFFFF" fill-opacity=".85"/>' +
    '<circle cx="268" cy="119" r="12" fill="{B3}" stroke="{L}" stroke-width="2"/>' +
    '<circle cx="200" cy="262" r="84" fill="{B3}" stroke="{L}" stroke-width="2"/><circle cx="200" cy="262" r="68" fill="{G}"/><circle cx="200" cy="262" r="52" fill="#FFFFFF" fill-opacity=".06"/>' +
    '<path d="M150 230a62 62 0 0 1 40-32" fill="none" stroke="#FFFFFF" stroke-opacity=".3" stroke-width="5" stroke-linecap="round"/>' + SHEEN(104, 92, 192, 290, 12) },
  WT: { name: 'Wash tower', d: ART_BODY, s: SHADOW(200, 384, 104) + BODY(118, 18, 164, 364, 12) +
    '<rect x="118" y="190" width="164" height="30" fill="{G}"/><rect x="186" y="202" width="28" height="6" rx="3" fill="#FFFFFF" fill-opacity=".85"/>' +
    '<circle cx="200" cy="106" r="60" fill="{B3}" stroke="{L}" stroke-width="2"/><circle cx="200" cy="106" r="47" fill="{G}"/>' +
    '<circle cx="200" cy="298" r="60" fill="{B3}" stroke="{L}" stroke-width="2"/><circle cx="200" cy="298" r="47" fill="{G}"/>' +
    '<path d="M164 84a44 44 0 0 1 26-22M164 276a44 44 0 0 1 26-22" fill="none" stroke="#FFFFFF" stroke-opacity=".3" stroke-width="4" stroke-linecap="round"/>' + SHEEN(118, 18, 164, 364, 12) },
  TV: { name: 'OLED TV', d: '<linearGradient id="{U}t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34353A"/><stop offset=".5" stop-color="#121215"/><stop offset="1" stop-color="#050506"/></linearGradient>' +
    '<linearGradient id="{U}w" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C9B69A" stop-opacity="0"/><stop offset=".5" stop-color="#EADCC4" stop-opacity=".7"/><stop offset="1" stop-color="#C9B69A" stop-opacity="0"/></linearGradient>',
    s: '<ellipse cx="200" cy="368" rx="120" ry="7" fill="#000000" fill-opacity=".16"/>' +
    '<rect x="18" y="76" width="364" height="212" rx="4" fill="#0A0A0B"/><rect x="22" y="80" width="356" height="204" rx="2" fill="url(#{U}t)"/>' +
    '<path d="M22 238C110 168 214 262 378 150V284H22Z" fill="#FFFFFF" fill-opacity=".05"/>' +
    '<path d="M22 214C122 140 220 246 378 122" fill="none" stroke="url(#{U}w)" stroke-width="3"/><path d="M22 228C126 162 224 260 378 142" fill="none" stroke="url(#{U}w)" stroke-width="1.5"/>' +
    '<rect x="186" y="288" width="28" height="68" fill="#1C1C1E"/><rect x="120" y="354" width="160" height="10" rx="5" fill="#1C1C1E"/>' },
  AC: { name: 'Split AC', d: '<linearGradient id="{U}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E4E4E1"/></linearGradient>',
    s: '<rect x="34" y="132" width="332" height="104" rx="24" fill="url(#{U}a)" stroke="#D1D1CD" stroke-width="2"/>' +
    '<rect x="58" y="210" width="284" height="14" rx="7" fill="#CFCFCB"/><path d="M70 217h260" stroke="#B5B5B1" stroke-width="2"/>' +
    '<rect x="286" y="158" width="46" height="18" rx="5" fill="#1C1C1E"/><rect x="293" y="165" width="18" height="4" rx="2" fill="#FFFFFF"/>' +
    '<path d="M120 258c-10 12 10 22 0 36M200 258c-10 12 10 22 0 36M280 258c-10 12 10 22 0 36" fill="none" stroke="#BDBDB8" stroke-width="3" stroke-linecap="round"/>' },
  ACT: { name: 'Tower AC', d: ART_BODY, s: SHADOW(200, 384, 70) + BODY(150, 22, 100, 360, 18) +
    '<circle cx="200" cy="96" r="36" fill="{B3}" stroke="{L}" stroke-width="2"/><circle cx="200" cy="96" r="24" fill="none" stroke="{L}" stroke-width="2"/><circle cx="200" cy="96" r="12" fill="{G}"/>' +
    '<rect x="182" y="160" width="36" height="14" rx="4" fill="{G}"/><rect x="188" y="165" width="14" height="4" rx="2" fill="#FFFFFF" fill-opacity=".85"/>' +
    '<path d="' + GRILLE + '" stroke="{L}" stroke-width="2" stroke-linecap="round"/>' + SHEEN(150, 22, 100, 360, 18) },
  OV: { name: 'Built-in oven', d: ART_BODY, s: SHADOW(200, 370, 150) + BODY(68, 62, 264, 300, 10) +
    '<rect x="68" y="62" width="264" height="50" rx="10" fill="{G}"/>' +
    '<circle cx="100" cy="87" r="12" fill="{B3}" stroke="{L}" stroke-width="2"/><circle cx="300" cy="87" r="12" fill="{B3}" stroke="{L}" stroke-width="2"/>' +
    '<rect x="168" y="78" width="64" height="18" rx="4" fill="#000000" fill-opacity=".6"/><rect x="178" y="85" width="30" height="4" rx="2" fill="#F1D3A6"/>' +
    '<rect x="92" y="122" width="216" height="8" rx="4" fill="{H}"/><rect x="84" y="142" width="232" height="204" rx="8" fill="{G}"/>' +
    '<rect x="104" y="162" width="192" height="164" rx="6" fill="#F1C98B" fill-opacity=".14"/><ellipse cx="200" cy="282" rx="46" ry="9" fill="#F1C98B" fill-opacity=".35"/>' +
    '<path d="M112 296h176" stroke="#FFFFFF" stroke-opacity=".12" stroke-width="3"/>' + SHEEN(68, 62, 264, 300, 10) },
  DW: { name: 'Dishwasher', d: ART_BODY, s: SHADOW(200, 384, 118) + BODY(96, 66, 208, 316, 10) +
    '<rect x="96" y="66" width="208" height="34" rx="10" fill="{B3}" fill-opacity=".55"/>' +
    '<rect x="232" y="76" width="50" height="14" rx="4" fill="{G}"/><rect x="240" y="81" width="20" height="4" rx="2" fill="#FFFFFF" fill-opacity=".85"/>' +
    '<circle cx="118" cy="83" r="4" fill="{H}"/><circle cx="134" cy="83" r="4" fill="{H}"/><circle cx="150" cy="83" r="4" fill="{H}"/>' +
    '<path d="M96 100h208" stroke="{L}" stroke-width="2"/><rect x="130" y="114" width="140" height="8" rx="4" fill="{H}"/>' +
    '<rect x="96" y="356" width="208" height="26" fill="{B2}"/>' + SHEEN(96, 66, 208, 316, 10) },
  MW: { name: 'Microwave', d: ART_BODY, s: SHADOW(200, 306, 150) + BODY(56, 124, 288, 178, 12) +
    '<rect x="72" y="140" width="190" height="146" rx="8" fill="{G}"/><rect x="90" y="158" width="154" height="110" rx="5" fill="#FFFFFF" fill-opacity=".05"/>' +
    '<path d="M94 172l40-12" stroke="#FFFFFF" stroke-opacity=".22" stroke-width="4" stroke-linecap="round"/>' +
    '<rect x="276" y="146" width="52" height="18" rx="4" fill="{G}"/><rect x="284" y="152" width="22" height="5" rx="2.5" fill="#FFFFFF" fill-opacity=".85"/>' +
    '<circle cx="290" cy="186" r="6" fill="{B3}" stroke="{L}"/><circle cx="314" cy="186" r="6" fill="{B3}" stroke="{L}"/><circle cx="290" cy="208" r="6" fill="{B3}" stroke="{L}"/><circle cx="314" cy="208" r="6" fill="{B3}" stroke="{L}"/><circle cx="290" cy="230" r="6" fill="{B3}" stroke="{L}"/><circle cx="314" cy="230" r="6" fill="{B3}" stroke="{L}"/>' +
    '<rect x="282" y="252" width="40" height="22" rx="11" fill="{B3}" stroke="{L}" stroke-width="2"/>' + SHEEN(56, 124, 288, 178, 12) },
  VC: { name: 'Stick vacuum', d: ART_BODY, s: SHADOW(200, 384, 96) +
    '<rect x="128" y="352" width="144" height="30" rx="14" fill="{B2}"/><rect x="224" y="60" width="22" height="300" rx="10" fill="{B2}"/>' +
    '<rect x="194" y="118" width="10" height="226" rx="5" fill="{H}"/><rect x="150" y="332" width="100" height="26" rx="12" fill="{B}" stroke="{L}" stroke-width="1.5"/>' +
    '<path d="M174 58c-28 0-30 44 0 46" fill="none" stroke="{B}" stroke-width="10" stroke-linecap="round"/>' +
    '<rect x="170" y="40" width="44" height="88" rx="20" fill="{B}" stroke="{L}" stroke-width="1.5"/><rect x="178" y="98" width="28" height="56" rx="12" fill="{G}" fill-opacity=".85"/><circle cx="192" cy="62" r="6" fill="{G}"/>' },
  AP: { name: 'Air purifier', d: ART_BODY, s: SHADOW(200, 384, 84) + BODY(132, 54, 136, 328, 46) +
    '<ellipse cx="200" cy="74" rx="56" ry="12" fill="{G}"/><ellipse cx="200" cy="74" rx="30" ry="6" fill="#FFFFFF" fill-opacity=".12"/>' +
    '<path d="' + FAB + '" stroke="{L}" stroke-opacity=".7" stroke-width="2"/><rect x="186" y="102" width="28" height="6" rx="3" fill="{G}"/>' + SHEEN(132, 54, 136, 328, 46) }
};

DH.art = function (key, fin, uid) {
  const a = DH.arts[key], f = DH.finishes[fin || 'silver'] || DH.finishes.silver;
  const s = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><defs>' + a.d + '</defs>' + a.s + '</svg>';
  return s.replace(/\{U\}/g, uid || ('a' + key + (fin || ''))).replace(/\{B\}/g, f.B).replace(/\{B2\}/g, f.B2).replace(/\{B3\}/g, f.B3)
    .replace(/\{H\}/g, f.H).replace(/\{G\}/g, f.G).replace(/\{L\}/g, f.L);
};

DH.categories = [
  { k: 'fridge', t: 'الثلاجات', art: 'FR4', fin: 'silver' },
  { k: 'washer', t: 'الغسالات والمجففات', art: 'WM', fin: 'silver' },
  { k: 'tv', t: 'الشاشات', art: 'TV' },
  { k: 'ac', t: 'المكيفات', art: 'AC', fin: 'white' },
  { k: 'oven', t: 'الأفران والمايكرويف', art: 'OV', fin: 'black' },
  { k: 'dish', t: 'غسالات الصحون', art: 'DW', fin: 'silver' },
  { k: 'vacuum', t: 'المكانس', art: 'VC', fin: 'beige' },
  { k: 'air', t: 'منقيات الهواء', art: 'AP', fin: 'beige' }
];

DH.fridgeTypes = [{ k: '4door', t: 'أربعة أبواب' }, { k: 'side', t: 'جنباً إلى جنب' }, { k: '2door', t: 'بابين' }];

function P(id, n, cat, type, art, fin, price, old, badge, model, size, colors, sp) {
  return { id, n, cat, type, art, fin, price, old, badge, model, size, colors, sp };
}
const F3 = ['black', 'silver', 'beige'];
DH.products = [
  P('sr650', 'ثلاجة النخبة بأربعة أبواب 650 لتر', 'fridge', '4door', 'FR4', 'black', 3450000, 3950000, 'best', 'DH-SR650GB', 650, F3, ['زجاج داكن يضيء الداخل بطرقتين', 'ضاغط إنفرتر خطي بضمان 10 سنوات', 'تحكم كامل عبر تطبيق DR HOME']),
  P('sr708', 'ثلاجة بأربعة أبواب وموزع ماء 708 لتر', 'fridge', '4door', 'FR4', 'silver', 3890000, null, 'new', 'DH-SR708S', 708, F3, ['موزع ماء وثلج مفلتر', 'درج بحرارة قابلة للتعديل', 'تبريد متعدد الاتجاهات']),
  P('sr600', 'ثلاجة بأربعة أبواب 600 لتر', 'fridge', '4door', 'FR4', 'beige', 3150000, 3400000, null, 'DH-SR600BE', 600, F3, ['تصميم مسطح يناسب المطابخ الحديثة', 'رفوف زجاجية قابلة للطي', 'إضاءة LED داخلية']),
  P('ss617', 'ثلاجة جنباً إلى جنب 617 لتر مع موزع ماء', 'fridge', 'side', 'FR2', 'silver', 2250000, 2590000, 'best', 'DH-SS617S', 617, ['silver', 'black'], ['موزع ماء بدون توصيلات', 'No Frost في القسمين', 'تبريد سريع بزر واحد']),
  P('ss655', 'ثلاجة جنباً إلى جنب 655 لتر بزجاج داكن', 'fridge', 'side', 'FR2', 'black', 2690000, null, null, 'DH-SS655GB', 655, ['black', 'silver'], ['واجهة زجاج مقسّى', 'صانع ثلج تلقائي', 'إنذار عند فتح الباب']),
  P('ss601', 'ثلاجة جنباً إلى جنب 601 لتر', 'fridge', 'side', 'FR2', 'beige', 2090000, null, 'new', 'DH-SS601BE', 601, ['beige', 'silver'], ['لون بيج مطفي مقاوم للبصمات', 'ضاغط إنفرتر هادئ', 'رف للزجاجات في الباب']),
  P('bf506', 'ثلاجة بابين بفريزر سفلي 506 لتر', 'fridge', '2door', 'FRB', 'black', 1690000, null, null, 'DH-BF506GB', 506, ['black', 'silver'], ['فريزر سفلي بأدراج منزلقة', 'شاشة حرارة خارجية', 'استهلاك طاقة A++']),
  P('bf462', 'ثلاجة بابين بفريزر سفلي 462 لتر', 'fridge', '2door', 'FRB', 'silver', 1390000, 1550000, null, 'DH-BF462S', 462, ['silver', 'beige'], ['درج خضار يحفظ الرطوبة', 'No Frost', 'باب قابل للعكس']),
  P('bf384', 'ثلاجة بابين 384 لتر', 'fridge', '2door', 'FRB', 'beige', 1150000, null, null, 'DH-BF384BE', 384, ['beige', 'silver'], ['مثالية للشقق والمطابخ الصغيرة', 'ضاغط إنفرتر', 'رفوف زجاج مقسّى']),
  P('wf12', 'غسالة أمامية إنفرتر 12 كغ مع بخار', 'washer', null, 'WM', 'black', 1150000, 1290000, 'best', 'DH-WF12B', '12 كغ', ['black', 'silver'], ['محرك دفع مباشر بضمان 10 سنوات', 'بخار يزيل 99.9% من مسببات الحساسية', '14 برنامج غسيل']),
  P('wt13', 'برج الغسيل والتجفيف 13/10 كغ', 'washer', null, 'WT', 'silver', 3200000, null, 'new', 'DH-WT13S', '13/10 كغ', ['silver', 'black'], ['غسالة ومجفف بلوحة تحكم واحدة', 'تجفيف بمضخة حرارية', 'يوفر نصف مساحة الأرضية']),
  P('ol77', 'شاشة OLED مقاس 77 بوصة بدقة 4K', 'tv', null, 'TV', null, 4900000, 5600000, 'best', 'DH-OL77', '77 بوصة', [], ['بكسلات ذاتية الإضاءة وأسود حقيقي', 'تحديث 120Hz للألعاب', 'صوت Dolby Atmos']),
  P('qn65', 'شاشة QNED مقاس 65 بوصة', 'tv', null, 'TV', null, 1750000, 1990000, null, 'DH-QN65', '65 بوصة', [], ['ألوان نانو دقيقة', 'نظام ذكي بالعربية', 'وضع رياضة تلقائي']),
  P('ac24', 'مكيف سبليت إنفرتر 2 طن', 'ac', null, 'AC', 'white', 1180000, 1320000, 'best', 'DH-AC24', '24,000 BTU', [], ['يبرّد بكفاءة حتى 52 درجة مئوية', 'يعمل من 160 إلى 260 فولت', 'وضع نوم هادئ 22 ديسيبل']),
  P('at36', 'مكيف عمودي ذكي 3 طن', 'ac', null, 'ACT', 'white', 2450000, null, 'new', 'DH-AT36', '36,000 BTU', ['white', 'beige'], ['هواء دوّار 360 درجة', 'فلتر تنقية مدمج', 'تحكم صوتي وعبر التطبيق']),
  P('ov76', 'فرن كهربائي مدمج 76 لتر بالبخار', 'oven', null, 'OV', 'black', 890000, null, null, 'DH-OV76B', '76 لتر', ['black'], ['طهي بالبخار والهواء الساخن', 'تنظيف ذاتي بالحرارة', 'باب زجاجي ثلاثي']),
  P('dw14', 'غسالة صحون 14 مكاناً بالبخار', 'dish', null, 'DW', 'silver', 980000, 1100000, null, 'DH-DW14S', '14 مكاناً', ['silver', 'black'], ['بخار يزيل الدهون العنيدة', 'تشغيل هادئ 42 ديسيبل', 'رف ثالث للملاعق']),
  P('mw42', 'مايكرويف إنفرتر 42 لتر مع شواية', 'oven', null, 'MW', 'black', 265000, 299000, null, 'DH-MW42B', '42 لتر', ['black', 'silver'], ['تسخين متساوٍ بتقنية الإنفرتر', 'شواية 1100 واط', 'قفل أمان للأطفال']),
  P('vc90', 'مكنسة لاسلكية مع محطة تفريغ ذاتي', 'vacuum', null, 'VC', 'beige', 640000, 720000, 'new', 'DH-VC90BE', '120 دقيقة', ['beige', 'silver'], ['تشغيل حتى 120 دقيقة ببطاريتين', 'محطة تفرّغ الغبار تلقائياً', 'فلتر HEPA بخمس طبقات']),
  P('ap360', 'منقي هواء 360 درجة بفلتر HEPA', 'air', null, 'AP', 'beige', 520000, null, null, 'DH-AP360BE', '62 م²', ['beige', 'white'], ['تنقية دائرية 360 درجة', 'حساس جودة هواء بالألوان', 'وضع ليلي صامت'])
];

DH.badges = { best: 'الأكثر مبيعاً', new: 'جديد' };
DH.byId = id => DH.products.find(p => p.id === id);
DH.fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
DH.off = p => (p.old ? Math.round((1 - p.price / p.old) * 100) : 0);
DH.monthly = p => Math.round(p.price / 12 / 500) * 500;

DH.lists = {
  best: ['sr650', 'wf12', 'ol77', 'ac24'],
  newest: ['wt13', 'at36', 'vc90', 'sr708'],
  deals: ['ss617', 'dw14', 'mw42', 'bf462'],
  offers: ['sr650', 'ss617', 'bf462', 'wf12', 'ol77', 'ac24', 'dw14', 'vc90'],
  related: ['sr708', 'ss655', 'wt13', 'ov76'],
  cart: [['sr650', 1], ['wf12', 1], ['mw42', 2]]
};

DH.heroSlides = [
  { eb: 'DR HOME SIGNATURE', t1: 'فخامة', t2: 'تليق ببيتك', p: 'ثلاجة النخبة بأربعة أبواب وزجاج داكن يكشف ما بداخلها بطرقتين. تصميم صامت، وتبريد ذكي، وضمان 10 سنوات على الضاغط.', art: 'FR4', fin: 'black', id: 'sr650' },
  { eb: 'OLED 4K · 77 inch', t1: 'سينما كاملة', t2: 'في صالة بيتك', p: 'شاشة OLED بأسود حقيقي وألوان دقيقة، بسماكة لا تتجاوز 2.5 سم وصوت Dolby Atmos.', art: 'TV', fin: null, id: 'ol77' },
  { eb: 'WASH TOWER', t1: 'الغسيل والتجفيف', t2: 'في عمود واحد', p: 'غسالة 13 كغ ومجفف 10 كغ بلوحة تحكم واحدة في منتصف البرج، ويوفر نصف مساحة الأرضية.', art: 'WT', fin: 'silver', id: 'wt13' }
];

DH.features = [
  { i: 'truck', t: 'توصيل وتركيب مجاني', d: 'داخل بغداد خلال 48 ساعة، وفي باقي المحافظات خلال 2 إلى 5 أيام.' },
  { i: 'shield', t: 'ضمان رسمي حتى 10 سنوات', d: 'ضمان مكتوب على كل جهاز، و10 سنوات على ضاغط الإنفرتر.' },
  { i: 'card', t: 'تقسيط حتى 12 شهراً', d: 'بدون فوائد عند الدفع ببطاقات البنوك المشاركة.' },
  { i: 'wrench', t: 'صيانة منزلية خلال 24 ساعة', d: 'فنيون معتمدون يصلون إلى بيتك مع قطع غيار أصلية.' }
];

DH.rooms = [
  { t: 'المطبخ', d: 'ثلاجات، أفران، غسالات صحون', bg: ['#EEECE7', '#DEDAD2'], items: [['DW', 'silver', 0.27, 0.52, 0.97], ['FR4', 'beige', 0.64, 0.8, 0.97]] },
  { t: 'غرفة الغسيل', d: 'غسالات، مجففات، أبراج الغسيل', bg: ['#E9EAEA', '#D6D8D9'], items: [['WM', 'black', 0.27, 0.56, 0.97], ['WT', 'silver', 0.64, 0.82, 0.97]] },
  { t: 'غرفة المعيشة', d: 'شاشات، مكيفات، منقيات هواء', bg: ['#2A2A2C', '#111112'], dark: true, items: [['TV', null, 0.46, 0.86, 0.8], ['AP', 'beige', 0.86, 0.36, 0.97]] }
];

DH.bundles = [
  { t: 'باقة المطبخ المتكاملة', d: 'ثلاجة بأربعة أبواب، فرن مدمج، غسالة صحون ومايكرويف بتصميم متناسق.', ids: ['sr600', 'ov76', 'dw14', 'mw42'], price: 4590000 },
  { t: 'باقة البيت الجديد', d: 'كل ما يحتاجه بيتك الجديد: ثلاجة، غسالة، مكيف وشاشة، مع تركيب مجاني في يوم واحد.', ids: ['ss617', 'wf12', 'ac24', 'qn65'], price: 5490000 }
];

DH.offerTabs = ['كل العروض', 'التبريد', 'الغسيل', 'الشاشات', 'المطبخ', 'التكييف'];
DH.offerEnds = '2026-10-31T23:59:59+03:00';

DH.productFeatures = [
  { i: 'eye', t: 'زجاج داكن ذكي', d: 'اطرق على الزجاج مرتين فيضيء الداخل وترى ما تحتاجه دون فتح الباب وفقدان البرودة.' },
  { i: 'snow', t: 'تبريد متعدد الاتجاهات', d: 'فتحات هواء في كل رف توزع البرودة بالتساوي وتحافظ على نضارة الطعام لفترة أطول.' },
  { i: 'quiet', t: 'ضاغط إنفرتر خطي', d: 'أهدأ وأقل استهلاكاً للكهرباء بنسبة تصل إلى 32%، بضمان 10 سنوات.' },
  { i: 'wifi', t: 'تحكم عبر التطبيق', d: 'اضبط الحرارة وفعّل التبريد السريع واستقبل تنبيه الباب المفتوح من هاتفك.' }
];

DH.specs = [
  ['السعة الإجمالية', '650 لتر'], ['سعة التبريد', '420 لتر'], ['سعة التجميد', '230 لتر'], ['الأبعاد (عرض × ارتفاع × عمق)', '91.2 × 178.7 × 73.8 سم'],
  ['الوزن', '142 كغ'], ['تصنيف الطاقة', 'A++'], ['نوع الضاغط', 'إنفرتر خطي'], ['مستوى الضجيج', '36 ديسيبل'],
  ['الجهد الكهربائي', '220–240 فولت / 50 هرتز'], ['صانع الثلج', 'تلقائي'], ['الاتصال', 'تطبيق DR HOME عبر Wi-Fi'], ['الضمان', 'سنتان على الجهاز، 10 سنوات على الضاغط']
];

DH.delivery = [
  { i: 'truck', t: 'توصيل مجاني خلال 48 ساعة داخل بغداد' },
  { i: 'wrench', t: 'تركيب مجاني بأيدي فنيين معتمدين' },
  { i: 'shield', t: 'ضمان سنتين على الجهاز و10 سنوات على الضاغط' },
  { i: 'refresh', t: 'إرجاع أو استبدال خلال 14 يوماً' }
];

DH.checkoutSteps = ['السلة', 'معلومات التوصيل', 'الدفع', 'تأكيد الطلب'];
DH.payments = [
  { k: 'cod', i: 'box', t: 'الدفع عند الاستلام', d: 'نقداً أو بالبطاقة عند وصول الطلب' },
  { k: 'card', i: 'card', t: 'بطاقة مصرفية', d: 'فيزا وماستركارد' },
  { k: 'wallet', i: 'mobile', t: 'محفظة إلكترونية', d: 'زين كاش وكي كارد' },
  { k: 'inst', i: 'cal', t: 'تقسيط 12 شهراً', d: 'بدون فوائد، بموافقة فورية' }
];
DH.governorates = ['بغداد', 'البصرة', 'نينوى', 'أربيل', 'النجف', 'كربلاء', 'السليمانية', 'بابل', 'الأنبار', 'ديالى', 'كركوك', 'واسط', 'ذي قار', 'دهوك', 'ميسان', 'المثنى', 'القادسية', 'صلاح الدين'];

DH.services = [
  { i: 'wrench', t: 'طلب صيانة', d: 'احجز زيارة فني معتمد إلى بيتك في الموعد الذي يناسبك.' },
  { i: 'shield', t: 'تسجيل الضمان', d: 'سجّل جهازك برقم الموديل والرقم التسلسلي لتفعيل الضمان.' },
  { i: 'box', t: 'تتبّع طلبك', d: 'اعرف مكان طلبك وموعد وصول فريق التوصيل.' },
  { i: 'book', t: 'أدلة الاستخدام', d: 'دليل جهازك بالعربية مع نصائح الاستخدام والعناية.' },
  { i: 'install', t: 'طلب تركيب', d: 'تركيب مجاني لكل جهاز تشتريه من دكتور هوم.' },
  { i: 'cog', t: 'قطع الغيار والملحقات', d: 'فلاتر وقطع أصلية بضمان، تصلك إلى البيت.' }
];

DH.plans = [
  { t: 'الضمان الأساسي', price: 'مجاني', per: 'مع كل جهاز', f: ['سنتان على الجهاز وقطع الغيار', '10 سنوات على ضاغط الإنفرتر', 'صيانة منزلية خلال 24 ساعة', 'خط دعم مخصص 6600'], cta: 'مفعّل تلقائياً' },
  { t: 'الضمان الممتد', price: '95,000 د.ع', per: 'لكل جهاز', f: ['3 سنوات إضافية بعد الضمان الأساسي', 'قطع الغيار وأجور الفني مشمولة', 'زيارة فحص سنوية مجانية', 'أولوية في مواعيد الصيانة'], cta: 'أضف الضمان الممتد', hot: 'الأكثر اختياراً' },
  { t: 'DR CARE بلس', price: '190,000 د.ع', per: 'لكل جهاز', f: ['5 سنوات تغطية شاملة', 'استبدال الجهاز إذا تعذّر إصلاحه', 'تنظيف وتعقيم سنوي', 'حماية من أضرار تذبذب الكهرباء'], cta: 'اشترك في DR CARE' }
];

DH.serviceSteps = [
  { t: 'أرسل الطلب', d: 'املأ النموذج أو اتصل بالرقم 6600.' },
  { t: 'نتصل بك خلال ساعتين', d: 'نؤكد الموعد ونسألك عن تفاصيل العطل.' },
  { t: 'زيارة الفني خلال 24 ساعة', d: 'يصل الفني ومعه قطع الغيار الأصلية.' }
];

DH.faqs = [
  { q: 'كم تستغرق مدة التوصيل؟', a: 'داخل بغداد نوصل خلال 48 ساعة من تأكيد الطلب، وفي باقي المحافظات خلال 2 إلى 5 أيام عمل. نتصل بك قبل الوصول لتحديد الموعد.' },
  { q: 'هل التركيب مجاني؟', a: 'نعم، التركيب مجاني لكل الأجهزة الكبيرة مثل الثلاجات والغسالات والشاشات. تركيب المكيفات يشمل 3 أمتار من الأنابيب، وما زاد يُحتسب حسب الطول.' },
  { q: 'كيف أفعّل الضمان؟', a: 'يُفعَّل الضمان تلقائياً عند الشراء من دكتور هوم. ويمكنك تسجيل الجهاز من صفحة تسجيل الضمان باستخدام رقم الموديل والرقم التسلسلي.' },
  { q: 'هل يمكنني إرجاع الجهاز؟', a: 'يمكنك إرجاع الجهاز أو استبداله خلال 14 يوماً من الاستلام إذا كان بحالته الأصلية وفي تغليفه.' },
  { q: 'ما طرق الدفع المتاحة؟', a: 'الدفع نقداً عند الاستلام، أو بالبطاقات المصرفية فيزا وماستركارد، أو بالمحافظ الإلكترونية، أو بالتقسيط على 12 شهراً.' },
  { q: 'هل تتحمل الأجهزة تذبذب الكهرباء؟', a: 'أغلب أجهزتنا تعمل على فولتية بين 160 و260 فولت، وننصح بمنظم فولتية للأجهزة الحساسة. يرشّح لك فريقنا المنظم المناسب.' }
];

DH.channels = [
  { i: 'phone', t: 'مركز الاتصال', v: '6600', d: 'يومياً من 9 صباحاً حتى 11 مساءً' },
  { i: 'wa', t: 'واتساب', v: '0770 000 0000', d: 'نرد خلال 10 دقائق' },
  { i: 'mail', t: 'البريد الإلكتروني', v: 'care@drhome.iq', d: 'نرد خلال يوم عمل' },
  { i: 'chat', t: 'الدردشة المباشرة', v: 'ابدأ محادثة', d: 'من الموقع والتطبيق' }
];

DH.cities = ['الكل', 'بغداد', 'أربيل', 'البصرة', 'النجف'];
DH.branches = [
  { c: 'بغداد', t: 'صالة عرض المنصور', a: 'شارع 14 رمضان، قرب ساحة الرواد', h: 'يومياً 10 ص – 10 م', p: '0770 000 0001', x: 0.30, y: 0.42, main: true },
  { c: 'بغداد', t: 'صالة عرض الكرادة', a: 'شارع الكرادة داخل، قرب ساحة كهرمانة', h: 'يومياً 10 ص – 10 م', p: '0770 000 0002', x: 0.62, y: 0.60 },
  { c: 'بغداد', t: 'فرع زيونة', a: 'شارع الربيعي، مجمع زيونة التجاري', h: 'السبت – الخميس 10 ص – 9 م', p: '0770 000 0003', x: 0.78, y: 0.30 },
  { c: 'أربيل', t: 'صالة عرض أربيل', a: 'شارع 100، قرب دوار الإسكان', h: 'السبت – الخميس 10 ص – 9 م', p: '0750 000 0004' },
  { c: 'البصرة', t: 'فرع البصرة', a: 'شارع الجزائر، مقابل مجمع البصرة تايمز', h: 'السبت – الخميس 10 ص – 9 م', p: '0780 000 0005' },
  { c: 'النجف', t: 'فرع النجف', a: 'شارع الكوفة، قرب دوار ثورة العشرين', h: 'السبت – الخميس 10 ص – 9 م', p: '0780 000 0006' }
];

DH.contactSubjects = ['استفسار عن منتج', 'متابعة طلب', 'صيانة وضمان', 'مبيعات الشركات', 'اقتراح أو شكوى'];

DH.footer = {
  cols: [
    { t: 'المنتجات', l: ['الثلاجات', 'الغسالات والمجففات', 'الشاشات', 'المكيفات', 'أجهزة المطبخ', 'المكانس ومنقيات الهواء'] },
    { t: 'خدمة العملاء', l: ['طلب صيانة', 'تسجيل الضمان', 'تتبّع الطلب', 'سياسة الإرجاع', 'الأسئلة الشائعة'] },
    { t: 'دكتور هوم', l: ['من نحن', 'الفروع', 'مبيعات الشركات', 'الوظائف', 'المدونة'] }
  ],
  social: ['ig', 'fb', 'yt', 'tt'],
  pay: ['VISA', 'Mastercard', 'ZainCash', 'Qi Card', 'الدفع عند الاستلام'],
  legal: ['الشروط والأحكام', 'سياسة الخصوصية'],
  copy: '© 2026 دكتور هوم. جميع الحقوق محفوظة.'
};

// City map for the contact page (stylised, not to scale)
DH.mapSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">' +
  '<rect width="640" height="480" fill="#ECECE8"/>' +
  '<path d="M0 120h640M0 250h640M0 380h640M120 0v480M260 0v480M400 0v480M530 0v480" stroke="#FFFFFF" stroke-width="10"/>' +
  '<path d="M0 60h640M0 185h640M0 315h640M0 440h640M60 0v480M190 0v480M330 0v480M465 0v480M590 0v480" stroke="#F7F7F4" stroke-width="4"/>' +
  '<path d="M-20 300C80 260 120 120 230 140S360 330 450 300 560 120 660 150" fill="none" stroke="#D3D8DA" stroke-width="34" stroke-linecap="round"/>' +
  '<rect x="140" y="30" width="90" height="70" rx="6" fill="#DFE3DA"/><rect x="420" y="400" width="120" height="60" rx="6" fill="#DFE3DA"/><rect x="545" y="270" width="70" height="90" rx="6" fill="#DFE3DA"/>' +
  '<path d="M0 470L640 10" stroke="#FFFFFF" stroke-width="14"/></svg>';
