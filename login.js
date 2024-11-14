document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const createLink = document.getElementById('createLink');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let storedUsername = localStorage.getItem("username");
        let storedPassword = localStorage.getItem("password");

        if (storedUsername && storedPassword) { // Check if there is a stored username and password
            if (username === storedUsername && password === storedPassword) {
                // Login successful, set loggedInUser in localStorage
                localStorage.setItem('loggedInUser', username);
                alert('Login successful! You can now view the courses.');
                window.location.href = 'courses.html'; // Redirect to courses page
            } else {
                // Login failed, show an alert
                alert('Invalid username or password. Please try again.');
            }
        } else {
            // If no stored username and password, prompt user to register
            if (confirm('You have not registered an account yet. Do you want to go to the registration page?')) {
                window.location.href = 'create.html'; // Redirect to the registration page
            }
        }
    });

    // If the account has been marked as created, clear the mark and show an alert
    if (localStorage.getItem('accountCreated') === 'true') {
        localStorage.removeItem('accountCreated'); // Clear the mark
        alert('Account created successfully! You can now log in.');
    } else {
        createLink.style.display = ''; // Show the create account link
    }
});
