const hamburgerToggle = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const body = document.body;
hamburgerToggle.addEventListener("click", function () {
  // for accessibility
  const expanded =
    hamburgerToggle.getAttribute("aria-expanded") === "true" || false;
  hamburgerToggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("active");
  hamburgerToggle.classList.toggle("close");
  body.classList.toggle("overflow-hidden");
});
