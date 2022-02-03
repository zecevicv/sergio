/* #Header
  ======================================================= */
// Top Slider
if (document.querySelector('.header .top .swiper')) {
  new Swiper(".header .top .swiper", {
    loop: true,
    navigation: {
      nextEl: ".header .top .next",
      prevEl: ".header .top .prev",
    },
  });
}

/* #Home Banner 4
  ======================================================= */
if (document.querySelector('.home-banner-4 .swiper')) {
  new Swiper(".home-banner-4 .swiper", {
    loop: true,
    navigation: {
      nextEl: ".home-banner-4 .next",
      prevEl: ".home-banner-4 .prev",
    },
  });
}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});