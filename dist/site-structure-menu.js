(() => {
  const nav = document.getElementById('main-navigation');
  if (nav && document.documentElement.lang !== 'ar') {
    nav.innerHTML = `
      <a href="/">Home</a>
      <a href="/shop/?collection=perfume#collection">Perfumes</a>
      <a href="/room-sprays/">Luxury Spray</a>
      <a href="/oud-bakhoor/">Oud &amp; Bakhoor</a>
      <a href="/contact/">Contact</a>
      <div class="nav-group">
        <button type="button" aria-expanded="false" aria-controls="collections-menu" id="collections-toggle">More <span aria-hidden="true">⌄</span></button>
        <div id="collections-menu" hidden>
          <a href="/discovery-set/">Discovery Set</a>
          <a href="/gift/">Gift</a>
          <a href="/wedding/">Wedding</a>
          <a href="/hospitality/">Hospitality</a>
          <a href="/b2b/">B2B</a>
          <a href="/gift-voucher/">Gift Voucher</a>
          <a href="/our-story/">Our Story</a>
        </div>
      </div>`;

    const toggle = nav.querySelector('#collections-toggle');
    const menu = nav.querySelector('#collections-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', (event) => {
        event.preventDefault(); event.stopPropagation();
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen)); menu.hidden = isOpen;
      });
      menu.addEventListener('click', event => event.stopPropagation());
      document.addEventListener('click', () => { toggle.setAttribute('aria-expanded','false'); menu.hidden = true; });
    }
  }

  const params = new URLSearchParams(location.search);
  const collection = params.get('collection');
  if (['women','men','unisex'].includes(collection)) {
    const section = document.getElementById('collection');
    if (section && !document.querySelector('.collection-back-link')) {
      const back = document.createElement('a');
      back.className = 'collection-back-link';
      back.href = '/shop/?collection=perfume#perfume-category-cards';
      back.innerHTML = '<span aria-hidden="true">←</span> Back to Perfume Collections';
      back.style.cssText = 'display:inline-flex;align-items:center;gap:10px;margin:0 0 28px;color:inherit;text-decoration:none;font-size:13px;letter-spacing:.08em;text-transform:uppercase;';
      section.insertBefore(back, section.firstChild);
    }
  }

  if (location.pathname === '/oud-bakhoor/' && !document.getElementById('incense-category-collections')) {
    const privateCollection = document.getElementById('private-collection');
    const hero = document.querySelector('main > .banner-link');
    if (privateCollection && hero) {
      const categories = document.createElement('section');
      categories.id = 'incense-category-collections';
      categories.className = 'section-shell department-categories';
      categories.innerHTML = `
        <div class="section-heading"><div><p class="eyebrow">SHOP BY CATEGORY</p><h2>The art of home fragrance.</h2></div></div>
        <div class="category-section">
          <a class="category-card" href="/oud-bakhoor/?type=oud#collection"><img src="/assets/collection-notes/men.webp" alt="Oud" loading="lazy"><div><h3>Oud</h3><p>Rare. Pure. Luxurious.</p><span>Shop Now <b aria-hidden="true">↗</b></span></div></a>
          <a class="category-card" href="/oud-bakhoor/?type=bakhoor#collection"><img src="/assets/collection-notes/bakhoor.webp" alt="Bakhoor" loading="lazy"><div><h3>Bakhoor</h3><p>Fill your space with warmth.</p><span>Shop Now <b aria-hidden="true">↗</b></span></div></a>
          <a class="category-card" href="/oud-bakhoor/?type=loban#collection"><img src="/assets/collection-notes/loban.webp" alt="Luban" loading="lazy"><div><h3>Luban</h3><p>Fragrant heritage.</p><span>Shop Now <b aria-hidden="true">↗</b></span></div></a>
        </div>`;
      hero.insertAdjacentElement('afterend', categories);
    }
  }
})();
