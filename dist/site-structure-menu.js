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
  if (!toggle || !menu) return;

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  });

  menu.addEventListener('click', event => event.stopPropagation());
  document.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  });
})();
