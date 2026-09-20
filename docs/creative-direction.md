# Sultana — an editorial fragrance house

## Direction
A warm, tactile expression of Sultana, following the supplied ivory, black and antique-gold references. The existing bilingual mark stays centered on white. Travertine, glass, amber liquid, cream silk and deep walnut photography build the atmosphere. The real product catalog remains the source of truth: ten 100 ml perfumes and three 300 ml room sprays, priced QAR 100–400 in the sample store.

## Visual system
- Ink #171612, paper #fffdfa, ivory #f8f5ef and antique gold #927043.
- Cardo for expressive editorial headings; Montserrat for navigation and product information.
- Square product frames preserve the full bottle silhouette. Generous section rhythm, fine rules, restrained square buttons and small gold accents connect the compositions.
- The three new campaign images preserve existing Sultana bottle designs. Product detail and catalog images use separate square photographic edits based on each original supplied bottle. Full cap, base, original colors and labels are preserved; the scene extends to every edge.

## Journey
1. Centered brand introduction and a cinematic hero with a direct product or collection link.
2. Four concise facts establish product sizes and the sample catalog.
3. Women, Men and Luxury Home Spray offer clear ways into the catalog.
4. The complete collection supports filtering, sorting, individual product pages and adding to the preview bag.
5. A dark Vanilla Elixir editorial moment creates a quieter emotional transition.
6. Home fragrance provides a focused second shopping route.
7. A final collection CTA resolves the journey; the footer clearly explains the sample status.

## Depth and motion
The spatial system is photographic: physical materials and lighting live in the imagery, while restrained image-plane rotation supplies interactive depth. No simulated product geometry or heavy 3D model is shipped.
- Four hero slides crossfade over 1 second on a 3-second interval. Previous/next, direct selection, swipe and pause controls are available.
- Product images use a restrained 1.5% hover scale, keeping their square photographs edge-to-edge.
- Buttons move by a few pixels toward the pointer.
- The Vanilla Elixir editorial banner keeps its complete image inside a fixed frame, with no zoom or parallax.
- Section entrances use 24px travel and 900ms easing.
- Reduced-motion preference disables the animated effects and starts the carousel paused. Hero links pause automatic advance while keyboard focus is inside the active slide.
- The native cursor, page scroll and product navigation stay familiar.

## Maintenance
Static output lives in dist. Shared header/footer edits start in dist/index.html; scripts/generate-product-pages.py copies the shell to the thirteen product routes and sets unique titles, descriptions, canonical URLs and Product structured data. Catalog data and interactions live in dist/app.js; the visual system is in dist/style.css. No runtime dependencies were added.

## Square image system
The catalog uses thirteen independent 1:1 photographs from assets/products-square. Three independently designed 1:1 collection photographs live in assets/collections-square. Frames no longer use edge masks or portrait-image side fills. On mobile, collection cards form a native horizontal swipe row, while products retain their two-column square layout.
