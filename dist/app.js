'use strict';
const isArabic=document.documentElement.lang==='ar';
const text=(en,ar)=>isArabic?ar:en;
const productName=p=>isArabic?p.name_ar:p.name;
const productSize=p=>isArabic?p.size.replace('ml','مل'):p.size;
const productKind=p=>({signature:text('Signature Bakhoor','البخور المميز'),burner:text('Bakhoor Burner','مبخرة'),gift:text('Gift Set','طقم هدايا'),home:text('Luxury Home Spray','معطر منزلي فاخر'),perfume:text('Perfume','عطر'),oud:text('Oud','عود'),bakhoor:text('Bakhoor','بخور'),loban:text('Loban','لبان')}[p.type]);

const products=[{"id": "ayla", "name": "Ayla", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Women", "image": "assets/products-square/ayla.webp", "page": "products/ayla/", "description": "Ayla is a captivating expression of modern femininity — elegant, confident, and effortlessly luxurious. A sophisticated floral-spicy-woody composition that opens with a vibrant touch, unfolds into a graceful heart, and settles into a warm, sensual trail that lingers beautifully on the skin.", "name_ar": "أيلا", "description_ar": "أيلا هو تعبير آسر عن الأنوثة العصرية؛ أناقة، ثقة وفخامة تنبض بحضور لا يُنسى. تركيبة عطرية راقية تجمع بين النفحات الزهرية والتوابل والأخشاب، تبدأ بإشراقة مميزة، ثم تكشف عن قلب أنيق، قبل أن تستقر على قاعدة دافئة وحسية تترك أثراً جميلاً يدوم.", "description_title": "AYLA — A Signature of Feminine Luxury", "description_title_ar": "أيلا — توقيع من الفخامة الأنثوية", "tagline": "Ayla — elegance that leaves a lasting impression.", "tagline_ar": "أيلا — أناقة تترك أثراً لا يُنسى."}, {"id": "vanilla-elixir", "name": "Vanilla Elixir", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Women", "image": "assets/products-square/vanilla-elixir.webp", "page": "products/vanilla-elixir/", "description": "Discover Vanilla Elixir from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "فانيلا إكسير", "description_ar": "اكتشف فانيلا إكسير من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "oud-rose", "name": "Oud Rose", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Men", "image": "assets/products-square/oud-rose.webp", "page": "products/oud-rose/", "description": "Discover Oud Rose from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "عود روز", "description_ar": "اكتشف عود روز من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "portofino", "name": "Portofino", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Men", "image": "assets/products-square/portofino.webp", "page": "products/portofino/", "description": "Discover Portofino from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "بورتوفينو", "description_ar": "اكتشف بورتوفينو من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "patchouli", "name": "Patchouli", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Men", "image": "assets/products-square/patchouli.webp", "page": "products/patchouli/", "description": "Discover Patchouli from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "باتشولي", "description_ar": "اكتشف باتشولي من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "ajwan", "name": "Ajwan", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Women", "image": "assets/products-square/ajwan.webp", "page": "products/ajwan/", "description": "Discover Ajwan from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "أجوان", "description_ar": "اكتشف أجوان من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "lenden", "name": "London", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Men", "image": "assets/products-square/lenden.webp", "page": "products/lenden/", "description": "Discover London from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "لندن", "description_ar": "اكتشف لندن من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "casa-blanca", "name": "Casa Blanca", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Men", "image": "assets/products-square/casa-blanca.webp", "page": "products/casa-blanca/", "description": "Discover Casa Blanca from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "كازا بلانكا", "description_ar": "اكتشف كازا بلانكا من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "amicare", "name": "Amilcare", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Women", "image": "assets/products-square/amicare.webp", "page": "products/amicare/", "description": "Discover Amilcare from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "أميلكاري", "description_ar": "اكتشف أميلكاري من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "sigma", "name": "Sigma", "price": 375, "currency": "QAR", "type": "perfume", "size": "100 ml", "collection": "Men", "image": "assets/products-square/sigma.webp", "page": "products/sigma/", "description": "Discover Sigma from the Sultana perfume collection, presented in a signature gold-capped bottle.", "name_ar": "سيغما", "description_ar": "اكتشف سيغما من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "black-london", "name": "Black London", "price": 120, "currency": "QAR", "type": "home", "size": "300 ml", "collection": "Luxury Home Spray", "image": "assets/products-square/black-london.webp", "page": "products/black-london/", "description": "Give your everyday spaces a Sultana signature. Explore Black London from our home fragrance collection.", "name_ar": "بلاك لندن", "description_ar": "امنح مساحاتك اليومية توقيعاً من سلطانة. اكتشف بلاك لندن من مجموعة العطور المنزلية.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "sweet-rose", "name": "Sweet Rose", "price": 120, "currency": "QAR", "type": "home", "size": "300 ml", "collection": "Luxury Home Spray", "image": "assets/products-square/sweet-rose.webp", "page": "products/sweet-rose/", "description": "Give your everyday spaces a Sultana signature. Explore Sweet Rose from our home fragrance collection.", "name_ar": "سويت روز", "description_ar": "امنح مساحاتك اليومية توقيعاً من سلطانة. اكتشف سويت روز من مجموعة العطور المنزلية.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "velvet-night", "name": "Velvet Night", "price": 120, "currency": "QAR", "type": "home", "size": "300 ml", "collection": "Luxury Home Spray", "image": "assets/products-square/velvet-night.webp", "page": "products/velvet-night/", "description": "Give your everyday spaces a Sultana signature. Explore Velvet Night from our home fragrance collection.", "name_ar": "فيلفت نايت", "description_ar": "امنح مساحاتك اليومية توقيعاً من سلطانة. اكتشف فيلفت نايت من مجموعة العطور المنزلية.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "machmoun", "name": "Machmoun", "price": 120, "currency": "QAR", "type": "home", "size": "300 ml", "collection": "Luxury Home Spray", "image": "assets/new-products/machmoun.webp", "page": "products/machmoun/", "description": "A 300 ml home spray with bergamot, lavender, machmoun, jasmine, amber and oud notes.", "name_ar": "المشموم", "description_ar": "معطر منزلي بحجم ٣٠٠ مل بنفحات البرغموت واللافندر والمشموم والياسمين والعنبر والعود.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "cotton-candy", "name": "Cotton Candy", "price": 120, "currency": "QAR", "type": "home", "size": "300 ml", "collection": "Luxury Home Spray", "image": "assets/new-products/cotton-candy.webp", "page": "products/cotton-candy/", "description": "A 300 ml home spray with cotton, jasmine, caramel, vanilla, amber and sandalwood notes.", "name_ar": "كوتن كاندي", "description_ar": "معطر منزلي بحجم ٣٠٠ مل بنفحات القطن والياسمين والكراميل والفانيلا والعنبر وخشب الصندل.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "discovery-set", "name": "Discovery Set — Perfume Testers", "price": null, "currency": "QAR", "type": "gift", "size": "13 testers", "collection": "Gift Sets", "image": "assets/campaigns/discovery-set.webp", "page": "products/discovery-set/", "description": "Explore 13 scents in the Sultana Discovery Set. A collection of perfume testers presented in a black and gold gift box.", "name_ar": "مجموعة الاكتشاف — عينات العطور", "description_ar": "اكتشف ١٣ رائحة مع مجموعة الاكتشاف من سلطانة. عينات عطور في علبة هدايا باللونين الأسود والذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "sultana-oud", "name": "Sultana Oud", "price": null, "currency": "QAR", "type": "signature", "size": "", "collection": "Signature Collection", "image": "assets/new-products/sultana-oud-hd.webp", "page": "products/sultana-oud/", "description": "Sultana Oud from our Signature Collection, presented in a black and gold jar.", "name_ar": "سلطانة عود", "description_ar": "سلطانة عود من مجموعتنا المميزة، في عبوة باللونين الأسود والذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "royal-bukhoor", "name": "Royal Bukhoor", "price": null, "currency": "QAR", "type": "signature", "size": "", "collection": "Signature Collection", "image": "assets/new-products/royal-bukhoor-hd.webp", "page": "products/royal-bukhoor/", "description": "Royal Bukhoor from our Signature Collection, presented in a black and gold jar.", "name_ar": "البخور الملكي", "description_ar": "البخور الملكي من مجموعتنا المميزة، في عبوة باللونين الأسود والذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "amber-night", "name": "Amber Night", "price": null, "currency": "QAR", "type": "signature", "size": "", "collection": "Signature Collection", "image": "assets/new-products/amber-night-hd.webp", "page": "products/amber-night/", "description": "Amber Night from our Signature Collection, presented in a black and gold jar.", "name_ar": "ليلة العنبر", "description_ar": "ليلة العنبر من مجموعتنا المميزة، في عبوة باللونين الأسود والذهبي.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "oud-collection-set", "name": "Oud Collection Set", "price": null, "currency": "QAR", "type": "gift", "size": "", "collection": "Gift Sets", "image": "assets/new-products/oud-collection-set.webp", "page": "products/oud-collection-set/", "description": "Three signature scents in one gift box: Royal Bukhoor, Amber Night and Sultana Oud.", "name_ar": "طقم مجموعة العود", "description_ar": "ثلاث روائح مميزة في علبة هدايا واحدة: البخور الملكي وليلة العنبر وسلطانة عود.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "oud-amber", "name": "Oud Amber", "price": 275, "currency": "QAR", "type": "oud", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/oud-amber.webp", "page": "products/oud-amber/", "description": "Oud Amber from the Sultana premium oud collection.", "name_ar": "عود عنبر", "description_ar": "عود عنبر من مجموعة سلطانة للعود الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "oud-oudy", "name": "Oud Oudy", "price": 105, "currency": "QAR", "type": "oud", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/oud-oudy.webp", "page": "products/oud-oudy/", "description": "Oud Oudy from the Sultana premium oud collection.", "name_ar": "عود عودي", "description_ar": "عود عودي من مجموعة سلطانة للعود الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "oud-private", "name": "Oud Private", "price": 105, "currency": "QAR", "type": "oud", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/oud-private.webp", "page": "products/oud-private/", "description": "Oud Private from the Sultana premium oud collection.", "name_ar": "عود برايفت", "description_ar": "عود برايفت من مجموعة سلطانة للعود الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "maamoul-doha", "name": "Maamoul Doha", "price": 150, "currency": "QAR", "type": "bakhoor", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/maamoul-doha.webp", "page": "products/maamoul-doha/", "description": "Maamoul Doha from the Sultana premium bakhoor collection.", "name_ar": "معمول الدوحة", "description_ar": "معمول الدوحة من مجموعة سلطانة للبخور الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "bakhour-hala-ghala", "name": "Bakhour Hala & Ghala", "price": 185, "currency": "QAR", "type": "bakhoor", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/bakhour-hala-ghala.webp", "page": "products/bakhour-hala-ghala/", "description": "Bakhour Hala & Ghala from the Sultana premium bakhoor collection.", "name_ar": "بخور هلا وغلا", "description_ar": "بخور هلا وغلا من مجموعة سلطانة للبخور الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "bakhour-al-sheikha", "name": "Bakhour Al Sheikha", "price": 185, "currency": "QAR", "type": "bakhoor", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/bakhour-al-sheikha.webp", "page": "products/bakhour-al-sheikha/", "description": "Bakhour Al Sheikha from the Sultana premium bakhoor collection.", "name_ar": "بخور الشيخة", "description_ar": "بخور الشيخة من مجموعة سلطانة للبخور الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "luban-with-oud", "name": "Luban With Oud", "price": 130, "currency": "QAR", "type": "loban", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/luban-with-oud.webp", "page": "products/luban-with-oud/", "description": "Luban With Oud from the Sultana premium incense collection.", "name_ar": "لبان بالعود", "description_ar": "لبان بالعود من مجموعة سلطانة للبخور الفاخر.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}, {"id": "bakhoor-burner", "name": "Bakhoor Burner", "price": null, "currency": "QAR", "type": "burner", "size": "", "collection": "Oud, Bakhoor & Loban", "image": "assets/new-products/bakhoor-burner-hd.webp", "page": "products/bakhoor-burner/", "description": "A bakhoor burner for your home fragrance ritual.", "name_ar": "مبخرة", "description_ar": "مبخرة لطقوس تعطير منزلك.", "description_title": "", "description_title_ar": "", "tagline": "", "tagline_ar": ""}];
const money=n=>n==null?text('Price to be confirmed','سيتم تحديد السعر'):(isArabic?n.toLocaleString('en-QA')+' ر.ق':'QAR '+n.toLocaleString('en-QA'));
const $=id=>document.getElementById(id);
const bag=new Map();
try{const saved=JSON.parse(sessionStorage.getItem('sultana-sample-bag')||'[]');if(Array.isArray(saved))for(const entry of saved){if(Array.isArray(entry)&&products.some(p=>p.id===entry[0])&&Number.isInteger(entry[1])&&entry[1]>0&&entry[1]<=99)bag.set(entry[0],entry[1]);}}catch{}
const collections={"men": ["oud-rose", "portofino", "patchouli", "lenden", "casa-blanca", "sigma"], "women": ["ayla", "vanilla-elixir", "ajwan", "amicare"], "unisex": [], "home": ["black-london", "sweet-rose", "velvet-night", "machmoun", "cotton-candy"], "bakhoor": ["oud-amber", "oud-oudy", "oud-private", "maamoul-doha", "bakhour-hala-ghala", "bakhour-al-sheikha", "luban-with-oud", "bakhoor-burner"], "signature": ["sultana-oud", "royal-bukhoor", "amber-night"], "gift": ["discovery-set", "oud-collection-set"], "perfume": ["ayla", "vanilla-elixir", "oud-rose", "portofino", "patchouli", "ajwan", "lenden", "casa-blanca", "amicare", "sigma"]};
const requestedCollection=new URLSearchParams(window.location.search).get('collection');
let selectedFilter=Object.hasOwn(collections,requestedCollection)?requestedCollection:'all',selectedProduct=products.find(p=>p.id===document.body.dataset.productId)||null,quantity=1,toastTimer;
const escapeHTML=value=>String(value).replace(/[&<>"']/g, char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const productUrl=id=>(isArabic?'/ar':'')+'/products/'+encodeURIComponent(id)+'/';
const icons={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',bag:'<path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>'};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`}
$('search-open').innerHTML=icon('search');$('bag-open').innerHTML=icon('bag')+'<span class="badge" id="header-count">0</span>';
function card(p){
  const name=escapeHTML(productName(p)),url=productUrl(p.id),size=p.size?' · '+escapeHTML(productSize(p)):'';
  const action=`<button class="card-add" data-add-product="${p.id}" aria-label="${text('Add','أضف')} ${name} ${text('to bag','إلى الحقيبة')}">${text('Add to Bag','أضف إلى الحقيبة')}</button>`;
  const portrait=['machmoun','cotton-candy'].includes(p.id)?' portrait-product':'';
  return `<article class="product-card"><div class="product-image${portrait}"><a class="product-photo-link" href="${url}" aria-label="${text('View','عرض')} ${name}"><img src="/${p.image}" alt="${name} ${text('by Sultana','من سلطانة')}" loading="lazy" width="1024" height="1024"></a><a class="product-quick" href="${url}">${text('Discover Fragrance','اكتشف العطر')}</a></div><h3><a href="${url}">${name}</a></h3><p class="type">${productKind(p)}${size}</p><p class="price">${money(p.price)}</p>${action}</article>`;
}
function renderProducts(){if($('signature-section'))$('signature-section').hidden=!!new URLSearchParams(window.location.search).get('type');if($('catalog-title')&&!document.body.dataset.department)$('catalog-title').textContent=({signature:text('Signature Collection','المجموعة المميزة'),gift:text('Gift Sets','أطقم الهدايا'),perfume:text('Perfumes','العطور'),men:text('Men','للرجال'),women:text('Women','للنساء'),unisex:text('Unisex','للجنسين')})[selectedFilter]||text('Explore the collection.','اكتشف المجموعة.');if($('catalog-count'))$('catalog-count').hidden=selectedFilter!=='all';let list=products.filter(p=>(!document.body.dataset.department||(document.body.dataset.department==='home'?p.type==='home':['oud','bakhoor','loban','burner'].includes(p.type)))&&(selectedFilter==='all'||collections[selectedFilter]?.includes(p.id)));const kind=new URLSearchParams(window.location.search).get('type');if(['oud','bakhoor','loban','burner'].includes(kind))list=list.filter(p=>p.type===kind);const grouped=document.body.dataset.department==='incense';$('products').classList.toggle('grouped-catalog',grouped);$('products').innerHTML=list.length?(grouped?['oud','bakhoor','loban','burner'].map(type=>{const members=list.filter(p=>p.type===type);return members.length?`<section class="incense-group" id="group-${type}"><h2>${({oud:text('Oud','عود'),bakhoor:text('Bakhoor','بخور'),loban:text('Luban','لبان'),burner:text('Burners','مباخر')})[type]}</h2><div class="product-grid">${members.map(card).join('')}</div></section>`:''}).join(''):list.map(card).join('')):`<div class="catalog-empty"><h3>${text('Unisex — coming soon','للجنسين — قريباً')}</h3><p>${text('Explore our other fragrance collections while we prepare this selection.','اكتشف مجموعاتنا الأخرى بينما نجهز هذه التشكيلة.')}</p><button class="button" data-filter="all">${text('View all fragrances','عرض جميع العطور')}</button></div>`;if($('results-count'))$('results-count').textContent=list.length+text(' fragrances',' عطور');document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===selectedFilter);b.setAttribute('aria-pressed',b.dataset.filter===selectedFilter?'true':'false')})}
function syncCatalogFromUrl(){
  if(!$('products'))return;
  const params=new URLSearchParams(window.location.search);
  const filter=params.get('collection');
  selectedFilter=Object.hasOwn(collections,filter)?filter:'all';
  renderProducts();
}
function updateCatalogUrl(){
  if(!$('products'))return;
  const url=new URL(window.location.href);
  if(selectedFilter==='all')url.searchParams.delete('collection');else url.searchParams.set('collection',selectedFilter);
  url.searchParams.delete('sort');
  url.hash='collection';
  if(url.href!==window.location.href)history.pushState(null,'',url);
  updateLanguageLink();
}
window.addEventListener('popstate',syncCatalogFromUrl);
function openDialog(id){document.querySelectorAll('dialog[open]').forEach(d=>d.close());$(id).showModal()}
function announce(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2500)}
function addToBag(id,count){const p=products.find(p=>p.id===id);if(!p||!Number.isInteger(count)||count<1||count>99)throw new Error('Choose a valid fragrance and quantity from 1 to 99.');bag.set(id,Math.min(99,(bag.get(id)||0)+count));renderBag();announce(productName(p)+text(' added to your bag',' أُضيف إلى حقيبتك'));return{id,quantity:bag.get(id),subtotal:total()}}
function total(){return [...bag].reduce((n,[id,q])=>n+products.find(p=>p.id===id).price*q,0)}
function renderBag(){try{sessionStorage.setItem('sultana-sample-bag',JSON.stringify([...bag]));}catch{}const count=[...bag.values()].reduce((a,b)=>a+b,0);$('header-count').textContent=count;$('bag-count').textContent=count;$('bag-open').setAttribute('aria-label',`${text('Open shopping bag','فتح حقيبة التسوق')}, ${count} ${text('items','منتجات')}`);$('bag-total').textContent=money(total())+( [...bag].some(([id])=>products.find(p=>p.id===id).price==null)?text(' + prices to confirm',' + أسعار تحتاج إلى تأكيد'):'');if($('whatsapp-checkout')){$('whatsapp-checkout').hidden=!bag.size;$('whatsapp-checkout').href=whatsappOrder([...bag]);}$('bag-items').innerHTML=bag.size?[...bag].map(([id,q])=>{const p=products.find(p=>p.id===id);return `<div class="bag-item"><img src="/${p.image}" alt="${escapeHTML(productName(p))}"><div><h3>${escapeHTML(productName(p))}</h3><p>${money(p.price)} · ${escapeHTML(productSize(p))}</p><div class="quantity"><button data-bag-id="${id}" data-delta="-1" aria-label="${text('Decrease quantity for','تقليل كمية')} ${escapeHTML(productName(p))}">−</button><output>${q}</output><button data-bag-id="${id}" data-delta="1" aria-label="${text('Increase quantity for','زيادة كمية')} ${escapeHTML(productName(p))}">+</button></div></div><button class="remove" data-remove="${id}" aria-label="${text('Remove','إزالة')} ${escapeHTML(productName(p))}">${text('Remove','إزالة')}</button></div>`}).join(''):`<p class="empty">${text('Your bag is waiting for something beautiful.','حقيبتك تنتظر شيئاً جميلاً.')}<br>${text('Explore the collection to find your fragrance.','اكتشف المجموعة لتجد عطرك.')}</p>`}
function searchProducts(){const q=$('search').value.trim().toLowerCase();const results=products.filter(p=>(p.name+' '+p.name_ar+' '+p.size+' '+productSize(p)+' '+p.collection+' '+({Women:'للنساء',Men:'للرجال','Luxury Home Spray':'معطر منزلي فاخر',Unisex:'للجنسين','Oud, Bakhoor & Loban':'عود بخور لبان'}[p.collection])+' '+productKind(p)+' '+p.type).toLowerCase().includes(q));$('search-results').innerHTML=results.length?results.map(p=>`<a class="search-result" href="${productUrl(p.id)}"><img src="/${p.image}" alt=""><span><strong>${escapeHTML(productName(p))}</strong><small>${escapeHTML(productSize(p))} · ${money(p.price)}</small></span></a>`).join(''):`<p class="empty">${text('No fragrances found. Try a different name.','لم نعثر على عطور. جرّب اسماً آخر.')}</p>`}
document.addEventListener('click',e=>{const closer=e.target.closest('[data-close]');if(closer)closer.closest('dialog')?.close();const el=e.target.closest('button');if(!el)return;if(el.dataset.addProduct){addToBag(el.dataset.addProduct,1)}if(el.dataset.filter){selectedFilter=el.dataset.filter;renderProducts();updateCatalogUrl()}if(el.dataset.quantity){quantity=Math.max(1,Math.min(99,quantity+Number(el.dataset.quantity)));$('quantity').value=quantity;updateProductWhatsApp()}if(el.id==='add-to-bag'){if(selectedProduct)addToBag(selectedProduct.id,quantity)}if(el.dataset.bagId){const id=el.dataset.bagId;const q=(bag.get(id)||0)+Number(el.dataset.delta);if(q<=0)bag.delete(id);else bag.set(id,Math.min(q,99));renderBag()}if(el.dataset.remove){bag.delete(el.dataset.remove);renderBag()}});
$('search-open').addEventListener('click',()=>{searchProducts();openDialog('search-dialog');$('search').focus()});$('bag-open').addEventListener('click',()=>{renderBag();openDialog('bag-dialog')});$('search').addEventListener('input',searchProducts);
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
if($('products'))syncCatalogFromUrl();if($('home-products'))$('home-products').innerHTML=products.filter(p=>p.type==='home').slice(0,5).map(card).join('');if($('bakhoor-products'))$('bakhoor-products').innerHTML=products.filter(p=>p.type==='signature').map(card).join('');renderBag();
if(document.modelContext?.registerTool){const lifecycle=new AbortController();const defs=[{name:'search_sultana_fragrances',description:'Read the Sultana fragrance catalog and prices in QAR.',inputSchema:{type:'object',properties:{query:{type:'string'}},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||(input.query!==undefined&&typeof input.query!=='string'))throw new Error('query must be text');const q=(input.query||'').toLowerCase();return products.filter(p=>(p.name+' '+p.name_ar).toLowerCase().includes(q))}},{name:'stage_sultana_bag_items',description:'Add a fragrance to the shopping bag. The customer sends the order separately through WhatsApp; this does not send or pay for an order.',inputSchema:{type:'object',properties:{productId:{type:'string'},quantity:{type:'integer',minimum:1,maximum:99}},required:['productId','quantity'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object')throw new Error('Expected productId and quantity');return addToBag(input.productId,input.quantity)}}];for(const def of defs){try{Promise.resolve(document.modelContext.registerTool(def,{signal:lifecycle.signal})).catch(()=>{})}catch{}}window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true})}


// Navigation uses native buttons and keeps keyboard focus available.
const navigation = $('main-navigation');
const menuButton = $('menu-open');
const collectionToggle = $('collections-toggle');
const collectionMenu = $('collections-menu');
function closeNavigation() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', text('Open navigation','فتح القائمة'));
  if (collectionMenu) collectionMenu.hidden = true;
  collectionToggle?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const opened = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? text('Close navigation','إغلاق القائمة') : text('Open navigation','فتح القائمة'));
});
collectionToggle?.addEventListener('click', () => {
  collectionMenu.hidden = !collectionMenu.hidden;
  collectionToggle.setAttribute('aria-expanded', String(!collectionMenu.hidden));
});
document.addEventListener('click', event => {
  if (!event.target.closest('header')) closeNavigation();
  if (event.target.closest('#main-navigation a')) closeNavigation();
  if (event.target.closest('[data-open-search]')) { searchProducts(); openDialog('search-dialog'); $('search').focus(); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (navigation?.classList.contains('is-open')) menuButton.focus();
    else if (collectionMenu && !collectionMenu.hidden) collectionToggle.focus();
    closeNavigation();
  }
});

// Three-second editorial crossfades, with manual, touch and motion preferences.
const heroSlides = [...document.querySelectorAll('[data-hero-slide]')];
const heroButtons = [...document.querySelectorAll('[data-hero-target]')];
const heroAutoplay = $('hero-autoplay');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (heroSlides.length && heroAutoplay) {
  let index = 0, timer, touchStart = null;
  let paused = reducedMotion.matches;
  const hero = document.querySelector('.hero-carousel');
  const stage = document.querySelector('.hero-stage');
  function showHero(next) {
    index = (next + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      slide.setAttribute('aria-hidden', String(i !== index));
      slide.inert = i !== index;
    });
    heroButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }
  function scheduleHero() {
    clearInterval(timer);
    if (!paused && !document.hidden && !stage.contains(document.activeElement)) {
      timer = setInterval(() => showHero(index + 1), 3000);
    }
    heroAutoplay.innerHTML = paused ? '<span aria-hidden="true">▷</span>' : '<span aria-hidden="true">Ⅱ</span>';
    heroAutoplay.setAttribute('aria-label', paused ? text('Play automatic slideshow','تشغيل العرض التلقائي') : text('Pause automatic slideshow','إيقاف العرض التلقائي مؤقتاً'));
  }
  heroButtons.forEach(button => button.addEventListener('click', () => { showHero(Number(button.dataset.heroTarget)); scheduleHero(); }));
  $('hero-prev').addEventListener('click', () => { showHero(index - 1); scheduleHero(); });
  $('hero-next').addEventListener('click', () => { showHero(index + 1); scheduleHero(); });
  heroAutoplay.addEventListener('click', () => { paused = !paused; scheduleHero(); });
  stage.addEventListener('focusin', () => clearInterval(timer));
  stage.addEventListener('focusout', () => setTimeout(scheduleHero, 0));
  hero.addEventListener('touchstart', e => { touchStart = {x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}; }, {passive:true});
  hero.addEventListener('touchend', e => {
    if (!touchStart) return;
    const dx=e.changedTouches[0].clientX-touchStart.x, dy=e.changedTouches[0].clientY-touchStart.y;
    if (Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)) { showHero(index+(dx<0?1:-1)); scheduleHero(); }
    touchStart=null;
  }, {passive:true});
  reducedMotion.addEventListener('change', e => { if(e.matches) paused=true; scheduleHero(); });
  document.addEventListener('visibilitychange', scheduleHero);
  window.addEventListener('pagehide', () => clearInterval(timer));
  window.addEventListener('pageshow', scheduleHero);
  scheduleHero();
}

