'use strict';
(()=>{
  const fix=()=>{
    const section=document.querySelector('#best-sellers');
    if(!section)return;
    section.querySelectorAll('a.text-link').forEach(a=>{
      a.href='/shop/?collection=perfume#collection';
      if(/view all products/i.test(a.textContent)) a.innerHTML='Explore more <span aria-hidden="true">↗</span>';
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();
