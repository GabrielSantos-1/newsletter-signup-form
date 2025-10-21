const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const formSection = document.getElementById("form-section");
const successSection = document.getElementById("success-section");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  
  if (!validateEmail(emailValue)) {
    errorMessage.textContent = "Valid email required";
    emailInput.classList.add("error");
  } else {
    errorMessage.textContent = "";
    emailInput.classList.remove("error");

    // Exibe mensagem de sucesso
    formSection.classList.add("hidden");
    successSection.classList.remove("hidden");
    userEmail.textContent = emailValue;
  }
});

dismissBtn.addEventListener("click", () => {
  successSection.classList.add("hidden");
  formSection.classList.remove("hidden");
  emailInput.value = "";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
