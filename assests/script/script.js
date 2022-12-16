"use strict";

// sticky navbar

const header = document.querySelector("[data-navbar]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 1000) {
    header.classList.add("nav-active");
  } else {
    header.classList.remove("nav-active");
  }
});

// mobile navbar
function burgerClick() {
  console.log("hello");

  $(".nav-menu").slideToggle();
}
