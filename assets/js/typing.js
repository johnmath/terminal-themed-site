// Typing effect for logo text
(function() {
  const logoText = document.getElementById('logo-text');
  const logoCursor = document.getElementById('logo-cursor');

  // Exit if the required elements don't exist
  if (!logoText || !logoCursor) {
    return;
  }

  // Check if the typing effect has already been shown
  const hasSeenTyping = localStorage.getItem('hasSeenTyping');
  const fullText = logoText.getAttribute('data-text');

  if (hasSeenTyping) {
    // Show the full text immediately and hide the cursor
    logoText.textContent = fullText;
    logoCursor.style.display = 'none';
  } else {
    // Perform the typing effect for the first visit
    let currentIndex = 0;
    
    // Clear the initial text (for non-JS fallback)
    logoText.textContent = '';
    
    // Add blinking cursor animation (requires CSS @keyframes)
    logoCursor.style.animation = 'blink 1s infinite';

    function typeNextCharacter() {
      if (currentIndex < fullText.length) {
        logoText.textContent = fullText.substring(0, currentIndex + 1);
        currentIndex++;
        setTimeout(typeNextCharacter, 150); // Adjust typing speed here
      } else {
        // Typing complete.
        // FIX: Set the flag immediately to prevent race conditions.
        localStorage.setItem('hasSeenTyping', 'true');
        
        // Hide the cursor after a final delay.
        setTimeout(() => {
          logoCursor.style.display = 'none';
        }, 1000);
      }
    }

    // Start typing after a short initial delay
    setTimeout(typeNextCharacter, 500);
  }
})();