// Motion is progressive enhancement: all content remains readable without it.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.body.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('pointermove', e => {
      if(reducedMotion.matches)return;
      const rect=button.getBoundingClientRect();
      button.style.setProperty('--magnet-x', ((e.clientX-rect.left)/rect.width-.5)*6+'px');
      button.style.setProperty('--magnet-y', ((e.clientY-rect.top)/rect.height-.5)*4+'px');
    });
    button.addEventListener('pointerleave', () => {button.style.setProperty('--magnet-x','0px');button.style.setProperty('--magnet-y','0px');});
  });
}
// The complete Vanilla Elixir campaign image stays fixed inside its frame.

const languageSwitch=$('language-switch');
function updateLanguageLink(){
  if(!languageSwitch)return;
  const path=window.location.pathname;
  const counterpart=isArabic?(path.replace(/^\/ar(?=\/|$)/,'')||'/'):'/ar'+path;
  languageSwitch.href=counterpart+window.location.search+window.location.hash;
}
updateLanguageLink();
languageSwitch?.addEventListener('click',updateLanguageLink);
window.addEventListener('popstate',updateLanguageLink);
window.addEventListener('hashchange',updateLanguageLink);

if($('best-products'))$('best-products').innerHTML=['ayla','oud-rose','casa-blanca','vanilla-elixir'].map(id=>card(products.find(p=>p.id===id))).join('');

