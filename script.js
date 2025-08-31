document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // FORM VALIDATION
  // ---------------------------
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
      showMessage("All fields are required.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    showMessage("Message sent successfully!", "success");
    form.reset();
  });

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = "";
    formMessage.classList.add(type);
  }

  // ---------------------------
  // NAV HIGHLIGHT ON SCROLL
  // ---------------------------
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  const options = {
    root: null,
    threshold: 0.5, // adjust sensitivity
    rootMargin: "-100px 0px 0px 0px" // offset for sticky header
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
