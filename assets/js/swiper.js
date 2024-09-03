const swiper1 = new Swiper('.sec1-Swiper', {
   slidesPerView: 1,
   loop:true,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
   768: {
      slidesPerView: 1.2,
      spaceBetween: 40,
      centeredSlides:true,
      pagination: {
      el: ".swiper-pagination",
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
   }
   }
});

const swiper2 = new Swiper('.sec2-Swiper', {
   slidesPerView: 1.1,
   spaceBetween: 24,
   loop:true,
   pagination: {
      el: ".swiper-pagination",
   },
});

const swiper3 = new Swiper('.sec3-Swiper', {
   slidesPerView: 1.1,
   spaceBetween: 24,
   loop:true,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
   768: {
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
   }
   }
});


const swiper4 = new Swiper('.sec4-Swiper', {
   slidesPerView: 1.2,
   spaceBetween: 24,
   loop:true,
});

const swiper5 = new Swiper('.sec5-Swiper', {
   slidesPerView: 1,
   loop:true,
   spaceBetween: 24,
   pagination: {
      el: ".swiper-pagination",
   },
});

const swiper6 = new Swiper('.teacherInfo-sec3-Swiper', {
   slidesPerView: 1.2,
   loop:true,
   spaceBetween: 24,
});