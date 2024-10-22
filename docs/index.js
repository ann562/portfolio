const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the active class on both the hamburger and the nav links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
