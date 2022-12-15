"use strict";

// sticky navbar

const header = document.querySelector("[data-navbar]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 1000) {
    header.classList.add("nav-active");
    hideHeader();
  } else {
    header.classList.remove("nav-active");
  }
});
