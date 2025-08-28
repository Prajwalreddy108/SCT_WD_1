// script.js

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "#000"; // solid black when scrolled
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.7)"; // transparent on top
  }
});
