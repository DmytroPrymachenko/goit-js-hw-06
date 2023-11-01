const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email.value;
  const passwordInput = loginForm.elements.password.value;
  console.log(emailInput);
  console.log(passwordInput);

  if (emailInput == "" || passwordInput == "") {
    alert("Присутні незаповнені поля");
  } else {
    const formInput = {
      emailInput: emailInput,
      passwordInput: passwordInput,
    };
    console.log(formInput);
  }
  loginForm.reset();
}
