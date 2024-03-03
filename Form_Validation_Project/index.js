const form = document.getElementById("form");
const user_name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const c_password = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

const validateInput = () => {
  const user_name_value = user_name.value.trim();
  const email_value = email.value.trim();
  const password_value = password.value.trim();
  const c_password_value = c_password.value.trim();

  if (user_name_value === "") {
    setError(user_name, "User Name is Requiered");
  } else {
    setSuccess(user_name);
  }

  if (password_value === "") {
    setError(password, "Password is Requiered");
  } else if (password_value.length() < 8) {
    setError(password, "Password grather than 8 characters");
  } else {
    setSuccess(password);
  }

  if (c_password_value === "") {
    setError(c_password, "Entere your Confirm password");
  } else if (password_value !== c_password_value) {
    setError(c_password_value, "Enter Same password");
  } else {
    setSuccess(c_password);
  }

  if (email_value === "") {
    setError(email, "Email is Requiered");
  } else if (!isValidEmail(email_value)) {
    setError(email, "This Email is not Vaild Email");
  } else {
    setSuccess(email);
  }
};

const setError = (name, msg) => {
  const inputControll = name.parentElement;
  const errorDisplay = inputControll.querySelector(".error");
  errorDisplay.innerText = msg;

  inputControll.classList.add("erro");
  inputControll.classList.remove("success_border");
};

const setSuccess = (name) => {
  const inputControll = name.parentElement;
  const errorDisplay = inputControll.querySelector(".error");
  errorDisplay.innerText = "";

  inputControll.classList.add("success_border");
  inputControll.classList.add("error");
};

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
