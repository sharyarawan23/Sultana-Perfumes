(() => {
  if (!document.body.dataset.productId) return;
  const ar=document.documentElement.lang==='ar';
  const id=document.body.dataset.productId;
  const sprayImages={
    'black-london':'/assets/black-london.webp',
    'sweet-rose':'/assets/sweet-rose.webp',
    'velvet-night':'/assets/velvet-night.webp',
    'machmoun':'/assets/new-products/machmoun.webp',
    'cotton-candy':'/assets/new-products/cotton-candy.webp'
  };
  const fix=(img,pid)=>{if(img&&sprayImages[pid]){img.src=sprayImages[pid];img.removeAttribute('srcset');img.onerror=null;}};
  if(sprayImages[id]) fix(document.querySelector('.product-gallery img'),id);
  document.querySelectorAll('.related-products .product-card').forEach(card=>{
    const href=card.querySelector('.product-photo-link')?.getAttribute('href')||'';
    const pid=href.split('/').filter(Boolean).pop();
    if(sprayImages[pid]) fix(card.querySelector('img'),pid);
  });

  const nav=document.getElementById('main-navigation');
  if(nav){
    nav.innerHTML=ar?`<a href="/ar/">الرئيسية</a><a href="/ar/shop/?collection=perfume#collection">العطور</a><a href="/ar/room-sprays/">معطرات فاخرة</a><a href="/ar/oud-bakhoor/">العود والبخور</a><a href="/ar/contact/">تواصل معنا</a>`:`<a href="/">Home</a><a href="/shop/?collection=perfume#collection">Perfumes</a><a href="/room-sprays/">Luxury Spray</a><a href="/oud-bakhoor/">Oud &amp; Bakhoor</a><a href="/contact/">Contact</a>`;
  }
  const info=document.querySelector('.product-info');
  const detailType=(document.querySelector('.detail-type')?.textContent||'').toLowerCase();
  const specs=[...document.querySelectorAll('.product-specs div')];
  const collectionText=(specs.find(x=>['Collection','المجموعة'].includes((x.querySelector('dt')?.textContent||'').trim()))?.querySelector('dd')?.textContent||'').trim().toLowerCase();
  let href=ar?'/ar/shop/?collection=perfume#collection':'/shop/?collection=perfume#collection';
  let label=ar?'العودة إلى مجموعة العطور':'Back to Perfume Collection';
  if(detailType.includes('home')||detailType.includes('spray')||detailType.includes('منزلي')||collectionText.includes('home spray')||collectionText.includes('معطر')){href=ar?'/ar/room-sprays/#collection':'/room-sprays/#collection';label=ar?'العودة إلى المعطرات الفاخرة':'Back to Luxury Sprays';}
  else if(detailType.includes('oud')||detailType.includes('bakhoor')||detailType.includes('loban')||detailType.includes('عود')||detailType.includes('بخور')||collectionText.includes('signature')){href=ar?'/ar/oud-bakhoor/#collection':'/oud-bakhoor/#collection';label=ar?'العودة إلى العود والبخور':'Back to Oud & Bakhoor';}
  if(info&&!document.querySelector('.product-back-link')){const back=document.createElement('a');back.className='product-back-link';back.href=href;back.innerHTML=ar?`${label} <span aria-hidden="true">→</span>`:`<span aria-hidden="true">←</span> ${label}`;back.style.cssText='display:inline-flex;align-items:center;gap:10px;margin:0 0 24px;color:inherit;text-decoration:none;font-size:13px;letter-spacing:.08em;text-transform:uppercase;';info.insertBefore(back,info.firstChild);}
})();
