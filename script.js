
"use strict";

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// WHATSAPP ENQUIRY FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const interest =
    document.getElementById("customerInterest").value;

  const message =
    document.getElementById("customerMessage").value.trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }

  const phonePattern = /^[0-9+\-\s]{8,16}$/;

  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  const text =
`Hello Purvanchal Automobile!

Name: ${name}
Phone: ${phone}
Interest: ${interest}
Message: ${message || "I would like more information."}`;

  const url =
    "https://wa.me/919555388635?text=" +
    encodeURIComponent(text);

  window.open(url, "_blank", "noopener");
});

// IMAGE LOADING FALLBACK

document.querySelectorAll(".product-image img, .hero-image img")
.forEach(img => {
  img.addEventListener("error", () => {
    img.alt = "Ola Electric product image unavailable";
    img.style.opacity = "0.2";
  });
});

// FOOTER YEAR

console.log("PURVANCHAL AUTOMOBILE | WEBCRAFT");
console.log("Premium Electric Experience Loaded");
