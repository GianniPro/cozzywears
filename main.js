//FORM VALIDATION

const form = document.getElementById("myForm");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const password = document.getElementById("pwd");
const email = document.getElementById("email");
const nameError = document.getElementById("name-error");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");

// email.addEventListener("input", function(event) {
//   const emailValue = email.value.trim();
//   if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
//     emailError.textContent = "Invalid email address";
//   } else {
//     emailError.textContent = "";
//   }
// });

email.addEventListener("input", function(event) {
    const emailValue = email.value.trim();
    if (emailValue.length < 3) {
      emailError.textContent = "";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(emailValue)) {
      emailError.textContent = "Invalid email address";
    } else {
      emailError.textContent = "";
    }
  });

password.addEventListener("input", function(event) {
  if (password.value.length < 8 || !/\d/.test(password.value) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)) {
    passwordError.textContent = "Password must be about 8 characters long with numbers and special characters(!@#$%^&*)";
  } else {
    passwordError.textContent = "";
  }
});

form.addEventListener("submit", function(event) {
  if (firstName.value.trim() === "" || lastName.value.trim() === "") {
    nameError.textContent = "Please fill in your name";
    event.preventDefault();
  } else {
    nameError.textContent = "";
  }

  const emailValue = email.value.trim();
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(emailValue)) {
    emailError.textContent = "Invalid email address";
    event.preventDefault();
  }

  if (password.value.length < 8 || !/\d/.test(password.value) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)) {
    passwordError.textContent = "Password must be about 8 characters long with numbers and special characters(!@#$%^&*)";
    event.preventDefault();
  }

  if (nameError.textContent === "" && emailError.textContent === "" && passwordError.textContent === "") {
    alert("Thank you for submitting your form!");
  }
});

