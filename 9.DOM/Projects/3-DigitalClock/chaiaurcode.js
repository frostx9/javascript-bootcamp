const clock = document.getElementById("clock")

// Set Interval. This one Type of Corn Job. Method Run Every 1 sec
setInterval(() => {
  // Date Capture
  let currentTime = new Date()
  clock.innerHTML = currentTime.toLocaleTimeString()
}, 1000)