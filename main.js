var BACKEND_URL = window.JUICE_BACKEND_URL || "http://localhost:3000";

function setStatus(message, type) {
  var status = document.getElementById("status");
  status.textContent = message;
  status.className = type;
}

async function handleLogin(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  setStatus("", "");

  try {
    var response = await fetch(BACKEND_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    var data = await response.json();

    if (!response.ok) {
      setStatus(data.error || "Login failed.", "error");
      return;
    }

    setStatus(data.message || "Login successful!", "success");
  } catch (error) {
    setStatus("Could not reach the backend server.", "error");
  }
}

document.getElementById("login-form").addEventListener("submit", handleLogin);
