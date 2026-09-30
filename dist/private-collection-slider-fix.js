(() => {
  const init = () => {
    const grid = document.querySelector('#signature-products.signature-grid');
    const section = document.querySelector('#signature-section');
    if (!grid || !section) return;

    // Keep a visible teaser of the next card so users know the row scrolls.
    grid.style.display = 'flex';
    grid.style.flexWrap = 'nowrap';
    grid.style.gap = '18px';
    grid.style.overflowX = 'auto';
    grid.style.scrollBehavior = 'smooth';
    grid.style.scrollSnapType = 'x mandatory';
    grid.style.paddingRight = '72px';
    grid.style.paddingBottom = '8px';
    grid.style.scrollbarWidth = 'none';
    grid.querySelectorAll('.product-card').forEach(card => {
      card.style.flex = '0 0 calc((100% - 54px) / 4.25)';
      card.style.minWidth = '0';
      card.style.scrollSnapAlign = 'start';
    });

    const heading = section.querySelector('.section-heading');
    if (!heading) return;
    let controls = heading.querySelector('.private-slider-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'private-slider-controls';
      controls.innerHTML = '<button type="button" class="private-prev" aria-label="Previous products">←</button><button type="button" class="private-next" aria-label="Next products">→</button>';
      heading.appendChild(controls);
    }
    Object.assign(controls.style,{display:'flex',gap:'10px',marginLeft:'auto',alignItems:'center'});
    controls.querySelectorAll('button').forEach(btn => Object.assign(btn.style,{width:'38px',height:'38px',border:'1px solid #d9c4a8',borderRadius:'50%',background:'transparent',cursor:'pointer',fontSize:'18px',lineHeight:'1'}));

    const amount = () => Math.max(260, grid.clientWidth * .72);
    controls.querySelector('.private-prev').onclick = () => grid.scrollBy({left:-amount(),behavior:'smooth'});
    controls.querySelector('.private-next').onclick = () => grid.scrollBy({left:amount(),behavior:'smooth'});

    grid.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.shiftKey) { e.preventDefault(); grid.scrollBy({left:e.deltaY,behavior:'auto'}); }
    }, {passive:false});

    const mobile = matchMedia('(max-width:850px)');
    const resize = () => grid.querySelectorAll('.product-card').forEach(card => card.style.flex = mobile.matches ? '0 0 78%' : '0 0 calc((100% - 54px) / 4.25)');
    resize(); mobile.addEventListener?.('change', resize);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init, 150)); else setTimeout(init,150);
})();
