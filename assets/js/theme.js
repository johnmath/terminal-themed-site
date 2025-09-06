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