const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

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
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} cannot be empty`);
    } else if (input.id === "email") {
      if (checkEmail(input.value) === false) {
        showError(input, "Looks like this is not an email");
      }
    } else {
      showSuccess(input);
    }
  });
}

form.addEventListener("keydown", function () {
  document.getElementById("form-name").className = "form-control";
  document.getElementById("form-surname").className = "form-control";
  document.getElementById("form-email").className = "form-control";
  document.getElementById("form-password").className = "form-control";
});
