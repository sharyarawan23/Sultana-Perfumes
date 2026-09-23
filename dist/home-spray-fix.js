'use strict';
(()=>{
  const perfumeUrl='/shop/?collection=perfume#collection';
  const finalImages={
    'Black London':'/assets/spray-products-final/black-london-new.png','Sweet Rose':'/assets/spray-products-final/sweet-rose-new.png','Velvet Night':'/assets/spray-products-final/velvet-night-new.png','Machmoun':'/assets/spray-products-final/machmoun-new.png','Cotton Candy':'/assets/spray-products-final/cotton-candy-new.png','بلاك لندن':'/assets/spray-products-final/black-london-new.png','سويت روز':'/assets/spray-products-final/sweet-rose-new.png','فيلفت نايت':'/assets/spray-products-final/velvet-night-new.png','المشموم':'/assets/spray-products-final/machmoun-new.png','كوتن كاندي':'/assets/spray-products-final/cotton-candy-new.png'
  };
  const style=document.createElement('style');
  style.textContent=`@media(min-width:701px){#home-products,#bakhoor-products{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:38px 25px!important;max-width:none!important;margin-left:0!important;margin-right:0!important}#home-products .product-card,#bakhoor-products .product-card{min-width:0!important;width:auto!important}}@media(max-width:700px){#bakhoor-products{display:flex!important;gap:14px!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x mandatory!important;-webkit-overflow-scrolling:touch!important;padding-bottom:10px!important;margin-right:-5vw!important;margin-left:-5vw!important;padding-right:5vw!important;padding-left:5vw!important;scrollbar-width:none!important}#bakhoor-products::-webkit-scrollbar{display:none!important}#bakhoor-products .product-card{flex:0 0 clamp(245px,72vw,330px)!important;scroll-snap-align:start!important;min-width:0!important}#bakhoor-products .product-card h3{font-size:24px!important}#bakhoor-products .card-add{max-width:none!important;width:100%!important}}`;
  document.head.appendChild(style);
  const addFourthHero=()=>{
    const stage=document.querySelector('.hero-carousel .hero-stage');
    const dots=document.querySelector('.hero-carousel .hero-dots');
    if(!stage||!dots||document.querySelector('#hero-fourth'))return;
    stage.querySelectorAll('[data-hero-slide]').forEach((slide,i)=>slide.setAttribute('aria-label',`${i+1} of 4`));
    const slide=document.createElement('article');
    slide.className='hero-slide supplied-slide';slide.id='hero-fourth';slide.setAttribute('data-hero-slide','');slide.setAttribute('aria-label','4 of 4');slide.setAttribute('aria-hidden','true');slide.inert=true;
    slide.innerHTML=`<a class="supplied-banner-link" href="/shop/?collection=gift#collection" aria-label="Discover Sultana"><img src="/assets/campaigns/ChatGPT%20Image%20Sep%2023%2C%202026%2C%2011_43_24%20PM.png" alt="Sultana" width="2100" height="700" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></a>`;
    stage.appendChild(slide);
    const dot=document.createElement('button');dot.setAttribute('data-hero-target','3');dot.setAttribute('aria-label','Show fourth banner');dot.setAttribute('aria-controls','hero-fourth');dot.setAttribute('aria-pressed','false');dot.textContent='04';dots.appendChild(dot);
  };
  const syncPrivateCollection=()=>{const grid=document.querySelector('#bakhoor-products');if(!grid||typeof products==='undefined'||typeof card!=='function')return;const ids=['sultana-oud','royal-bukhoor','amber-night','oud-collection-set'];grid.innerHTML=ids.map(id=>products.find(p=>p.id===id)).filter(Boolean).map(card).join('');};
  const syncHomeSprays=()=>{const grid=document.querySelector('#home-products');if(!grid)return;[...grid.querySelectorAll('.product-card')].slice(4).forEach(el=>el.remove());grid.querySelectorAll('.product-card').forEach(card=>{const title=(card.querySelector('h3')?.textContent||'').trim(),src=finalImages[title],img=card.querySelector('img');if(src&&img&&img.getAttribute('src')!==src){img.src=src;img.removeAttribute('srcset');}});};
  const apply=()=>{addFourthHero();syncHomeSprays();syncPrivateCollection();const bestSellerLink=document.querySelector('#best-sellers .text-link');if(bestSellerLink){bestSellerLink.href=perfumeUrl;bestSellerLink.innerHTML='Explore more <span aria-hidden="true">↗</span>';}};
  document.addEventListener('click',e=>{const link=e.target.closest('#best-sellers .text-link');if(!link)return;e.preventDefault();e.stopImmediatePropagation();window.location.href=perfumeUrl;},true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();
