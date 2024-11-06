// loginScript.js

function login() {
    const username = document.getElementById('UserName').value.trim(); // Trim the username input
    const password = document.getElementById('Password').value.trim(); // Trim the password input

    // Check for correct username and password
    if ((username === 'muskan@gmail.com' && password === 'Muskan1602') || 
        (username === 'namrata@gmail.com' && password === 'Namrata1193')) {
            alert("Login successful!");

        // Store the logged-in user’s email in localStorage
        localStorage.setItem('loggedInUser', username);

        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}
