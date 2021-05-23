const gallery = document.querySelector(".gallery");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = gallery.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    gallery.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    gallery.classList.remove("show");
  }
});

// Fixed Nav
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fix-nav");
  } else {
    nav.classList.remove("fix-nav");
  }
});


