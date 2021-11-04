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

// ***Display email submitted in navbar***
const form = document.querySelector('.form')
const emailInput = document.querySelector('.input-element')
const account = document.getElementById('account')
const submitBtn = document.querySelector('.submit-button')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  account.innerHTML = emailInput.value;
  emailInput.value = '';
  submitBtn.disabled = true;
});

emailInput.addEventListener('keyup', () => {
  if (emailInput.value === '') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
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
