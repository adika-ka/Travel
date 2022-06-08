// Slider
new Swiper(".destinations-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  slidesPerView: 1.75,
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 1.75,
  loop: true,
  breakpoints: {
    390: {
      slidesPerView: 1,
      initialSlide: 1,
    },
    769: {
      slidesPerView: 1.75,
    },
  },
});

// Burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const linkMobile = document.querySelectorAll(".link-mobile");
const backdrop = document.querySelector(".menu__backdrop");

iconMenu.addEventListener("click", function (e) {
  if (!e.target.className.includes(" _active")) {
    document.body.className += " _lock";
    iconMenu.className += " _active";
    menuBody.className += " _active";
    backdrop.className += " _active";
    return;
  }
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  backdrop.classList.remove("_active");
});

menuBody.addEventListener("click", (e) => {
  if (e.target.className.includes("menu-list__link")) {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
});

backdrop.addEventListener("click", (e) => {
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  backdrop.classList.remove("_active");
});
