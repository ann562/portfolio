document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".testimonials-slider");
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach((testimonial) => {
        const clone = testimonial.cloneNode(true);
        slider.appendChild(clone);
    });
});
