// Set up username mapping for display
const userMapping = {
    "muskan@gmail.com": "Muskan Mishra",
    "namrata@gmail.com": "Namrata Sharma"
};

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "muskan@gmail.com" && password === "Muskan1602" || 
        username === "namrata@gmail.com" && password === "Namrata1193") {
        localStorage.setItem("currentUser", username);
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Logout function
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// Display username on home and other pages
document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("currentUser");
    if (username) {
        document.getElementById("username").textContent = userMapping[username] || "User";
    } else if (window.location.pathname !== "/index.html") {
        window.location.href = "index.html"; // Redirect if not logged in
    }
});

// Pay Bill page functions
function proceedToCardDetails() {
    window.location.href = "card_payment.html";
}

function goToHome() {
    window.location.href = "home.html";
}

function makePayment() {
    // Basic validation (You can add more complex validation)
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolderName = document.getElementById("cardHolderName").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber.length === 16 && cardHolderName.length >= 10 && cvv.length === 3) {
        localStorage.setItem("transactionId", "TXN" + Math.floor(Math.random() * 1000000));
        window.location.href = "payment_success.html";
    } else {
        alert("Please enter valid card details.");
    }
}

function downloadReceipt() {
    const transactionId = localStorage.getItem("transactionId");
    const receiptContent = `Transaction ID: ${transactionId}\nAmount: ₹550\nStatus: Success`;
    
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.txt";
    link.click();
}

// Function to populate category based on complaint type
function populateCategory() {
    const complaintType = document.getElementById('complaintType').value;
    const category = document.getElementById('category');
    
    // Clear existing categories
    category.innerHTML = '<option value="">Select Category</option>';

    const categories = {
        billing: ["Overcharged", "Incorrect Bill"],
        voltage: ["High Voltage", "Low Voltage"],
        disruption: ["Frequent Disruption", "Power Outage"],
        street_light: ["Light Not Working", "Pole Issue"],
        pole: ["Leaning Pole", "Damaged Pole"]
    };

    if (categories[complaintType]) {
        categories[complaintType].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            category.appendChild(option);
        });
    }
}

// Function to submit complaint
function submitComplaint() {
    const contactPerson = document.getElementById('contactPerson').value.trim();
    const consumerNumber = document.getElementById('consumerNumber').value.trim();
    const description = document.getElementById('description').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();
    const address = document.getElementById('address').value.trim();

    if (contactPerson && consumerNumber && description && mobileNumber && address) {
        // Generate a unique complaint ID
        const complaintId = 'CMP' + Math.floor(Math.random() * 1000000);

        alert(`Complaint registered successfully! Complaint ID: ${complaintId}`);
        
        // Redirect to a success page if available or reload the form
        window.location.href = 'complaint_success.html';
    } else {
        alert('Please fill in all required fields.');
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById('contactPerson').value = '';
    document.getElementById('consumerNumber').value = '';
    document.getElementById('description').value = '';
    document.getElementById('mobileNumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('complaintType').selectedIndex = 0;
    document.getElementById('category').innerHTML = '<option value="">Select Category</option>';
}
// Function to check the status of a complaint
function checkStatus() {
    const complaintId = document.getElementById('complaintId').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    // Simulating complaint status checking
    if (complaintId) {
        // Simulated status for demonstration purposes
        const simulatedStatus = {
            "CMP123456": "Your complaint is under review.",
            "CMP654321": "Your complaint has been resolved.",
            "CMP789012": "Your complaint could not be found."
        };

        // Check if the complaint ID exists
        if (simulatedStatus[complaintId]) {
            statusMessage.innerHTML = simulatedStatus[complaintId];
        } else {
            statusMessage.innerHTML = "No complaint found with this ID.";
        }

        statusMessage.style.display = 'block';
    } else {
        alert('Please enter a complaint ID.');
    }
}