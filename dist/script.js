// Hamburger
const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navList.classList.toggle("hidden");
});

// to close hamburger menu
window.addEventListener("click", (e) => {
  if (e.target !== hamburger && e.target !== navList) {
    hamburger.classList.remove("hamburger-active");
    navList.classList.add("hidden");
  }
});

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backToTop = document.querySelector("#back-to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fix");
    backToTop.classList.add("flex");
    backToTop.classList.remove("hidden");
  } else {
    header.classList.remove("nav-fix");
    backToTop.classList.add("hidden");
    backToTop.classList.remove("flex");
  }
};
