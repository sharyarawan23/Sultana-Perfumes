(()=>{
const rates={QAR:1,USD:0.274725,EUR:0.2345,GBP:0.2045,AED:1.0088,SAR:1.0302,KWD:0.0839,BHD:0.1033,OMR:0.1057};
const symbols={QAR:'QAR',USD:'$',EUR:'€',GBP:'£',AED:'AED',SAR:'SAR',KWD:'KWD',BHD:'BHD',OMR:'OMR'};
let currency=localStorage.getItem('sultana-currency')||'QAR';
if(!rates[currency])currency='QAR';
const fmt=n=>{const v=n*rates[currency];return `${symbols[currency]} ${v.toLocaleString(undefined,{minimumFractionDigits:currency==='QAR'?0:2,maximumFractionDigits:2})}`};
const convertText=()=>{document.querySelectorAll('.price,.detail-price,#bag-total').forEach(el=>{if(!el.dataset.qar){const m=el.textContent.match(/QAR\\s*([\\d,.]+)/);if(m)el.dataset.qar=m[1].replace(/,/g,'')}if(el.dataset.qar)el.textContent=fmt(Number(el.dataset.qar))})};
const sync=()=>{document.querySelectorAll('#currency-select').forEach(s=>s.value=currency);convertText()};
document.addEventListener('change',e=>{if(e.target.id==='currency-select'){currency=e.target.value;localStorage.setItem('sultana-currency',currency);sync()}});
new MutationObserver(convertText).observe(document.body,{subtree:true,childList:true,characterData:true});
document.addEventListener('DOMContentLoaded',sync);
window.addEventListener('load',sync);
})();