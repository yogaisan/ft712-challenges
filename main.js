// ***navbar JS***
const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper")

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 4) {
    navbar.classList.add("navbar-white");
    navWrapper.classList.add("top");
  } else {
    navbar.classList.remove("navbar-white");
    navWrapper.classList.remove("top");
  }
});

// ***dropdown JS***
/*
const dropdownLeft = document.querySelectorAll(".left-menu .dropdown")
const dropdownRight = document.querySelectorAll(".right-menu .dropdown")
const dropdownListLeft = document.querySelector(".dropdown-content-left")
const dropdownListRight = document.querySelector(".dropdown-content-right")

dropdownLeft.forEach((element) => {
  element.addEventListener('click', () => {
    dropdownListLeft.classList.toggle("dropdown-display");
  });
});

dropdownRight.forEach((element) => {
  element.addEventListener('click', () => {
    dropdownListRight.classList.toggle("dropdown-display");
  });
});
*/
