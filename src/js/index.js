const menuBtn = document.querySelector("#menu-btn");
const mobileNav = document.querySelector("#mobile-nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileNav.classList.toggle("hidden");
});

// Navbar scroll
let lastScroll = 0;
const navbar = document.querySelector("#header");

window.addEventListener("scroll", () => {
  let actualScroll = window.scrollY;
  if (actualScroll > lastScroll) {
    navbar.style.transform = "translateY(-300px)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScroll = window.scrollY;
});

// Scroll into view
document
  .querySelector("#view-projects")
  .addEventListener("click", function (e) {
    e.preventDefault;
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
