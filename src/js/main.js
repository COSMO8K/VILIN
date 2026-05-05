"use strict";
import "../sass/style.scss";

//swiper
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//search
const header = document.querySelector(".header");
const searchButton = document.querySelector(".header__search");
const searchForm = document.querySelector(".header__search-form");
const searchInput = document.querySelector(".header__search-form");

if (header && searchButton && searchInput && searchForm) {
  const closeSearch = () => {
    header.classList.remove("header__search-open");
    searchButton.setAttribute("aria-expanded", "false");
    searchButton.setAttribute("aria-label", "Открыть поиск");
  };

  const openSearch = () => {
    header.classList.add("header__search-open");
    searchButton.setAttribute("aria-expanded", "true");
    searchButton.setAttribute("aria-label", "Закрыть поиск");
  };
  searchButton.addEventListener("click", () => {
    if (header.classList.contains("header__search-open")) {
      closeSearch();
      return;
    }
    openSearch();
  });
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      closeSearch();
    }
  });
  // document.addEventListener("");
}

//swiper

const recSlider = new Swiper(".rec__slider", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 43,
  loop: true,

  navigation: {
    prevEl: ".rec__button--prev",
    nextEl: ".rec__button--next",
  },
});
