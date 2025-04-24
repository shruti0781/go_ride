const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const indicator = document.getElementById("btn");

function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  indicator.style.left = "0px";
}

function showRegister() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  indicator.style.left = "110px";
}

function toggleSubmit() {
  const checkbox = document.getElementById("chkAgree");
  const btn = document.getElementById("btnSubmit");
  btn.disabled = !checkbox.checked;
}

