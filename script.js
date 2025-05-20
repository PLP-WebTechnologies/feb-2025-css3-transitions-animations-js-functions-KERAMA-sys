// Event Handling (existing handlers)...
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#d1f7c4";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#f0f0f0";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Double-click detected! 🎉");
});

// Dynamic Button
document.getElementById("colorChangeBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#ffcccb";
  this.textContent = "Color Changed!";
});

// Tabs
const tabs = document.querySelectorAll(".tabBtn");
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tab => tab.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// Slideshow
let currentSlide = 0;
const images = [
  "https://via.placeholder.com/300?text=Slide+1",
  "https://via.placeholder.com/300?text=Slide+2",
  "https://via.placeholder.com/300?text=Slide+3"
];
document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % images.length;
  const img = document.getElementById("slideImage");
  img.src = images[currentSlide];
  img.classList.add("animate-pulse");
  setTimeout(() => img.classList.remove("animate-pulse"), 1000);
});

// Form Validation
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    alert("Invalid email format.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  alert("Form submitted successfully!");
});

document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("passwordFeedback");
  if (this.value.length < 8) {
    feedback.textContent = "Password too short.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Looks good!";
    feedback.style.color = "green";
  }
});

// ⬇️ localStorage Functions

// Save user theme preference
function saveThemePreference(isDark) {
  localStorage.setItem("darkMode", isDark);
}

// Load saved theme on page load
function loadThemePreference() {
  const isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDark);
}

document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  saveThemePreference(isDark);
});

loadThemePreference();

// Animate image on button click
document.getElementById("animateImageBtn").addEventListener("click", () => {
  const img = document.getElementById("slideImage");
  img.classList.add("animate-pulse");
  setTimeout(() => img.classList.remove("animate-pulse"), 1000);
});
