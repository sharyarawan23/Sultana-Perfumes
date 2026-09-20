"""Generate fully translated static Arabic routes and paired language links."""
from pathlib import Path
from html.parser import HTMLParser
from html import escape
import json,re
root=Path(__file__).resolve().parents[1]
dist=root/'dist'
ui=json.loads((root/'data/arabic-ui.json').read_text())
products=json.loads((root/'data/products.json').read_text())
for p in products:
    ui[p['name']]=p['name_ar']
    ui[p['description']]=p['description_ar']
    for field in ('description_title','tagline'):
        if p[field]:ui[p[field]]=p[field+'_ar']
    ui[p['name']+' — Sultana Perfumes']=p['name_ar']+' — سلطانة للعطور'
    for size in ('100 ml','300 ml'):
        ui[p['name']+' by Sultana, '+size]=p['name_ar']+' من سلطانة، '+ui[size]
    ui[p['name']+' by Sultana Perfumes']=p['name_ar']+' من سلطانة للعطور'
    ui['View '+p['name']]='عرض '+p['name_ar']
    ui['Add '+p['name']+' to bag']='أضف '+p['name_ar']+' إلى الحقيبة'
for p in products:
    if p['size']:ui[p['type']+' · '+p['size']]=ui[p['type']]+' · '+ui.get(p['size'],p['size'])
ui['Perfume · 100 ml']='عطر · ١٠٠ مل'
ui['Luxury Home Spray · 300 ml']='معطر منزلي فاخر · ٣٠٠ مل'

def translate(value):
    stripped=value.strip()
    if stripped in ui:return value.replace(stripped,ui[stripped])
    if re.fullmatch(r'QAR [\d,.]+',stripped):return stripped[4:]+' ر.ق'
    return value

class Arabic(HTMLParser):
    def __init__(self,origin,route,product):
        super().__init__(convert_charrefs=True);self.output=[];self.origin=origin;self.route=route;self.product=product;self.in_schema=False
    def handle_starttag(self,tag,attrs):
        d=dict(attrs);raw=self.get_starttag_text()
        updates={}
        if tag=='html':updates.update(lang='ar',dir='rtl')
        for key in ('alt','aria-label','placeholder'):
            if key in d:updates[key]=translate(d[key])
        if tag=='a' and d.get('id')=='language-switch':
            updates.update(href=self.route,lang='en',hreflang='en',**{'aria-label':'Switch to English'})
        elif tag=='a' and d.get('href','').startswith('/') and not d['href'].startswith('/assets/'):
            updates['href']='/ar'+d['href']
        if tag=='link' and d.get('rel')=='canonical':updates['href']=self.origin+'/ar'+self.route
        if tag=='meta' and d.get('name')=='description':
            updates['content']=(self.product['description_ar'] if self.product else 'اكتشف عطور سلطانة ومعطرات المنزل الفاخرة والعود والبخور واللبان في قطر.')
        for key,value in updates.items():
            pattern=r'(\s'+re.escape(key)+r'\s*=\s*)([\"\'])(.*?)\2'
            if re.search(pattern,raw,re.I|re.S):raw=re.sub(pattern,lambda m:m[1]+'"'+escape(value,quote=True)+'"',raw,flags=re.I|re.S)
            else:raw=raw[:-1]+' '+key+'="'+escape(value,quote=True)+'">'
        self.in_schema=tag=='script' and d.get('type')=='application/ld+json'
        self.output.append(raw)
    def handle_startendtag(self,tag,attrs):self.handle_starttag(tag,attrs)
    def handle_endtag(self,tag):
        if tag=='script':self.in_schema=False
        self.output.append('</'+tag+'>')
    def handle_data(self,data):
        if self.in_schema:
            schema=json.loads(data);schema.update(name=self.product['name_ar'],description=self.product['description_ar'],inLanguage='ar');self.output.append(json.dumps(schema,ensure_ascii=False).replace('<','\\u003c'))
        else:self.output.append('English' if data=='العربية' else escape(translate(data),quote=False))
    def handle_entityref(self,name):self.output.append('&'+name+';')
    def handle_charref(self,name):self.output.append('&#'+name+';')
    def handle_decl(self,decl):self.output.append('<!'+decl+'>')
    def handle_comment(self,data):self.output.append('<!--'+data+'-->')

paths=[dist/'index.html',*[dist/route/'index.html' for route in ('shop','room-sprays','oud-bakhoor','wedding-events','business-corporate')],*sorted((dist/'products').glob('*/index.html'))]
for path in paths:
    text=path.read_text()
    route='/'+str(path.relative_to(dist)).removesuffix('index.html')
    origin=re.search(r'<link rel="canonical" href="(https://[^/]+)',text).group(1)
    text=re.sub(r'<link rel="alternate"[^>]+>','',text)
    alternate=''.join(f'<link rel="alternate" hreflang="{lang}" href="{origin}{prefix}{route}">' for lang,prefix in [('en',''),('ar','/ar'),('x-default','')])
    text=text.replace('</head>',alternate+'</head>')
    text=re.sub(r'(<a class="language-switch" id="language-switch" href=")[^"]+',lambda m:m[1]+'/ar'+route,text)
    path.write_text(text)
    product=next((p for p in products if route=='/'+p['page']),None)
    parser=Arabic(origin,route,product);parser.feed(text)
    output=dist/'ar'/path.relative_to(dist);output.parent.mkdir(parents=True,exist_ok=True);output.write_text(''.join(parser.output))
print(f'Generated {len(paths)} Arabic pages with paired English/Arabic navigation.')
