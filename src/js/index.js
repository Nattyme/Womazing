import swiperHeader from './modules/swiper.js';
import swiperAbout from './modules/swiper-about.js';
import swiperProduct from './modules/swiper-product.js';
import mobileNav from './modules//mobile-nav.js';
import fancyBox from './modules/fancybox.js';
import headerTopChange from './modules/header-bg-change.js';


headerTopChange();
mobileNav();



const pathname = window.location.pathname; // /womazing/index.html или /index.html
const filename = pathname.substring(pathname.lastIndexOf('/') + 1); // получаем "index.html" или ""

if (filename === '' || filename === 'index.html') {
    swiperHeader();
    swiperAbout();
}

if (window.location.href.indexOf('shop-single.html') > -1) {
  swiperProduct();
  fancyBox();
}


