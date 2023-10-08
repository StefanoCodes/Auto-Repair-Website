const hamburgerToggle = document.querySelector(".hamburger-menu");
console.log(hamburgerToggle);
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

// INTERSECTION OBSERVER

// SELECTIONS

const heroImg = document.querySelector(".hero-img");
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

const allEntries = [
  heroImg,
  heroHeading,
  navigation,
  servicesSection,
  footer,
  hamburgerToggle,
  headerParagraph,
  heroBtns,
  servicesImg,
  ...sectionHeadings,
  ...servicesCards,
];
// OPTIONS
let opt = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`${entry.target.dataset.anim}`);
    }
    // if (!entry.isIntersecting) {
    //   entry.target.classList.remove(`${entry.target.dataset.anim}`);
    // }
  });
}, opt);

allEntries.forEach((entry) => observer.observe(entry));

// TODO:
// add dataset attribute to the elements we want to animate
// accoding to each dataset we will use that as the class name to add the animation
