function swiperHeader () {

  const swiperHeaderText = new Swiper(".swiperHeaderText", {
    slidesPerView: 1,
    speed: 2000,
    loop: true,
    watchSlidesProgress: false,
    pagination: {
      el: ".swiperHeaderText-pagination",
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {           // added
      crossFade: true     // added(resolve the overlapping of the slides)
    },  
  });

  const swiperHeaderImg = new Swiper(".swiperHeaderImg", {
    speed: 2000,
    loop: true,
    effect: 'fade',
    fadeEffect: {           // added
      crossFade: true     // added(resolve the overlapping of the slides)
    },  
    

  
  });

  swiperHeaderText.controller.control = swiperHeaderImg;

}

export default swiperHeader;
