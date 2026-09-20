"""Build English/Arabic pages and browser catalog from the product data."""
from pathlib import Path
import html,json,re,csv,subprocess,sys,math
root=Path(__file__).resolve().parents[1];dist=root/'dist'
records=json.loads((root/'data/products.json').read_text())
collection_data=json.loads((root/'data/collections.json').read_text())
types={'Signature Bakhoor':'signature','Bakhoor Burner':'burner','Gift Set':'gift','Perfume':'perfume','Luxury Home Spray':'home','Bakhoor':'bakhoor','Oud':'oud','Loban':'loban'}
assert records and len({p['id'] for p in records})==len(records)
for p in records:
    assert re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',p['id'])
    assert p['price'] is None or type(p['price']) in (int,float) and math.isfinite(p['price']) and p['price']>0
    assert p['currency']=='QAR' and p['type'] in types
    assert re.fullmatch(r'assets/[a-z0-9/-]+\.webp',p['image']) and (dist/p['image']).is_file()
    assert p['page']=='products/'+p['id']+'/' and p['id'] in collection_data[p['collection']]
assert all(id in {p['id'] for p in records} for members in collection_data.values() for id in members)
products=[{**p,'type':types[p['type']]} for p in records]
collections={key:collection_data[label] for key,label in [('men','Men'),('women','Women'),('unisex','Unisex'),('home','Luxury Home Spray'),('bakhoor','Oud, Bakhoor & Loban')]}
collections['signature']=collection_data['Signature Collection']
collections['gift']=collection_data['Gift Sets']
collections['perfume']=[p['id'] for p in products if p['type']=='perfume']
source=(dist/'app.js').read_text()
source=re.sub(r'const products=.*?;\nconst money=',lambda _:'const products='+json.dumps(products,ensure_ascii=False)+';\nconst money=',source,count=1,flags=re.S)
source=re.sub(r'const collections=.*?;\nconst requestedCollection=',lambda _:'const collections='+json.dumps(collections,ensure_ascii=False)+';\nconst requestedCollection=',source,count=1,flags=re.S)
(dist/'app.js').write_text(source)
with (root/'data/products.csv').open('w',newline='') as f:
    w=csv.DictWriter(f,fieldnames=list(records[0]),lineterminator='\n');w.writeheader();w.writerows(records)
home=(dist/'index.html').read_text();origin=re.search(r'<link rel="canonical" href="([^"]+)"',home).group(1).rstrip('/')
prefix=home.split('<main>',1)[0];suffix=home.split('</main>',1)[1]
e=lambda value:html.escape(str(value),quote=True)
price=lambda p:'QAR '+format(p['price'],'g') if p['price'] is not None else 'Price to be confirmed'
def card(p):
    url='/'+p['page'];name=e(p['name']);image='/'+p['image'];size=' · '+e(p['size']) if p['size'] else ''
    action=(f'<button class="card-add" data-add-product="{p["id"]}" aria-label="Add {name} to bag">Add to Bag</button>')
    portrait=' portrait-product' if p['id'] in ('machmoun','cotton-candy') else ''
    return f'<article class="product-card"><div class="product-image{portrait}"><a class="product-photo-link" href="{url}" aria-label="View {name}"><img src="{image}" alt="{name} by Sultana Perfumes" loading="lazy" width="1024" height="1024"></a><a class="product-quick" href="{url}">Discover Fragrance</a></div><h3><a href="{url}">{name}</a></h3><p class="type">{e(p["type"])}{size}</p><p class="price">{price(p)}</p>{action}</article>'
for p in records:
    name=e(p['name']);url='/'+p['page'];description=e(p['description']);size=' · '+e(p['size']) if p['size'] else ''
    related=[x for x in records if x['id']!=p['id'] and x['type']==p['type']]+[x for x in records if x['type']!=p['type']]
    head=re.sub(r'<title>.*?</title>',lambda _:f'<title>{name} — Sultana Perfumes</title>',prefix)
    head=re.sub(r'<meta name="description" content="[^"]*">',lambda _:f'<meta name="description" content="{description}">',head)
    head=re.sub(r'<link rel="canonical" href="[^"]*">',lambda _:f'<link rel="canonical" href="{origin}{url}">',head)
    head=head.replace('<body>',f'<body data-product-id="{p["id"]}">')
    heading=f'<h2 class="description-heading">{e(p["description_title"])}</h2>' if p['description_title'] else ''
    tagline=f'<p class="product-tagline">{e(p["tagline"])}</p>' if p['tagline'] else ''
    specs=f'<div><dt>Size</dt><dd>{e(p["size"])}</dd></div>' if p['size'] else ''
    purchase='<div class="purchase-row"><div class="quantity" role="group" aria-label="Quantity"><button data-quantity="-1" aria-label="Decrease quantity">−</button><output id="quantity" aria-live="polite">1</output><button data-quantity="1" aria-label="Increase quantity">+</button></div><button class="button" id="add-to-bag">Add to Bag</button></div><a class="button whatsapp-order" id="product-whatsapp" href="https://wa.me/97433901711" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a><p class="sample-note">Confirm your order and delivery details on WhatsApp.</p>'
    portrait=' portrait-product' if p['id'] in ('machmoun','cotton-candy') else ''
    body=f'''<main class="product-page" id="main-content"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/#collection">Collection</a><span aria-hidden="true">/</span><span aria-current="page">{name}</span></nav>
<section class="product-overview" aria-labelledby="product-title"><div class="product-gallery{portrait}"><img src="/{p['image']}" alt="{name} by Sultana Perfumes" width="1024" height="1024" fetchpriority="high"></div><div class="product-info"><p class="eyebrow">SULTANA PERFUMES</p><h1 id="product-title">{name}</h1><p class="detail-type">{e(p['type'])}{size}</p><p class="detail-price">{price(p)}</p>{heading}<p class="product-description">{description}</p>{tagline}<dl class="product-specs"><div><dt>Collection</dt><dd>{e(p['collection'])}</dd></div>{specs}</dl>{purchase}</div></section><section class="related-products" aria-labelledby="related-title"><div class="related-heading"><h2 id="related-title">You may also like</h2><a href="/#collection">View all products</a></div><div class="product-grid">{''.join(card(x) for x in related[:4])}</div></section></main>'''
    schema={'@context':'https://schema.org','@type':'Product','name':p['name'],'description':p['description'],'image':origin+'/'+p['image'],'brand':{'@type':'Brand','name':'Sultana Perfumes'}}
    if p['size']:schema['size']=p['size']
    out=dist/p['page']/'index.html';out.parent.mkdir(parents=True,exist_ok=True)
    out.write_text(head+body+'<script type="application/ld+json">'+json.dumps(schema,ensure_ascii=False).replace('<','\\u003c')+'</script>'+suffix)
print(f'Generated {len(records)} product pages.')
subprocess.run([sys.executable,str(root/'scripts/generate-section-pages.py')],check=True)
subprocess.run([sys.executable,str(root/'scripts/generate-arabic-pages.py')],check=True)
