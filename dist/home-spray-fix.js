'use strict';
(()=>{
  const perfumeUrl='/shop/?collection=perfume#collection';
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
  const style=document.createElement('style');
  style.textContent=`@media(min-width:701px){#bakhoor-products{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:38px 25px!important;max-width:none!important;margin-left:0!important;margin-right:0!important}#bakhoor-products .product-card{min-width:0!important;width:auto!important}}@media(max-width:700px){#bakhoor-products{display:flex!important;gap:14px!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x mandatory!important;-webkit-overflow-scrolling:touch!important;padding-bottom:10px!important;margin-right:-5vw!important;margin-left:-5vw!important;padding-right:5vw!important;padding-left:5vw!important;scrollbar-width:none!important}#bakhoor-products::-webkit-scrollbar{display:none!important}#bakhoor-products .product-card{flex:0 0 clamp(245px,72vw,330px)!important;scroll-snap-align:start!important;min-width:0!important}#bakhoor-products .product-card h3{font-size:24px!important}#bakhoor-products .card-add{max-width:none!important;width:100%!important}}`;
  document.head.appendChild(style);
  const syncPrivateCollection=()=>{
    const grid=document.querySelector('#bakhoor-products');
    if(!grid||typeof products==='undefined'||typeof card!=='function')return;
    const ids=['sultana-oud','royal-bukhoor','amber-night','oud-collection-set'];
    grid.innerHTML=ids.map(id=>products.find(p=>p.id===id)).filter(Boolean).map(card).join('');
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
    syncPrivateCollection();
    const bestSellerLink=document.querySelector('#best-sellers .text-link');
    if(bestSellerLink){
      bestSellerLink.href=perfumeUrl;
      bestSellerLink.innerHTML='Explore more <span aria-hidden="true">↗</span>';
    }
  };
  document.addEventListener('click',e=>{
    const link=e.target.closest('#best-sellers .text-link');
    if(!link)return;
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.href=perfumeUrl;
  },true);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
