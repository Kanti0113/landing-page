document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling
  const links = document.querySelectorAll("nav ul li a, .cta");
  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  // Form Validation
  const form = document.querySelector(".contact form");
  form.addEventListener("submit", function (event) {
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Please fill out all fields.");
    } else if (!validateEmail(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Responsive Navigation Menu
  const navToggle = document.createElement("button");
  navToggle.className = "nav-toggle";
  navToggle.textContent = "☰";
  document.querySelector("header").appendChild(navToggle);

  navToggle.addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("show-nav");
  });
});
