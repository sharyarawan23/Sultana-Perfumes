(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('collection') !== 'perfume') return;
  const catalog = document.querySelector('#collection');
  if (!catalog || document.querySelector('#perfume-collection-banners')) return;
  const isArabic = document.documentElement.lang === 'ar' || location.pathname.startsWith('/ar/');
  const items = [
    { id: 'women', en: 'Women', ar: 'للنساء', image: '/assets/collections-square/women-collection-vertical.webp' },
    { id: 'men', en: 'Men', ar: 'للرجال', image: '/assets/collections-square/men-collection-vertical.webp' },
    { id: 'unisex', en: 'Unisex', ar: 'للجنسين', image: '/assets/collections-square/unisex-collection-vertical.webp' }
  ];
  const section = document.createElement('section');
  section.id = 'perfume-collection-banners';
  section.className = 'section-shell perfume-collection-banners';
  section.innerHTML = `
    <div class="section-heading"><div><p class="eyebrow">${isArabic ? 'مجموعات العطور' : 'PERFUME COLLECTIONS'}</p><h1>${isArabic ? 'اكتشف مجموعتك.' : 'Find your collection.'}</h1></div></div>
    <div class="perfume-collection-banner-grid">
      ${items.map(item => `<a class="perfume-collection-banner" href="${isArabic ? '/ar' : ''}/shop/?collection=${item.id}#collection"><img src="${item.image}" alt="${isArabic ? item.ar : item.en}" loading="eager"></a>`).join('')}
    </div>
  `;
  catalog.parentNode.insertBefore(section, catalog);
})();
