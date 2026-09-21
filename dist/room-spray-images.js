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

  applyNewSprayImages();
  new MutationObserver(() => applyNewSprayImages()).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
