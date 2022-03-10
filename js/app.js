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

/* #Counter
  ======================================================= */
if (document.querySelector('.counter')) {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    const hours = counter.querySelector("#hours");
    const minutes = counter.querySelector("#minutes");
    const seconds = counter.querySelector("#seconds");
    const startBtn = counter.querySelector("#startBtn");
    let mySecond = 45;
    let myMinute = 30;
    let myHour = 15;
    var timer = null;

    function startTimer() {
      mySecond <= 10 ?
        (seconds.innerHTML = "0" + mySecond) :
        (seconds.innerHTML = mySecond);
      myMinute <= 10 ?
        (minutes.innerHTML = "0" + myMinute) :
        (minutes.innerHTML = myMinute);
      myHour <= 10 ? (hours.innerHTML = "0" + myHour) : (hours.innerHTML = myHour);
      timer = setInterval(() => {
        if (mySecond == 0) {
          mySecond = 60;
          if (myMinute != 0) {
            myMinute <= 10 ?
              (minutes.innerHTML = "0" + --myMinute) :
              (minutes.innerHTML = --myMinute);
          } else if (myHour != 0) {
            myHour <= 10 ?
              (hours.innerHTML = "0" + --myHour) :
              (hours.innerHTML = --myHour);
            myMinute = 60;
            minutes.innerHTML = --myMinute;
          } else {
            alert("Time's up!");
            clearInterval(timer);
            startBtn.removeAttribute("disabled");
          }
        }
        mySecond <= 10 ?
          (seconds.innerHTML = "0" + --mySecond) :
          (seconds.innerHTML = --mySecond);
      }, 1000);
    }

    startTimer();
  });
}

/* #Sticky Desktop Button Course Page
    ======================================================= */
if (document.querySelector('.course-page .sticky-button-desktop')) {
  const courseBanner = document.querySelector('.course-banner');
  const stickyButtonDesktop = document.querySelector('.sticky-button-desktop');
  document.addEventListener('scroll', (e) => {
    if (!isInViewport(courseBanner)) {
      stickyButtonDesktop.classList.add('show');
    } else {
      stickyButtonDesktop.classList.remove('show');
    }
  })
}

/* #About Page ScrollSpy
  ======================================================= */
if (document.querySelector('.about')) {
  // Handling link clicks
  const scrollSpyLinks = document.querySelectorAll('.about .scroll-spy a');
  scrollSpyLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
  
      const id = link.hash;
      let yOffset = 0;
  
      if (window.innerWidth > 1024) {
        yOffset = -100;
      } else {
        yOffset = -175;
      }
      
      const element = document.querySelector(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({top: y, behavior: 'smooth'});
    });
  });
  
  // ScrollSpy
  let section = document.querySelectorAll(".about .section");
  if (section) {
    let sections = {};
    let i = 0;
    
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
    
    window.onscroll = function() {
      let scrollPosition = 0;

      if (window.innerWidth > 1024) {
        scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 250;
      } else {
        scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) - 200;
      }

    
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.about .scroll-spy .active').setAttribute('class', ' ');
          document.querySelector('.about .scroll-spy a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };
  }
}
