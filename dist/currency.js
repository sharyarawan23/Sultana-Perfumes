(()=>{
// Keep the four new perfumes available everywhere app.js is used.
try{
  if(typeof products!=='undefined'&&typeof collections!=='undefined'){
    const newPerfumes=[
      {id:'lafista',name:'Lafista',price:375,currency:'QAR',type:'perfume',size:'100 ml',collection:'Men',image:'assets/products-square/lafista.webp',page:'products/lafista/',description:'Discover Lafista from the Sultana perfume collection, presented in a signature gold-capped bottle.',name_ar:'لافيستا',description_ar:'اكتشف لافيستا من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.',description_title:'',description_title_ar:'',tagline:'',tagline_ar:''},
      {id:'one-kiss',name:'One Kiss',price:375,currency:'QAR',type:'perfume',size:'100 ml',collection:'Women',image:'assets/products-square/one-kiss.webp',page:'products/one-kiss/',description:'Discover One Kiss from the Sultana perfume collection, presented in a signature gold-capped bottle.',name_ar:'ون كيس',description_ar:'اكتشف ون كيس من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.',description_title:'',description_title_ar:'',tagline:'',tagline_ar:''},
      {id:'tobacco',name:'Tobacco',price:375,currency:'QAR',type:'perfume',size:'100 ml',collection:'Unisex',image:'assets/products-square/tobacco.webp',page:'products/tobacco/',description:'Discover Tobacco from the Sultana perfume collection, presented in a signature gold-capped bottle.',name_ar:'توباكو',description_ar:'اكتشف توباكو من مجموعة عطور سلطانة، في زجاجة مميزة بغطاء ذهبي.',description_title:'',description_title_ar:'',tagline:'',tagline_ar:''}
    ];
    for(const p of newPerfumes){if(!products.some(x=>x.id===p.id))products.push(p)}
    const sigma=products.find(p=>p.id==='sigma');
    if(sigma)Object.assign(sigma,{price:375,collection:'Women',image:'assets/products-square/sigma.webp'});
    const patchCollections=()=>{
      const uniq=a=>[...new Set(a)];
      collections.men=uniq((collections.men||[]).filter(id=>id!=='sigma').concat('lafista'));
      collections.women=uniq((collections.women||[]).concat('one-kiss','sigma'));
      collections.unisex=uniq((collections.unisex||[]).concat('tobacco'));
      collections.perfume=uniq((collections.perfume||[]).concat('lafista','one-kiss','tobacco','sigma'));
    };
    patchCollections();
    if(typeof selectedProduct!=='undefined'&&document.body.dataset.productId){selectedProduct=products.find(p=>p.id===document.body.dataset.productId)||selectedProduct}
    if(document.getElementById('products')&&typeof renderProducts==='function')renderProducts();
    if(document.body.dataset.productId==='sigma'){
      const img=document.querySelector('.product-gallery img');if(img){img.src='/assets/products-square/sigma.webp';img.alt=(document.documentElement.lang==='ar'?'سيغما':'Sigma')+' by Sultana Perfumes'}
      const dds=document.querySelectorAll('.product-specs dd');if(dds[0])dds[0].textContent=document.documentElement.lang==='ar'?'للنساء':'Women';
    }
    if(typeof renderBag==='function')renderBag();
    if(typeof updateProductWhatsApp==='function')updateProductWhatsApp();
    // shop/index.html resets gender arrays on DOMContentLoaded; re-apply after that listener.
    document.addEventListener('DOMContentLoaded',()=>{patchCollections();if(document.getElementById('products')&&typeof syncCatalogFromUrl==='function')syncCatalogFromUrl()});
  }
}catch(e){console.warn('Sultana product sync skipped',e)}

const rates={QAR:1,USD:0.274725,EUR:0.2345,GBP:0.2045,AED:1.0088,SAR:1.0302,KWD:0.0839,BHD:0.1033,OMR:0.1057};
const symbols={QAR:'QAR',USD:'$',EUR:'€',GBP:'£',AED:'AED',SAR:'SAR',KWD:'KWD',BHD:'BHD',OMR:'OMR'};
let currency=localStorage.getItem('sultana-currency')||'QAR';
if(!rates[currency])currency='QAR';
const fmt=n=>{const v=n*rates[currency];return `${symbols[currency]} ${v.toLocaleString(undefined,{minimumFractionDigits:currency==='QAR'?0:2,maximumFractionDigits:2})}`};
const convertText=()=>{document.querySelectorAll('.price,.detail-price,#bag-total').forEach(el=>{if(!el.dataset.qar){const m=el.textContent.match(/QAR\s*([\d,.]+)/);if(m)el.dataset.qar=m[1].replace(/,/g,'')}if(el.dataset.qar)el.textContent=fmt(Number(el.dataset.qar))})};
const sync=()=>{document.querySelectorAll('#currency-select').forEach(s=>s.value=currency);convertText()};
document.addEventListener('change',e=>{if(e.target.id==='currency-select'){currency=e.target.value;localStorage.setItem('sultana-currency',currency);sync()}});
new MutationObserver(convertText).observe(document.body,{subtree:true,childList:true,characterData:true});
document.addEventListener('DOMContentLoaded',sync);
window.addEventListener('load',sync);
})();