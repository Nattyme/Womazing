!function(){"use strict";(function(){let e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iOS/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}},t=document.querySelector("body");if(e.any()){t.classList.add("touch");let e=document.querySelectorAll(".arrow");for(let t=0;t<e.length;t++){let n=e[t].previousElementSibling,a=e[t].nextElementSibling,o=e[t];n.classList.add("parent"),e[t].addEventListener("click",(function(){a.classList.toggle("open"),o.classList.toggle("active")}))}}else t.classList.add("mouse")})(),document.querySelectorAll('[data-control="tab"]').forEach((function(e){const t=document.querySelectorAll('[data-control="tab-button"]'),n=document.querySelectorAll('[data-control="tab-block"]');t.forEach((function(e,a){e.addEventListener("click",(function(){const o=e,r=document.querySelectorAll('[data-control="tab-block"]')[a];o.classList.contains("active")||(t.forEach((function(e){e.classList.remove("active")})),n.forEach((function(e){e.classList.remove("active")})),o.classList.add("active"),r.classList.add("active"))}))}))})),function(){let e=document.querySelector(".header-top--gradient-bg");e&&(window.onscroll=function(){window.scrollY>1?e.classList.remove("header-top--gradient-bg"):e.classList.add("header-top--gradient-bg")})}(),function(){const e=new Swiper(".swiperHeaderText",{autoplay:{delay:2e3,pauseOnMouseEnter:!0},spaceBetween:30,slidesPerView:1,speed:2e3,loop:!0,watchSlidesProgress:!1,pagination:{el:".swiper-pagination",clickable:!0}}),t=new Swiper(".swiperHeaderImg",{speed:2e3,loop:!0,spaceBetween:30});e.controller.control=t}(),new Swiper(".swiperAbout",{spaceBetween:30,slidesPerView:1,speed:2e3,navigation:{prevEl:".swiperAbout-button-prev",nextEl:".swiperAbout-button-next"}}),async function(){await ymaps3.ready;const{YMap:e,YMapDefaultSchemeLayer:t,YMapDefaultFeaturesLayer:n}=ymaps3,a=new e(document.getElementById("map"),{location:{center:[2.406281,48.866638],controls:["zoomControl"],zoomRange:{min:2,max:16},zoom:16}});a.addChild(new t),a.addChild(new n);const{YMapDefaultMarker:o}=await ymaps3.import("@yandex/ymaps3-markers@0.0.1"),r=new o({coordinates:[2.406281,48.866638],color:"red",title:"Womazing",subtitle:"интернет-магазин"});a.addChild(r)}()}();