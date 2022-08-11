var signUpNameInput = document.getElementById("signUpNameInput");
var signUpEmailInput = document.getElementById("signUpEmailInput");
var signUpPasswordInput = document.getElementById("signUpPasswordInput");
var signInEmailInput = document.getElementById("signInEmailInput");
var signInPasswordInput = document.getElementById("signInPasswordInput");
var signUp = document.getElementById("signUp");
var login = document.getElementById("login");
var exist = document.getElementById("exist");
var wrong = document.getElementById("wrong");
var wrongEmail = document.getElementById("wrongEmail");
var userDetailsContainer;
var username = document.getElementById("username");

let userName1 = "";

if (localStorage.getItem("usersInfo")) {
  userDetailsContainer = JSON.parse(localStorage.getItem("usersInfo"));
} else {
  userDetailsContainer = [];
}

function content() {
  var userDetails = {
    Name: signUpNameInput.value,
    Email: signUpEmailInput.value,
    Password: signUpPasswordInput.value,
  };
  if (
    signUpNameInput.value == "" ||
    signUpEmailInput.value == "" ||
    signUpPasswordInput.value == ""
  ) {
    wrong.classList.replace("d-none", "d-inline-block");
    exist.classList.replace("d-inline-block", "d-none");
      } else {
    console.log(signUpPasswordInput.value);
   exist.classList.replace("d-none", "d-inline-block");
    wrong.classList.replace("d-inline-block", "d-none");
    userDetailsContainer.push(userDetails);
    localStorage.setItem("usersInfo", JSON.stringify(userDetailsContainer));
  }
}
if (signUp != null) {
  signUp.addEventListener("click", function () {
    content();
  });
}

if (login != null) {
  login.addEventListener("click", function () {
    validation();
  });
}

function validation() {
  if (signInEmailInput.value == "" && signInPasswordInput.value == "") {
    wrong.classList.replace("d-none", "d-inline-block");
    wrongEmail.classList.replace("d-inline-block", "d-none");
  } else {
    wrongEmail.classList.replace("d-none", "d-inline-block");
    wrong.classList.replace("d-inline-block", "d-none");
  }
  if (validEmail() == true) {
   
    location.href = "home.html";
    console.log(localStorage.getItem("userName"));
  }
  
}

if (username != null) {
  username.innerHTML = `<h1 >Welcome ${localStorage.getItem("userName")}</h1>`;
}

function validEmail() {
  for (var i = 0; i < userDetailsContainer.length; i++) {
    if (signInEmailInput.value == userDetailsContainer[i].Email && signInPasswordInput.value == userDetailsContainer[i].Password) {
      userName1 = userDetailsContainer[i].Name;
      localStorage.setItem("userName", userName1);
          return true;
    }
  }
}
