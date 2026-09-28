(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('collection') !== 'perfume') return;

  const catalog = document.querySelector('#collection');
  if (!catalog) return;

  document.querySelector('#perfume-collection-banners')?.remove();

  const isArabic = document.documentElement.lang === 'ar' || location.pathname.startsWith('/ar/');
  const items = [
    { id: 'men', en: 'Men', ar: 'للرجال', image: '/assets/collections-square/men-collection-vertical.webp' },
    { id: 'women', en: 'Women', ar: 'للنساء', image: '/assets/collections-square/women-collection-vertical.webp' },
    { id: 'unisex', en: 'Unisex', ar: 'للجنسين', image: '/assets/collections-square/unisex-collection-vertical.webp' }
  ];

  const section = document.createElement('section');
  section.id = 'perfume-collection-banners';
  section.innerHTML = `
    <div class="pcb-inner">
      <div class="pcb-heading">
        <p>${isArabic ? 'مجموعات العطور' : 'PERFUME COLLECTIONS'}</p>
        <h1>${isArabic ? 'اكتشف مجموعتك.' : 'Find your collection.'}</h1>
      </div>
      <div class="pcb-grid">
        ${items.map(item => `<a class="pcb-card" href="${isArabic ? '/ar' : ''}/shop/?collection=${item.id}#collection" aria-label="${isArabic ? item.ar : item.en}">
          <img src="${item.image}" alt="${isArabic ? item.ar : item.en}" loading="eager">
          <div class="pcb-shade"></div>
          <div class="pcb-copy"><h2>${isArabic ? item.ar : item.en}</h2><span>${isArabic ? 'اكتشف المزيد' : 'DISCOVER MORE'} <b aria-hidden="true">→</b></span></div>
        </a>`).join('')}
      </div>
    </div>`;

  const style = document.createElement('style');
  style.id = 'pcb-live-style';
  style.textContent = `
    body:has(#perfume-collection-banners){background:#0b0a08}
    #perfume-collection-banners{width:100%;max-width:none;margin:0;background:radial-gradient(circle at 78% 15%,#332619 0,#17120d 36%,#090806 76%);color:#f7efe2;border-top:1px solid rgba(202,160,92,.22);border-bottom:1px solid rgba(202,160,92,.16)}
    #perfume-collection-banners .pcb-inner{max-width:1420px;margin:0 auto;padding:42px 5% 54px}
    #perfume-collection-banners .pcb-heading{margin-bottom:24px}
    #perfume-collection-banners .pcb-heading p{margin:0 0 7px;font:600 11px/1.6 var(--sans,Arial,sans-serif);letter-spacing:3.2px;color:#d5aa68}
    #perfume-collection-banners .pcb-heading h1{margin:0;color:#fff8ec;font-family:var(--serif,Georgia,serif);font-size:clamp(38px,3.4vw,54px);font-weight:400;line-height:1.05}
    #perfume-collection-banners .pcb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px;align-items:stretch}
    #perfume-collection-banners .pcb-card{position:relative;display:block;overflow:hidden;background:#17110c;aspect-ratio:9/14;border:1px solid rgba(216,172,101,.28);box-shadow:0 20px 45px rgba(0,0,0,.25);text-decoration:none;color:#fff}
    #perfume-collection-banners .pcb-card img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .65s ease,filter .65s ease}
    #perfume-collection-banners .pcb-shade{position:absolute;inset:0;background:linear-gradient(180deg,transparent 48%,rgba(8,6,4,.12) 62%,rgba(7,5,3,.88) 100%);pointer-events:none}
    #perfume-collection-banners .pcb-copy{position:absolute;left:28px;right:28px;bottom:27px;z-index:2}
    #perfume-collection-banners .pcb-copy h2{margin:0 0 13px;color:#fffaf0;font-family:var(--serif,Georgia,serif);font-size:clamp(30px,2.5vw,42px);font-weight:400;line-height:1}
    #perfume-collection-banners .pcb-copy span{display:inline-flex;align-items:center;gap:20px;min-width:195px;padding:13px 18px;border:1px solid #d7ad69;color:#f6dfb6;font:600 11px/1 var(--sans,Arial,sans-serif);letter-spacing:.7px;background:rgba(15,10,6,.42);backdrop-filter:blur(3px)}
    #perfume-collection-banners .pcb-copy b{font-size:18px;font-weight:400;transition:transform .25s ease}
    #perfume-collection-banners .pcb-card:hover img{transform:scale(1.025);filter:brightness(1.04)}
    #perfume-collection-banners .pcb-card:hover .pcb-copy b{transform:translateX(4px)}
    body:has(#perfume-collection-banners) #collection{background:#0b0a08;color:#f5ede0;max-width:none;padding-left:max(5%,calc((100% - 1278px)/2));padding-right:max(5%,calc((100% - 1278px)/2))}
    body:has(#perfume-collection-banners) #collection .eyebrow,body:has(#perfume-collection-banners) #collection .collection-count{color:#d5aa68}
    body:has(#perfume-collection-banners) #collection h1{color:#fff8ec}
    @media(max-width:760px){
      #perfume-collection-banners .pcb-inner{padding:30px 18px 36px}
      #perfume-collection-banners .pcb-heading{margin-bottom:18px}
      #perfume-collection-banners .pcb-heading h1{font-size:38px}
      #perfume-collection-banners .pcb-grid{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
      #perfume-collection-banners .pcb-grid::-webkit-scrollbar{display:none}
      #perfume-collection-banners .pcb-card{flex:0 0 82%;scroll-snap-align:start;aspect-ratio:9/14}
      #perfume-collection-banners .pcb-copy{left:20px;right:20px;bottom:21px}
      #perfume-collection-banners .pcb-copy h2{font-size:32px}
      #perfume-collection-banners .pcb-copy span{padding:12px 15px;min-width:180px}
    }
  `;
  document.getElementById('pcb-live-style')?.remove();
  document.head.appendChild(style);
  catalog.parentNode.insertBefore(section, catalog);
})();
