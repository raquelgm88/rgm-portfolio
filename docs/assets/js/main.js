const repeat=!1,noArrows=!1,noBullets=!1,container=document.querySelector(".js_projects__container");let slide=document.querySelectorAll(".js_projects__container_all-one"),slideTotal=slide.length-1,slideCurrent=-1;function initBullets(){const e=document.createElement("div");e.classList.add("projects__container_bulletContainer"),slide.forEach((s,t)=>{const i=document.createElement("div");i.classList.add("projects__container_bulletContainer-bullet"),i.id="bullet-index-"+t,i.addEventListener("click",()=>{goToIndexSlide(t)}),e.appendChild(i),s.classList.add("proactivede")}),container.appendChild(e)}function initArrows(){const e=document.createElement("a"),s=document.createElement("i");s.classList.add("fa"),s.classList.add("fa-arrow-left"),e.classList.add("slider-left"),e.appendChild(s),e.addEventListener("click",()=>{slideLeft()});const t=document.createElement("a"),i=document.createElement("i");i.classList.add("fa"),i.classList.add("fa-arrow-right"),t.classList.add("slider-right"),t.appendChild(i),t.addEventListener("click",()=>{slideRight()}),container.appendChild(e),container.appendChild(t)}function slideInitial(){initBullets(),initArrows(),setTimeout((function(){slideRight()}),500)}function updateBullet(){document.querySelector(".projects__container_bulletContainer").querySelectorAll(".projects__container_bulletContainer-bullet").forEach((e,s)=>{e.classList.remove("active"),s===slideCurrent&&e.classList.add("active")}),checkRepeat()}function checkRepeat(){slideCurrent===slide.length-1?(slide[0].classList.add("not-visible"),slide[slide.length-1].classList.remove("not-visible"),document.querySelector(".slider-right").classList.add("not-visible"),document.querySelector(".slider-left").classList.remove("not-visible")):0===slideCurrent?(slide[slide.length-1].classList.add("not-visible"),slide[0].classList.remove("not-visible"),document.querySelector(".slider-left").classList.add("not-visible"),document.querySelector(".slider-right").classList.remove("not-visible")):(slide[slide.length-1].classList.remove("not-visible"),slide[0].classList.remove("not-visible"),document.querySelector(".slider-left").classList.remove("not-visible"),document.querySelector(".slider-right").classList.remove("not-visible"))}function slideRight(){if(slideCurrent<slideTotal?slideCurrent++:slideCurrent=0,slideCurrent>0)var e=slide[slideCurrent-1];else e=slide[slideTotal];var s=slide[slideCurrent];if(slideCurrent<slideTotal)var t=slide[slideCurrent+1];else t=slide[0];slide.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),e.classList.remove("preactivede"),e.classList.remove("active"),e.classList.remove("proactive"),e.classList.remove("proactivede"),e.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),t.classList.remove("preactivede"),t.classList.remove("preactive"),t.classList.remove("active"),t.classList.remove("proactivede"),t.classList.add("proactive"),updateBullet()}function slideLeft(){if(slideCurrent>0?slideCurrent--:slideCurrent=slideTotal,slideCurrent<slideTotal)var e=slide[slideCurrent+1];else e=slide[0];var s=slide[slideCurrent];if(slideCurrent>0)var t=slide[slideCurrent-1];else t=slide[slideTotal];slide.forEach(e=>{var s=e;s.classList.contains("proactive")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("proactivede")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),t.classList.remove("preactivede"),t.classList.remove("active"),t.classList.remove("proactive"),t.classList.remove("proactivede"),t.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),e.classList.remove("preactivede"),e.classList.remove("preactive"),e.classList.remove("active"),e.classList.remove("proactivede"),e.classList.add("proactive"),updateBullet()}function goToIndexSlide(e){const s=slideCurrent>e?()=>slideRight():()=>slideLeft();for(;slideCurrent!==e;)s()}function isVisible(e){var s=e.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(s.bottom<0||s.top-t>=0)}slideInitial(),window.addEventListener("DOMContentLoaded",e=>{window.addEventListener("scroll",e=>{document.querySelectorAll(".paused").forEach(e=>{isVisible(e)&&e.classList.remove("paused")})})});