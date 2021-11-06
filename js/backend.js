let signUpName = document.getElementById("signUp_name");
let signUpEmail = document.getElementById("signUp_email");
let signUpPassword = document.getElementById("signUp_password");
let userMail = document.getElementById("userEmail");
let userPass = document.getElementById("userPassword");
let userName = "";
let Data = JSON.parse(localStorage.getItem("SMART"));
//document.getElementById("signUpBtn").addEventListener("click", signUping);
//document.getElementById("loginBtn").addEventListener("click", logining);

function signUping() {
  if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUpPassword.value == ""
  ) {
    alert("please Enter Correct Values");
  } else {
    var newData = {
      Name: signUpName.value,
      Email: signUpEmail.value,
      Password: signUpPassword.value,
    };
    Data.push(newData);
    localStorage.setItem("SMART", JSON.stringify(Data));
    window.location.href = "index.html";
  }
}

// prettier-ignore
function logining() {
  Data = JSON.parse(localStorage.getItem("SMART"));
  if (userMail.value == "" || userPass.value == "") {
    alert("Please Enter Correct Values");
  } else {
    for (let i = 0; i < Data.length; i++) {
      if (userMail.value == Data[i].Email) {
          if (userPass.value == Data[i].Password) {
              userName = Data[i].Name;
              window.location.href = "home.html";
          document.getElementById("userName22").innerHTML = `Welcome  ${userName}`;
        }
      }
    }
    }
}

function secLogin() {
  window.location.href = "index.html";
}
