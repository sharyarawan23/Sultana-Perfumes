'use strict';
(() => {
  const base = '/assets/spray-products-final/';
  const replacements = {
    'Black London': base + 'black-london-new.png',
    'Sweet Rose': base + 'sweet-rose-new.png',
    'Velvet Night': base + 'velvet-night-new.png',
    'Machmoun': base + 'machmoun-new.png',
    'Cotton Candy': base + 'cotton-candy-new.png',
    'بلاك لندن': base + 'black-london-new.png',
    'سويت روز': base + 'sweet-rose-new.png',
    'فيلفت نايت': base + 'velvet-night-new.png',
    'المشموم': base + 'machmoun-new.png',
    'كوتن كاندي': base + 'cotton-candy-new.png'
  };

  const newSprays = [
    { id: 'royal-fruity', name: 'Royal Fruity', nameAr: 'رويال فروتي', image: base + 'royal-fruity-new.png' },
    { id: 'wood-bouquet', name: 'Wood Bouquet', nameAr: 'وود بوكيه', image: base + 'wood-bouquet-new.png' },
    { id: 'my-mood', name: 'My Mood', nameAr: 'ماي مود', image: base + 'my-mood-new.png' },
    { id: 'blanc-imperial', name: 'Blanc Imperial', nameAr: 'بلانك إمبريال', image: base + 'blanc-imperial-new.png' }
  ];

  function applyNewSprayImages(root = document) {
    root.querySelectorAll('img').forEach((img) => {
      const alt = (img.getAttribute('alt') || '').trim();
      const key = Object.keys(replacements).find((name) => alt === name || alt.startsWith(name + ' '));
      if (key && img.getAttribute('src') !== replacements[key]) {
        img.src = replacements[key];
        img.removeAttribute('srcset');
      }
    });
  }

  function addNewSprays() {
    const productsGrid = document.querySelector('#collection #products');
    if (!productsGrid || productsGrid.querySelector('[data-new-spray="royal-fruity"]')) return;
    const arabic = document.documentElement.lang === 'ar';
    newSprays.forEach((product) => {
      const name = arabic ? product.nameAr : product.name;
      const article = document.createElement('article');
      article.className = 'product-card';
      article.dataset.newSpray = product.id;
      article.innerHTML = `
        <div class="product-image portrait-product">
          <a class="product-photo-link" href="/room-sprays/#collection" aria-label="${arabic ? 'عرض' : 'View'} ${name}">
            <img src="${product.image}" alt="${name} ${arabic ? 'من سلطانة' : 'by Sultana'}" loading="lazy" width="1024" height="1024">
          </a>
          <a class="product-quick" href="/room-sprays/#collection">${arabic ? 'اكتشف العطر' : 'Discover Fragrance'}</a>
        </div>
        <h3><a href="/room-sprays/#collection">${name}</a></h3>
        <p class="type">${arabic ? 'معطر منزلي فاخر · 300 مل' : 'Luxury Home Spray · 300 ml'}</p>
        <p class="price">QAR 120</p>
        <button class="card-add new-spray-order" type="button">${arabic ? 'أضف إلى الحقيبة' : 'Add to Bag'}</button>`;
      const button = article.querySelector('.new-spray-order');
      button.addEventListener('click', () => {
        const message = arabic ? `أرغب في طلب ${name} - QAR 120` : `I would like to order ${product.name} - QAR 120`;
        window.open(`https://wa.me/97433901711?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
      });
      productsGrid.appendChild(article);
    });
  }

  function applyRoomSprayLayout() {
    const useSection = document.querySelector('.department-categories');
    const cardsGrid = document.querySelector('.department-categories .category-section');
    const collectionSection = document.querySelector('#collection.shop-section');
    const productsGrid = document.querySelector('#collection #products');
    if (useSection) { useSection.style.maxWidth='none'; useSection.style.width='100%'; useSection.style.paddingLeft='5%'; useSection.style.paddingRight='5%'; }
    if (cardsGrid) {
      cardsGrid.classList.add('spray-use-cards');
      const cards = Array.from(cardsGrid.querySelectorAll('.category-card'));
      const images = ['/assets/use-room-mist.png','/assets/use-car-mist.png','/assets/use-clothing-mist.png'];
      cards.slice(0,3).forEach((card,index) => {
        const img=card.querySelector('img');
        if(img && img.getAttribute('src')!==images[index]) { img.src=images[index]; img.removeAttribute('srcset'); }
        if(img) img.style.cssText='position:absolute;inset:0;width:100%;height:100%;margin:0;object-fit:cover;object-position:center;max-width:none;transform:none;mask-image:none;';
        const overlay=card.querySelector('div'); if(overlay) overlay.style.display='none';
        card.style.cssText='position:relative;display:block;width:100%;height:auto;aspect-ratio:307/204;overflow:hidden;background:#1c1712;';
      });
      cards.slice(3).forEach(card=>card.remove());
      cardsGrid.style.cssText='display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;width:100%;justify-content:stretch;align-items:start;';
    }
    if(collectionSection){collectionSection.style.maxWidth='none';collectionSection.style.width='100%';collectionSection.style.paddingLeft='5%';collectionSection.style.paddingRight='5%';}
    if(productsGrid){productsGrid.style.gridTemplateColumns=window.innerWidth>=900?'repeat(3,minmax(0,1fr))':window.innerWidth>=600?'repeat(2,minmax(0,1fr))':'1fr';productsGrid.style.width='100%';}
  }

  function applyAll(){applyNewSprayImages();addNewSprays();applyRoomSprayLayout();}
  applyAll();
  window.addEventListener('resize',applyRoomSprayLayout);
  new MutationObserver(applyAll).observe(document.documentElement,{childList:true,subtree:true});
})();
