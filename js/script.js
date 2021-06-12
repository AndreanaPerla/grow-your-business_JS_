/*hamburger menu*/
let menu = document.querySelector(".menu");
let ham = document.querySelector(".ham");
let closeBtn = document.querySelector(".closeBtn");
let menuLinks = document.querySelectorAll(".menuLink");

ham.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  menu.classList.add("active");
  closeBtn.classList.add("active");
}

closeBtn.addEventListener("click", () => {
  removeMenu();
});

function removeMenu() {
  menu.classList.remove("active");
  closeBtn.classList.remove("active");
}

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", removeMenu);
});

/*testimonial slideshow*/
let slides = document.getElementsByClassName("mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  let currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});
next.addEventListener("click", () => {
  plusSlides(1);
});

/*contact form*/
const form = document.querySelector(".contact-form");
const username = document.querySelector(".name-input");
const email = document.querySelector(".mail-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = username.value;
  const emailValue = email.value;

  if (nameValue === "") {
    setErrorName(username);
  }

  if (emailValue === "") {
    setErrorEmail(email);
  } else if (!isEmail(emailValue)) {
    setErrorEmail(email);
  }

  function setErrorName() {
    const name_error = document.querySelector(".name-error");
    name_error.classList.add("active");
  }

  function setErrorEmail() {
    const email_error = document.querySelector(".email-error");
    email_error.classList.add("active");
  }

  function isEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
