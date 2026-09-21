'use strict';
(() => {
  const replacements = {
    'Black London': '/assets/black-london-new.png',
    'Sweet Rose': '/assets/sweet-rose-new.png',
    'Velvet Night': '/assets/velvet-night-new.png',
    'Machmoun': '/assets/machmoun-new.png',
    'Cotton Candy': '/assets/cotton-candy-new.png',
    'بلاك لندن': '/assets/black-london-new.png',
    'سويت روز': '/assets/sweet-rose-new.png',
    'فيلفت نايت': '/assets/velvet-night-new.png',
    'المشموم': '/assets/machmoun-new.png',
    'كوتن كاندي': '/assets/cotton-candy-new.png'
  };

  function applyNewSprayImages(root = document) {
    root.querySelectorAll('img').forEach((img) => {
      const alt = (img.getAttribute('alt') || '').trim();
      if (replacements[alt] && img.getAttribute('src') !== replacements[alt]) {
        img.src = replacements[alt];
        img.removeAttribute('srcset');
      }
    });
  }

  function applyShopByUse() {
    const section = document.querySelector('.department-categories .category-section');
    if (!section) return;
    const cards = Array.from(section.querySelectorAll('.category-card'));
    const images = [
      '/assets/use-room-mist.png',
      '/assets/use-car-mist.png',
      '/assets/use-clothing-mist.png'
    ];
    cards.slice(0, 3).forEach((card, index) => {
      const img = card.querySelector('img');
      if (img && img.getAttribute('src') !== images[index]) {
        img.src = images[index];
        img.removeAttribute('srcset');
      }
    });
    cards.slice(3).forEach((card) => card.remove());
  }

  function applyAll() {
    applyNewSprayImages();
    applyShopByUse();
  }

  applyAll();
  new MutationObserver(applyAll).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
