// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple greeting popup
window.onload = () => {
  alert("Welcome to Saranya's Portfolio!");
};