if($('signature-products'))$('signature-products').innerHTML=products.filter(p=>p.type==='signature').map(card).join('');

function whatsappOrder(entries){
 const lines=[text('Hello Sultana, I would like to order:','مرحباً سلطانة، أرغب في طلب:')];
 let subtotal=0,pending=false;
 for(const [id,qty] of entries){const p=products.find(p=>p.id===id);if(!p)continue;
  lines.push(`${qty} × ${productName(p)}${p.size?' ('+productSize(p)+')':''} — ${p.price==null?text('Please confirm price','يرجى تأكيد السعر'):money(p.price*qty)}`);
  if(p.price==null)pending=true;else subtotal+=p.price*qty;
 }
 lines.push('',text('Subtotal: ','المجموع الفرعي: ')+money(subtotal)+(pending?text(' + unconfirmed prices',' + أسعار غير مؤكدة'):''));
 lines.push(text('Please confirm availability, delivery charges and payment details.','يرجى تأكيد التوفر ورسوم التوصيل وتفاصيل الدفع.'));
 return 'https://wa.me/97433901711?text='+encodeURIComponent(lines.join('\n'));
}
function updateProductWhatsApp(){if(selectedProduct&&$('product-whatsapp'))$('product-whatsapp').href=whatsappOrder([[selectedProduct.id,quantity]]);}
updateProductWhatsApp();
