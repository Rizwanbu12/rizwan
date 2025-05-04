function setProgress(id, value, max) {
    const circle = document.getElementById(id);
    const radius = circle.getAttribute("r");
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / max) * circumference;
    circle.style.strokeDashoffset = offset;
  }
  function updateClock() {
const now = new Date();
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

setProgress("hours", h % 12 + m / 60, 12);
setProgress("minutes", m + s / 60, 60);
setProgress("seconds", s, 60);

document.getElementById("digital-time").textContent =
  `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

document.getElementById("date-text").textContent =
  now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

// Set digits inside the circles
document.getElementById("hour-digit").textContent = String(h).padStart(2, '0');
document.getElementById("minute-digit").textContent = String(m).padStart(2, '0');
document.getElementById("second-digit").textContent = String(s).padStart(2, '0');
}

  setInterval(updateClock, 1000);
  updateClock();

  // Dark/light mode toggle
  document.getElementById("toggle-theme").addEventListener("click", () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
  }