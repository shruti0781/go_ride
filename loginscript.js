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

// Handle login logic
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login check (this can be enhanced to check against a database)
    if (username && password) {
        // Store the username in localStorage
        localStorage.setItem('userName', username);

        // Redirect back to index.html
        window.location.href = 'index.html';
    }
    // Example login validation
  if (username && password) {
      localStorage.setItem("userName", username);
      window.location.href = "index.html"; // Redirect to homepage
    }
    // Example: Handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Store the username in localStorage
        localStorage.setItem('username', username);

        // Redirect to details page after successful login
        window.location.href = 'details.html';
    } else {
        alert('Please enter both username and password.');
    }
}


}
