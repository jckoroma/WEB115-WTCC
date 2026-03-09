document.addEventListener("DOMContentLoaded", function () {

  // Get the form and input elements
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");

  // Create an area to display messages
  const message = document.createElement("p");
  message.id = "message";
  message.style.marginTop = "10px";
  message.style.fontWeight = "bold";
  form.appendChild(message);

  // Regular expression for alphanumeric values (letters and numbers only)
  const alphaNumPattern = /^[a-z0-9]+$/i;

  // Listen for form submission
  form.addEventListener("submit", function (event) {

    // Stop the form from submitting automatically
    event.preventDefault();

    // Get the entered value and remove extra spaces
    const value = inputField.value.trim();

    // Check if the value matches the alphanumeric pattern
    if (alphaNumPattern.test(value)) {
      message.textContent = "Valid input. Form submitted successfully.";
      message.style.color = "green";
    } else {
      message.textContent = "Error: Please enter letters and numbers only.";
      message.style.color = "red";
    }
  });

});