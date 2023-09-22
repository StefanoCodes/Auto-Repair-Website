const hamburgerToggle = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const body = document.body;
hamburgerToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
  hamburgerToggle.classList.toggle("close");
  body.classList.toggle("overflow-hidden");
});
