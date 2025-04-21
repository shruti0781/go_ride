function register() {
  console.log("Register clicked"); 
  document.getElementById("register").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("btn").style.left = "110px";
}


function login(){
  document.getElementById("register").style.display = "none"; 
  document.getElementById("login").style.display = "block"; 
  document.getElementById("btn").style.left = "0px";
}

function goFurther() {
  const checkBox = document.getElementById("chkAgree"); 
  const submitBtn = document.getElementById("btnSubmit"); 
  submitBtn.disabled = !checkBox.checked; 
}

$(document).ready(function(){
  // Login Form submission handler
  $("#login").submit(function(e) {
    e.preventDefault(); // Prevent form submission
    alert("Welcome");
  });

  // Registration Form submission handler
  $("#register").submit(function(e) {
    e.preventDefault(); // Prevent form submission
    
    const password1 = $("input[name='password1']").val(); // Get the first password
    const password2 = $("input[name='password2']").val(); // Get the second password

    // Check if passwords match
    if (password1 !== password2) {
      alert("Passwords do not match!");
      return; // Stop further form submission
    }
    
    alert("Registration successful!"); // Successful registration
  });
});
