const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

//showError
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//showSuccess
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//getFieldName

function getFieldName(input) {
  return (input.id.charAt(0).toUpperCase() + input.id.slice(1)).replace(
    /-/g,
    " "
  );
}

//checkEmail
function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    showError(firstName, `${getFieldName(firstName)} cannot be empty`);
  } else {
    showSuccess(firstName);
  }

  if (lastNameValue === "") {
    showError(lastName, `${getFieldName(lastName)} cannot be empty`);
  } else {
    showSuccess(lastName);
  }

  if (emailValue === "") {
    showError(email, `${getFieldName(email)} cannot be empty`);
  } else if (!checkEmail(emailValue)) {
    showError(email, "Looks like this is not an email");
  } else {
    showSuccess(email);
  }

  if (passwordValue === "") {
    showError(password, `${getFieldName(password)} cannot be empty`);
  } else {
    showSuccess(password);
  }
}

form.addEventListener("keydown", function () {
  document.getElementById("form-name").className = "form-control";
  document.getElementById("form-surname").className = "form-control";
  document.getElementById("form-email").className = "form-control";
  document.getElementById("form-password").className = "form-control";
});
