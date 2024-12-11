// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.popcorn-icon');

    icons.forEach((icon, index) => {
        // Add a delay for each icon
        setTimeout(() => {
            icon.classList.add('popcorn-active');
        }, index * 200); // Delay by 200ms for each icon
    });
});

// Select elements
const testimonialsContainer = document.querySelector('.testimonials-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Scroll left
leftBtn.addEventListener('click', () => {
    testimonialsContainer.scrollBy({
        left: -300,
        behavior: 'smooth',
    });
});

// Scroll right
rightBtn.addEventListener('click', () => {
    testimonialsContainer.scrollBy({
        left: 300,
        behavior: 'smooth',
    });
});

// Auto-scroll function
function autoScroll() {
    // Check if we've reached the end of the container
    if (testimonialsContainer.scrollLeft + testimonialsContainer.offsetWidth >= testimonialsContainer.scrollWidth) {
        testimonialsContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Loop back to the beginning
    } else {
        testimonialsContainer.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll right
    }
}

// Set up continuous auto-scroll
setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

// Allow manual scrolling without interrupting auto-scroll
testimonialsContainer.addEventListener('scroll', () => {
    // No additional action needed here; user scrolling is now independent of auto-scroll
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle the active class for the hamburger and nav-links
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });