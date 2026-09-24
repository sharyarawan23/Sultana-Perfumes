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
  style.textContent=`
    .hero-stage{width:100%!important;height:auto!important;min-height:0!important;aspect-ratio:3/1!important;overflow:hidden!important}
    .hero-slide,.supplied-slide .supplied-banner-link,.supplied-slide .supplied-banner-link picture{width:100%!important;height:100%!important}
    .supplied-slide .supplied-banner-link img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important}
    @media(max-width:700px){
      .hero-stage{height:auto!important;min-height:0!important;aspect-ratio:3/1!important}
      .supplied-slide .supplied-banner-link img{object-fit:cover!important;object-position:center!important}
      #bakhoor-products{display:flex!important;gap:14px!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x mandatory!important;-webkit-overflow-scrolling:touch!important;padding-bottom:10px!important;margin-right:-5vw!important;margin-left:-5vw!important;padding-right:5vw!important;padding-left:5vw!important;scrollbar-width:none!important}
      #bakhoor-products::-webkit-scrollbar{display:none!important}
      #bakhoor-products .product-card{flex:0 0 clamp(245px,72vw,330px)!important;scroll-snap-align:start!important;min-width:0!important}
      #bakhoor-products .product-card h3{font-size:24px!important}
      #bakhoor-products .card-add{max-width:none!important;width:100%!important}
    }`;
  document.head.appendChild(style);

  const setupFourHeroBanners=()=>{
    const stage=document.querySelector('.hero-stage');
    const dots=document.querySelector('.hero-dots');
    const autoplay=document.querySelector('#hero-autoplay');
    if(!stage||!dots)return;

    if(!document.querySelector('#hero-story')){
      const slide=document.createElement('article');
      slide.className='hero-slide supplied-slide';
      slide.id='hero-story';
      slide.setAttribute('data-hero-slide','');
      slide.setAttribute('aria-label','4 of 4 — Sultana Story');
      slide.setAttribute('aria-hidden','true');
      slide.inert=true;
      slide.innerHTML='<a class="supplied-banner-link" href="/our-story/" aria-label="Discover our story"><picture><img src="/assets/campaigns/hero-story-unified.webp" alt="Sultana Perfumes — A scented journey from Qatar to the world" width="2048" height="683" loading="lazy"></picture></a>';
      stage.appendChild(slide);
    }

    const slides=[...stage.querySelectorAll('[data-hero-slide]')];
    slides.forEach((slide,i)=>slide.setAttribute('aria-label',(i+1)+' of 4 — '+(['Lafiesta','Oud & Bakhoor','Luxury Home Spray','Sultana Story'][i]||'Sultana')));

    let dot4=dots.querySelector('[data-hero-target="3"]');
    if(!dot4){
      dot4=document.createElement('button');
      dot4.setAttribute('data-hero-target','3');
      dot4.setAttribute('aria-label','Show Sultana Story');
      dot4.setAttribute('aria-controls','hero-story');
      dot4.setAttribute('aria-pressed','false');
      dot4.textContent='04';
      dots.appendChild(dot4);
    }

    /* Pause the original three-slide timer; this replacement controls all four. */
    if(autoplay && autoplay.getAttribute('aria-label')?.toLowerCase().includes('pause')) autoplay.click();

    const buttons=[...dots.querySelectorAll('[data-hero-target]')];
    let current=Math.max(0,slides.findIndex(s=>s.classList.contains('is-active')));
    let timer=null;
    let playing=true;
    const show=i=>{
      current=(i+slides.length)%slides.length;
      slides.forEach((s,n)=>{
        const active=n===current;
        s.classList.toggle('is-active',active);
        s.setAttribute('aria-hidden',active?'false':'true');
        s.inert=!active;
      });
      buttons.forEach((b,n)=>b.setAttribute('aria-pressed',n===current?'true':'false'));
    };
    const restart=()=>{if(timer)clearInterval(timer);if(playing)timer=setInterval(()=>show(current+1),5000)};

    document.querySelector('.hero-navigation')?.addEventListener('click',e=>{
      const target=e.target.closest('[data-hero-target],#hero-prev,#hero-next,#hero-autoplay');
      if(!target)return;
      e.preventDefault();e.stopImmediatePropagation();
      if(target.matches('[data-hero-target]')) show(Number(target.dataset.heroTarget));
      else if(target.id==='hero-prev') show(current-1);
      else if(target.id==='hero-next') show(current+1);
      else if(target.id==='hero-autoplay'){
        playing=!playing;
        target.setAttribute('aria-label',playing?'Pause automatic slideshow':'Play automatic slideshow');
        const span=target.querySelector('span');if(span)span.textContent=playing?'Ⅱ':'▷';
      }
      restart();
    },true);
    show(current);restart();
  };

  const syncPrivateCollection=()=>{
    const grid=document.querySelector('#bakhoor-products');
    if(!grid||typeof products==='undefined'||typeof card!=='function')return;
    const ids=['sultana-oud','royal-bukhoor','amber-night','oud-collection-set'];
    grid.innerHTML=ids.map(id=>products.find(p=>p.id===id)).filter(Boolean).map(card).join('');
  };
  const apply=()=>{
    setupFourHeroBanners();
    const grid=document.querySelector('#home-products');
    if(grid){grid.querySelectorAll('.product-card').forEach(card=>{const title=(card.querySelector('h3')?.textContent||'').trim();const src=finalImages[title];const img=card.querySelector('img');if(src&&img&&img.getAttribute('src')!==src){img.src=src;img.removeAttribute('srcset');}})}
    syncPrivateCollection();
    const bestSellerLink=document.querySelector('#best-sellers .text-link');
    if(bestSellerLink){bestSellerLink.href=perfumeUrl;bestSellerLink.innerHTML='Explore more <span aria-hidden="true">↗</span>';}
  };
  document.addEventListener('click',e=>{const link=e.target.closest('#best-sellers .text-link');if(!link)return;e.preventDefault();e.stopImmediatePropagation();window.location.href=perfumeUrl;},true);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
})();
