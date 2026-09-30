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
      <div class="pcb-grid">
        ${items.map(item => `<a class="pcb-card" href="${isArabic ? '/ar' : ''}/shop/?collection=${item.id}#collection" aria-label="${isArabic ? item.ar : item.en}">
          <img src="${item.image}" alt="${isArabic ? item.ar : item.en}" loading="eager">
        </a>`).join('')}
      </div>
    </div>`;

  const style = document.createElement('style');
  style.id = 'pcb-live-style';
  style.textContent = `
    body:has(#perfume-collection-banners){background:#fbf8f3}
    #perfume-collection-banners{width:100%;max-width:none;margin:0;background:#fbf8f3;color:#211b16;border-top:1px solid #eadfce;border-bottom:1px solid #eadfce}
    #perfume-collection-banners .pcb-inner{max-width:1420px;margin:0 auto;padding:42px 5% 54px}
    #perfume-collection-banners .pcb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px;align-items:stretch}
    #perfume-collection-banners .pcb-card{position:relative;display:block;overflow:hidden;background:#eee5d9;aspect-ratio:9/14;border:1px solid #ddcdb8;box-shadow:0 12px 28px rgba(68,48,27,.10);text-decoration:none}
    #perfume-collection-banners .pcb-card img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .65s ease,filter .65s ease}
    #perfume-collection-banners .pcb-card:hover img{transform:scale(1.025);filter:brightness(1.04)}
    body:has(#perfume-collection-banners) #collection{background:#fbf8f3;color:#211b16;max-width:none;padding-left:max(5%,calc((100% - 1278px)/2));padding-right:max(5%,calc((100% - 1278px)/2))}
    body:has(#perfume-collection-banners) #collection .eyebrow{display:none!important}
    body:has(#perfume-collection-banners) #collection .collection-count{color:#a16c2d}
    body:has(#perfume-collection-banners) #collection h1{color:#211b16}
    @media(max-width:760px){
      #perfume-collection-banners .pcb-inner{padding:30px 18px 36px}
      #perfume-collection-banners .pcb-grid{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
      #perfume-collection-banners .pcb-grid::-webkit-scrollbar{display:none}
      #perfume-collection-banners .pcb-card{flex:0 0 82%;scroll-snap-align:start;aspect-ratio:9/14}
    }
  `;
  document.getElementById('pcb-live-style')?.remove();
  document.head.appendChild(style);
  catalog.parentNode.insertBefore(section, catalog);
  const catalogTitle = document.getElementById('catalog-title');
  if (catalogTitle) catalogTitle.textContent = isArabic ? 'جميع العطور' : 'All Perfumes';
})();
