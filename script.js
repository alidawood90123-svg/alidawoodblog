// ====== Navbar Active Link Highlight ======
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// ====== Smooth Scroll for Internal Links ======
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ====== Scroll to Top Button ======
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑";
scrollTopBtn.id = "scrollTopBtn";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// ====== Simple Animation for Page Load ======
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});