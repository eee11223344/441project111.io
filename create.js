document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Store username and password in localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Set a flag to indicate that the account has been created
  localStorage.setItem('accountCreated', 'true');

  // Alert the user and redirect to the login page
  alert('Registration successful! Please log in.');
  window.location.href = 'login.html';
});
