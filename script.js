const icons = document.querySelectorAll('.icon');
let currentIndex = 0;
const delay = 150; // milliseconds

setInterval(() => {
  // Hide all icons
  icons.forEach(icon => icon.style.display = 'none');

  // Show current icon
  icons[currentIndex].style.display = 'inline';

  // Move to next index (loop back to 0)
  currentIndex = (currentIndex + 1) % icons.length;
}, delay);
