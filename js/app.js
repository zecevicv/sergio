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

/* #Blog Slider
  ======================================================= */
  const blogSliders = document.querySelectorAll('.blog-slider');

  if (blogSliders) {
    blogSliders.forEach((blogSlider) => {
      const sliderEl = blogSlider.querySelector('.swiper');
      const sliderPagination = blogSlider.querySelector('.swiper-pagination');
  
      new Swiper(sliderEl, {
        breakpoints: {
          0: {
            slidesPerView: 1.128
          },
          1024: {
            slidesPerView: 3.25
          },
        },
        pagination: {
          el: sliderPagination,
          type: "progressbar",
        },
        
      });
  
  
    });
  }