(()=>{
const rates={QAR:1,USD:0.274725,EUR:0.2345,GBP:0.2045,AED:1.0088,SAR:1.0302,KWD:0.0839,BHD:0.1033,OMR:0.1057,TND:0.812908,MAD:2.63508};
const symbols={QAR:'QAR',USD:'$',EUR:'€',GBP:'£',AED:'AED',SAR:'SAR',KWD:'KWD',BHD:'BHD',OMR:'OMR',TND:'TND',MAD:'MAD'};
let currency=localStorage.getItem('sultana-currency')||'QAR';
if(!rates[currency])currency='QAR';
const ensureOptions=()=>{document.querySelectorAll('#currency-select').forEach(s=>{if(!s.querySelector('option[value="TND"]'))s.insertAdjacentHTML('beforeend','<option value="TND">🇹🇳 TND</option>');if(!s.querySelector('option[value="MAD"]'))s.insertAdjacentHTML('beforeend','<option value="MAD">🇲🇦 MAD</option>')})};
const fmt=n=>{const v=n*rates[currency];return `${symbols[currency]} ${v.toLocaleString(undefined,{minimumFractionDigits:currency==='QAR'?0:2,maximumFractionDigits:2})}`};
const priceSelectors='.price,.detail-price,#bag-total,.cart-total,.cart-subtotal,.subtotal,.total,[data-price-display],[data-money]';
const captureQar=el=>{if(el.dataset.qar)return;const m=el.textContent.match(/QAR\s*([\d,.]+)/i);if(m)el.dataset.qar=m[1].replace(/,/g,'')};
const convertText=()=>{document.querySelectorAll(priceSelectors).forEach(el=>{captureQar(el);if(el.dataset.qar){const next=fmt(Number(el.dataset.qar));if(el.textContent!==next)el.textContent=next}})};
const sync=()=>{ensureOptions();document.querySelectorAll('#currency-select').forEach(s=>s.value=currency);convertText()};
document.addEventListener('change',e=>{if(e.target.id==='currency-select'){currency=e.target.value;localStorage.setItem('sultana-currency',currency);sync()}});
new MutationObserver(convertText).observe(document.body,{subtree:true,childList:true});
document.addEventListener('DOMContentLoaded',sync);
window.addEventListener('load',sync);
window.SultanaCurrency={formatQAR:fmt,get:()=>currency,refresh:sync};
})();