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

