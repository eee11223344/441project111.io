document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const createLink = document.getElementById('createLink');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let storedUsername = localStorage.getItem("username");
        let storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            // Login successful, set loggedInUser in localStorage
            localStorage.setItem('loggedInUser', username);
            alert('Login successful! You can now view the courses.');
            window.location.href = 'courses.html'; // Redirect to courses page
        } else {
            // Login failed, show an alert
            alert('Invalid username or password. Please try again.');
        }
    });

    if (localStorage.getItem('accountCreated') === 'true') {
        localStorage.removeItem('accountCreated'); // Clear mark
        alert('Account created successfully! You can now log in.');
    } else {
        createLink.style.display = 'none'; // Hide the link to create an account
    }
});