(() => {
  if (!document.body.dataset.productId) return;
  const ar=document.documentElement.lang==='ar',id=document.body.dataset.productId;
  if(id!=='ayla') document.querySelector('.product-description')?.remove();
  const sprayImages={'black-london':'/assets/spray-products-final/black-london-new.png','sweet-rose':'/assets/spray-products-final/sweet-rose-new.png','velvet-night':'/assets/spray-products-final/velvet-night-new.png','machmoun':'/assets/spray-products-final/machmoun-new.png','cotton-candy':'/assets/spray-products-final/cotton-candy-new.png','royal-fruity':'/assets/spray-products-final/royal-fruity-new.png','wood-bouquet':'/assets/spray-products-final/wood-bouquet-new.png','my-mood':'/assets/spray-products-final/my-mood-new.png','blanc-imperial':'/assets/spray-products-final/blanc-imperial-new.png'};
  const fix=(img,pid)=>{if(img&&sprayImages[pid]){img.src=sprayImages[pid];img.removeAttribute('srcset');img.onerror=null;}};
  if(sprayImages[id])fix(document.querySelector('.product-gallery img'),id);
  document.querySelectorAll('.related-products .product-card').forEach(card=>{const href=card.querySelector('.product-photo-link')?.getAttribute('href')||'',pid=href.split('/').filter(Boolean).pop();fix(card.querySelector('img'),pid)});
  const info=document.querySelector('.product-info');let href=ar?'/ar/shop/?collection=perfume#collection':'/shop/?collection=perfume#collection',label=ar?'العودة إلى مجموعة العطور':'Back to Perfume Collection';
  if(sprayImages[id]){href=ar?'/ar/room-sprays/#collection':'/room-sprays/#collection';label=ar?'العودة إلى المعطرات الفاخرة':'Back to Luxury Sprays'}
  if(info&&!document.querySelector('.product-back-link')){const back=document.createElement('a');back.className='product-back-link';back.href=href;back.innerHTML=ar?`${label} <span aria-hidden="true">→</span>`:`<span aria-hidden="true">←</span> ${label}`;back.style.cssText='display:inline-flex;align-items:center;gap:10px;margin:0 0 24px;color:inherit;text-decoration:none;font-size:13px;letter-spacing:.08em;text-transform:uppercase;';info.insertBefore(back,info.firstChild);}
})();