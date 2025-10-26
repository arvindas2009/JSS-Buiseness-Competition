// Hamburger menu toggle for mobile
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".navbar ul");

navToggle.setAttribute("aria-expanded", "false");

navToggle.addEventListener("click", function () {
  const opened = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", opened ? "true" : "false");
  // prevent page scroll when menu is open
  document.body.style.overflow = opened ? "hidden" : "";
});

// Close on Escape for accessibility
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});
// Optional: close menu when clicking a link (mobile UX)
document.querySelectorAll(".navbar ul a").forEach(function (link) {
  link.onclick = function () {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
});

// Product description expand/collapse for small screens
const productToggle = document.querySelector(".product-toggle");
if (productToggle) {
  productToggle.addEventListener("click", function () {
    const productDiv = this.closest(".product-div");
    const expanded = productDiv.classList.toggle("expanded");
    this.setAttribute("aria-expanded", expanded ? "true" : "false");
    this.textContent = expanded ? "Show less" : "Read more";
    // When expanding, ensure the area is visible (scroll into view)
    if (expanded) {
      setTimeout(() => {
        productDiv.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 160);
    }
  });
}
