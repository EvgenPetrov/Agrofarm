// Подключение свайпера
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  speed: 800,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
