(() => {
  const setup = () => {
    const grid = document.querySelector('#signature-products.signature-grid');
    const section = document.querySelector('#signature-section');
    if (!grid || !section) return false;
    const cards = [...grid.querySelectorAll('.product-card')];
    if (cards.length < 2) return false;

    grid.style.setProperty('display','flex','important');
    grid.style.setProperty('grid-template-columns','none','important');
    grid.style.setProperty('flex-wrap','nowrap','important');
    grid.style.setProperty('gap','18px','important');
    grid.style.setProperty('overflow-x','auto','important');
    grid.style.setProperty('overflow-y','hidden','important');
    grid.style.setProperty('scroll-behavior','smooth','important');
    grid.style.setProperty('scroll-snap-type','x mandatory','important');
    grid.style.setProperty('padding-right','0','important');
    grid.style.setProperty('padding-bottom','8px','important');
    grid.style.setProperty('scrollbar-width','none');
    grid.style.setProperty('-webkit-overflow-scrolling','touch');

    const applySizes = () => {
      const mobile = window.innerWidth <= 850;
      cards.forEach(card => {
        card.style.setProperty('flex', mobile ? '0 0 78%' : '0 0 calc((100% - 54px) / 4.18)', 'important');
        card.style.setProperty('min-width','0','important');
        card.style.setProperty('scroll-snap-align','start');
      });
    };
    applySizes();
    window.addEventListener('resize', applySizes, {passive:true});

    const heading = section.querySelector('.section-heading');
    if (!heading) return true;
    let controls = heading.querySelector('.private-slider-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'private-slider-controls';
      controls.innerHTML = '<button type="button" class="private-prev" aria-label="Previous products">←</button><button type="button" class="private-next" aria-label="Next products">→</button>';
      heading.appendChild(controls);
    }
    Object.assign(controls.style,{display:'flex',gap:'10px',marginLeft:'auto',alignItems:'center'});
    controls.querySelectorAll('button').forEach(btn => Object.assign(btn.style,{width:'38px',height:'38px',border:'1px solid #d9c4a8',borderRadius:'50%',background:'#fffdfa',cursor:'pointer',fontSize:'18px',lineHeight:'1',position:'relative',zIndex:'20'}));

    const step = () => {
      const first = grid.querySelector('.product-card');
      return first ? first.getBoundingClientRect().width + 18 : grid.clientWidth * .25;
    };
    controls.querySelector('.private-prev').onclick = e => {e.preventDefault();e.stopPropagation();grid.scrollBy({left:-step(),behavior:'smooth'});};
    controls.querySelector('.private-next').onclick = e => {e.preventDefault();e.stopPropagation();grid.scrollBy({left:step(),behavior:'smooth'});};
    return true;
  };

  const start = () => {
    if (setup()) return;
    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      if (setup() || tries > 50) clearInterval(timer);
    },100);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
