document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (!email.includes('@')) {
      document.getElementById('message').textContent = 'Please enter a valid email address.';
      return;
    }
  
    if (password.length < 8) {
      document.getElementById('message').textContent = 'Password must be at least 8 characters long.';
      return;
    }
  
    // If all validations pass, you can submit the form data to the server here.
  
    document.getElementById('message').textContent = 'Log in successful!';
  });