'use strict';
(()=>{
  const finalImages={
    'Black London':'/assets/spray-products-final/black-london-new.png',
    'Sweet Rose':'/assets/spray-products-final/sweet-rose-new.png',
    'Velvet Night':'/assets/spray-products-final/velvet-night-new.png',
    'Machmoun':'/assets/spray-products-final/machmoun-new.png',
    'Cotton Candy':'/assets/spray-products-final/cotton-candy-new.png',
    'بلاك لندن':'/assets/spray-products-final/black-london-new.png',
    'سويت روز':'/assets/spray-products-final/sweet-rose-new.png',
    'فيلفت نايت':'/assets/spray-products-final/velvet-night-new.png',
    'المشموم':'/assets/spray-products-final/machmoun-new.png',
    'كوتن كاندي':'/assets/spray-products-final/cotton-candy-new.png'
  };
  const apply=()=>{
    const grid=document.querySelector('#home-products');
    if(grid){
      grid.querySelectorAll('.product-card').forEach(card=>{
        const title=(card.querySelector('h3')?.textContent||'').trim();
        const src=finalImages[title];
        const img=card.querySelector('img');
        if(src&&img&&img.getAttribute('src')!==src){img.src=src;img.removeAttribute('srcset');}
      });
    }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
