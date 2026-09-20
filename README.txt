SULTANA PERFUMES — COMPLETE WEBSITE EXPORT

Included
- dist/: the complete published static website, all 14 HTML pages, CSS, JavaScript,
  logos, banners, original site assets, 13 square product photos and 3 collection photos.
- data/products.csv and data/products.json: all 13 products, QAR prices, sizes,
  collections, descriptions and image/page paths.
- data/collections.json: collection membership.
- scripts/: product-page generator.
- docs/: design notes and studio review.
- checksums.json: SHA-256 checksums for exported files.

Upload to Hostinger or another static web host
1. Extract this ZIP.
2. Upload the CONTENTS of dist/ into the domain's public_html (document root).
3. Keep the assets/ and products/ folder structure intact.
4. Visit the domain to open the website. No Node build or database is required.
5. If changing the domain, replace the current Sites domain in HTML canonical URLs,
   product structured data and scripts/generate-product-pages.py.

Local preview
Run: python3 -m http.server 8080 --directory dist
Then open http://localhost:8080
Use a web server; direct double-click/file:// opening does not support the site's
root-relative paths correctly.

Editing products
Edit data/products.json for names, prices, sizes and descriptions. Update
collection membership in data/collections.json when needed, then run:
python3 scripts/generate-product-pages.py
This regenerates the storefront catalog in dist/app.js, all product pages and
data/products.csv. Product IDs, image paths and page paths must remain aligned.
The generator validates products and requires their square photos to exist.
The homepage canonical URL is used for product-page canonical URLs and schema.

Continuation improvements
- Category and sorting choices are retained in the URL across reloads and
  browser Back/Forward navigation.
- Search includes product names, collections, types and sizes.
- Mobile menu labels reset correctly when the menu closes.
- Catalog and bag controls have larger touch targets.
- The original photographs, design, products and QAR prices are preserved.

Publishing
This is an independent copy of the supplied Sultana website.
Site address: https://sultana-perfumes.soffit-duffles9t.chatgpt.site

Current sample scope
The shopping bag is a browser-session preview. Online ordering, payment, customer
accounts and an order database are not implemented. There are no customer/order
records to export. Google Fonts loads Cardo and Montserrat from the internet;
Georgia and Arial are available as fallback fonts.

This download contains the website's published assets. Unused chat attachments and
unpublished image variants are not part of the website export.

Bilingual storefront
English pages are at / and /products/<id>/. Arabic pages are at /ar/ and
/ar/products/<id>/. The language control preserves the current page, category,
sort order and section. The same session shopping bag is used in both languages.
Edit bilingual product fields in data/products.json and shared Arabic UI text in
data/arabic-ui.json. Running scripts/generate-product-pages.py regenerates both
languages, their alternate-language metadata and the catalog CSV.
Ayla uses the supplied English and Arabic description, heading and closing line.

18 September collection update
- Hero now contains exactly three slides: Lafiesta, supplied Oud/Bakhoor banner,
  and supplied Sultana Mists banner. New banners retain their complete artwork.
- Four ingredient-based covers: Men, Women, Unisex, Luxury Home Spray.
- 22 products / 46 English and Arabic routes. Added Machmoun, Cotton Candy,
  Luban With Oud, Bakhour Hala & Ghala, Bakhour Al Sheikha, Oud Oudy, Oud Amber,
  Oud Private, and Maamoul Doha using images extracted from the supplied PDFs.
- New spray sizes are 300 ml. No prices or incense weights were supplied;
  prices are null, unknown weights omitted, and unpriced items are view-only.
- Unisex is present with a coming-soon state pending the owner's product list.
  Existing perfume category assignments are unchanged.
- Bakhoor has its own homepage section, reached from the banner and footer.
