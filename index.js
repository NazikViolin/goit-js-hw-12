/* empty css                      */import{a as m,S as q,i as s}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v="57403396-8609a7cc7d5223c59879c502e",P="https://pixabay.com/api/",R=15;m.defaults.baseURL=P;async function f(t,o){const i={key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:R};return(await m.get("",{params:i})).data}const g=document.querySelector("#gallery"),p=document.querySelector("#loader"),y=document.querySelector("#load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const o=t.map(({webformatURL:i,largeImageURL:n,tags:e,likes:r,views:a,comments:w,downloads:E})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-item-title">Likes</p>
              <p>${r}</p>
            </li>
            <li class="info-item">
              <p class="info-item-title">Views</p>
              <p>${a}</p>
            </li>
            <li class="info-item">
              <p class="info-item-title">Comments</p>
              <p>${w}</p>
            </li>
            <li class="info-item">
              <p class="info-item-title">Downloads</p>
              <p>${E}</p>
            </li>
          </ul>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",o),$.refresh()}function B(){g.innerHTML=""}function L(){p.classList.add("is-visible")}function S(){p.classList.remove("is-visible")}function b(){y.classList.add("is-visible")}function c(){y.classList.remove("is-visible")}const I=document.querySelector("#search-form"),M=document.querySelector("#load-more"),A=document.querySelector("#gallery");let d="",u=1,l=0;c();I.addEventListener("submit",O);M.addEventListener("click",H);async function O(t){t.preventDefault();const o=t.target.elements.searchQuery.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}d=o,u=1,B(),c(),L();try{const i=await f(d,u);if(l=i.totalHits,i.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits),i.hits.length<l&&b(),i.hits.length>=l&&s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S(),t.target.reset()}}async function H(){u+=1,c(),L();try{const t=await f(d,u);h(t.hits),_(),document.querySelectorAll(".gallery-item").length>=l?(c(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}}function _(){const t=A.querySelector(".gallery-item");if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
