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
