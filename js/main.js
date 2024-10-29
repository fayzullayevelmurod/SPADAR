// about-us__media-shorts-swiper
let mediaSwiper = new Swiper('.about-us__media-shorts-swiper', {
  slidesPerView: 3.8,
  spaceBetween: 14,
  centeredSlides: true,
  initialSlide: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let productSwiper = new Swiper('.product-info__swiper', {
  slidesPerView: 1,
  spaceBetween: 14,
  navigation: {
    nextEl: '.product-swiper-btn-next',
    prevEl: '.product-swiper-btn-prev',
  },
});
