const toggle = document.querySelector(".toggle");
const btnClose = document.querySelector(".btn-close");
const toggleNav = document.querySelector(".toggle-nav");

function handleToggle() {
  if (toggleNav.classList.value.includes("view")) {
    toggleNav.classList.remove("view");
  } else {
    toggleNav.classList.add("view");
  }
}
toggle.addEventListener("click", handleToggle);
btnClose.addEventListener("click", handleToggle);

const btnDown = document.querySelector(".btn-down");

function handleScroll() {
  window.scrollTo({ top: 600, behavior: "smooth" });
}
btnDown.addEventListener("click", handleScroll);

function handleLogo() {
  const intro = document.querySelector(".intro > div");
  const logo = document.querySelector(".logo");
  if (window.scrollY >= 400) {
    intro.classList.add("hidden");
    logo.classList.add("view");
    toggle.classList.add("scroll");
  } else if (window.scrollY < 400) {
    intro.classList.remove("hidden");
    logo.classList.remove("view");
    toggle.classList.remove("scroll");
  }
  logo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
window.addEventListener("scroll", handleLogo);

const tabs = document.querySelectorAll(".tab-nav li");
const mTabs = document.querySelectorAll(".mobile-nav li");
function handleTab(e) {
  const tabPosts = document.querySelectorAll(".main > div");
  for (let i = 0; i < 3; i++) {
    tabPosts[i].classList.add("hidden");
    tabs[i].classList.remove("active");
    e.target.classList.add("active");
    toggleNav.classList.remove("view");
  }
  const index = e.target.classList[0];
  document.getElementById(`${index}`).classList.remove("hidden");
}
tabs.forEach((tab) => {
  tab.addEventListener("click", handleTab);
});
mTabs.forEach((tab) => {
  tab.addEventListener("click", handleTab);
});
