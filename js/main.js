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




const menuBtn = document.querySelector('.menu-img');
if (menuBtn) {
  window.addEventListener("scroll", function () {
    const menu = document.querySelector(".fixed-menu");
    if (window.scrollY === 0) {
      menu.classList.add("top");
      menu.classList.remove("scrolled");
    } else {
      menu.classList.add("scrolled");
      menu.classList.remove("top");
    }
  });
  const fixedMenu = document.querySelector('.fixed-menu');

  menuBtn.addEventListener('click', () => {
    fixedMenu.classList.toggle('show');
  })

  window.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !fixedMenu.contains(event.target)) {
      fixedMenu.classList.remove('show');
    }
  });
}


try {
  // recommend-swiper
  let recommendSwiper = new Swiper('.recommend-swiper', {
    slidesPerView: 3.6,
    spaceBetween: 5,
    navigation: {
      nextEl: '.recommend-swiper-btn-next',
      prevEl: '.recommend-swiper-btn-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3.6,
      },
      0: {
        slidesPerView: 1,
      }
    }
  });
} catch (error) {

}

// news-swiper
try {
  let newsSwiper1 = new Swiper('.news-swiper', {
    slidesPerView: 6,
    spaceBetween: 3,
    navigation: {
      nextEl: '.news-swiper-btn-next',
      prevEl: '.news-swiper-btn-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 3.4,
      },
      0: {
        slidesPerView: 1,
      }
    }
  })
  let newsSwiper2 = new Swiper('.news-swiper-2', {
    slidesPerView: 6,
    spaceBetween: 3,
    navigation: {
      nextEl: '.news-swiper-btn-next-2',
      prevEl: '.news-swiper-btn-prev-2',
    },
    breakpoints: {
      992: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 3.4,
      },
      0: {
        slidesPerView: 1,
      }
    }
  })
  let newsSwiper3 = new Swiper('.news-swiper-3', {
    slidesPerView: 6,
    spaceBetween: 3,
    navigation: {
      nextEl: '.news-swiper-btn-next-3',
      prevEl: '.news-swiper-btn-prev-3',
    },
    breakpoints: {
      992: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 3.4,
      },
      0: {
        slidesPerView: 1,
      }
    }
  })
} catch (error) {

}
