// Preloader Setup
let preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.style.display = "none";
});

//Mobile Navigation
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





//get error span tag
let nameError = document.querySelector(".name-error");
let emailError = document.querySelector(".email-error");
let msgError = document.querySelector(".msg-error");
let submitError = document.querySelector(".btn-error");

//name Validation
function nameFunction() {
  let name = document.querySelector(".Name").value;

  if (name.length == 0) {
    nameError.innerHTML = 'name is Required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Name is Invalid';
    return false;
  }
  nameError.innerHTML = 'Great Choice';
  return true;

};

//Email Valditaion
function emailFunction() {
  let email = document.querySelector(".Email").value;

  if (email.length == 0) {
    emailError.innerHTML = 'Email is Required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email is invalid';
    return false;
  }
  emailError.innerHTML = 'Great Choice';
  return true;

};



//Massage Valditaion
function msgFunction() {
  let textArea = document.querySelector(".Massage").value;
  let required = 20;
  let left = required - textArea.length;

  if (left > 0) {
    msgError.innerHTML = left + ' More character please';
    return false;
  }
  msgError.innerHTML = 'Great Choice';
  return true;

};

//Submit Button Valditaion
function submitFunction() {
  if (!nameFunction() || !emailFunction() || !msgFunction()) {
    submitError.style.visibility = 'visible';
    submitError.innerHTML = 'Please fill these field';
    setTimeout(function () {
      submitError.style.visibility = 'hidden';
    }, 3000);
    return false;
  }
};








