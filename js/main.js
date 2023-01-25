function sld() {
  const sliderRecommended = new Swiper('.company-park__container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.company-park__arrow_next.swiper-button-next',
      prevEl: '.company-park__arrow_prev.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1100: {
        spaceBetween: 30,
      }
    },
  });
}

sld();
