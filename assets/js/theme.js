// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme on page load
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  
  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Save theme preference
      const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }
})();