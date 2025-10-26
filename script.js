// Hamburger menu toggle for mobile
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".navbar ul");

navToggle.setAttribute("aria-expanded", "false");

navToggle.addEventListener("click", function () {
  const opened = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", opened ? "true" : "false");
  document.body.style.overflow = opened ? "hidden" : "";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});
document.querySelectorAll(".navbar ul a").forEach(function (link) {
  link.onclick = function () {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
});

// SHOP (mobile) — show a small 'Coming Soon' modal when SHOP is tapped on phones
const shopLink = document.querySelector(".shop-link");
const shopModal = document.getElementById("shop-modal");
if (shopLink && shopModal) {
  const shopCloseBtns = shopModal.querySelectorAll(
    ".shop-modal-close, .shop-modal-ok"
  );

  function openShopModal(e) {
    if (window.innerWidth > 1000) return;
    e.preventDefault();
    shopModal.classList.add("open");
    shopModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const first = shopModal.querySelector(".shop-modal-close");
    if (first) first.focus();
  }

  function closeShopModal() {
    shopModal.classList.remove("open");
    shopModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    shopLink.focus();
  }

  shopLink.addEventListener("click", openShopModal);
  shopCloseBtns.forEach((btn) => btn.addEventListener("click", closeShopModal));

  document.addEventListener("keydown", function (e) {
    if (
      (e.key === "Escape" || e.key === "Esc") &&
      shopModal.classList.contains("open")
    ) {
      closeShopModal();
    }
  });
}

// Product description expand/collapse for small screens
const productToggle = document.querySelector(".product-toggle");
if (productToggle) {
  productToggle.addEventListener("click", function () {
    const productDiv = this.closest(".product-div");
    const expanded = productDiv.classList.toggle("expanded");
    this.setAttribute("aria-expanded", expanded ? "true" : "false");
    this.textContent = expanded ? "Show less" : "Read more";
    if (expanded) {
      setTimeout(() => {
        productDiv.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 160);
    }
  });
}
