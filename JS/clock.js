// Function to update clock and date
function updateClock() {
  const now = new Date();

  // Get time components
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Get date components
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);

  // Add leading zero to minutes and seconds
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Format time
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Display time and date
  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();