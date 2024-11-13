document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

 
  localStorage.setItem('loggedInUser', JSON.stringify({ username, password }));

  
  sessionStorage.setItem('registrationCompleted', 'true');

  
  alert('Registration successful! Please log in.');
  window.location.href = 'login.html';
});