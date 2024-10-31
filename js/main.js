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
  pagination: {
    el: '.product-info__swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
    },
    0: {
      slidesPerView: 1.2,
      centeredSlides: true,
      initialSlide: 1,
    }
  }
});

let aboutUsCardsSwiper = new Swiper('.about-us__cards-swiper', {
  slidesPerView: 3,
  spaceBetween: 6,
  pagination: {
    el: '.about-us__cards-swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      initialSlide: 1
    }
  }
});
