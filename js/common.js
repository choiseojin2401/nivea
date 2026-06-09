const productSlide = new Swiper(".product-slide", {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 600,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".product-next",
    prevEl: ".product-prev",
  },
});

const goTop = document.querySelector(".go-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    goTop.classList.add("active");
  } else {
    goTop.classList.remove("active");
  }
});

goTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});