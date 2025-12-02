// tema
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Ganti icon
  btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// =================== SMOOTH SCROLL ===================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// === HAMBURGER MENU ===
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// === ACTIVE LINK ===
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hapus active dari semua link
    navLinks.forEach((l) => l.classList.remove("active"));

    // Aktifkan link yang diklik
    link.classList.add("active");

    // Tutup menu (untuk mobile)
    navMenu.classList.remove("show");
    hamburger.classList.remove("active");
  });
});
