import swiperHeader from './modules/swiper.js';
import swiperAbout from './modules/swiper-about.js';
import swiperProduct from './modules/swiper-product.js';
import mobileNav from './modules//mobile-nav.js';
import fancyBox from './modules/fancybox.js';
import headerTopChange from './modules/header-bg-change.js';


headerTopChange();
mobileNav();



const path = window.location.pathname;
if (path.endsWith('index.html') || path === '/' || path === '/womazing/') {
    swiperHeader();
    swiperAbout();
}


if (window.location.href.indexOf('shop-single.html') > -1) {
  swiperProduct();
  fancyBox();
}


