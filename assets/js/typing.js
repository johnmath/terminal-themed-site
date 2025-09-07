// Typing effect for logo text
(function() {
  // Check if typing effect has already been shown
  const hasSeenTyping = localStorage.getItem('hasSeenTyping');
  
  if (hasSeenTyping) {
    // Show the full text immediately and hide cursor
    const logoText = document.getElementById('logo-text');
    const logoCursor = document.getElementById('logo-cursor');
    if (logoText && logoCursor) {
      const fullText = logoText.getAttribute('data-text');
      logoText.textContent = fullText;
      logoCursor.style.display = 'none';
    }
    return;
  }
  
  // Perform typing effect
  const logoText = document.getElementById('logo-text');
  const logoCursor = document.getElementById('logo-cursor');
  
  if (!logoText || !logoCursor) return;
  
  const fullText = logoText.getAttribute('data-text');
  let currentIndex = 0;
  
  // Clear the text initially
  logoText.textContent = '';
  
  // Add blinking cursor animation
  logoCursor.style.animation = 'blink 1s infinite';
  
  function typeNextCharacter() {
    if (currentIndex < fullText.length) {
      logoText.textContent = fullText.substring(0, currentIndex + 1);
      currentIndex++;
      setTimeout(typeNextCharacter, 150); // Adjust typing speed here
    } else {
      // Typing complete, hide cursor after a short delay
      setTimeout(() => {
        logoCursor.style.display = 'none';
        // Mark as seen so it doesn't repeat
        localStorage.setItem('hasSeenTyping', 'true');
      }, 1000);
    }
  }
  
  // Start typing after a short delay
  setTimeout(typeNextCharacter, 500);
})();