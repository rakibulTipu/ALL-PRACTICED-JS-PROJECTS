const countDown = document.querySelector(".countdown");

// set launch date (ms)
const launchDate = new Date("Jan 1, 2022 13:00:00").getTime();

// update every second
const interval = setInterval(() => {
  // get todays date and time (ms)
  const now = new Date().getTime();

  // distance from now to the launch date
  const distance = launchDate - now;

  // time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display result
  countDown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // if launch date passed
  if (distance < 0) {
    clearInterval(interval);
    countDown.style.color = "#17a2b8";
    countDown.innerHTML = "Launched";
  }
}, 1000);
