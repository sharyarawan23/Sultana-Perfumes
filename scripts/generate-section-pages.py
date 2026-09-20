"""Generate dedicated Shop, Room Spray and Oud/Bakhoor landing pages."""
from pathlib import Path
import re
root=Path(__file__).resolve().parents[1];d=root/'dist';t=root/'scripts/templates';home=(d/'index.html').read_text();prefix=home.split('<main>',1)[0];suffix=home.split('</main>',1)[1];catalog=(t/'catalog.html').read_text()
def heading(eyebrow,title,link,label):return f'<div class="section-heading"><div><p class="eyebrow">{eyebrow}</p><h2>{title}</h2></div><a class="text-link" href="{link}">{label} <span aria-hidden="true">↗</span></a></div>'
def category_cards(kind):
 if kind=='spray':
  data=[('HOME','A fresher, warmer space.','home'),('CAR','A luxurious drive.','car'),('CLOTHES & LINEN','Lasting freshness.','clothes'),('ROOM & SPA','A relaxing atmosphere.','spa')];title='One Mist. Many Moments.';eyebrow='SHOP BY USE';url='/room-sprays/#collection'
 else:
  data=[('Oud','Rare. Pure. Majestic.','oud'),('Bakhoor','Fill your space with warmth.','bakhoor'),('Loban','A fragrant tradition.','loban'),('Bakhoor Burner','Complete your fragrance ritual.','burner')];title='The art of home fragrance.';eyebrow='SHOP BY CATEGORY';url='/oud-bakhoor/#collection'
 cards=[]
 for label,copy,id in data:
  target=url if kind=='spray' else '/oud-bakhoor/?type='+id+'#collection'
  art=f'<span class="use-cover use-{id}" aria-hidden="true"></span>' if kind=='spray' else f'<img src="/assets/collection-notes/{dict(oud="men",bakhoor="bakhoor",loban="loban",burner="bakhoor")[id]}.webp" alt="" loading="lazy">'
  if id=='burner':art='<img src="/assets/new-products/bakhoor-burner-hd.webp" alt="" loading="lazy">'
  cards.append(f'<a class="category-card" href="{target}">{art}<div><h3>{label}</h3><p>{copy}</p><span>Shop now <b aria-hidden="true">↗</b></span></div></a>')
 return '<section class="section-shell department-categories">'+heading(eyebrow,title,url,'View all')+'<div class="category-section '+''+'">'+''.join(cards)+'</div></section>'
for route,title,department in [('shop','All Fragrances',''),('room-sprays','Luxury Home Spray','home'),('oud-bakhoor','Oud & Bakhoor','incense')]:
 head=re.sub(r'<title>.*?</title>',lambda _:f'<title>{title} — Sultana Perfumes</title>',prefix)
 head=re.sub(r'(<link rel="canonical" href="https://[^/]+)[^"]*',lambda m:m[1]+'/'+route+'/',head)
 if department:head=head.replace('<body>',f'<body data-department="{department}">')
 grid=catalog
 if department:
  grid=re.sub(r'<div class="filters".*?</div>','',grid,flags=re.S)
  grid=grid.replace('ALL FRAGRANCES','OUR MISTS COLLECTION' if department=='home' else 'OUD & BAKHOOR').replace('Explore the collection.','Signature Mists' if department=='home' else 'Oud &amp; Bakhoor').replace('<span id="catalog-count" class="collection-count">28 expressions. One Sultana.</span>','')
  banner=(t/('spray-banner.html' if department=='home' else 'oud-banner.html')).read_text()
  banner=banner.replace('<h2','<h1').replace('</h2>','</h1>').replace('href="/'+route+'/"','href="#collection"')
  signature='<section class="section-shell" id="signature-section">'+heading('SIGNATURE COLLECTION','Our Signature Collection','/shop/?collection=signature#collection','View more')+'<div id="signature-products" class="product-grid signature-grid"></div></section>' if department=='incense' else ''
  main=banner+category_cards('spray' if department=='home' else 'incense')+signature+grid
 else:
  grid=grid.replace('<h2 id="catalog-title">Explore the collection.</h2>','<h1 id="catalog-title">Explore the collection.</h1>');main=grid
 if route=='room-sprays':main+=(t/'tester-banner.html').read_text()
 out=d/route/'index.html';out.parent.mkdir(exist_ok=True);out.write_text(head+'<main id="main-content">'+main+'</main>'+suffix)
print('Generated dedicated Shop, Room Spray and Oud/Bakhoor pages.')

for route,title,copy,arabic_title,arabic_copy in [
 ('wedding-events','Wedding & Events','Explore fragrance gifts for weddings and special occasions.','الأعراس والمناسبات','اكتشف هدايا العطور للأعراس والمناسبات الخاصة.'),
 ('business-corporate','Business/Corporate','Explore Sultana fragrance gifts for colleagues, clients and business occasions.','الأعمال والشركات','اكتشف هدايا عطور سلطانة للزملاء والعملاء ومناسبات الشركات.')]:
 head=re.sub(r'<title>.*?</title>',lambda _:f'<title>{title} — Sultana Perfumes</title>',prefix)
 head=re.sub(r'(<link rel="canonical" href="https://[^/]+)[^"]*',lambda m:m[1]+'/'+route+'/',head)
 main=f'<section class="section-shell occasion-page"><p class="eyebrow">SULTANA PERFUMES</p><h1>{title}</h1><p>{copy}</p><a class="button" href="/shop/?collection=gift#collection">Explore Gift Sets</a></section>'
 out=d/route/'index.html';out.parent.mkdir(exist_ok=True);out.write_text(head+'<main id="main-content">'+main+'</main>'+suffix)
