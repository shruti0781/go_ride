// Move slider and form to Register tab
function register() {
	document.getElementById("login").style.left = "-400px";
	document.getElementById("register").style.left = "50px";
	document.getElementById("btn").style.left = "110px";
	document.getElementById("log").style.color = "#000";
	document.getElementById("reg").style.color = "#fff";
}

// Move slider and form to Login tab
function login() {
	document.getElementById("login").style.left = "50px";
	document.getElementById("register").style.left = "450px";
	document.getElementById("btn").style.left = "0";
	document.getElementById("log").style.color = "#fff";
	document.getElementById("reg").style.color = "#000";
}

// By default, show login form on page load
window.onload = login;

// Disable the Register button until the checkbox is checked
function goFurther() {
	const agreeBox = document.getElementById("chkAgree");
	const submitBtn = document.getElementById("btnSubmit");

	if (agreeBox.checked) {
		submitBtn.disabled = false;
		submitBtn.style.opacity = "1";
	} else {
		submitBtn.disabled = true;
		submitBtn.style.opacity = "0.5";
	}
}

// Optional: Auto-disable register button initially
document.addEventListener("DOMContentLoaded", function () {
	goFurther(); // Set initial disabled state
});
