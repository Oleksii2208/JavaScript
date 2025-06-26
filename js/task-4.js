const loginForm = document.querySelector(".login-form");
// console.log(form);

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }
  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
