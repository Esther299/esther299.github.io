// JavaScript for general functionality (e.g., form validation, interactivity)
document.addEventListener("DOMContentLoaded", function () {
  // Example: Simple form validation
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      event.preventDefault(); // Prevent form from submitting
    }
  });
});
