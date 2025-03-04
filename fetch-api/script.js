const api_url = "https://jsonplaceholder.typicode.com/users"; // Free API

// Function to fetch user data
async function getUserData() {
    try {
        let userId = prompt("Enter User ID (1-10):"); // Prompt for user ID
        userId = parseInt(userId); // Convert to Integer

        if (isNaN(userId) || userId < 1 || userId > 10) {
            alert("Invalid ID! Please enter a number between 1 and 10.");
            return;
        }

        const response = await fetch(`${api_url}/${userId}`); // Fetch API data
        const data = await response.json(); // Convert response to JSON

        showUserData(data); // Call function to display data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display user data
function showUserData(user) {
    const demo = document.getElementById("demo");
    demo.innerHTML = `
        <div class="card">
            <h2>User Details</h2>
            <table>
                <tr><td><strong>Name:</strong></td><td>${user.name}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${user.email}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${user.phone}</td></tr>
                <tr><td><strong>City:</strong></td><td>${user.address.city}</td></tr>
                <tr><td><strong>Company:</strong></td><td>${user.company.name}</td></tr>
            </table>
        </div>
    `;
}

getUserData(); // Call function on page load
