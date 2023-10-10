import { animate } from "motion";

const hamburgerToggle = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const body = document.body;
const navLinks = document.querySelectorAll(".nav_link");
const navigation = document.querySelector(".navigation");

// OPEN/CLOSE Drawer
const toggleDrawer = () => {
  const expanded =
    hamburgerToggle.getAttribute("aria-expanded") === "true" || false;
  hamburgerToggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("active");
  hamburgerToggle.classList.toggle("close");
  body.classList.toggle("overflow-hidden");
};
hamburgerToggle.addEventListener("click", toggleDrawer);
// to avoid a user clicking in the drawer menu and then getting stuck since the overflow would be hidden so we are automatically closing the drawer upon a click
// TODO: Implement Event delegation instead
navLinks.forEach((link) => {
  link.addEventListener("click", toggleDrawer);
});

// ACCORDION

const accordionContainer = document.querySelector(".accordion__boxes");

// Event Delegation
accordionContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target.closest(".plus");
  if (!target) return;
  const parent = target.parentElement.parentElement;
  parent.classList.toggle("active");
});

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".testimonials__box");
  const btnLeft = document.querySelector(".slider-icon-left");
  const btnRight = document.querySelector(".slider-icon-right");
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  goToSlide(0);
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};
slider();

// ANIMATIONS

// SELECTIONS

const heroImg = document.querySelector(".hero-image");
const sectionHeadings = Array.from(
  document.querySelectorAll(".section-heading")
);
const heroHeading = document.querySelector(".hero-heading");
const servicesSection = document.querySelector(".services");
const footer = document.querySelector("#footer");
const headerSection = document.querySelector("#home");
const headerParagraph = document.querySelector(".hero-description");
const heroBtns = document.querySelector(".hero-btns");
const servicesCards = Array.from(document.querySelectorAll(".services__card"));
const servicesImg = document.querySelector(".services__img");
console.log(heroImg);
animate(
  heroImg,
  // setting keyframes like this we are indicating where to go from and where to end at
  { opacity: ["0", "1"], transform: ["translateY(-100%)", "none"] },
  {
    duration: 1,
    easing: "ease-in-out",
  }
);
animate(
  heroHeading,
  // setting keyframes like this we are indicating where to go from and where to end at
  { transform: ["translateX(-100%)", "none"], filter: ["blur(10px)", "none"] },
  {
    duration: 1,
    easing: "ease-in-out",
    delay: "0.5",
  }
);
animate(
  headerParagraph,
  // setting keyframes like this we are indicating where to go from and where to end at
  { transform: ["translateX(100%)", "none"], filter: ["blur(10px)", "none"] },
  {
    duration: 1,
    easing: "ease-in-out",
    delay: "1",
  }
);
animate(
  heroBtns,
  // setting keyframes like this we are indicating where to go from and where to end at
  { transform: ["translateY(50px)", "none"], opacity: ["0", "1"] },
  {
    duration: 1,
    easing: "ease-in-out",
    delay: "1.4",
  }
);
