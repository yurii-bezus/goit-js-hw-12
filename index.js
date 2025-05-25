import{a as f,S as p,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="50348687-5aaca11934b8ceb1ae22977b7";async function y(n){const r={key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a");function L(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
    <li>
      <a href="${s}">
        <img src="${o}" alt="${e}" />
      </a>
      <div>
        <p>👍 ${t}</p>
        <p>👁️ ${i}</p>
        <p>💬 ${u}</p>
        <p>⬇️ ${d}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async n=>{n.preventDefault();const r=n.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}S(),b();try{const o=await y(r);o.hits.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}catch(o){console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
