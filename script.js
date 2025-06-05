document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.style.display = "none"));
  document.getElementById("successMessage").textContent = "";

  // Input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Name validation
  if (!name) {
    showError("nameError", "Name is required.");
    isValid = false;
  }

  // Email validation
  if (!email) {
    showError("emailError", "Email is required.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("emailError", "Enter a valid email address.");
    isValid = false;
  }

  // Message validation
  if (!message) {
    showError("messageError", "Message is required.");
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Thank you for your submission!";
    document.getElementById("contactForm").reset();
  }
});

function showError(elementId, message) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.style.display = "block";
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
