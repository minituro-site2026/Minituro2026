function login() {
  const username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Please enter your name 😊");
    return;
  }

  localStorage.setItem("username", username);
  window.location.href = "home.html";
}
