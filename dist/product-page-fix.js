(() => {
  if (document.documentElement.lang === 'ar' || !document.body.dataset.productId) return;

  const nav = document.getElementById('main-navigation');
  if (nav) {
    nav.innerHTML = `<a href="/">Home</a><a href="/shop/?collection=perfume#collection">Perfumes</a><a href="/room-sprays/">Luxury Spray</a><a href="/oud-bakhoor/">Oud &amp; Bakhoor</a><a href="/contact/">Contact</a><div class="nav-group"><button type="button" aria-expanded="false" aria-controls="collections-menu" id="collections-toggle">More <span aria-hidden="true">⌄</span></button><div id="collections-menu" hidden><a href="/discovery-set/">Discovery Set</a><a href="/gift/">Gift</a><a href="/wedding/">Wedding</a><a href="/hospitality/">Hospitality</a><a href="/b2b/">B2B</a><a href="/gift-voucher/">Gift Voucher</a><a href="/our-story/">Our Story</a></div></div>`;
    const toggle = nav.querySelector('#collections-toggle');
    const menu = nav.querySelector('#collections-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); const open=toggle.getAttribute('aria-expanded')==='true'; toggle.setAttribute('aria-expanded',String(!open)); menu.hidden=open; });
      menu.addEventListener('click',e=>e.stopPropagation());
      document.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');menu.hidden=true;});
    }
  }

  const id=document.body.dataset.productId;
  const sprayImages={
    'black-london':'/assets/black-london.webp',
    'sweet-rose':'/assets/sweet-rose.webp',
    'velvet-night':'/assets/velvet-night.webp',
    'machmoun':'/assets/new-products/machmoun.webp',
    'cotton-candy':'/assets/new-products/cotton-candy.webp'
  };
  const sprayIds=Object.keys(sprayImages);
  const fixSprayImage=(img,pid)=>{if(img&&sprayImages[pid]){img.src=sprayImages[pid];img.removeAttribute('srcset');}};
  if(sprayIds.includes(id)){
    fixSprayImage(document.querySelector('.product-gallery img'),id);
    document.querySelectorAll('.related-products .product-card').forEach(card=>{
      const href=card.querySelector('.product-photo-link')?.getAttribute('href')||'';
      const pid=href.split('/').filter(Boolean).pop();
      fixSprayImage(card.querySelector('img'),pid);
    });
  }

  const info = document.querySelector('.product-info');
  const detailType = (document.querySelector('.detail-type')?.textContent || '').toLowerCase();
  const specs = [...document.querySelectorAll('.product-specs div')];
  const collectionText = (specs.find(x => (x.querySelector('dt')?.textContent || '').trim() === 'Collection')?.querySelector('dd')?.textContent || '').trim().toLowerCase();
  let href='/shop/?collection=perfume#collection', label='Back to Perfume Collection';
  if (detailType.includes('home') || detailType.includes('spray') || collectionText.includes('home spray')) { href='/room-sprays/#collection'; label='Back to Luxury Sprays'; }
  else if (detailType.includes('oud') || detailType.includes('bakhoor') || detailType.includes('loban') || collectionText.includes('signature')) { href='/oud-bakhoor/#collection'; label='Back to Oud & Bakhoor'; }
  else if (collectionText.includes('women')) { href='/shop/?collection=women#collection'; label='Back to Women Collection'; }
  else if (collectionText.includes('men')) { href='/shop/?collection=men#collection'; label='Back to Men Collection'; }
  else if (collectionText.includes('unisex')) { href='/shop/?collection=unisex#collection'; label='Back to Unisex Collection'; }

  if (info && !document.querySelector('.product-back-link')) {
    const back=document.createElement('a'); back.className='product-back-link'; back.href=href; back.innerHTML=`<span aria-hidden="true">←</span> ${label}`;
    back.style.cssText='display:inline-flex;align-items:center;gap:10px;margin:0 0 24px;color:inherit;text-decoration:none;font-size:13px;letter-spacing:.08em;text-transform:uppercase;';
    info.insertBefore(back, info.firstChild);
  }
})();
