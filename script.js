const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu-close");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "";
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  });
});

// ----- MOBILE CATALOG -----
const catalogBtn = document.querySelector(".catalog-button");
const hiddenItems = document.querySelectorAll(".catalog-link.hidden");

catalogBtn.addEventListener("click", (e) => {
  e.preventDefault();

  hiddenItems.forEach((item) => {
    item.classList.remove("hidden");
    item.classList.add("visible");
  });

  catalogBtn.style.display = "none";
});
