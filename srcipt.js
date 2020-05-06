/**
 * event handler for scrollbar
 */
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.pageYOffset > 40) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
});

/**
 * Event handler harmburger icon
 */
const harmburgerIcon = document.getElementById("hermburger");
const mobileNav = document.getElementById("nav__item");
harmburgerIcon.addEventListener("click", () => {
  const check = mobileNav.classList.contains('active')
  if (!check) {
   mobileNav.classList.add('active')
  } else {
    mobileNav.classList.remove('active')
  }
});

/**
 * Event handler for closing mobile navigation
 */
  mobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('active');
})


/**
 * Handles progress bar
 */

window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress__bar");
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrolled === 0) {
    progressBar.style.display = "none";
  } else {
    progressBar.style.display = "block";
    progressBar.style.backgroundColor = "#cc0066";
    progressBar.style.width = `${scrolled}%`;
  }
});
