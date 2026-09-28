(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('collection') !== 'perfume') return;

  const catalog = document.querySelector('#collection');
  if (!catalog) return;

  document.querySelector('#perfume-collection-banners')?.remove();

  const isArabic = document.documentElement.lang === 'ar' || location.pathname.startsWith('/ar/');
  const items = [
    { id: 'women', en: 'Women', ar: 'للنساء', image: '/assets/collections-square/women-collection-vertical.webp' },
    { id: 'men', en: 'Men', ar: 'للرجال', image: '/assets/collections-square/men-collection-vertical.webp' },
    { id: 'unisex', en: 'Unisex', ar: 'للجنسين', image: '/assets/collections-square/unisex-collection-vertical.webp' }
  ];

  const section = document.createElement('section');
  section.id = 'perfume-collection-banners';
  section.innerHTML = `
    <div class="pcb-heading">
      <p>${isArabic ? 'مجموعات العطور' : 'PERFUME COLLECTIONS'}</p>
      <h1>${isArabic ? 'اكتشف مجموعتك.' : 'Find your collection.'}</h1>
    </div>
    <div class="pcb-grid">
      ${items.map(item => `<a class="pcb-card" href="${isArabic ? '/ar' : ''}/shop/?collection=${item.id}#collection" aria-label="${isArabic ? item.ar : item.en}"><img src="${item.image}" alt="${isArabic ? item.ar : item.en}" loading="eager"></a>`).join('')}
    </div>`;

  const style = document.createElement('style');
  style.id = 'pcb-live-style';
  style.textContent = `
    #perfume-collection-banners{max-width:1420px;margin:0 auto;padding:44px 5% 28px;background:var(--paper,#fffdfa)}
    #perfume-collection-banners .pcb-heading{margin-bottom:26px}
    #perfume-collection-banners .pcb-heading p{margin:0 0 8px;font:500 11px/1.6 var(--sans,Arial,sans-serif);letter-spacing:3px;color:var(--gold,#927043)}
    #perfume-collection-banners .pcb-heading h1{margin:0;font-family:var(--serif,Georgia,serif);font-size:clamp(38px,3.5vw,54px);font-weight:400;line-height:1.08}
    #perfume-collection-banners .pcb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;align-items:start}
    #perfume-collection-banners .pcb-card{display:block;overflow:hidden;background:#eee5d5;aspect-ratio:9/16}
    #perfume-collection-banners .pcb-card img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .55s ease}
    #perfume-collection-banners .pcb-card:hover img{transform:scale(1.015)}
    @media(max-width:760px){
      #perfume-collection-banners{padding:32px 18px 22px}
      #perfume-collection-banners .pcb-grid{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;-webkit-overflow-scrolling:touch}
      #perfume-collection-banners .pcb-card{flex:0 0 82%;scroll-snap-align:start}
    }
  `;
  document.getElementById('pcb-live-style')?.remove();
  document.head.appendChild(style);
  catalog.parentNode.insertBefore(section, catalog);
})();
