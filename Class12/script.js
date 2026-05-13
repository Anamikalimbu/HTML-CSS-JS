document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const cancelBtn = document.getElementById("cancelBtn");
  const message = document.getElementById("message");

  // Get input fields and error messages
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const school = document.getElementById("school");


  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const addressError = document.getElementById("addressError");
  const schoolError = document.getElementById("schoolError");



  // Validate form inputs
  const validateInput = (input, errorMessage) => {
    if (input.value.trim() === "") {
      errorMessage.style.display = "block";
      return false;
    } else {
      errorMessage.style.display = "none";
      return true;
    }
  };

  // Submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isUsernameValid = validateInput(username, usernameError);
    const isEmailValid = validateInput(email, emailError);
    const isphoneValid = validateInput(phone, phoneError);
    const isaddressValid = validateInput(address, addressError);
    const isschoolValid = validateInput(school, schoolError);


    if (isUsernameValid && isEmailValid && isphoneValid && isaddressValid && isschoolValid) {
      // Save data to localStorage
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("address", address.value);
      localStorage.setItem("school", school.value);

      // Redirect to the success page
      window.location.href = "success.html";
    } else {
      message.textContent = "Please fill out all required fields.";
      message.style.color = "red";
    }
  });

  // Cancel button event listener
  cancelBtn.addEventListener("click", () => {
    form.reset();
    message.textContent = "Form cleared!";
    message.style.color = "#555";

    // Hide error messages
    usernameError.style.display = "none";
    emailError.style.display = "none";
    phoneError.style.display = "none";
    addressError.style.display = "none";
    schoolError.style.display = "none";
  });
});
