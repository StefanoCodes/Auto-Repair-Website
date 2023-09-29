const hamburgerToggle = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const body = document.body;
const navLinks = document.querySelectorAll(".nav_link");

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
  const paragraphEl = parent.querySelector(".accordion__description");
  const header = parent.querySelector(".accordion__box-heading");
  parent.classList.toggle(`active`);
  target.classList.toggle("active");
  paragraphEl.classList.toggle("active");
  header.classList.toggle("active");
});
