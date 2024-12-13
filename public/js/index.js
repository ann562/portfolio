document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Bar
    const progressBar = document.querySelector('.progress-bar');
  
    document.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
      progressBar.style.width = `${scrollPercentage}%`;
    });
  
    // Scroll Animation
    const projects = document.querySelectorAll('.project');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });
  
    projects.forEach((project) => {
      observer.observe(project);
    });
  });
  