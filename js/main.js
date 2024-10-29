// about-us__media-shorts-swiper
var mediaSwiper = new Swiper('.about-us__media-shorts-swiper', {
  slidesPerView: 3.8, // Ko'rinadigan slaydlar soni
  spaceBetween: 14, // Slaydlar orasidagi masofa
  centeredSlides: true, // Markaziy slayd qilish
  initialSlide: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Pagination tugmalarini bosish imkoniyati
  },
});
