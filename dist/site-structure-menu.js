(() => {
  const nav = document.getElementById('main-navigation');
  if (!nav || document.documentElement.lang === 'ar') return;
  const items = [
    ['Home','/'],
    ['Perfumes','/shop/?collection=perfume#collection'],
    ['Luxury Spray','/room-sprays/'],
    ['Oud & Bakhoor','/oud-bakhoor/'],
    ['Discovery Set','/products/discovery-set/'],
    ['Gifts & Packaging','/shop/?collection=gift#collection'],
    ['Weddings','/wedding-events/'],
    ['Hospitality','/hospitality/'],
    ['B2B & Corporate','/business-corporate/'],
    ['Gift Voucher','/shop/?collection=gift-voucher#collection'],
    ['Our Story','/our-story/'],
    ['Contact','/contact/']
  ];
  nav.innerHTML = items.map(([label,href]) => `<a href="${href}">${label}</a>`).join('');
})();
