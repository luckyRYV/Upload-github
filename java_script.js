// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
const hamburger = document.querySelector('#hamburger-menu');
hamburger.onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburgerMenu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
