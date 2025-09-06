// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  const html = document.documentElement;

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply the saved or default theme
  if (currentTheme === 'light') {
    html.setAttribute('data-theme', 'light');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    html.removeAttribute('data-theme');
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const isLight = html.getAttribute('data-theme') === 'light';
      
      if (isLight) {
        // Switch to dark
        html.removeAttribute('data-theme');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
      } else {
        // Switch to light
        html.setAttribute('data-theme', 'light');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'light');
      }
    });
  }
})();

// Typing animation for terminal-like elements
(function() {
  function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Add blinking cursor at the end
        element.innerHTML += '<span class="cursor">_</span>';
      }
    }
    
    type();
  }

  // Add typing animation to the logo on page load
  document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
      const originalText = logo.textContent;
      // Add a small delay before starting the animation
      setTimeout(() => {
        typeWriter(logo, originalText, 100);
      }, 500);
    }

    // Add subtle typing effect to research interests on scroll
    const researchSection = document.querySelector('h2');
    if (researchSection && researchSection.textContent.includes('Research Interests')) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const originalText = entry.target.textContent;
            setTimeout(() => {
              typeWriter(entry.target, originalText, 80);
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(researchSection);
    }
  });
})();