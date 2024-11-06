// registerScript.js

function resetForm() {
    document.getElementById("registration-form").reset();
}

// Helper function to validate numbers
function isNumber(value) {
    return /^\d+$/.test(value);
}

// Helper function to validate names
function isValidName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

// Helper function to validate email
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Register user and show thank-you page
function register() {
    // Get user inputs
    const consumerNumber = document.getElementById("consumerNumber").value;
    const billNumber = document.getElementById("billNumber").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const userId = document.getElementById("userId").value;

    // Validate consumer number and bill number
    if (!isNumber(consumerNumber) || !isNumber(billNumber)) {
        alert("Consumer Number and Bill Number must be numeric.");
        return;
    }

    // Validate mobile number
    if (!isNumber(mobile)) {
        alert("Mobile number must contain only numbers.");
        return;
    }

    // Validate name format
    if (!isValidName(name)) {
        alert("Name should contain only letters and spaces.");
        return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return;
    }

    // Show thank-you page if all checks pass
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("thankyoupage").style.display = "block";

    // Display user details on thank-you page
    document.getElementById("customerId").textContent = userId;
    document.getElementById("customerName").textContent = name;
    document.getElementById("customerMobile").textContent = mobile;
}

// Navigate back to login page
function goToLogin() {
    window.location.href = "login.html";
}
