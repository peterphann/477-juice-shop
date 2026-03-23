function handleLogin(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");

  if (!email || !password) {
    error.textContent = "Email and password are required.";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = 'Email must contain "@".';
    return;
  }

  if (password.length < 8) {
    error.textContent = "Password must be at least 8 characters.";
    return;
  }

  error.textContent = "";
  alert("Login successful!");
}

document.getElementById("login-form").addEventListener("submit", handleLogin);
