(() => {
  const nav = document.getElementById('main-navigation');
  if (!nav || document.documentElement.lang === 'ar') return;
  nav.innerHTML = `
    <a href="/">Home</a>
    <a href="/shop/?collection=perfume#collection">Perfumes</a>
    <a href="/room-sprays/">Luxury Spray</a>
    <a href="/oud-bakhoor/">Oud &amp; Bakhoor</a>
    <a href="/contact/">Contact</a>
    <div class="nav-group">
      <button aria-expanded="false" aria-controls="collections-menu" id="collections-toggle">More <span aria-hidden="true">⌄</span></button>
      <div id="collections-menu" hidden>
        <a href="/products/discovery-set/">Discovery Set</a>
        <a href="/shop/?collection=gift#collection">Gifts &amp; Packaging</a>
        <a href="/wedding-events/">Weddings</a>
        <a href="/hospitality/">Hospitality</a>
        <a href="/business-corporate/">B2B &amp; Corporate</a>
        <a href="/shop/?collection=gift-voucher#collection">Gift Voucher</a>
        <a href="/our-story/">Our Story</a>
      </div>
    </div>`;

  const toggle = nav.querySelector('#collections-toggle');
  const menu = nav.querySelector('#collections-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });
  }
})();
