// navigation.js

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

window.onload = function() {
    const username = localStorage.getItem("loggedInUser");
    document.getElementById("username").textContent = username ? username.split("@")[0] : "Guest";
};
