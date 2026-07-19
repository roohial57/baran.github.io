const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");

toggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => nav?.classList.remove("open"));
});

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".project-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.getAttribute("data-filter");
    cards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const show = filter === "all" || filter === category;
      card.hidden = !show;
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
