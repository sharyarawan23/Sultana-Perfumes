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
    section.classList.add('spray-use-cards');
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
      if (img) {
        img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;margin:0;object-fit:cover;object-position:center;max-width:none;transform:none;mask-image:none;';
      }
      const overlay = card.querySelector('div');
      if (overlay) overlay.style.display = 'none';
      card.style.cssText = 'position:relative;display:block;width:100%;height:auto;aspect-ratio:307/204;overflow:hidden;background:#1c1712;';
      if (!card.querySelector('.spray-use-arrow')) {
        const arrow = document.createElement('span');
        arrow.className = 'spray-use-arrow';
        arrow.setAttribute('aria-hidden','true');
        arrow.textContent = '↗';
        arrow.style.cssText = 'position:absolute;right:16px;bottom:12px;z-index:3;color:#fff;font-size:22px;line-height:1;text-shadow:0 1px 6px #000;';
        card.appendChild(arrow);
      }
    });
    cards.slice(3).forEach((card) => card.remove());
    section.style.cssText = 'display:grid;grid-template-columns:repeat(3,minmax(0,307px));gap:16px;justify-content:start;align-items:start;';
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
