document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.img-container');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Show/hide projects based on filter
        projects.forEach(project => {
          if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.classList.add('active');
          } else {
            project.classList.remove('active');
          }
        });
      });
    });
  });




  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stats-number");
  const observerOptions = {
      root: null, // viewport
      threshold: 0.5 // 50% visibility required
  };

  const startCounter = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              const targetValue = parseInt(counter.textContent);
              counter.textContent = 0;

              let count = 0;
              const interval = setInterval(() => {
                  if (count < targetValue) {
                      count++;
                      counter.textContent = count;
                  } else {
                      clearInterval(interval);
                  }
              }, 10); // Update speed
              observer.unobserve(counter); // Stop observing after animation
          }
      });
  };

  const observer = new IntersectionObserver(startCounter, observerOptions);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
