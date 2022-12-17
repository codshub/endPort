// Preloader Setup
let preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.style.display = "none"
});

window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('.navbar-section');
  if (window.pageYOffset > 70) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});

// Mobile navigation Script
let menuBtn = document.querySelector('.menu');
let menuList = document.querySelector('.list');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("active");
});

document.querySelectorAll(".list-items").forEach(n =>
  n.addEventListener('click', () => {
    menuBtn.classList.remove("active");
    menuList.classList.remove("active");
  }));



