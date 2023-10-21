import { animate } from "motion";

// SELECTIONS
const hamburgerToggle = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const body = document.body;
const navLinks = document.querySelectorAll(".nav_link");
const heroImg = document.querySelector(".hero-image");
const heroHeading = document.querySelector(".hero-heading");
const headerParagraph = document.querySelector(".hero-description");
const heroBtns = document.querySelector(".hero-btns");
const headings = [heroHeading, headerParagraph];

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
navLinks.forEach((link) => {
  link.addEventListener("click", toggleDrawer);
});

// ACCORDION

const accordionContainer = document.querySelector(".accordion__boxes");

// Event Delegation

const toggleAccordion = (container, elName) => {
  container.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.closest(`${elName}`);
    console.log(target);
    if (!target) return;
    if (target.classList.contains("accordion__box")) {
      container.classList.toggle("active");
      target.classList.toggle("active");
    } else {
      container.classList.toggle("active");
    }
  });
};
toggleAccordion(accordionContainer, ".plus");
toggleAccordion(accordionContainer, ".accordion__box");

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
// ANIM

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
  headings,
  // setting keyframes like this we are indicating where to go from and where to end at
  { transform: ["translateX(-200%)", "none"], filter: ["blur(10px)", "none"] },
  {
    duration: 1.4,
    easing: "ease-in-out",
    delay: "0.3",
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
