// Counter Animation Function
function animateCounter(id, start, end, duration, prefix = '') {
    const element = document.getElementById(id);
    let startTime = null;

    function updateCounter(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.innerText = prefix + value;
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // Initialize the counters
  document.addEventListener('DOMContentLoaded', () => {
    animateCounter('years', 0, 10, 2000);     // Example: 10 years in the industry
    animateCounter('projects', 0, 150, 2000, '+'); // Example: 150 concluded projects
    animateCounter('clients', 0, 85, 2000, '+');   // Example: 85 clients
  });